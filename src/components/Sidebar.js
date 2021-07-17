import React, {useState} from 'react';
import * as FiIcons from "react-icons/fi";
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Sidebar.css';

function Sidebar() {
    const [sidemenu, setSideMenu] = useState(false)

    const showMenu = () => setSideMenu(!sidemenu)
    return (
        <>

            <div className="portfolio-navi-bar">
                <Link to="#" className="portfolio-navi-icons" onClick={showMenu}>
                    <menuiconspan><FiIcons.FiBarChart2/><br/></menuiconspan>
                    MENU
                </Link>
            </div>
            <nav className={sidemenu ? 'portfolio-navi-dropdown active' : 'portfolio-navi-dropdown'}>

                <ul className="nav-menu-items" onClick={showMenu}>
                    <li className="portfolio-navi-toggle">
                        <Link to="#" className="portfolio-navi-icons">
                        <menuiconspan><FiIcons.FiChevronsUp/><br/></menuiconspan>
                        CLOSE
                        </Link>
                    </li>

    {SidebarData.map((item, index) => {

        return (

            <li key={index} className="portfolio-navi-text">
                <Link to={item.path}>
                    <div className="portfolio-navi-link">
                    {item.title}</div>
                    <div className={item.bgColor}>&nbsp;</div>
                </Link>
            </li>
        )

    })}
            
                </ul>

            </nav>
        </>
    )
}

export default Sidebar
