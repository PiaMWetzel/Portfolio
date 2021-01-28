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

//images
import quizzly from '../static/quizzly.png'
import wwt from '../static/wwt.png'
import website from '../static/website.png'
import isithottoday from '../static/isithottoday.png'

//P1
const title_p1 = "[Words] with Twitter"
const desc_p1 = "Implemented RESTful full-stack web application to analyze and display word usage of Twitter users. "
+ "Utilized Tweepy library to fetch Tweets and processed content using the Natural Language Toolkit.";
const tech_p1 = "React | Flask | Tweepy | Python | JavaScript | HTML | CSS";
const git_link_p1 = "https://github.com/PiaMWetzel/twitter_words";
const ext_link_p1 = "http://wordswithtwitter.herokuapp.com/";


//P2
const title_p2 = "Quizzly"
const desc_p2 = "Programmed quiz application allowing registered users to play quizzes, create quizzes, upvote and downvote quizzes, and challenge other users. "
+ "Designed a lightweight relational SQLite database to store user information and quiz data.";
const tech_p2 = "Flask | Python | JavaScript | jQuery | Ajax | SQLite | HTML | CSS";
const git_link_p2 = "https://github.com/PiaMWetzel/Quizzly";
const ext_link_p2 = "http://quizzlyapp.herokuapp.com/";

//P3
const title_p3 = "Portfolio"
const desc_p3 = "Designed and developed static portfolio website (this very site!!!) showcasing work samples.";
const tech_p3 = "Gatsby | React | JavaScript | HTML | CSS";
const git_link_p3 = "https://github.com/PiaMWetzel/Portfolio";
const ext_link_p3 = "https://piawetzel.com";

//P4
const title_p4 = "IsItHotToday"
const desc_p4 = "Built REST web app to compare today's temperatures to historical weather data of same day. "+
"Created Cron job to daily access current weather data via the NWS API and save to AWS S3 bucket containing historical temperature data since 1921. "
+ "Performed data analysis and visualization with NumPy, Pandas, and Matplotlib."
;
const tech_p4 = "Flask | Python | AWS | JavaScript | HTML | CSS | Jinja2";
const git_link_p4 = "https://github.com/PiaMWetzel/historical_weather";
const ext_link_p4 = "http://isithottoday.herokuapp.com/";

const IndexPage = () =>
{
  return(
    <div className={indexStyle}>
    <Navbar id = "home"></Navbar>
    <Square id = "about"></Square>
    <About></About>
    <Project imageurl={wwt} tech = {tech_p1} desc = {desc_p1} title = {title_p1} git = {git_link_p1} ext = {ext_link_p1}></Project>
    <Project2 imageurl={quizzly} tech = {tech_p2} desc = {desc_p2} title = {title_p2} git = {git_link_p2} ext = {ext_link_p2}></Project2>
    <Project imageurl={website} tech = {tech_p3} desc = {desc_p3} title = {title_p3} git = {git_link_p3} ext = {ext_link_p3}></Project>
    <Project2 imageurl={isithottoday} tech = {tech_p4} desc = {desc_p4} title = {title_p4} git = {git_link_p4} ext = {ext_link_p4}></Project2>
    <Footer></Footer>
    </div>
  )
}

export default IndexPage
