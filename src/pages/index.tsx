import { pariuri } from "@prisma/client";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React from "react";
import { prisma } from "~/server/db";
import Pariu3params from "~/resources/3param";
import Pariu2params from "~/resources/2param";

export const getServerSideProps: GetServerSideProps<{
  pariuri: pariuri[];
}> = async () => {
  const posts = await prisma.pariuri.findMany();
  posts.sort((a, b) => {
    if (a.echipa1 == b.echipa1) {
      return a.echipa2 < b.echipa2 ? -1 : 1;
    } else {
      return a.echipa1 < b.echipa1 ? -1 : 1;
    }
  });
  // Create a new array that contains only posts that have duplicates
  const duplicates = posts.filter((post, index, self) => {
    const i1 = self.findIndex(
      (t) => t.echipa1 === post.echipa1 && t.echipa2 === post.echipa2
    );
    const i2 = self.findLastIndex(
      (t) => t.echipa1 === post.echipa1 && t.echipa2 === post.echipa2
    );
    if (i1 != index) {
      return 1;
    }
    return i2 != index;
  });

  return {
    props: { pariuri: duplicates },
  };
};

const Home = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  console.log(props);

  return (
    <>
      {props.pariuri.map((pariu) => {
        return (
          <Pariu3params
            key={pariu.id}
            team_1={pariu.echipa1}
            team_2={pariu.echipa2}
            cotaw1={{ site: pariu.site, v: pariu.cota_e1 }}
            cotaw2={{ site: pariu.site, v: pariu.cota_e1 }}
            cotad={{ site: pariu.site, v: pariu.cota_egal }}
          />
        );
      })}
    </>
  );
};

export default Home;
