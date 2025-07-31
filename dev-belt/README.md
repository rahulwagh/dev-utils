# 🚀 Dev-Belt: Your All-in-One Developer Utility Toolbox

A free, fast, and simple web-based toolbox for developers and students. Dev-Belt provides a collection of essential online utilities, including a JSON Formatter and Validator, a Base64 Encoder and Decoder, a URL Encoder and Decoder, and much more. All tools are designed to be intuitive and work directly in your browser.

**Live Demo:** [https://dev-utils-4n1wuiw62-rahul-waghs-projects-4398d4e5.vercel.app/](https://dev-utils-4n1wuiw62-rahul-waghs-projects-4398d4e5.vercel.app/)

---
## ✨ Features

Our goal is to provide a comprehensive suite of tools that developers use every day.

### ### JSON Formatter & Validator
- **Beautify & Pretty-Print JSON:** Instantly format your messy JSON data into a clean, human-readable structure with proper indentation.
- **Validate & Debug:** Quickly find and fix syntax errors. The tool highlights issues directly, helping you debug invalid JSON.
- **Client-Side Processing:** Your data is processed securely in your browser and is never sent to a server.

### ### Base64 Encoder & Decoder
- **Encode to Base64:** Convert any text or string data into a Base64 encoded format for safe transmission in URLs or other text-based mediums.
- **Decode from Base64:** Instantly decode a Base64 string back to its original human-readable format.
- **Error Handling:** The tool validates the input to ensure it is a valid Base64 string before attempting to decode.

### ### URL Encoder & Decoder
- **Percent-Encoding:** Safely encode special characters (like `/`, `?`, `&`, `#`) in your URLs to ensure they are interpreted correctly by browsers and web servers.
- **Decode URL Components:** Convert encoded URI components back into their original characters for easy reading and debugging.

*More tools like a JWT Debugger and Unix Timestamp Converter are coming soon!*

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