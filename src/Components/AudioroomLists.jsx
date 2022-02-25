import React from "react";
import List from "./List";
import { Grid } from "@chakra-ui/react";
import "./UserList.css";
const AudioroomLists = () => {
  return (
    <>
      <Grid className="grid" templateColumns="repeat(3, 1fr)" gap={6}>
        <List />
      </Grid>
    </>
  );
};

export default AudioroomLists;
