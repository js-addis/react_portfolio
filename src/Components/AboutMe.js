import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.down('sm')]: {
            padding: 20,
            paddingTop: 0,
        },
        [theme.breakpoints.up('sm')]: {
            paddingTop: 0,
            padding: 30,
        },
        textAlign: 'center',
    },
    Divider: {
        maxWidth: 1090,
        
        [theme.breakpoints.down('sm')]: {
            margin: '20px auto'
        },
        [theme.breakpoints.up('sm')]: {
            margin: '40px auto'
        }
    },
    Typography: {
        color: '#989898',
        textAlign: 'justify',
        maxWidth: 1100,
        margin: 'auto'
    },
    center: {
        textAlign: 'center',
        color: '#989898',
    },
    heading: {
        color: '#f29898',
        textAlign: 'center',
    },
    heading2: {
        color: '#f29898',
        textAlign: 'center',
    },
    mainHeading: {
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
            fontSize: 35,
            color: '#f29898',
            marginBottom: 0
        },
        [theme.breakpoints.up('md')]: {
            textAlign: 'center',
            fontSize: 45,
            color: '#f29898',
            marginBottom: 0
        }    
    },
    whiteText: {
        color: '#989898',
        textAlign: 'center',
        fontSize: 35
    },
    aTag: {
        color: '#f29898'
    },
}));

