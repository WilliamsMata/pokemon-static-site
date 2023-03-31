import { FC } from "react";
import { useRouter } from "next/router";
import { Grid, Card } from "@nextui-org/react";

interface Props {
  pokemonID: number;
}

export const FavoritePokemonCard: FC<Props> = ({ pokemonID }) => {
  const router = useRouter();

  const onFavoriteClick = () => {
    router.push(`/pokemon/${pokemonID}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={pokemonID}>
      <Card isHoverable isPressable onPress={onFavoriteClick} css={{ p: 10 }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonID}.svg`}
          alt="favorite pokemon"
          width={"100%"}
          height={140}
        />
      </Card>
    </Grid>
  );
};
