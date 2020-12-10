import React from 'react'
import projectStyle from '../components/project2.module.css'
import sample from '../static/quizzly.png'
import git from '../static/GitHub-Mark-Light-32px.png'

const Project = () =>
{
    return(
        <div className={projectStyle.main_container} id="project">
            <div className={projectStyle.container} >
            <p className={projectStyle.title}>projects</p>
            <div className={projectStyle.wrapper}>
                
                <div className={projectStyle.project}>
                <div className={projectStyle.ext_links}>
                     <img src={git}/> <img src={git}/></div>
                    <div className={projectStyle.outter_wrapper}>
                    <img className={projectStyle.project_img} src={sample}/>
                    <p className={projectStyle.footer}>Tech Stack: Python | Flask | JavaScript | HTML | CSS</p>
                    </div>
                    
                </div>

                <div className={projectStyle.description}>
                    <p className={projectStyle.project_name}>Quizzly</p>
                    <p className={projectStyle.project_description}>
                    Play quizzes, challenge other users, 
                    upvote and downvote quizzes, 
                    create your own quizzes, and see
                    how your scores compare. 
                    Supports user authentication 
                    </p>
                </div>
            </div>
           
            </div>
        </div>

    )
}

export default Project;