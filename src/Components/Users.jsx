import React, { useState } from "react";

import { Box, Button } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const Users = (props) => {
  const [verify, setverify] = useState(false);
  const [ban, setban] = useState(false);
  const give_and_take_whale = () => {
    setverify(!verify);
  };
  const ban_unban = () => {
    setban(!ban);
  };
  return (
    <>
      <Box
        bg={ban ? "tomato" : "grey"}
        m={1}
        p={4}
        color="white"
        borderRadius="10px"
      >
        JOHN DOE {ban ? " ( currently banned ) " : null}{" "}
        {verify ? <CheckCircleIcon /> : null}
        <br />
        <Button m={2} bg={"teal.400"} onClick={give_and_take_whale}>
          {verify ? "take whale badge" : "give whale badge"}
        </Button>
        <Button m={2} bg={"teal.400"} onClick={ban_unban}>
          {ban ? "ban" : "unban"}
        </Button>
      </Box>
    </>
  );
};

export default Users;
