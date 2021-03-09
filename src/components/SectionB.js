import React from 'react';
import styles from '../styles/SectionB.module.css'

const SectionB = () => {
    return (
        <div id={styles.wrap}>
            <div id={styles.hours}>
                <span className={styles["title"]}>OPENING HOURS</span>
                <span>Monday - Friday</span>
                <span id={styles['hoursGap']}>10:00 - 22:00</span>
                <span>Saturday - Sunday</span>
                <span>10:00 - 23:00</span>
            </div>
            <div id={styles.map}>
                <span id={styles.circle}></span>
            </div>
            <div id={styles.address}>
                <span className={styles["title"]}>CONTACT US</span>
                <div>
                    <span>234 Pitt Street</span>
                    <span>Sydney, NSW</span>
                </div>
                <div id={styles.num}>
                    <span>(02) 9602 5432</span>
                    <span>chicken@gmail.com</span>
                </div>
            </div>
        </div>
    );
}

export default SectionB;
