import React from 'react';
import styles from '../styles/Social.module.css';
import Facebook from '../images/svg/facebook.svg';
import Instagram from '../images/svg/instagram.svg';


const Social = () => {

    return (
        <div id={styles.wrap}>
            <div id={styles.iconWrap}>
                <Facebook />
                <Instagram />
            </div>
        </div>
    );
}

export default Social;