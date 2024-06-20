import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title> I&apos;m Cameron</title>
        <meta
          name="description"
          content="Cameron John Leverett, Software engineer, web Developer full-stack"
        />
        <link rel="icon" type="image/svg+xml" href="images/favicon.svg" />
      </Head>
      <div className="w-full h-screen text-white bg-indigo-800 border border-white bg-circuit"></div>
    </>
  );
}
