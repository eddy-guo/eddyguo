import Head from "next/head";
import Link from "next/link";

export default function MEV() {
  return (
    <>
      <Head>
        <title>MEV | Eddy Guo</title>
      </Head>
      <h1>MEV, Arbitrage, Flashbots</h1>
      <p>Coming soon!</p>
      <ul className="bottom">
        <li>
          <Link href="/research">
            <a className="nocolor">&#8592; Back to research</a>
          </Link>
        </li>
      </ul>
      <Link href="/">
        <a className="nocolor">&#8592; Back to home</a>
      </Link>
    </>
  );
}
