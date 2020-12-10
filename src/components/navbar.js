import React from 'react'
import navbarStyle from '../components/navbar.module.css'
import scrollTo from 'gatsby-plugin-smoothscroll';
import resume from '../static/resume_pia_wetzel_.pdf'
const Navbar =() =>
{
    return(
        <div className={navbarStyle.container}>
            <ul className={navbarStyle.ul}>
                <li onClick={() => scrollTo('#home')} >home</li>
                <li onClick={() => scrollTo('#about')}>about</li>
                <li onClick={() => scrollTo('#project')}>projects</li>
                <li onClick={() => scrollTo('#contact')}>contact</li>
                <a href = {resume} download><li >resume</li></a>
            </ul>
        </div>
    )
}

export default Navbar;