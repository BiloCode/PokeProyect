import { useState } from "react";
import { AiOutlineHome , AiOutlineRead , AiOutlineStar , AiOutlineUser } from 'react-icons/ai';
import { BsChevronDoubleRight } from 'react-icons/bs';
import classnames from 'classnames';
import "./index.scss";

import SideBarIcon from "../../common/SideBarIcon";

const SideBar = () => {
  const [ open_sidebar , setOpenSideBar ] = useState<boolean>(false);

  const classnames_dynamic = classnames(
    'sidebar-container', 
    { extended : open_sidebar }
  );

  const ToggleSideBar = () => setOpenSideBar(sidebar => !sidebar);

  return <div className={classnames_dynamic}>
    <div className="routes-container">
      <SideBarIcon icon={<AiOutlineHome />} text='Inicio' />
      <SideBarIcon icon={<AiOutlineRead />} text='Pokemon' />
      <SideBarIcon icon={<AiOutlineStar />} text='Favoritos' />
      <SideBarIcon icon={<AiOutlineUser />} text='Mi Perfil' />
    </div>
    <div className="toggle-icon">
      <SideBarIcon icon={<BsChevronDoubleRight />} text='Expandir' onClick={ToggleSideBar} />
    </div>
  </div>
};

export default SideBar;