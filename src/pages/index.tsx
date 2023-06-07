import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React from "react";
import { prisma } from "~/server/db";
import Pariu3params from "~/resources/3param";

const profit = (c1: number, c2: number, c3: number) => {
  return c1 * (100 / (1 + c1 / c3 + c1 / c2)) - 100 >= -2;
};

type cota = {
  site: string;
  v: number;
};

type Pariu = {
  echipa1: string;
  echipa2: string;
  cotaw1: cota;
  cotaw2: cota;
  cotad: cota;
};

const add = (
  cote: { c1: cota; c2: cota; c3: cota },
  duplicates: Pariu[],
  e1: string,
  e2: string,
  c1: number,
  c2: number,
  ceg: number,
  site: string
) => {
  if (c1 > cote.c1.v) {
    cote.c1 = { site: site, v: c1 };
  }
  if (c2 > cote.c2.v) {
    cote.c2 = { site: site, v: c2 };
  }
  if (ceg > cote.c3.v) {
    cote.c3 = { site: site, v: ceg };
  }
  duplicates.push({
    echipa1: e1,
    echipa2: e2,
    cotaw1: {
      site: site,
      v: c1,
    },
    cotaw2: {
      site: site,
      v: c2,
    },
    cotad: {
      site: site,
      v: ceg,
    },
  });
};

export const getServerSideProps: GetServerSideProps<{
  pariuri: Pariu[];
}> = async () => {
  const posts = await prisma.pariuri.findMany();
  posts.sort((a, b) => {
    if (a.echipa1 == b.echipa1) {
      return a.echipa2 < b.echipa2 ? -1 : 1;
    } else {
      return a.echipa1 < b.echipa1 ? -1 : 1;
    }
  });
  const duplicates: Pariu[] = [];
  let cote = {
    c1: { site: "", v: 1 },
    c2: { site: "", v: 1 },
    c3: { site: "", v: 1 },
  };
  for (let i = 0; i < posts.length - 1; i++) {
    const { e1, e2, c1, c2, ceg, site } = {
      e1: posts[i]?.echipa1 as string,
      e2: posts[i]?.echipa2 as string,
      c1: posts[i]?.cota_e1 as number,
      c2: posts[i]?.cota_e2 as number,
      ceg: posts[i]?.cota_egal as number,
      site: posts[i]?.site as string,
    };

    if (
      posts[i]?.echipa1 == posts[i + 1]?.echipa1 &&
      posts[i]?.echipa2 == posts[i + 1]?.echipa2
    ) {
      add(cote, duplicates, e1, e2, c1, c2, ceg, site);
    } else {
      if (cote.c1.v != 1) {
        add(cote, duplicates, e1, e2, c1, c2, ceg, site);

        duplicates.push({
          echipa1: posts[i]?.echipa1 as string,
          echipa2: posts[i]?.echipa2 as string,
          cotaw1: cote.c1,
          cotaw2: cote.c2,
          cotad: cote.c3,
        });

        cote = {
          c1: { site: "", v: 1 },
          c2: { site: "", v: 1 },
          c3: { site: "", v: 1 },
        };
      }
    }
  }

  return {
    props: { pariuri: duplicates },
  };
};

const Home = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  return (
    <>
      {props.pariuri.map((pariu) => {
        return (
          <Pariu3params
            key={pariu.cotad.v * pariu.cotaw1.v * pariu.cotaw2.v}
            team_1={pariu.echipa1}
            team_2={pariu.echipa2}
            cotaw1={pariu.cotaw1}
            cotaw2={pariu.cotaw2}
            cotad={pariu.cotad}
          />
        );
      })}
    </>
  );
};

export default Home;
