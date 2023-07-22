import React from "react";
import Layout from "../../components/layout";
import Head from "next/head";

interface StoreProps {}

export default function Store({}: StoreProps) {
  return (
    <>
      <Head>
        <title>Store</title>
      </Head>
      <Layout>
        <h1>Store</h1>
      </Layout>
    </>
  );
}
