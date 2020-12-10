import React from 'react'
import footerStyle from '../components/footer.module.css'
import linkedin from '../static/LI-Logo.png'
import github from '../static/GitHub-Mark-64px.png'

const Footer = () =>
{
    return(
        <div className={footerStyle.container} id="contact">
            <p className={footerStyle.title}>contact</p>
            <div className={footerStyle.wrapper}>
            <img src={linkedin}/> | <img src={github}/> | <p>mail</p>
            </div>
        </div>
    )
}

export default Footer;