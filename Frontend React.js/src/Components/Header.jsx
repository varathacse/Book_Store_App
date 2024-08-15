import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Btn from "./Btn";

const Header = () => {
  return (
    <section id="nav">
      <article>
        <div className="Logo">
          <Logo />
        </div>
        <div className="Menu">
            <Menu />
        </div>
        <div className="Btn">
            <Btn />
        </div>
      </article>
    </section>
  );
};

export default Header;
