import React from 'react';
import styles from '../styles/Menu.module.css'
import MenuBox from '../components/MenuBox';
import Chicken from '../images/svg/chicken.svg';
import Leg from '../images/svg/chicken-leg.svg';

const Menu = () => {
    return (
        <div id={styles.wrap}>
            <div id={styles.title}>Menu</div>
            <div id={styles.content}>
                <div id={styles.legWrapper}><Leg id={styles.leg}/></div>
                <MenuBox id={styles.type} num="1" desc="Choose your type" content={[{left: "Bone", right:""}, {left: "Boneless", right:""}]}/>
                <MenuBox id={styles.size} num="2" desc="Choose your size" content={[{left: "Whole", right:""}, {left: "Half", right:""}]}/>
                <MenuBox id={styles.flavour} num="3" desc="Choose your flavour" content={[{left: "Chi Koko Fried Chicken", right:"32 / 18"}, {left: "Red Koko", right:"34 / 19"}, {left: "Mad Red Koko", right:"34 / 19"}, {left: "MaxRed Koko", right:"34 / 19"}, {left: "Sweet Soy Koko", right:"34 / 19"}, {left: "Soy Koko", right:"34 / 19"}, {left: "Only for Boneless:", right:""}, {left: "Jalapeno Koko", right:"34 / 19"}, {left: "Cheezling Koko", right:"34 / 19"}, {left: "U Koko", right:"24"}]}/>
                <MenuBox id={styles.toppings} num="4" desc="Add toppings" content={[{left: "Extra Sauce", right:"0.5"}, {left: "Extra Radish", right:"0.5"}]}/>
                <div id={styles.chickenWrapper}><Chicken id={styles.chicken}/></div>
            </div>
        </div>
    );
}

export default Menu;