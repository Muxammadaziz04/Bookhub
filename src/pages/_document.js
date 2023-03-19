import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&family=Noto+Sans&family=Rubik:wght@400;500&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <Main />
            </body>
            <NextScript />
        </Html>
    );
}

export default Document;
