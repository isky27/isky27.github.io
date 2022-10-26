import { Box, Link, Image, Flex } from "@chakra-ui/react";
import React from 'react'
import './github.css'

const Stats = () => {
  return (
    <Box textAlign={"center"} w={"75%"} m={"auto"} mb={20}>
      <h2 className="section__title">My Statistics</h2>
      <div className="calender__container container ">
        <Box m={"auto"}>
          <Link href="https://github.com/isky27" isExternal>
            <Image
              m={"auto"}
              w={{ lg: "60%", md: "70%", sm: "90%" }}
              src="https://github-readme-streak-stats.herokuapp.com?user=isky27"
              alt="Github Statistics"
            />
          </Link>
        </Box>
        <Flex
          w={"full"}
          m="auto"
          mt={"7"}
          flexDirection={{ lg: "row", sm: "column", base: "column" }}
          justify={{ lg: "space-around", sm: "center", base: "center" }}
        >
          <Link href="https://github.com/isky27" isExternal>
            <Image
              align="center"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=isky27" //launguages
            />
          </Link>
          <Link href="https://github.com/isky27" isExternal>
            <Image
              align="left"
              src="https://github-readme-stats.vercel.app/api?username=isky27&count_private=true&show_icons=true" //stats
            />
          </Link>
        </Flex>
      </div>
    </Box>
  );
}

export default Stats


