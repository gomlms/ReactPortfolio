import React, { Component } from 'react';
import './App.css';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';
import IconButton from 'material-ui/IconButton';
import InfoIcon from 'material-ui-icons/Info';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import SwipeableViews from 'react-swipeable-views';
import MenuIcon from 'material-ui-icons/Menu';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';
import fontAwesome from 'react-fontawesome';

const theme = createMuiTheme({
  palette: {
    primary: {
      50: "#7d1109",
      100: "#7d1109",
      200: "#7d1109",
      300: "#7d1109",
      400: "#7d1109",
      500: "#7d1109",
      600: "#7d1109",
      700: "#7d1109",
      800: "#7d1109",
      900: "#7d1109",
      A100: "#7d1109",
      A200: "#7d1109",
      A400: "#7d1109",
      A700: "#7d1109",
      contrastDefaultColor: "light"
    }, // Purple and green play nicely together.
    secondary: {
      50: "#7d1109",
      100: "#7d1109",
      200: "#7d1109",
      300: "#7d1109",
      400: "#7d1109",
      500: "#7d1109",
      600: "#7d1109",
      700: "#7d1109",
      800: "#7d1109",
      900: "#7d1109",
      A100: "#7d1109",
      A200: "#7d1109",
      A400: "#7d1109",
      A700: "#7d1109",
      contrastDefaultColor: "light"
    },
    error: red,
  },
});

class App extends Component {
  constructor(props){
    super(props);

    this.handleChangeTab = this.handleChangeTab.bind(this);
    this.showHome = this.showHome.bind(this);
    this.showMyWork = this.showMyWork.bind(this);

    this.state = {
      currentTab: 0,
      onAbout: false,
      onSkills: false,
      onMyWork: false,
      onContact: false,
      onHome: true,
      backgroundColor: 'rgb(128,179,182)',
      showTestimony: false,
      showResume: false,
      currentResumeImage: 0,
      workText: 'It is one of the first mobile apps that offers surgical templating and I am working with the company further to convert the app into a Web Application'
    }
  }

  handleChangeTab(event, value){
    var onHome = false;
    var onAbout = false;
    var onSkills = false;
    var onMyWork = false;
    var onContact = false;

    if(value == 0){
      onHome = true;
    }
    else if(value == 1){
      onAbout = true;
    }
    else if(value == 2){
      onSkills = true;
    }
    else if(value == 3){
      onMyWork = true;
    }
    else if(value == 4){
      onContact = true;
    }
    this.setState({
      currentTab: value,
      onHome,
      onMyWork,
      onAbout,
      onSkills,
      onContact,
    })
  }

  showHome(){
    this.setState({
      currentTab: 0,
      onContact: false,
      onHome: true,
      onMyWork: false,
      onAbout: false,
      onSkills: false
    })
  }

  showMyWork(){
    this.setState({
      currentTab: 3,
      onContact: false,
      onHome: false,
      onMyWork: true,
      onAbout: false,
      onSkills: false
    })
  }
  handleChangeIndex = index => {
    this.setState({ currentTab: index });
  };

