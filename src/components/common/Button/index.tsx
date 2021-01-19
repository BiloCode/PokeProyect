import { FC } from "react";
import "./index.scss";

type TProps = {
  text : string;
}

const Button : FC<TProps> = ({ text }) => (
  <button className="global-button-container">
    {text}
  </button>
);

export default Button;