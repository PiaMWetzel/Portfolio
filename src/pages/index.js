import React from "react"
import {Link} from 'gatsby'


import Stack from "../components/stack"
import Navbar from "../components/navbar"
import Square from "../components/square"
import About from "../components/about"
import Project from "../components/project"
import Project2 from "../components/project2"
import Footer from "../components/footer"
import indexStyle from "../components/index.module.css"

import scrollTo from 'gatsby-plugin-smoothscroll';
const IndexPage = () =>
{
  return(
    <div className={indexStyle}>
    <Navbar id = "home">helo</Navbar>
    <Square id = "about"></Square>
    <About></About>
    <Project></Project>
    <Project2></Project2>
    <Footer></Footer>
    </div>

    // <Stack>
    //   <p> Hello, my name is Pia.</p>
    //   <p>I'm a software engineer based in Los Angeles.</p>
    // </Stack>
  )
}

export default IndexPage
