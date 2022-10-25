import React from 'react'
import Calender from './Calender';
import Stats from './Stats';

const Github = () => {


  return (
    <div className='section'>
      <Calender />
      <Stats />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon class="fill-white" points="2560 0 2560 100 0 100"></polygon>
      </svg>
    </div>
  );
}

export default Github
