import React, { Fragment } from "react";
import Nav from '../components/Nav';
import Landing from '../components/Landing';
import Message from '../components/Message';
import SectionA from '../components/SectionA';
import SectionB from '../components/SectionB';
import Menu from '../components/Menu';
import Social from '../components/Social';
import '../styles/style.css';

export default function Home() {
  return (
    <Fragment>
      <Nav />
      <div id="landing-back">
        <Landing />
        <Message />
      </div>
      <SectionA />
      <Menu />
      <SectionB />    
      <Social />  
    </Fragment>
  )
}
