import ProjectCard from "./ProjectCard"
import { Container } from "reactstrap"
import Home from "../../assets/img/fokusin/home.png"
import AdminHome from "../../assets/img/Admin/ThumbnailAdmin.png"
import LandingHome from "../../assets/img/LandingPage/LPThumbnail.png"
import ProjectModal from "./ProjectModal"
import { useState } from "react"
import fokusin1 from "../../assets/img/fokusin/home.png"
import fokusin2 from "../../assets/img/fokusin/goals.png"
import fokusin3 from "../../assets/img/fokusin/Notes.png"
import fokusin4 from "../../assets/img/fokusin/todo.png"
import fokusin5 from "../../assets/img/fokusin/comment.png"
import fokusin6 from "../../assets/img/fokusin/Date.png"

import jalin from "../../assets/img/LandingPage/LPDetail.png"
import jalin1 from "../../assets/img/LandingPage/LPFeature.png"
import jalin2 from "../../assets/img/LandingPage/LPHelp.png"
import jalin3 from "../../assets/img/LandingPage/LPHomepage.png"
import jalin4 from "../../assets/img/LandingPage/LPPromo.png"

import adminjalin from "../../assets/img/Admin/Homepage.png"
import adminjalin1 from "../../assets/img/Admin/Addmission.png"
import adminjalin2 from "../../assets/img/Admin/DetailTransaction.png"
import adminjalin3 from "../../assets/img/Admin/Leaderboard.png"
import adminjalin4 from "../../assets/img/Admin/Loginpage.png"
import adminjalin5 from "../../assets/img/Admin/Missionlist.png"
import adminjalin6 from "../../assets/img/Admin/Transaction.png"