export default function AboutMe() {
    const classes = useStyles();
    return (
        
        <div className={classes.root}>
            {/* 
            <h1 className={classes.mainHeading}>WELCOME TO MY DOMAIN!</h1>
            <h2 className={classes.center}>View it on your phone too, it's quite responsive.</h2>
            <Divider className={classes.Divider}/>
            <h2 className={classes.Typography}>Hello there, thanks for visiting my website! I built it with <a className={classes.aTag} target="_blank" href="https://reactjs.org/">ReactJS</a>, a hybrid javascript 
            framework that uses JSX, so it's really fast and well coded, feel free to inspect the page. On the very front-end, I've used <a className={classes.aTag} href="https://material-ui.com">Material UI</a>, which is a <a className={classes.aTag} target="_blank" href="https://reactjs.org/">JSS</a>(CSS-in-JS) framework based on Google's Material Design. 
            It's got a big library of customizable components that I use to build user interfaces
            rather quickly and painlessly. You see I am not really a graphic design guy, but I love doing UI/UX work and Material UI is the best framework I've ever used. The back end of this web-app uses <a className={classes.aTag} target="_blank" href="http://expressjs.com/">Express</a> and <a className={classes.aTag} target="_blank" href="http://nodejs.org">Node</a> and is hosted with
            AWS(Amazon Web Service)'s <a className={classes.aTag} target="_blank" href="https://aws.amazon.com/amplify/">Amplify</a>. Amplify is great for quickly and cheaply hosting full-stack web apps because all you've got to 
            do is link your project's github repo, push changes, and... its hosted!'
            </h2>
            <Divider className={classes.Divider}/>
            <h1 className={classes.heading}>My Arsenal</h1>
            <Divider className={classes.Divider}/>
              
            <ArsenalGrid/>
        
            <Divider className={classes.Divider}/>
            <h1 className={classes.heading}>About Me</h1>
            <Divider className={classes.Divider}/>
            <h2 className={classes.Typography}>I am a 23 year old software enthusiast living in Pittsburgh's North Side. Lately, I've been couped up in my house, working on my
            career, building projects and taking online courses. I rent a beautiful four bedroom house and have roomates, all of whom have artistic talents, so my house is
            full of crazy art! I have a weiner dog named Helmut, and a partner of 1.5 years. I am looking for a career I can be proud of, something that will really motivate me
            beyond making money. Money is important of course, and I want to have nice things but I am moreso looking for a team of people that both do interesting work, and 
            are as enthusiastic about what they do as I am. I want to be appreciated and utilized to my fullest potential, which I believe is significant. 
            </h2>
            <Divider className={classes.Divider}/>
            <h1 className={classes.heading}>LONGFORM BIOGRAPHY!</h1>
            <Divider className={classes.Divider}/>
            <h2 className={classes.Typography}>Born in Charleroi, PA and raised by my grandmother, my childhood was filled with structure and discipline.
            My grandmother was a classy lady, and expected nothing short of perfect little cherab grandchildren.
            We were but an extension of her and her good graces, and to shame ourselves was to humiliate her. I learned from my grandmother how to carry myself
            with respect and even pride. I hold myself in high regard, believe I can accomplish anything and have convinced myself through the years that
            my ability warrants it. I'm not rich and never was but I deserve what I have and consistently push myself to do better.</h2>
            <h2 className={classes.Typography}>As a young kid, I was a boyscout, soccer player and a total class clown.
            My classmates loved me because I was fearless and rebellious. Due to the structure at home, my inner boyish charm came out
            at school in full fashion. I got in a lot of trouble and had a great time, but dearly payed for it. My performance in elementary school was sub-par
            and my grandmother hated it. She tried everything from meds to Sylvan Learning Center, but nothing worked, I simply would not submit and the
            more she tried, the more I resented it. 
            </h2>
            <h2 className={classes.Typography}></h2>
            
            <h2 className={classes.Typography}>In high school everything changed, I became a total nerd! Around 9th grade, my mother
            regained custody of us kids. Almost like a switch had been flipped, I made a 180 into a
            respectable student. That year I even got the Rising Star award for improving my GPA from a 2.0 to a 3.5. In the following years,
            I never dropped below a 4.0, and in my senior year I held a 4.6 with AP classes and graduated top 10. In high school, I also played a lot of WoW(World of Warcraft).
            I had my own guild and raiding team (The Death Dealers), lol we were quite good actually and regularly competed with world class teams. WoW and wrestling were my competitive outlets, or sports
            I guess you could say. Aside from being a lot of fun and teaching me a thing or two about managing a team, WoW was mostly a waste of time despite it consuming
            about as much of my life as a full-time job. It did, oddly enough though introduce me to software development (a job does tend to open doors). The first program I ever wrote was a WoW lua script, a fishbot
            program that allowed my character to fish on its own at night while I slept. I may not be a rich man, but I was indeed a rich Troll! </h2>
            <h2 className={classes.Typography}>
            Around junior year,
            I started thinking about my career. I was highly interested in chemistry, physics and mathematics as
            subjects (especially chemistry), but I couldn't really visualize a profession out of them. In the end, I decided on Computer Science for a few reasons, partly because I liked
            the idea of myself as a programmer and already had some experience with it, but mostly because it was my understanding that Computer Science was a field
            of opportunity and competition. I am by nature a competitive spirit, probably because World of Warcraft (which was a large part of my early life)
            had such a competitive community that it rewired my young brain. A good challenge keeps me interested and engaged and I knew that from a young age, so why not capitalize on it?</h2>
            <h2 className={classes.Typography}>In college, I learned a lot about the deeper topics of Computer Science, like operating systems, servers and algorithms.
            I loved these classes because they gave a deeper understanding of the lower level processes that were running my code. I did very well on my projects, and
            studied the subjects more deeply in my free time. What interested me most though, and what I spent most of my free time studying was web development. I was obsessed
            with PHP, and of all the languages I learned, PHP is what I used most on my own projects. I later learned that what I was diving into is called
            the LAMP stack, which stands for Linux, Apache, MySQL and PHP.</h2>
            <h2 className={classes.Typography}>I built quite a few apps with the LAMP stack in college and whenever I could use it for a project in class, I did. One such 
            app, I made for my Mandarin teacher, a drag and drop browser game for learning Chinese grammar. It allowed her to enter a phrase in English and Chinese, then it scrambles
            the Chinese into individual cards that the user has to arrange in proper order. I spent a good amount of time on this one and it
            attracted the attention of my Algorithms professor at the time (I used Fisher-Yates algorithm to scramble the Chinese), who is now the Dean of CS at Seton Hill. He noticed my enthusiasm, and took a liking to me. Through
            him, I did an internship, creating a tutoring website for explaining algorithms through browser animations. I should also mention that I tutored programming and algorithms
            while in school for two semesters.</h2>
            <h2 className={classes.Typography}>TO BE CONTINUED...</h2>
            
        */}
        </div>
        
    )
}

