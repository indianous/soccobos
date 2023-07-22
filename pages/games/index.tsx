import React from "react";
import Layout from "../../components/layout";
import Head from "next/head";

interface GamesProps {}

export default function Games({}: GamesProps) {
  return (
    <>
      <Head>
        <title>Games</title>
      </Head>
      <Layout>
        <h1>Games</h1>
      </Layout>
    </>
  );
}
