import React from "react";
import Layout from "../components/layout";
import Head from "next/head";

interface IndexProps {}

export default function Index({}: IndexProps) {
  return (
    <>
      <Head>
        <title>Soccobos</title>
      </Head>
      <Layout>
        <h1>Soccobos</h1>
      </Layout>
    </>
  );
}
