import { Container, Image, Text } from "@nextui-org/react";

export const NoFavorites = () => {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        height: "calc(100vh - 76px)",
      }}
    >
      <Text h1 css={{ textAlign: "center" }}>
        No hay favoritos
      </Text>
      <Image
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
        }
        alt="pikachu"
        width={100}
        height={100}
      />
    </Container>
  );
};
