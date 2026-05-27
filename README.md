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
