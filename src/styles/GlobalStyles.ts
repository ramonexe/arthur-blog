import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: "Lato", sans-serif;
        font-weight: 600;
        font-style: normal;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        background: rgb(9, 11, 14);
        color: #fff;
    }

    html {
        scroll-behavior: smooth;
    }

    /* Custom scrollbar */
    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background: #1f2937;
    }

    ::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, #06b6d4, #3b82f6);
        border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(to bottom, #0891b2, #2563eb);
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes pulse {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
    }

    .animate-fade-in-up {
        animation: fadeInUp 0.6s ease-out forwards;
    }

    .animate-pulse {
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
`