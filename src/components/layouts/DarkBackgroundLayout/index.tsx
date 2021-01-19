import { FC } from "react";
import PokeballAsset from 'assets/images/pokeball_asset.png';
import "./index.scss";

const DarkBackgroundLayout : FC = ({ children }) => (
  <div className="dark-background-layout-container">
    <div className="page-children">
      {children}
    </div>
    <div className="float-pokeball">
      <img src={PokeballAsset} alt="pokeball-asset"/>
    </div>
  </div>
);

export default DarkBackgroundLayout;