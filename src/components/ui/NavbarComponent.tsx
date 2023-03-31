import NextLink from "next/link";
import { Navbar, Button, Text } from "@nextui-org/react";
import Image from "next/image";
import { Box } from ".";

export const NavbarComponent = () => {
  return (
    <Box
      css={{
        maxW: "100%",
      }}
    >
      <Navbar isBordered variant={"static"}>
        <Navbar.Brand>
          <Image
            src={"/pokeball.svg"}
            alt="icono de la app"
            width={40}
            height={40}
          />

          <NextLink href={"/"} style={{ display: "flex" }}>
            <Text b h2 color="inherit" css={{ margin: "$0", marginLeft: "$4" }}>
              P
            </Text>
            <Text b h3 color="inherit" css={{ margin: "$0" }}>
              okémon
            </Text>
          </NextLink>
        </Navbar.Brand>

        <Navbar.Content>
          <Navbar.Item>
            <Button auto bordered as={NextLink} href="/favoritos">
              Favoritos
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </Box>
  );
};
