import React from 'react'
import projectStyle from '../components/project2.module.css'

import git from '../static/GitHub-Mark-Light-32px.png'
import external from '../static/external_link.png'

const Project2 = (props) =>
{
    return(
        <div className={projectStyle.main_container} id="project">
            <div className={projectStyle.container} >
            <p className={projectStyle.title}>projects</p>
            <div className={projectStyle.wrapper}>
               
                <div className={projectStyle.project}>
                <div className={projectStyle.ext_links}><a href = {props.git} target="_blank"><img src={git}/></a><a href={props.ext} target = "_blank"><img src={external}/></a></div>
                    <div className={projectStyle.outter_wrapper}>
                    <img className={projectStyle.project_img} src={props.imageurl}/>
                    <p className={projectStyle.footer}>{props.tech}</p>
                    </div>
                    

                </div>
                <div className={projectStyle.description}>
                    <p className={projectStyle.project_name}>{props.title}</p>
                    <p className={projectStyle.project_description}>
                    {props.desc} 
                    </p>
                </div>
            </div>
           
            </div>
        </div>

    )
}

export default Project2;