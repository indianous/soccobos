import React from "react";
import Layout from "../../components/layout";
import Head from "next/head";

interface AboutProps {}

export default function About({}: AboutProps) {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Layout>
        <h1>About</h1>
      </Layout>
    </>
  );
}
