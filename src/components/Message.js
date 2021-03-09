import React from 'react';
import styles from '../styles/Message.module.css'

const Message = () => {
    return (
        <div id={styles.box}>
            <div id={styles.wrap}>
                <span id={styles.title}>안녕하세요 <span role="img" aria-label="wave">👋</span></span>
                <span id={styles.message}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita deserunt ratione quam sequi molestias laboriosam eaque libero quia consectetur recusandae, quo, reprehenderit sunt? Atque itaque nam accusantium maxime iusto voluptas sequi voluptatem.</span>
            </div>
        </div>
    );
}

export default Message;
