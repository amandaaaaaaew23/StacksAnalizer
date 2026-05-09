;; StacksAnalizer
;; simple analyzer activity tracker

(define-map user-stats
    principal
    {
        total: uint,
        last-block: uint
    }
)

(define-public (analyze (tag (string-ascii 64)))
    (let
        (
            (current
                (default-to
                    {
                        total: u0,
                        last-block: u0
                    }
                    (map-get? user-stats tx-sender)
                )
            )

            (new-total (+ (get total current) u1))
        )

        (begin
            (map-set user-stats
                tx-sender
                {
                    total: new-total,
                    last-block: stacks-block-height
                }
            )

            (print {
                event: "analyze",
                user: tx-sender,
                total: new-total,
                tag: tag,
                block: stacks-block-height
            })

            (ok new-total)
        )
    )
)

(define-read-only (get-user (user principal))
    (map-get? user-stats user)
)
