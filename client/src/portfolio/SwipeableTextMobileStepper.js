import React, { Component } from 'react';
import styled from 'styled-components';
import MobileStepper from '@material-ui/core/MobileStepper';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Button} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils'
import {connect} from 'react-redux';
import globals from '../globals'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = theme => ({
    root: {
      maxWidth: 400,
      flexGrow: 1,
      top: 'calc(50% - 200px)',
      left: 'calc(50% - 200px)',
      position: 'absolute'
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      background: 'transparent',
      paddingLeft: theme.spacing.unit * 4,
      backgroundColor: theme.palette.background.default,
    },
    img: {
      height: 400,
      display: 'block',
      maxWidth: 400,
      overflow: 'hidden',
      width: '100%',
    },
    mobileStepper: {
      background: 'transparent',
    }
  });
  
const StyledImg = styled.img`
    object-fit: cover;
`

const StyledStepper = styled(MobileStepper)`
    background: transparent;
`

class SwipeableTextMobileStepper extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {

    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const clientFiles = this.props.selectedClient.files;
    const portfolioJson = this.props.portfolio
    console.log(clientFiles)
    if(clientFiles == undefined || this.props.selectedClient == undefined){
        return(<div></div>)
    }
    const maxSteps = clientFiles.length;
    return (
      <div className={classes.root}>
        <Paper square elevation={0} className={classes.header}>
          <Typography>{[activeStep].label}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {clientFiles.map((step, index) => {
              console.log()
              let imgPath = globals.serverUrl + portfolioJson[step].replace('portfolio', '')
              console.log(imgPath)
              return(
              
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <StyledImg className={classes.img} src={imgPath} alt={step.label} />
              ) : null}
            </div>
          )})}
        </AutoPlaySwipeableViews>
        <StyledStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </Button>
          }
        />
      </div>
    );
  }
}

const mapStateToProps = ({portfolio}) => ({
    category: portfolio.selectedCategory,
    portfolio: portfolio.portfolioJson,
    selectedClient: portfolio.selectedClient
  })
  
  const mapDispatchToProps = dispatch => ({
  })
    
  const reduxedComponent = connect(mapStateToProps, mapDispatchToProps)(SwipeableTextMobileStepper);


export default withStyles(styles, { withTheme: true })(reduxedComponent);