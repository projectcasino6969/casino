import { pariuri } from "@prisma/client";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import React from "react";
import { prisma } from "~/server/db";
import { Accordion, AccordionItem, Box , AccordionButton, ChakraProvider, AccordionPanel, AccordionIcon , } from '@chakra-ui/react';
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

const Home = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  console.log(props);

  return (
    <> 
    <ChakraProvider>
    <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Section 1 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Section 2 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
      </ChakraProvider> 
    
    </>
  );
};

export default Home;
