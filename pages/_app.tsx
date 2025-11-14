import type { AppProps } from "next/app";
import { plusJakartaSans } from "@/fonts";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className={plusJakartaSans.className}>
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
