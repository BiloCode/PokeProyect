import { FC } from "react";
import "./index.scss";

//Components
import SideBar from "../SideBar";

const RootLayout : FC = ({ children }) => (
  <main className="root-layout">
    <SideBar />
    <div className="child-container">
      {children}
    </div>
  </main>
);

export default RootLayout;