import React from "react";
import Users from "./Users";
import { Grid } from "@chakra-ui/react";

import "./UserList.css";
const UserList = () => {
  return (
    <>
      <Grid className="grid" templateColumns="repeat(3, 1fr)" gap={6}>
        <Users />
        <Users />
        <Users />
        <Users />
      </Grid>
    </>
  );
};

export default UserList;
