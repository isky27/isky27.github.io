import React from 'react'

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-envelope-check"></i>
      </a>
      <a
        href="https://github.com/isky27"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-github"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/isky27/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-linkedin"></i>
      </a>
    </div>
  );
}

export default Social