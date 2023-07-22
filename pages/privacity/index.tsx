import React from "react";
import Layout from "../../components/layout";
import Head from "next/head";

interface PrivacityProps {}

export default function Privacity({}: PrivacityProps) {
  return (
    <>
      <Head>
        <title>Privacity</title>
      </Head>
      <Layout>
        <h1>Privacity</h1>
      </Layout>
    </>
  );
}
