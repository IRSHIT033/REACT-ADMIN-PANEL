import React from "react";
import Posts from "./Posts";
import { Center, Grid, Spacer } from "@chakra-ui/react";

const PostContainer = () => {
  return (
    <>
      <Grid
        className="grid_postcontainer"
        templateColumns="repeat(3, 1fr)"
        gap={6}
      >
        <Center>
          <Posts />
        </Center>
        <Center>
          <Posts />
        </Center>
        <Center>
          <Posts />
        </Center>
      </Grid>
    </>
  );
};

export default PostContainer;
