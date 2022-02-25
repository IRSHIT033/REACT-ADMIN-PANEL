import React, { useState } from "react";

import { Box, Button } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const List = (props) => {
  const [ban, setban] = useState(false);
  const ban_unban = () => {
    setban(!ban);
  };
  const end = () => {};
  const deleteRoom = () => {};

  return (
    <>
      <Box
        bg={ban ? "tomato" : "grey"}
        m={1}
        p={4}
        color="white"
        borderRadius="10px"
      >
        A room {ban ? " ( currently banned ) " : null} <br />
        <Button m={2} bg={"teal.400"} onClick={ban_unban}>
          {ban ? "ban" : "unban"}
        </Button>
        <Button m={2} bg={"teal.400"} onClick={deleteRoom}>
          deleteRoom
        </Button>
        <Button m={2} bg={"teal.400"} onClick={end}>
          End Room
        </Button>
      </Box>
    </>
  );
};

export default List;
