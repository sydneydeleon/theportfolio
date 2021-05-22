import React, {useState} from 'react';
import * as FiIcons from "react-icons/fi";
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Sidebar.css';
import { IconContext } from 'react-icons';

function Sidebar() {
    const [sidemenu, setSideMenu] = useState(false)

    const showMenu = () => setSideMenu(!sidemenu)
    return (
        <>
        <IconContext.Provider value={{color:'#000'}}>
            <div className="sidebar">
                <Link to="#" className="menu-bars" onClick={showMenu}>
                    <menuiconspan><FiIcons.FiBarChart2/><br/></menuiconspan>
                    MENU
                </Link>
            </div>
            <nav className={sidemenu ? 'nav-menu active' : 'nav-menu'}>

                <ul className="nav-menu-items" onClick={showMenu}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                        <menuiconspan><FiIcons.FiChevronsUp/><br/></menuiconspan>
                        CLOSE
                        </Link>
                    </li>

    {SidebarData.map((item, index) => {

        return (

            <li key={index} className={item.cName}>
                <Link to={item.path}>
                    <div className="linktitle">
                    {item.title}</div>
                    <div className={item.bgColor}>&nbsp;</div>
                </Link>
            </li>
        )

    })}
            
                </ul>

            </nav>
            </IconContext.Provider>
        </>
    )
}

export default Sidebar
