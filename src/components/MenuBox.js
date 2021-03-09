import React from 'react';
import styles from '../styles/Menu.module.css'

const MenuBox = ({ id, num, desc, content }) => {

    return (
        <div id={id} className={styles['boxWrap']}>
            <div id={styles.head}><div id={styles.numBox}><span id={styles.num}>{num}</span></div><div id={styles.descBox}><span id={styles.desc}>{desc}</span></div></div>
            <div id={styles.contwrap}>
                {
                    content.map((item, index) => {
                        return <div key={index}> { item.left } <span>{ item.right }</span></div>
                    })
                }
            </div>
        </div>
    );
}

export default MenuBox;