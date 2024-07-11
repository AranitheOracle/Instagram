import { Avatar, Text, Flex, Link } from "@chakra-ui/react";
import React from "react";
import {Link as RouterLink} from "react-router-dom"
const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"}>
        <Avatar name="programmer" size={"lg"} src="/public/profilepic.png" />
        <Text fontSize={12} fontWeight={"bold"}>
            programmer
        </Text>
      </Flex>
      <Link as={RouterLink} to={"/auth"} fontSize={14} fontWeight={"medium"} color={"blue.400"} cursor={"pointer"} > Log Out
      </Link>
    </Flex>
  );
};

export default SuggestedHeader;
