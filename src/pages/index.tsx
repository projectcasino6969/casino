import { pariuri } from "@prisma/client";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import React from "react";
import { prisma } from "~/server/db";
import {useState} from 'react';
import { Accordion, AccordionItem, Box , AccordionButton, ChakraProvider, AccordionPanel, AccordionIcon, Button , } from '@chakra-ui/react';
export const getServerSideProps: GetServerSideProps<{
  posts: pariuri[];
}> = async () => {
  const posts = await prisma.pariuri.findMany();

  return {
    props: { posts },
  };
};
const Pariu =(props:{team_1: string,team_2: string, cotaw1: number, cotad: number, cotaw2: number})=>{
  const[value, setValue] = useState(""); 
  function handle() {
      alert(value)
  }

    return(
      <>
      <ChakraProvider>
    <Accordion defaultIndex={[1]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          <text>
            {props.team_1} x {props.team_2}
          </text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
        Introdu suma disponibila: <input value={value} onChange={(e) => {setValue(e.target.value)}} className="outline"/> 
    <button onClick={handle} className="rounded-xl bg-brand-500 px-5 py-3 text-base font-medium text-black transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-dark dark:hover:bg-brand-300 dark:active:bg-brand-200">
  Confirm
</button>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
      </ChakraProvider> 
    
    </>
    );
};
const Home = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  console.log(props);

  return (
    <Pariu team_1="lala" team_2="blal" cotaw1={2} cotaw2={3} cotad={4}/>
  );
};

export default Home;
