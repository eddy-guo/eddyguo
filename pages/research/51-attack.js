import Head from "next/head";
import Link from "next/link";

export default function fiftyOne() {
  return (
    <>
      <Head>
        <title>51% Attack | Eddy Guo</title>
      </Head>
      <h1>51% Attacks</h1>
      <p>
        <Link href="https://twitter.com/_anishagnihotri/status/1394202083923042304">
          <a target="_blank">lol</a>
        </Link>
      </p>
      <ul className="bottom">
        <li className="button">
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
