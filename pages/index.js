import Head from "next/head";
import {Welcome} from "../components/Welcome";
import {Work} from "../components/Work";

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Portfolio | Andreas Hahn</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="description" content="Portfolio of Andreas Hahn" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <main>
                <Welcome/>
                <Work/>
            </main>


            <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}
            </style>

            <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
        </div>
    );
}
