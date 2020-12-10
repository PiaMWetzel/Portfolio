import React from 'react'
import aboutStyle from '../components/about.module.css'
import pic from '../static/pia.png'
const About = () =>
{
    return(
        <div className={aboutStyle.container} id="about">
            <p className={aboutStyle.title}>about</p>
            <div className={aboutStyle.wrapper}>
                <div className={aboutStyle.intro}>
                    <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
                    </p>
                </div>
                <div className={aboutStyle.image}><img src={pic}/></div>
            </div>
        </div>
    )
}

export default About;