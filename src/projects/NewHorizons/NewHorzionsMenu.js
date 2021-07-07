import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from "react-icons/fi";
import { HorizonsMenuData } from './NewHorizonsMenuData';
import './NewHorizons.css';

function NewHorizonsMenu() {
    const [sidemenu, setSideMenu] = useState(false)

    const showMenu = () => setSideMenu(!sidemenu)
    return (
        <>

            <div className="horizons-navi">
                <Link to="#" className="horizons-navi-icons-b" onClick={showMenu}>
                    NAVIGATION!
                </Link>
            </div>
            <nav className={sidemenu ? 'horizons-navi-dropdown active' : 'horizons-navi-dropdown'}>

                <ul className="horizons-menu-items" onClick={showMenu}>
                    <li className="horizons-menu-toggle">
                        <Link to="#" className="horizons-navi-icons">
                        <menuiconspan><FiIcons.FiChevronsUp/><br/></menuiconspan>
                        CLOSE
                        </Link>
                    </li>

    {HorizonsMenuData.map((item, index) => {

        return (

            <li key={index} className="horizons-navi-text">
                <Link to={item.path}>
                    <div className="horizons-navi-link">
                    {item.title}</div>
                </Link>
            </li>
        )

    })}
            
                </ul>

            </nav>
        </>
    )
}

export default NewHorizonsMenu
