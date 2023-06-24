"use client";
import { Providers } from "../pages/provider";
import Header from "./Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Header />
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
