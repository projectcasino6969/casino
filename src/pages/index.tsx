import { pariuri } from "@prisma/client";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import React from "react";
import { prisma } from "~/server/db";
import Pariu3params from "~/resources/3param";
import Pariu2params from "~/resources/2param";
export const getServerSideProps: GetServerSideProps<{
  posts: pariuri[];
}> = async () => {
  const posts = await prisma.pariuri.findMany();
  posts.sort((a, b) => {
    if (a.echipa1 == b.echipa1) {
      return a.echipa2 < b.echipa2 ? -1 : 1;
    } else {
      return a.echipa1 < b.echipa1 ? -1 : 1;
    }
  });

  return {
    props: { posts },
  };
};
const verified=()=>{
  
};
const Home = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  console.log(props);

  return (
    <>
    <Pariu3params team_1="lala" team_2="blal" cotaw1={2} cotaw2={3} cotad={4}/>
    <Pariu3params team_1="lala" team_2="blal" cotaw1={2} cotaw2={3} cotad={4}/>
    <Pariu3params team_1="lala" team_2="blal" cotaw1={2} cotaw2={3} cotad={4}/>
    <Pariu3params team_1="lala" team_2="blal" cotaw1={2} cotaw2={3} cotad={4}/>
    <Pariu3params team_1="lala" team_2="blal" cotaw1={2} cotaw2={3} cotad={4}/>
    <Pariu3params team_1="lala" team_2="blal" cotaw1={2} cotaw2={3} cotad={4}/>
    <Pariu3params team_1="lala" team_2="blal" cotaw1={2} cotaw2={3} cotad={4}/>
    <Pariu3params team_1="lala" team_2="blal" cotaw1={2} cotaw2={3} cotad={4}/>
    <Pariu3params team_1="lala" team_2="blal" cotaw1={2} cotaw2={3} cotad={4}/>
    <Pariu3params team_1="lala" team_2="blal" cotaw1={2} cotaw2={3} cotad={4}/>
    <Pariu3params team_1="lala" team_2="blal" cotaw1={2} cotaw2={3} cotad={4}/>
    <Pariu3params team_1="lala" team_2="blal" cotaw1={2} cotaw2={3} cotad={4}/>
    <Pariu3params team_1="lala" team_2="blal" cotaw1={2} cotaw2={3} cotad={4}/>
    <Pariu3params team_1="lala" team_2="blal" cotaw1={2} cotaw2={3} cotad={4}/>
    <Pariu3params team_1="lala" team_2="blal" cotaw1={2} cotaw2={3} cotad={4}/>
    <Pariu3params team_1="lala" team_2="blal" cotaw1={2} cotaw2={3} cotad={4}/>
    <Pariu3params team_1="lala" team_2="blal" cotaw1={2} cotaw2={3} cotad={4}/>
    <Pariu3params team_1="lala" team_2="blal" cotaw1={2} cotaw2={3} cotad={4}/>
    <Pariu3params team_1="lala" team_2="blal" cotaw1={2} cotaw2={3} cotad={4}/>
    <Pariu3params team_1="lala" team_2="blal" cotaw1={2} cotaw2={3} cotad={4}/>
    <Pariu3params team_1="lala" team_2="blal" cotaw1={2} cotaw2={3} cotad={4}/>
    </>
    )
};

export default Home;
