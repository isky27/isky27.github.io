import React from 'react'

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="mailto:gaganjindal50@gmail.com"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="bx bx-mail-send"></i>
      </a>
      <a
        href="https://github.com/isky27"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="bx bxl-github"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/isky27/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="bx bxl-linkedin-square"></i>
      </a>
    </div>
  );
}

export default Social