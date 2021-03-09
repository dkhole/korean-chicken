import React from 'react';
import styles from '../styles/SectionA.module.css';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Message = () => {
    const data = useStaticQuery(graphql`
    query {
        allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
            edges {
                node {
                    id
                    childImageSharp {
                        fluid(quality: 100 ) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
  `)

  const pics = data.allFile.edges;

return (
    <div id={styles.box}>
        <div id={styles.photos}>
            {pics.map((pic, i) => {
                return <Img fluid={pic.node.childImageSharp.fluid} />;
            })}
        </div>
    </div>
);
}

export default Message;
