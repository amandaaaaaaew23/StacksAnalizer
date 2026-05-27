#!/bin/bash

TOTAL=300
COUNT=0

REPO_DIR="$(pwd)"

MESSAGES=(
"feat: implement contract utility abstraction"
"refactor: optimize contract execution flow"
"docs: update development log with recent changes"
"fix: correct contract validation logic"
"feat: introduce modular contract structure"
"chore: remove unused helper functions"
"docs: improve architecture documentation clarity"
"refactor: streamline utility functions"
"fix: resolve variable scoping issue"
"feat: enhance contract interaction layer"
"docs: expand security documentation"
"refactor: reorganize component hierarchy"
"fix: adjust UI rendering issue"
"feat: extend contract capability"
"docs: update roadmap milestones"
"chore: synchronize configuration files"
"feat: introduce helper abstraction layer"
"refactor: improve API integration flow"
"fix: handle edge case scenario"
"docs: expand module overview documentation"
)

cleanup_lock() {
  if [ -f "$REPO_DIR/.git/index.lock" ]; then
    echo "[WARN] Removing stale git lock..."
    rm -f "$REPO_DIR/.git/index.lock"
  fi
}

safe_commit_push() {
  cleanup_lock

  git add .

  # cek ada perubahan atau tidak
  if git diff --cached --quiet; then
    echo "[INFO] No changes to commit"
    return
  fi

  MSG=${MESSAGES[$RANDOM % ${#MESSAGES[@]}]}
  git commit -m "$MSG"

  if [ $? -ne 0 ]; then
    echo "[ERROR] Commit failed"
    return
  fi

  # retry push max 3x
  RETRY=0
  until git push origin main; do
    RETRY=$((RETRY+1))
    echo "[WARN] Push gagal, retry $RETRY..."

    if [ $RETRY -ge 3 ]; then
      echo "[ERROR] Push gagal total, skip cycle"
      return
    fi

    sleep 10
  done
}

generate_activity() {
  ACTION=$((RANDOM % 6))

  if [ $ACTION -eq 0 ]; then
    FILE="smart-contracts/contracts/genesis-$((RANDOM % 10)).clar"
    mkdir -p "$(dirname "$FILE")"

    echo "
(define-read-only (get-random-$COUNT)
  (ok u$COUNT))" >> "$FILE"

  elif [ $ACTION -eq 1 ]; then
    FILE=$(ls smart-contracts/contracts/*.clar 2>/dev/null | shuf -n 1)
    [ -z "$FILE" ] && FILE="smart-contracts/contracts/temp-$COUNT.clar"

    echo "
(define-public (ping-$COUNT)
  (ok true))" >> "$FILE"

  elif [ $ACTION -eq 2 ]; then
    mkdir -p docs
    echo "Update devlog $COUNT at $(date)" >> docs/devlog.md

  elif [ $ACTION -eq 3 ]; then
    FILE=$(ls src/*.js src/*.jsx 2>/dev/null | shuf -n 1)
    [ -z "$FILE" ] && FILE="src/helper.js"

    mkdir -p "$(dirname "$FILE")"
    echo "// update $COUNT at $(date)" >> "$FILE"

  elif [ $ACTION -eq 4 ]; then
    FILE="smart-contracts/contracts/modules/module-$COUNT.clar"
    mkdir -p "$(dirname "$FILE")"

    echo "(define-public (module-$COUNT)
  (ok true))" > "$FILE"

  else
    echo "Dev update $COUNT $(date)" >> README.md
  fi
}

# handle CTRL+C biar gak ninggal lock
trap "echo 'Stopped'; cleanup_lock; exit" INT

while [ $COUNT -lt $TOTAL ]
do
  COUNT=$((COUNT+1))
  echo "===== Commit $COUNT ====="

  generate_activity
  safe_commit_push

  # delay 4–8 menit + jitter kecil biar lebih natural
  BASE=$(( (RANDOM % 880) + 1080 ))
  JITTER=$(( RANDOM % 120 ))
  SLEEP=$((BASE + JITTER))

  echo "[INFO] Sleep $SLEEP sec"
  sleep $SLEEP
done

echo "DONE"
