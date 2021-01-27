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
const desc_p1 = "A full stack web application analyzing the word usage in Twitter users' tweets."
+ "Retrieves a user's last 200 tweets, removes retweets and stopwords, and performs Snowball stemming."
+ "Displays the top 10 most used words (or words stems) and frequency";
const tech_p1 = "React | Flask | Tweeply | Python | JavaScript | HTML | CSS";
const git_link_p1 = "https://github.com/PiaMWetzel/twitter_words";
const ext_link_p1 = "https://piamwetzel.github.io/words_w_twitter_frontend";


//P2
const title_p2 = "Quizzly"
const desc_p2 = "A full stack web application with the following functionalities:"
+" play quizzes, create quizzes, upvote and downvote quizzes, sign up/log in, and challenge other users."
+ " Application provides access to user profile diplaying quiz history and performance history."
+ " Challenges by other users self-delete after 24 hours ( if not accepted ) to prevent cluttering.";
const tech_p2 = "Flask | Python | JavaScript | HTML | CSS";
const git_link_p2 = "https://github.com/PiaMWetzel/Quizzly";
const ext_link_p2 = "http://quizzlyapp.herokuapp.com/";

//P3
const title_p3 = "Portfolio"
const desc_p3 = "Developing my own portfolio website provided me an opportunity to finally learn how to use Gatsby. "
+ " I was trying to achieve a minimalistic design that still provides enough room for me to highlight projects and introduce myself.";
const tech_p3 = "Gatsby | React | JavaScript | HTML | CSS";
const git_link_p3 = "https://github.com/PiaMWetzel/Portfolio";
const ext_link_p3 = "https://piawetzel.com";

//P4
const title_p4 = "IsItHotToday"
const desc_p4 = "Full stack web app comparing current weather data to historical data of the same day."
+ " App displays the hottest (and coldest) year of the day, and how today's temperatures compare overall."
+ " Current temperature data is provded by the National Weather Service."
+" Historical data is maintained in an .csv file and updated daily using a cron job.";
const tech_p4 = "Flask | Python | JavaScript | HTML | CSS";
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
