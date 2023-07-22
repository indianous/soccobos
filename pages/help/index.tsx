import React from "react";
import Layout from "../../components/layout";
import Head from "next/head";

interface HelpProps {}

export default function Help({}: HelpProps) {
  return (
    <>
      <Head>
        <title>Help</title>
      </Head>
      <Layout>
        <h1>Help</h1>
      </Layout>
    </>
  );
}
