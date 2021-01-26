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
                    "I'm Pia, a Software Engineer living in Los Angeles. I like combining my frontend and backend skills to turn small ideas into working products.
                    I have a broad interest in anything computer-science-related and
                    my curiosity is the constant driving force behind learning new things - I just started dipping my toes into data science,
                    wich is a super fascinating subject to me. 
                    Other than programming, I enjoy traveling, hiking in SoCal, drawing, and discovering new restaurants."
                    </p>
                </div>
                <div className={aboutStyle.image}><img src={pic}/></div>
            </div>
        </div>
    )
}

export default About;