import { FC, memo } from "react";
import "./index.scss";

type TProps = {
  icon : JSX.Element;
  text : string;
}

const Title : FC<TProps> = ({ icon , text }) => (
  <div className="title-container">
    <span className="icon">{icon}</span>
    <span className="text">{text}</span>
  </div>
)

export default memo(Title);