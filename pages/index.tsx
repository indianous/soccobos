import React from "react";
import Head from "next/head";
import Title from "../components/title";
import Container from "../components/container";
import Hero from "../components/hero";
import Galery from "../components/galery";

export default function Home() {
  return (
    <>
      <Head>
        <title>Soccobos</title>
      </Head>
      <Container>
        <div className="mt-4">
          <Title>Soccobos</Title>
        </div>
        <Hero/>
        <Galery/>
      </Container>
    </>
  );
}
