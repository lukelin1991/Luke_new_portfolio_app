import React from "react";

const Nav = (props) => {
  return (
    <nav>
      <ul className="logo-nav">
        <a href="/#home">Luke Lin</a>
        <div className="btn-mode" title="light or dark mode">
          <div className={props.mode ? "btn-icons btn-icons-dark" : "btn-icons"} onClick={props.handleMode}>
            <i className="fas fa-moon"></i>
            <div className={props.mode ? "btn-circle-new btn-circle" : "btn-circle"}></div>
            <i className="fas fa-sun"></i>
          </div>
        </div>
      </ul>

      <ul>
          
      </ul>
    </nav>
  );
};

export default Nav;
