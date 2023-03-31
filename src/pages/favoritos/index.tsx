import { useEffect, useState } from "react";
import { NextPage } from "next";

import { Layout } from "@/components/layouts/Layout";
import { NoFavorites } from "@/components/ui";
import { FavoritePokemons } from "@/components/pokemon";
import { pokemons } from "@/utils";

const FavoritesPage: NextPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(pokemons());
  }, []);

  return (
    <Layout title="Pokémons - Favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
