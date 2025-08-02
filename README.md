# 🚀 Dev-Belt: Your All-in-One Developer Utility Toolbox

A clean, fast, and simple web-based toolbox for developers and students. Built with modern technology for a great user experience, providing common utilities like formatters, converters, and generators right in your browser.

**Live Demo:** [Link to your deployed site will go here]

---

## ✨ Features

- **JSON Formatter & Validator**: Beautify and validate JSON objects.
- **Base64 Encoder/Decoder**: Easily encode and decode Base64 strings.
- **URL Encoder/Decoder**: Handle special characters in URLs.
- **JWT Debugger**: Decode and inspect JSON Web Tokens.
- **Unix Timestamp Converter**: Convert between Unix timestamps and human-readable dates.
- ... and more to come!

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (with App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 🏁 Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Make sure you have the following installed on your machine:

1.  **`nvm` (Node Version Manager)**: To install and manage Node.js versions.
    ```bash
    # Run this command to install nvm
    curl -o- [https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh](https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh) | bash

    # Close and reopen your terminal, then verify the installation
    nvm --version
    ```

2.  **Node.js (v20.x or higher)**: Install it using `nvm`.
    ```bash
    # Install the latest Long-Term Support (LTS) version of Node.js
    nvm install --lts

    # Verify installation
    node -v
    npm -v
    ```
3.  **Git**: For version control.

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone git@github.com:rahulwagh/dev-utils.git
    cd dev-utils
    ```

2.  **Install project dependencies:**
    This command reads the `package.json` file and installs all the necessary libraries.
    ```bash
    npm install
    ```

3.  **Initialize UI Components:**
    This command sets up the `shadcn/ui` component system. You can accept the default answers for all questions.
    ```bash
    npx shadcn-ui@latest init
    ```

---

## 🖥️ Running the Development Server

To start the local development server, run the following command:

```bash
npm run dev


# OLD read me 

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
