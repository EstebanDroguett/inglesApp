import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import './Navbar.css';

export const Navbar = () => {

    const hamburger = () => {
        //const btn = document.querySelector('#menu-btn');
        const menu = document.querySelector('#sideMenu');
        
            menu.classList.toggle("menu-expandend");
            menu.classList.toggle("menu-collapsed");
            document.querySelector('body').classList.toggle('body-expanded');
        
    }
    return (
        <div>
            <div id="sideMenu" className="menu-collapsed">
                {/*HEADER*/}
                <div id="header">
                    <div id="title"><FontAwesomeIcon className="icon1" icon={faHome} /><span>Ingles App</span></div>
                    <div id="menu-btn" type="button" onClick={hamburger}>
                        <div className="btn-hamburger"></div>
                        <div className="btn-hamburger"></div>
                        <div className="btn-hamburger"></div>
                    </div>
                </div>
                {/*PROFILE*/}
                <div id="profile">
                    <div id="photo"><img src="/pc.ico" alt="" /></div>
                    <div id="name"><span>Esteban Droguett</span></div>
                </div>
                {/*ITEMS*/}
                <div id="menu-items">
                    <div className="item">
                        <a href="">
                            
                            <div className="title"><div className="icon"><FontAwesomeIcon className="icon1" icon={faHome} /></div><span>Home</span></div>
                        </a>
                    </div>
                    <div className="item separator"></div>
                    <div className="item">
                        <a href="">
                            <div className="icon"><FontAwesomeIcon className="icon1" icon={faHome} /></div>
                            <div className="title"><span>Home</span></div>
                        </a>
                    </div>
                </div>
            </div>
            <div id="main-container">
                Hola a todos
            </div>
        </div>
    )
}
