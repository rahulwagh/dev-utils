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
    git clone [https://github.com/your-username/my-dev-belt.git](https://github.com/your-username/my-dev-belt.git)
    cd my-dev-belt
    ```

2.  **Install project dependencies:**
    This command reads the `package.json` file and installs all the necessary libraries.
    ```bash
    npm install
    ```

---

## 🖥️ Running the Development Server

To start the local development server, run the following command:

```bash
npm run dev
