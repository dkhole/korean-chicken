import React, { useEffect, useState } from 'react';
import styles from '../styles/Nav.module.css';
import Icon from '../images/svg/chicken.svg';

const Nav = () => {
    const [navStyle, setNavStyle] = useState(styles.nav);

    const navScroll = () => {
        if(window.scrollY > 150) {
            setNavStyle(styles.navScroll);
        } else {
            setNavStyle(styles.nav);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', navScroll);

        return () => {
            window.removeEventListener('scroll', navScroll);
        }
    }, []);

    return (
        <div id={navStyle} >
            <ul id={styles.list}>
                <li><div>MENU</div></li>
                <li><div>LOCATION</div></li>
                <Icon id={styles.icon}/>
                <li><div>PHOTOS</div></li>
                <li><div>CONTACT</div></li>
            </ul>
        </div>
    );
}

export default Nav;