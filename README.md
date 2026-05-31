# 🔍 StacksAnalizer

![Stacks](https://img.shields.io/badge/Network-Stacks-5546FF?style=for-the-badge&logo=stacks&logoColor=white)
![Bitcoin](https://img.shields.io/badge/Secured_by-Bitcoin-F7931A?style=for-the-badge&logo=bitcoin&logoColor=white)
![Clarity](https://img.shields.io/badge/Smart_Contract-Clarity-blue?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Frontend-Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)

**StacksAnalizer** is an AI-powered wallet analyzer built on the **Stacks** blockchain. It helps Web3 projects and users detect organic vs. Sybil activity using on-chain data, and records proof of analysis immutably to the Stacks network.

## 🌐 Ecosystem & Web3 Integration

This dApp is proudly built for the **Stacks** and **Bitcoin** ecosystem. It utilizes the following Web3 technologies:
- **Blockchain:** Stacks (Secured by Bitcoin)
- **Smart Contract Language:** Clarity
- **Web3 Integration:** Stacks.js (`@stacks/connect`, `@stacks/transactions`)
- **Wallet Support:** Compatible with Stacks wallets like Leather and Xverse.
- **Identity:** Talent Protocol verified ecosystem project.

## ✨ Features

- **Wallet Activity Score:** Calculates user engagement and interaction scores based on on-chain footprints.
- **Sybil Detection:** Analyzes wallet behavior to flag potential Sybil attackers versus organic users.
- **On-chain Activity Proof:** Interacts with a custom Clarity smart contract to log analysis records directly on the Stacks blockchain.
- **Mainnet Transaction Logging:** Verifiable transaction history viewable on the Hiro Explorer.

## 🛠️ Tech Stack

### Frontend
- Next.js (App Router)
- React 19
- Tailwind CSS
- Stacks.js (`@stacks/connect`, `@stacks/transactions`)

### Backend / Smart Contracts
- **Clarity** (Smart Contract Language for Stacks)
- **Clarinet** (Local development, testing, and deployment environment)
- Vitest (For smart contract unit testing)

## 📂 Project Structure

- `/app` - Next.js frontend application (React components, UI, and Stacks wallet integration).
- `/backend/contracts` - Contains the Clarity smart contracts (`stacks-analizer.clar`).
- `/backend/tests` - Vitest test files for validating Clarity smart contract logic.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm, yarn, or pnpm
- [Clarinet](https://docs.hiro.so/clarinet/introduction) (for local smart contract development)
- A Stacks-compatible wallet (Leather or Xverse)

### 1. Running the Frontend
Clone the repository and install the dependencies:

```bash
npm install
# or
yarn install

```

Start the development server:

```bash
npm run dev
# or
yarn dev

```

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) with your browser to see the result.

### 2. Running Smart Contract Tests (Clarinet)

To test the Clarity smart contracts, navigate to the `backend` directory:

```bash
cd backend
npm install
npm run test

```

To check contract syntax using Clarinet:

```bash
clarinet check

```

## 📜 Smart Contract Overview

The core logic resides in `stacks-analizer.clar`. It maps user principals to their analysis stats and provides a public function `(analyze (tag (string-ascii 64)))` that increments the user's analysis count and prints an event to the Stacks blockchain containing the block height and wallet address.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📄 License

This project is licensed under the MIT License.

```
Dev update 1 Rab 27 Mei 2026 14:56:45 WIB
Dev update 8 Rab 27 Mei 2026 15:31:01 WIB
Dev update 1 Rab 27 Mei 2026 17:41:49 WIB
Dev update 9 Rab 27 Mei 2026 18:20:17 WIB
Dev update 11 Rab 27 Mei 2026 18:30:27 WIB
Dev update 15 Rab 27 Mei 2026 18:47:49 WIB
Dev update 17 Rab 27 Mei 2026 18:56:26 WIB
Dev update 20 Rab 27 Mei 2026 19:10:52 WIB
Dev update 22 Rab 27 Mei 2026 19:21:12 WIB
Dev update 26 Rab 27 Mei 2026 19:37:05 WIB
Dev update 30 Rab 27 Mei 2026 19:55:57 WIB
Dev update 51 Rab 27 Mei 2026 21:31:56 WIB
Dev update 60 Rab 27 Mei 2026 22:13:08 WIB
Dev update 62 Rab 27 Mei 2026 22:23:45 WIB
Dev update 63 Rab 27 Mei 2026 22:27:31 WIB
Dev update 66 Rab 27 Mei 2026 22:40:13 WIB
Dev update 67 Rab 27 Mei 2026 22:45:06 WIB
Dev update 70 Rab 27 Mei 2026 22:59:32 WIB
Dev update 74 Rab 27 Mei 2026 23:17:33 WIB
Dev update 95 Kam 28 Mei 2026 00:54:23 WIB
Dev update 109 Kam 28 Mei 2026 01:56:48 WIB
Dev update 120 Kam 28 Mei 2026 02:46:31 WIB
Dev update 121 Kam 28 Mei 2026 02:51:23 WIB
Dev update 122 Kam 28 Mei 2026 02:57:22 WIB
Dev update 135 Kam 28 Mei 2026 03:58:02 WIB
Dev update 138 Kam 28 Mei 2026 04:12:09 WIB
Dev update 156 Kam 28 Mei 2026 05:33:19 WIB
Dev update 170 Kam 28 Mei 2026 06:35:25 WIB
Dev update 177 Kam 28 Mei 2026 07:09:41 WIB
Dev update 187 Kam 28 Mei 2026 07:54:47 WIB
Dev update 197 Kam 28 Mei 2026 08:43:31 WIB
Dev update 204 Kam 28 Mei 2026 09:16:41 WIB
Dev update 210 Kam 28 Mei 2026 09:45:21 WIB
Dev update 217 Kam 28 Mei 2026 10:15:41 WIB
Dev update 225 Kam 28 Mei 2026 10:54:24 WIB
Dev update 226 Kam 28 Mei 2026 10:59:34 WIB
Dev update 229 Kam 28 Mei 2026 11:14:33 WIB
Dev update 231 Kam 28 Mei 2026 11:23:24 WIB
Dev update 8 Kam 28 Mei 2026 12:26:53 WIB
Dev update 9 Kam 28 Mei 2026 12:30:10 WIB
Dev update 11 Kam 28 Mei 2026 12:38:23 WIB
Dev update 12 Kam 28 Mei 2026 12:42:22 WIB
Dev update 30 Kam 28 Mei 2026 14:04:37 WIB
Dev update 31 Kam 28 Mei 2026 14:08:37 WIB
Dev update 37 Kam 28 Mei 2026 14:34:22 WIB
Dev update 39 Kam 28 Mei 2026 14:43:34 WIB
Dev update 49 Kam 28 Mei 2026 15:27:06 WIB
Dev update 58 Kam 28 Mei 2026 16:08:26 WIB
Dev update 69 Kam 28 Mei 2026 16:59:02 WIB
Dev update 70 Kam 28 Mei 2026 17:03:43 WIB
Dev update 71 Kam 28 Mei 2026 17:07:31 WIB
Dev update 74 Kam 28 Mei 2026 17:18:56 WIB
Dev update 76 Kam 28 Mei 2026 17:26:44 WIB
Dev update 85 Kam 28 Mei 2026 18:03:43 WIB
Dev update 94 Kam 28 Mei 2026 18:44:30 WIB
Dev update 105 Kam 28 Mei 2026 19:34:19 WIB
Dev update 113 Kam 28 Mei 2026 20:11:47 WIB
Dev update 118 Kam 28 Mei 2026 20:32:30 WIB
Dev update 120 Kam 28 Mei 2026 20:41:21 WIB
Dev update 140 Kam 28 Mei 2026 22:11:05 WIB
Dev update 145 Kam 28 Mei 2026 22:34:34 WIB
Dev update 146 Kam 28 Mei 2026 22:38:20 WIB
Dev update 151 Kam 28 Mei 2026 23:01:58 WIB
Dev update 153 Kam 28 Mei 2026 23:12:10 WIB
Dev update 170 Jum 29 Mei 2026 00:28:29 WIB
Dev update 180 Jum 29 Mei 2026 01:13:37 WIB
Dev update 183 Jum 29 Mei 2026 01:27:51 WIB
Dev update 186 Jum 29 Mei 2026 01:42:03 WIB
Dev update 198 Jum 29 Mei 2026 02:34:17 WIB
Dev update 204 Jum 29 Mei 2026 02:59:19 WIB
Dev update 205 Jum 29 Mei 2026 03:03:44 WIB
Dev update 206 Jum 29 Mei 2026 03:09:03 WIB
Dev update 210 Jum 29 Mei 2026 03:27:59 WIB
Dev update 218 Jum 29 Mei 2026 04:04:41 WIB
Dev update 227 Jum 29 Mei 2026 04:49:36 WIB
Dev update 229 Jum 29 Mei 2026 04:59:27 WIB
Dev update 234 Jum 29 Mei 2026 05:20:49 WIB
Dev update 238 Jum 29 Mei 2026 05:39:54 WIB
Dev update 246 Jum 29 Mei 2026 06:14:22 WIB
Dev update 252 Jum 29 Mei 2026 06:42:18 WIB
Dev update 254 Jum 29 Mei 2026 06:50:54 WIB
Dev update 264 Jum 29 Mei 2026 07:37:17 WIB
Dev update 265 Jum 29 Mei 2026 07:42:04 WIB
Dev update 268 Jum 29 Mei 2026 07:56:38 WIB
Dev update 269 Jum 29 Mei 2026 08:02:30 WIB
Dev update 272 Jum 29 Mei 2026 08:14:48 WIB
Dev update 284 Jum 29 Mei 2026 09:12:20 WIB
Dev update 287 Jum 29 Mei 2026 09:24:59 WIB
Dev update 291 Jum 29 Mei 2026 09:43:28 WIB
Dev update 3 Jum 29 Mei 2026 12:36:04 WIB
Dev update 16 Jum 29 Mei 2026 13:34:58 WIB
Dev update 18 Jum 29 Mei 2026 13:43:25 WIB
Dev update 22 Jum 29 Mei 2026 14:01:16 WIB
Dev update 27 Jum 29 Mei 2026 14:22:07 WIB
Dev update 28 Jum 29 Mei 2026 14:26:48 WIB
Dev update 32 Jum 29 Mei 2026 14:43:13 WIB
Dev update 34 Jum 29 Mei 2026 14:52:29 WIB
Dev update 45 Jum 29 Mei 2026 15:38:15 WIB
Dev update 50 Jum 29 Mei 2026 16:02:27 WIB
Dev update 53 Jum 29 Mei 2026 16:14:58 WIB
Dev update 55 Jum 29 Mei 2026 16:21:40 WIB
Dev update 57 Jum 29 Mei 2026 16:30:26 WIB
Dev update 60 Jum 29 Mei 2026 16:42:48 WIB
Dev update 67 Jum 29 Mei 2026 17:13:45 WIB
Dev update 73 Jum 29 Mei 2026 17:43:40 WIB
Dev update 79 Jum 29 Mei 2026 18:10:24 WIB
Dev update 88 Jum 29 Mei 2026 18:50:45 WIB
Dev update 89 Jum 29 Mei 2026 18:56:47 WIB
Dev update 92 Jum 29 Mei 2026 19:09:16 WIB
Dev update 104 Jum 29 Mei 2026 20:02:29 WIB
Dev update 108 Jum 29 Mei 2026 20:21:13 WIB
Dev update 122 Jum 29 Mei 2026 21:22:11 WIB
Dev update 134 Jum 29 Mei 2026 22:17:36 WIB
Dev update 140 Jum 29 Mei 2026 22:43:41 WIB
Dev update 146 Jum 29 Mei 2026 23:11:09 WIB
Dev update 150 Jum 29 Mei 2026 23:30:53 WIB
Dev update 158 Sab 30 Mei 2026 00:05:17 WIB
Dev update 160 Sab 30 Mei 2026 00:14:58 WIB
Dev update 163 Sab 30 Mei 2026 00:29:11 WIB
Dev update 165 Sab 30 Mei 2026 00:38:39 WIB
Dev update 172 Sab 30 Mei 2026 01:05:05 WIB
Dev update 173 Sab 30 Mei 2026 01:09:21 WIB
Dev update 175 Sab 30 Mei 2026 01:18:55 WIB
Dev update 178 Sab 30 Mei 2026 01:31:36 WIB
Dev update 184 Sab 30 Mei 2026 01:57:25 WIB
Dev update 193 Sab 30 Mei 2026 02:34:29 WIB
Dev update 195 Sab 30 Mei 2026 02:43:24 WIB
Dev update 204 Sab 30 Mei 2026 03:24:29 WIB
Dev update 207 Sab 30 Mei 2026 03:38:52 WIB
Dev update 208 Sab 30 Mei 2026 03:43:38 WIB
Dev update 223 Sab 30 Mei 2026 04:53:14 WIB
Dev update 234 Sab 30 Mei 2026 05:44:30 WIB
Dev update 235 Sab 30 Mei 2026 05:49:18 WIB
Dev update 251 Sab 30 Mei 2026 07:04:24 WIB
Dev update 264 Sab 30 Mei 2026 08:03:57 WIB
Dev update 269 Sab 30 Mei 2026 08:25:07 WIB
Dev update 272 Sab 30 Mei 2026 08:37:43 WIB
Dev update 273 Sab 30 Mei 2026 08:42:41 WIB
Dev update 275 Sab 30 Mei 2026 08:52:32 WIB
Dev update 279 Sab 30 Mei 2026 09:12:30 WIB
Dev update 283 Sab 30 Mei 2026 09:29:57 WIB
Dev update 297 Sab 30 Mei 2026 10:36:53 WIB
Dev update 1 Sab 30 Mei 2026 12:03:00 WIB
Dev update 5 Sab 30 Mei 2026 12:21:33 WIB
Dev update 10 Sab 30 Mei 2026 12:45:27 WIB
Dev update 19 Sab 30 Mei 2026 13:30:15 WIB
Dev update 37 Sab 30 Mei 2026 14:53:39 WIB
Dev update 47 Sab 30 Mei 2026 15:38:39 WIB
Dev update 56 Sab 30 Mei 2026 16:21:13 WIB
Dev update 59 Sab 30 Mei 2026 16:35:10 WIB
Dev update 63 Sab 30 Mei 2026 16:52:17 WIB
Dev update 66 Sab 30 Mei 2026 17:06:27 WIB
Dev update 70 Sab 30 Mei 2026 17:27:02 WIB
Dev update 75 Sab 30 Mei 2026 17:49:21 WIB
Dev update 89 Sab 30 Mei 2026 18:55:57 WIB
Dev update 101 Sab 30 Mei 2026 19:52:01 WIB
Dev update 110 Sab 30 Mei 2026 20:32:27 WIB
Dev update 119 Sab 30 Mei 2026 21:12:49 WIB
Dev update 120 Sab 30 Mei 2026 21:17:45 WIB
Dev update 122 Sab 30 Mei 2026 21:26:36 WIB
Dev update 127 Sab 30 Mei 2026 21:49:34 WIB
Dev update 131 Sab 30 Mei 2026 22:08:42 WIB
Dev update 155 Sab 30 Mei 2026 23:56:44 WIB
Dev update 157 Min 31 Mei 2026 00:05:32 WIB
Dev update 161 Min 31 Mei 2026 00:22:43 WIB
Dev update 164 Min 31 Mei 2026 00:33:34 WIB
Dev update 165 Min 31 Mei 2026 00:37:33 WIB
Dev update 171 Min 31 Mei 2026 01:03:43 WIB
Dev update 178 Min 31 Mei 2026 01:36:04 WIB
Dev update 179 Min 31 Mei 2026 01:41:20 WIB
Dev update 186 Min 31 Mei 2026 02:12:37 WIB
Dev update 187 Min 31 Mei 2026 02:18:16 WIB
Dev update 195 Min 31 Mei 2026 02:53:09 WIB
Dev update 211 Min 31 Mei 2026 04:03:16 WIB
Dev update 213 Min 31 Mei 2026 04:13:27 WIB
Dev update 214 Min 31 Mei 2026 04:17:31 WIB
Dev update 215 Min 31 Mei 2026 04:21:52 WIB
Dev update 217 Min 31 Mei 2026 04:30:24 WIB
Dev update 220 Min 31 Mei 2026 04:44:20 WIB
Dev update 226 Min 31 Mei 2026 05:10:12 WIB
Dev update 235 Min 31 Mei 2026 05:49:40 WIB
Dev update 237 Min 31 Mei 2026 05:59:20 WIB
Dev update 244 Min 31 Mei 2026 06:29:11 WIB
Dev update 253 Min 31 Mei 2026 07:08:40 WIB
Dev update 254 Min 31 Mei 2026 07:13:00 WIB
Dev update 255 Min 31 Mei 2026 07:18:51 WIB
