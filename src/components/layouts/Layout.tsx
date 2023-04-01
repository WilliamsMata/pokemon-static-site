import { PropsWithChildren } from "react";
import Head from "next/head";
import { NavbarComponent } from "../ui";

interface Props {
  title?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

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

        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta
          property="og:description"
          content={`Esta es la pagina sobre ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.webp`} />
      </Head>

      <NavbarComponent />

      <main>{children}</main>
    </>
  );
};
