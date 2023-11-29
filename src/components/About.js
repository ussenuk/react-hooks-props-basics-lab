import React from "react";
import Links from "./Links";
import user from "../data/user";


function About(props) {

  const isBio=props.bio;

  if (isBio===""){

    return (
      <div id="about">
        <h2>About Me</h2>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        <Links github={user.links.github} linkedin={user.links.linkedin}/>
      </div>
    ); } else {
      return (
        <div id="about">
          <h2>About Me</h2>
          <p>{props.bio}</p>
          <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
          <Links github={user.links.github} linkedin={user.links.linkedin}/>
        </div>);

    }

  }

export default About;
