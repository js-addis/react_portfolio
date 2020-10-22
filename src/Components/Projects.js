import  React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import ImgMediaCard from './ImgMediaCard';
import Logo from './Logo';

/** image
 *  projectName
 *  description
 *  action1
 *  action2
 *  modalContent
 */

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 0,
        paddingBottom: 50
    },
    image: {
        width: 200,
        height: 150
    },
    h3: {
        textAlign: 'center',
        color: '#989898'
    }
}));


export default function Projects() {

    const classes = useStyles();

    return (
        <Container className={classes.root} maxWidth={"xl"} spacing={5}>
            <h3 className={classes.h3}>Click a project for more info:</h3>
            <ImgMediaCard
                image={<Logo/>}
                projectName={'Flutter App (new)'}
                description={'Currently learning Flutter, a Dart language framework for building cross-platform mobile apps that are also websites! I recently started working with someone remotely, and he wants to use Flutter instead of React for some/most of his apps. I agree and believe this framework by Google has ALOT of potential!'}
                action1={'https://github.com/js-addis/flutter_app'}
                action2={null}
                modalContent={<Logo/>}
                url={"https://github.com/js-addis/flutter_app"}
            ></ImgMediaCard>
            <ImgMediaCard
                image={<Logo/>}
                projectName={'React Native App (new)'}
                description={'Currently building a react-native mobile app through a course with LinkedIn Learning. I have the node react server running locally and connecting to it with repo, viewing my changes on my own android phone. This has been very fun and educational for me.'}
                action1={'https://github.com/js-addis/react-native-app'}
                action2={null}
                modalContent={<Logo/>}
                url={"https://github.com/js-addis/react-native-app"}
            >
            </ImgMediaCard>
            <ImgMediaCard
                image={<Logo/>}
                projectName={'React Portfolio (new)'}
                description={'My portfolio, built with react, MUI, express, node and mongo and hosted on AWS amplify. This is my most recent project, and I learned a good bit about MUI and UI development in the process of making it. I will be creating a new page for this website that will contain my custom Material UI components code, including the side + top navigation. The logos and images for the site were created with Canva.com, a great FREE tool for making logos, gifs and small pictures.'}
                action1={'https://github.com/js-addis/react_portfolio'}
                action2={null}
                modalContent={<Logo/>}
                url={"https://github.com/js-addis/react_portfolio"}
            >
            </ImgMediaCard>
            <ImgMediaCard
                image={<img className={classes.image} src="pics/php.png"></img>}
                projectName={'Chinese Grammar Game'}
                description={'I made this in college for my Mandarin Professor, 陈老师 as a project for SCS 430: Algorithms. It is a drag-and-drop game for learning Chinese Grammar. The user enters a sentence in English and Mandarin, and the app scrambles the Mandarin and creates cards for each individual character, displayed on the play area with the English sentence at the top. The user has to drag the cards into proper order to match the English, and if correct the app displays the completed challenge in green. The front end is made with JQuery + CSS and the Backend is done with php + mySQL. Note: if you are viewing the popup image on phone, scroll horizontally to view the entire image. The app was designed for desktop use.'}
                action1={'https://github.com/js-addis/chinese_grammar_game'}
                action2={null}
                modalContent={<img src="pics/grammar_game.png"></img>}
                url={"https://github.com/js-addis/chinese_grammar_game"}
            >
            </ImgMediaCard>
            <ImgMediaCard
                image={<img src=""></img>}
                projectName={'Timestamp Web-App'}
                description={'I made this for a project in SCS 400 Comp Systems Research Seminar. It tracks file uploads for date/time-created/last-accessed, and creates a timestamp. It allows the user to view older files in red and newer files in green. Click one of the files in the table to select it and see the Jquery work. To "access" a file, hit the download button in the very center, (MUST CLICK THE ICON, not just the green). The front-end is done with JQuery + CSS3 and the backend is php + mySQL.'}
                action1={'https://github.com/js-addis/timestamp_app'}
                action2={null}
                modalContent={<img src="pics/file_access.png"></img>}
                url={"https://github.com/js-addis/timestamp_app"}
            >
            </ImgMediaCard>
            <ImgMediaCard
                image={<img src=""></img>}
                projectName={'ElectronJS App'}
                description={'ElectronJS is a framework that allows you to create desktop apps with web languages. It is essentially a website loaded into a stripped down web browser that can run offline. I made this app for a course through LinkedIn Learning by Ray Villalovos. The interface uses React + Bootstrap and the backend is done with Node.'}
                action1={'https://github.com/js-addis/electron_native_app'}
                action2={null}
                modalContent={<img src="pics/notdone.png"></img>}
                url={"https://www.github.com/js-addis/electron_native_app"}
            >
            </ImgMediaCard>
            <ImgMediaCard
                image={<img src=""></img>}
                projectName={'SHU Tutor Website'}
                description={'A tutoring website I made for an internship under the Dean of CS at Seton Hill. I no longer have the site hosted but you can view the source files on Github.'}
                action1={'https://github.com/js-addis/tutor_website'}
                action2={null}
                modalContent={<img src="pics/notdone.png"></img>}
                url={"https://www.github.com/js-addis/tutor_website"}
            >
            </ImgMediaCard>
        </Container>
    );
}