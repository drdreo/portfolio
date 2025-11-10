import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin="anonymous"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
                        rel="stylesheet"
                    />
                    <meta name="author" content="Andreas Hahn" />
                    <meta
                        name="keywords"
                        content="Full-Stack Developer, Web Engineer, React, Angular, Node.js, TypeScript"
                    />
                </Head>
                <body>
                    <noscript>
                        <style>{`
              .no-js-message {
                padding: 1rem;
                background: #f59e0b;
                color: #000;
                text-align: center;
              }
            `}</style>
                        <div className="no-js-message">
                            This site works best with JavaScript enabled, but
                            all content is accessible without it.
                        </div>
                    </noscript>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
