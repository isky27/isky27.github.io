import React from 'react'
import GitHubCalender from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import { Box } from '@chakra-ui/react';
import './github.css'
const Calender = () => {
    const selectLastHalfYear = (contributions) => {
      const currentYear = new Date().getFullYear();
      const currentMonth = new Date().getMonth();
      const shownMonths = 10;

      return contributions.filter((day) => {
        const date = new Date(day.date);
        const monthOfDay = date.getMonth();

        return (
          date.getFullYear() === currentYear &&
          monthOfDay > currentMonth - shownMonths &&
          monthOfDay <= currentMonth
        );
      });
    };
  return (
    <Box
      textAlign={"center"}
      w={{lg:"75%", md: "80%", sm: "90%", base: "90%" }}
      m={"auto"}
      mb={{lg:"8rem", md:"6rem", sm:"5rem", base:"5rem"}}
    >
      <h2 className="section__title">My Github Calender</h2>
      <div className="calender__container container ">
        <GitHubCalender
          username="isky27"
          transformData={selectLastHalfYear}
          blockSize={20}
          fontSize={18}
          hideColorLegend
        >
          <ReactTooltip delayShow={20} html />
        </GitHubCalender>
      </div>
    </Box>
  );
}

export default Calender
