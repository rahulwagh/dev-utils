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
- **UI Components**: [shadcn](https://ui.shadcn.com/)
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

1.  **Create the Next.js Project:**
    Run the following command to create the project.
    ```bash
    npx create-next-app@latest dev-belt
    ```
    Answer the interactive prompts as follows:
    - Would you like to use TypeScript? **Yes**
    - Would you like to use ESLint? **Yes**
    - Would you like to use Tailwind CSS? **Yes**
    - Would you like to use `src/` directory? **No**
    - Would you like to use App Router? **Yes**
    - Would you like to customize the default import alias? **No**

2.  **Navigate into the Project Directory:**
    ```bash
    cd dev-belt
    ```

3.  **Initialize `shadcn`:**
    This command sets up the component system. Accept all the default answers.
    ```bash
    npx shadcn@latest init
    ```

4.  **Add Initial UI Components:**
    ```bash
    npx shadcn@latest add button
    npx shadcn@latest add card
    npx shadcn@latest add textarea
    ```

---
## 🖥️ Running the Development Server

To start the local development server, run the following command:

```bash
npm run dev