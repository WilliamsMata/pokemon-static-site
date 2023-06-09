import { Grid, Card } from "@nextui-org/react";
import { FC } from "react";
import { FavoritePokemonCard } from "./FavoritePokemonCard";

interface Props {
  pokemons: number[];
}

export const FavoritePokemons: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons.map((id) => (
        <FavoritePokemonCard pokemonID={id} key={id} />
      ))}
    </Grid.Container>
  );
};
