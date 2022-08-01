import type { NextPage } from "next";
import Head from "next/head";
import Container from "../components/Container";
import Header from "../components/Header";
import Layout from "../components/Layout";

const Index: NextPage = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>0</title>
        </Head>
        <Container>
          <Header />
        </Container>
      </Layout>
    </>
  );
};

export default Index;
