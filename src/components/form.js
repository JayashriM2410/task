import React from 'react';
import { Stepper, Step, StepLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import PersonalDetails from "../components/personal_details";
import CompanyDetails from "./company_detail";
import EmailVerification from "./email_verification";
import '../styles/form.css';

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "5px",
    border: "1px solid #999",
    backgroundColor: "#274765",
    color: "white",
    "& .MuiStepIcon-root.MuiStepIcon-active": {
      color: "#ff4800"
    },
    "& .MuiStepLabel-label.MuiStepLabel": {
        color: "white"
      },
    "& .MuiStepLabel-label.MuiStepLabel-active": {
      color: "white"
    },
    "& .MuiStepIcon-root.MuiStepIcon-completed": {
      color: "#213f5b"
    },
    "& makeStyles-root-1 .MuiStepIcon-root.MuiStepIcon-completed": {
         color: "white"
    },
    "& MuiStepper-root" : {
        display: "flex",
        padding: "14px"
    },
    "&.MuiStepConnector-root":{
        flex: "0"
    },
    "&.MuiStepConnector-lineHorizontal":{
        color: "pink"
    }, 
    // "&.MuiStepConnector-lineHorizontal": {
    //      border: "1px solid blue"
    // },
   "&.MuiStepConnector-line":{
      border: "1px solid blue"
    }
    } 
});
export default function From() {
  const [activeStep, setActiveStep] = useState(0);

  function stepsToProgress() {
    return ["Personal Details", "Company Details", "Email Verification"];
  }

  const MoveToNextStep = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const MoveToPrevStep = () =>{
    setActiveStep((prevStep) => prevStep - 1);
  }
  const steps = stepsToProgress();
  function stepsContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <PersonalDetails moveToNextStep={MoveToNextStep} />;
      case 1:
        return <CompanyDetails moveToNextStep={MoveToNextStep} />;
      case 2:
        return <EmailVerification moveToNextStep={MoveToNextStep} />;
      default:
        return "Exit";
    }
  }
  const classes = useStyles();
  return (
    <div className={From}>
      <Stepper activeStep={activeStep} className={classes.root}>
        {steps.map((label) => (
          <Step key={label} style={{}}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length ? (
        "You are done!"
      ) : (
        <>
          {stepsContent(activeStep)}
          {activeStep === 0 ? 
          <button className="nex-btn" style={{display: "flex", alignItems: "center"}} onClick={MoveToNextStep}>Next</button>
          : <div><button className="bac-btn" onClick={MoveToPrevStep}>Back</button><button className="nex-btn" onClick={MoveToNextStep}>Next</button></div>}
        </>
      )}
    </div>
  );
}