  render() {
    var style = {
        backgroundColor: this.state.backgroundColor
    };

    return (
      <MuiThemeProvider className='OverView' theme={theme}>
        <div className='OverView'style={style}>
          <AppBar className='AppBar' position="static" color="default">
            <Toolbar>
              <Button onClick={this.showHome}>
                Max <br /> Sidebotham
              </Button>
              <Tabs
                value={this.state.currentTab}
                onChange={this.handleChangeTab}
                indicatorColor="primary"
                textColor="primary"
                centered
                className='AppTabs'
              >
                <Tab label="Home" />
                <Tab label="About" />
                <Tab label="Skills" />
                <Tab label="Past Work" />
                <Tab label="Current Work" />
              </Tabs>
              <a className='HomeContactRef' target='_blank' href='https://www.linkedin.com/in/max-sidebotham/'>
                <Button className='LinkedInButton'>
                  LinkedIn
                </Button>
              </a>
              <a className='HomeContactRef' target='_blank' href='https://gomlms.github.io/gomlms.github.io/public/ResumeFinal.pdf'>
                <Button className='ResumeButton'>
                  Resume
                </Button>
              </a>
            </Toolbar>
          </AppBar>
          <SwipeableViews
            axis={'x'}
            index={this.state.currentTab}
            onChangeIndex={this.handleChangeIndex}
            className='SwipeViews'
            backgroundColor='rgb(128,179,182)'
          >
            <div className='HomeFirstHalf'>
              <div className='HomeGroup'>
                <h1 className='HomeSentence'>
                  Hi, I'm Max, <br />
                  a <span className='BoldText'>web</span> and <span className='BoldText'>iOS</span> developer.
                </h1>
                <a className='HomeContactRef' href='mailto:gomlms@gmail.com'>
                  <Button className='HomeContact' onClick={this.changeToContact} raised color='accent'>
                    Contact Me
                  </Button>
                </a>
              </div>
              <div className='HomeSecondHalf'>
                <img src='./MaxLogo.png' />
              </div>
            </div>
            <div className='AboutHolder'>
              <div className='AboutGroup'>
                <h1 className='AboutTitle'>
                  About Me
                </h1>
                <p className='AboutParagraph'>
                  I am an undergraduate student at the
                  <span className='BoldText'> University of Maryland College Park</span>,
                  majoring in <span className='BoldText'>Computer Science</span> and minoring in <span className='BoldText'>General Business</span>.
                </p>
                <p className='AboutParagraph'>
                  My initial interest in programming started with my passion in game
                  development with programs like Unity3D.
                  This interest pushed me towards learning other types of work
                  like <span className='BoldText'>iOS Development</span> using
                  <span className='BoldText'> Swift</span> and <span className='BoldText'>Web Development</span> using <span className='BoldText'>React</span>.
                </p>
                <p className='AboutParagraph'>
                  Other than computer science, I am a member of the <span className='BoldText'>Phi Kappa Psi</span> fraternity at the University of Maryland and also play piano as a hobby.
                </p>
              </div>
              <img className='AboutPic' src='./AboutPic.jpg' />
            </div>
            <div className='SkillsGroup'>
              <h1 className='SkillsTitle'>
                Skills and Languages
              </h1>
              <p className='SkillsDesc'>
                My most recent projects have been focused on Swift,
                HTML, CSS, and Javascript, however, I am able to work on projects
                using any of these languages. I have examples of my work page which show
                the work I am doing now with web development as well as the app I created
                using Swift.
              </p>
              <div className='SkillsContainer'>
                <div style={{textAlign: 'center', marginTop: '-190px'}}>
                  <img className='hexagon' src='./JavascriptHexagon.png' />
                </div>
                <div style={{textAlign: 'center', marginTop: '-105px', marginLeft: '-320px'}}>
                  <img className='hexagon' src='./JavaHexagon.png' />
                </div>
                <div style={{textAlign: 'center', marginTop: '-105px', marginLeft: '0px'}}>
                  <img className='hexagon' src='./HTMLHexagon.png' />
                </div>
                <div style={{textAlign: 'center', marginTop: '-295px', marginLeft: '320px'}}>
                  <img className='hexagon' src='./CSharpHexagon.png' />
                </div>
                <div style={{textAlign: 'center', marginTop: '-10px', marginLeft: '320px'}}>
                  <img className='hexagon' src='./CHexagon.png' />
                </div>
                <div style={{textAlign: 'center', marginTop: '-105px', marginLeft: '0px'}}>
                  <img className='hexagon' src='./jqueryHexagon.png' />
                </div>
                <div style={{textAlign: 'center', marginTop: '-295px', marginLeft: '-320px'}}>
                  <img className='hexagon' src='./NodeJSHexagon.png' />
                </div>
                <div style={{textAlign: 'center', marginTop: '-295px', marginLeft: '-640px'}}>
                  <img className='hexagon' src='./SwiftHexagon.png' />
                </div>
                <div style={{textAlign: 'center', marginTop: '-200px', marginLeft: '640px'}}>
                  <img className='hexagon' src='./GitHexagon.png' />
                </div>
              </div>
            </div>
            <div className="MyWorkGroup">
              <div className='SecondHalfWork'>
                <p className='Description'>
                  The <span className='BoldText'>NEED</span>: a veterinary orthopedic company wanted a mobile app to assist their surgeons with a surgical procedure for a dog’s torn knee ligament.
                </p>
                <p className='Description'>
                  The <span className='BoldText'>OPPORTUNITY</span>: I was offered an internship in May 2017 to start outlining and designing the mobile app. By the end of that summer, I had a completed and tested app.
                </p>
                <p className='Description'>
                  The <span className='BoldText'>Project</span>:
                  <List>
                    <ListItem>
                      Developed the storyboard with the Digital Media Manager at BioMedtrix.
                    </ListItem>
                    <ListItem>
                      Developed the app and field tested	it with several beta sites.
                    </ListItem>
                    <ListItem>
                      Refined and Finalized.
                    </ListItem>
                    <ListItem>
                      Released To App Store.
                    </ListItem>
                  </List>
                </p>
                <p className='Description'>
                  The <span className='BoldText'>OUTCOME</span>: BioMedtrix received very good reviews on the mobile app's performance for planning TPLO surgical procedures. It is the first mobile application with these tools in the industry.
                </p>
              </div>
              <div className='FirstHalfWork'>
                <h1 className='PastWorkTitle'>BioMedtrix TPLO Templating</h1>
                <h2 className='PastWorkSubtitle'>Created an iOS app for veterinarians to plan surgeries</h2>
                <div className='MobileImageGroup'>
                  <img className='PastImage1' src='./Radiograph.png' />
                  <img className='PastImage2' src='./PointSelect.png' />
                  <img className='PastImage3' src='./Summary.png' />
                </div>
                <div className='PastLabels'>
                  <h3 className='PastImport'>Import</h3>
                  <h3 className='PastPlan'>Plan</h3>
                  <h3 className='PastSend'>Send Results</h3>
                </div>
                <div className='TestimonialHolder'>
                  <Paper elevation={4} className='QuotePaper'>
                    <Typography component='h3' type="headline">
                      Mathew Rodriguez
                    </Typography>
                    <Typography component='p'>
                      "Over 90% of the clinicians whose surgery would benefit from this app are using it, and we have received numerous
                      positive responses and compliments on its ease of use and accuracy."
                    </Typography>
                    <a target="_blank" className='HomeContactRef' href={'https://gomlms.github.io/public/Testimony.pdf'}>
                      <Button className='TestimonyButton' raised color='accent'>
                        Read the Rest of the Testimony
                      </Button>
                    </a>
                  </Paper>
                </div>
              </div>
            </div>
            <div className='CurrentWorkGroup'>
              <div className='CurrentWorkTitles'>
                <h1 className='BAMWorkTitle'>UMD BAM Research</h1>
                <h1 className='WebWorkTitle'>BioMedtrix Templating Web Application</h1>
              </div>
              <div className='WorkBAMHolder'>
                <img className='WorkBAMPic' src='Bam.jpg' />
                <div className='BAMTextHolder'>
                  <p>
                    I am currently working on a research project with the Bioinspired Advanced Manufacturing
                    Laboratory located at the University of Maryland. We are working along side the US Navy
                    to create and program a machine to improve manufacturing time and quality in many of their factories.
                  </p>
                </div>
              </div>
              <div className='WorkWebHolder'>
                <div style={{display: 'inline-block'}}>
                  <img className='WorkWebPic' src='WebApp.png' />
                  <img className='WorkWebPic' src='EmailTestimony.png' />
                </div>
                <div className='WebTextHolder'>
                  <p>
                    I am continuing work with BioMedtrix to port the successful iOS application to a web application for desktop use. The goal
                    of the project will be to offer more advanced features than the iOS app in order for surgeons to make more detailed pre-operative analyses.
                    Once completed, the next step will be to create a mobile version of the desktop version using React Native.
                  </p>
                </div>
              </div>
            </div>
          </SwipeableViews>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
