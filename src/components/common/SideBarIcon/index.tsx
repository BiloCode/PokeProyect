import { FC, memo } from "react";
import classnames from 'classnames';
import "./index.scss";

type TProps = {
  icon : JSX.Element;
  text : string;
  select? : boolean;
  onClick?(): void;
}

const SideBarIcon : FC<TProps> = ({ icon , text , select, onClick }) => {
  const classnames_dynamics = classnames('sidebar-icon',{ select });

  return <div className={classnames_dynamics} onClick={onClick} >
    <span className='icon'>
      {icon}
    </span>
    <span className="text-icon">{text}</span>
  </div>
};

export default memo(
  SideBarIcon,
  (prev, next) => prev.select === next.select
);