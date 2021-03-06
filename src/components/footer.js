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
            <a href = "https://linkedin.com/in/pia-wetzel-17a0351b9/" target = "_blank"><img src={linkedin}/></a> | <a href = "https://github.com/piamwetzel" target = "_blank"><img src={github}/> </a>| <a href="mailto: hello@piawetzel.com"><p>email</p></a>
            </div>
        </div>
    )
}

export default Footer;