const Project = () => {
    const fokusinimage = [fokusin1,fokusin2,fokusin3,fokusin4,fokusin5,fokusin6]
    const jalinimage = [jalin,jalin1,jalin2,jalin3,jalin4]
    const adminimage = [adminjalin4,adminjalin2,adminjalin6,adminjalin1,adminjalin5,adminjalin,adminjalin3]

    const [modal, setModal] = useState(false);

    const fokusin = {
        title: "Fokusin Application",
        image:fokusinimage,
        image1:fokusin1,
        description:`Fokus.in is a smart-goals planner based on website that help users in achieving their goals. 
        This project is a final group project for my pre-bootcamp with theme "Stay Productive during 
        Pandemic". In 2 months of fullstack Web Development, learning basic of programming and web development. 
        As a Tech Lead of Fokus.in, I made sure this project ran smoothly between 
        3 people on the backend team and 3 people on the front end team, including me as the frontend. 
        Also coordinate with 2 people from the UI/UX team in making Fokus.in. So in total there was 8 people 
        that are involved in development of Fokus.in. Fokus.in itself successfully become the best 
        project from 6 other projects in this bootcamp final project, which were judged from various 
        aspects such as presentation skills, presentation content, application demo, time management during 
        presentation, and team contribution.`,
        features:"1. Choose a Goal to learn\n2. Mark the steps you have done\n3. Discussion with other member about the Goal\n4. To Do list and integrate with calendar",
        stack:"1. Express JS\n2. PostgreSQL\n3. EJS\n4. Bootstrap\n5. Designed in Figma",
        access:"1. You can access this site : ",
        link:"https://fokusin.herokuapp.com/",
        access2:"\n2. Login with user : admin001 password : admin001 or create new account\n3. Explore the webite!\nNotes: This website only support desktop (1440px), not optimized for mobile yet.",
        projectName:"Fokus.in"
    }

    const jalindata = {
        title: "Bank Jalin Landing Page",
        image:jalinimage,
        image1:jalin,
        description:`Bank Jalin is a digital bank that has advantages in banking 
        gamification. There are 2 main gamifications from Bank Jalin, Daily Check-in 
        and Mission. The landing page of Bank Jalin itself contains related details 
        about Bank Jalin android application, features in the application, promotions 
        detail with Bank Jalin, and a help page for users. Bank Jalin consists of 4 people 
        UI/UX team, 3 people Back-end team, 3 people Quality Assurance team, 3 people Android 
        team and 4 people Front-end Web team. Bank Jalin is a product of the SYNRGY Academy 
        Bootcamp final project, with the main theme “Gamification in Banking: How banks make 
        their apps engaging”. In this final project, Bank Jalin managed to become the best team 
        among the other 2 teams which were judged by the jury from various aspects. I am responsible 
        as the tech lead of the Front-end Web team ensuring the progress of the web development runs 
        smoothly, dividing tasks between member, tidying up code, repository and reviewing the work of the team.`,
        features:"1. Responsive Mobile Web\n2. Promo page that can be filtered by category and can be search for certain promos\n3. Help Center for users\n4. Frequently Asked Questions page for general questions related to Bank Jalin.",
        stack:"1. Front-end : React JS, Bootstrap, SASS\n2. Back-end : Java Spring Boot, PostgreSQL, Docker \n3. Android : Kotlin, Espresso, Retrofit,J Unit 5\n4. Quality Assurancce : Python, Katalon, Selenium, Chrome Drive",
        access:"1. You can access this site : ",
        link:"https://bankjalin.vercel.app/",
        access2:"\n2. Happy Exploring!",
        projectName:"Bank Jalin Landing Page"
    }

    const adminjalindata = {
        title: "Bank Jalin Landing Page",
        image:adminimage,
        image1:adminjalin,
        description:`Bank Jalin is a digital bank that has advantages in banking 
        gamification. There are 2 main gamifications from Bank Jalin, Daily Check-in 
        and Mission. Admin dashboard contains information to help Back Office team to get insight
        related to the Bank Jalin Gamification and transaction. So company can make a data-centric decision
        about promotion, customer, and programs. Bank Jalin consists of 4 people 
        UI/UX team, 3 people Back-end team, 3 people Quality Assurance team, 3 people Android 
        team and 4 people Front-end Web team. Bank Jalin is a product of the SYNRGY Academy 
        Bootcamp final project, with the main theme “Gamification in Banking: How banks make 
        their apps engaging”. In this final project, Bank Jalin managed to become the best team 
        among the other 2 teams which were judged by the jury from various aspects. I am responsible 
        as the tech lead of the Front-end Web team ensuring the progress of the web development runs 
        smoothly, dividing tasks between member, tidying up code, repository and reviewing the work of the team.`,
        features:"1. Homepage with daily insight and simple data about user gamification progress\n2. Points and Rewards Page, admin can manage mission, voucher, and offer list through this page\n3. Leaderboard Page have insight about top 10 user with highest point and see user checkin and mission activity\n4. Transaction page to see all transaction in Bank Jalin, and see Transaction detail",
        stack:"1. Front-end : React JS, Redux Thunk, Echart, Datatable, Bootstrap, SASS\n2. Back-end : Java Spring Boot, PostgreSQL, Docker \n3. Android : Kotlin, Espresso, Retrofit,J Unit 5\n4. Quality Assurancce : Python, Katalon, Selenium, Chrome Drive",
        access:"1. You can access this site : ",
        link:"https://adminbankjalin.vercel.app/",
        access2:"\n2. Login using email: admin@jalin.id password: password.\n3. Happy Exploring!\nNotes : This web is not fully responsive. Developed for desktop only",
        projectName:"Bank Jalin Admin Dashboard"
    }

    const [data, setData] = useState(fokusin)
    const toggle = (data) => {
        setData(data)
        setModal(!modal)
    };
    
    return (
        <div className="project bg-blue mt-5 py-5" id="project">
            <h1 className="b-700 text-center">My Project</h1>
            <Container>
                <div className="row mt-5">
                    <div className="col-lg-4 col-12 project-base-card" onClick={ () => toggle(fokusin) }><ProjectCard title="Fokusin" img={Home}  /></div>
                    <div className="col-lg-4 col-12 mt-5 mt-lg-0 project-base-card" onClick={ () => toggle(jalindata) }><ProjectCard title="Jalin Bank - Landing Page" img={LandingHome}/></div>
                    <div className="col-lg-4 col-12 mt-5 mt-lg-0 project-base-card" onClick={ () => toggle(adminjalindata) }><ProjectCard title="Jalin Bank - Admin Dashboard" img={AdminHome}/></div>
                    <ProjectModal toggle={toggle} modal={modal} data={data} />
                </div>
            </Container>
        </div>
    )
}

export default Project
