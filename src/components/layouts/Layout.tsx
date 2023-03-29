import { PropsWithChildren } from "react";
import Head from "next/head";
import { NavbarComponent } from "../ui";

interface Props {
  title?: string;
}

export const Layout = ({ title, children }: PropsWithChildren<Props>) => {
  return (
    <>
      <Head>
        <title>{title || "PokemonAPP"}</title>
        <meta name="author" content="Williams Mata" />
        <meta
          name="description"
          content={`Información sobre el pokemon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>

      <NavbarComponent />

      <main>{children}</main>
    </>
  );
};
