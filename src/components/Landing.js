import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import styles from '../styles/Landing.module.css';
import Img from "gatsby-image";

const Landing = () => {
    const data = useStaticQuery(graphql`
    query {
        file(relativePath: { eq: "chick-trans.png" }) {
          childImageSharp {
            fluid(quality: 100 maxWidth: 443 maxHeight: 320) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
  `)
  
    return (
        <div id={styles.landing} >
            <div id={styles.title}><span id={styles.korea}>KOREAN</span><span id={styles.fried}>FRIED CHICKEN</span></div>
            <Img className={styles.chicken} fluid={data.file.childImageSharp.fluid} />
        </div>
    );
}

export default Landing;