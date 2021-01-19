import { FC } from "react";
import "./index.scss";

type TProps = {
  text : string;
}

const BigTitle : FC<TProps> = ({ text }) => (
  <div className='big-title' >
    <span className='title-text' >{text}</span>
  </div>
);

export default BigTitle;