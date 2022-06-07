import Head from "next/head";
import Link from "next/link";

export default function hardWorkTalent() {
  return (
    <>
      <Head>
        <title>Hard Work vs. Talent | Eddy Guo</title>
      </Head>
      <h1>Hard Work vs. Talent</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <ul className="bottom">
        <li>
          <Link href="/writing">
            <a>&#8592; Back to writing</a>
          </Link>
        </li>
      </ul>
      <Link href="/">
        <a>&#8592; Back to home</a>
      </Link>
    </>
  );
}
