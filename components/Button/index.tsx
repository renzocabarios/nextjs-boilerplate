import React from "react";
import style from "./style.module.css";

function Button({ onClick, type, children, outlined, light }: any) {
  return (
    <>
      <button
        className={`${style.button} ${
          outlined ? style.outlined : style.filled
        } ${light ? style.light : style.default}`}
        onClick={onClick}
        type={type ?? "button"}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
