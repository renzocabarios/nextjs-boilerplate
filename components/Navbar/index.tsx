import React from "react";
import style from "./style.module.css";
import { Button } from "@/components";

function Navbar() {
  return (
    <>
      <div className={style.toolbar}>
        <h4>Logo</h4>

        <div className={style.links_container}>
          <p>Marketplace</p>
          <p>Community</p>
          <p>Events</p>
        </div>

        <div className={style.links_container}>
          <Button outlined>Sign In</Button>
          <Button>Get Started</Button>
        </div>
      </div>
      <div className={style.divider}></div>
    </>
  );
}

export default Navbar;
