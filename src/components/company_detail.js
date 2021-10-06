// Company Detail Component

import React, { useState } from 'react';
import Complogo from '../images/logoImg.jpg';
import "./form";
import Tick from '../images/tick.png';
import history from './history';
import '../styles/company_details.css';

export default  function CompanyDetails() {
  const [ companyName, setCompanyName ] = useState('');
  const [ emailId, setemailId ] = useState('');
  const [ jobTitle, setjobTitle ] = useState('');
  const [ yearExp, setyearExp ] = useState('');
  const [ checked, setChecked ] = useState(false);

  function comNameChange(event){
    setCompanyName(event.target.value)
  }

  function emailIdChange(event){
    setemailId(event.target.value)
  }

  function jobTitChange(event){
    setjobTitle(event.target.value)
  }

  function yearChange(event){
    setyearExp(event.target.value)
  }

  function nextPage(){
    if(companyName !== "" && emailId !== "" && jobTitle !== "" && yearExp !== "" && checked === true){
      history.push('/EmailVerification')
    }
   else{
     alert("Please Enter All Details")
   }
  }

  function ckeckboxClick(){
    setChecked(true);
  }

  function prePage(){
    history.goBack('/PersonalDetails')
  }
  
  return (
    <div className="com-det-frm">
       <div className="tab">
        <div className="step1">
              <div className="stp-dea"><img src={Tick} alt="tick" width={9} height={9} /></div>
              <label className="stp-dea-lbl">Personal Details</label>
        </div>
        <div className="step2">
            <div className="stp-act">2</div>
            <label className="stp-lbl">Company Details</label>
        </div>
        <div className="step3">
            <div className="stp-dea">3</div>
            <label className="stp-dea-lbl">Email Verification</label>
        </div>
        </div>
      <center>
        <div className="comp-det-hed">Add your Company Details</div>
        <p style={{ textAlign: "center", color: "black" , fontSize: "11px", paddingBottom: "10px"}}>
          Lorem Ipsum is the simply dummy text of printing and typesetting
          industy
        </p>
      </center>
      <center>
        <div className="comp-det">
            <div className="comp-det-logo">
                <img src={Complogo} alt="upload" width={55} height={50}/>
                <label className="upl-lbl">Upload Your Company Logo</label>
            </div>
          <div className="det">
            <label className="det-lbl">Company Name</label>
            <input className="det-inp" required type="text" value={companyName} onChange={(event)=>{comNameChange(event)}}/>
          </div>
          <div className="det">
            <label className="det-lbl">Email id</label>
            <input className="det-inp" required type="text" value={emailId} onChange={(event)=>{emailIdChange(event)}}/>
          </div>
          <div className="det">
            <label className="det-lbl">Job Title</label>
            <input className="det-inp" required type="text" value={jobTitle} onChange={(event)=>{jobTitChange(event)}}/>
          </div>
          <div className="det">
            <label className="det-lbl">Years of Experience</label>
            <input className="det-inp" required type="text" value={yearExp} onChange={(event)=>{yearChange(event)}}/>
          </div>
          <div className="tem-chk">
              <input className="chk" type="checkbox" id="chk" defaultChecked={checked} onClick={() =>ckeckboxClick()} />
              <label className="chk-lbl">I accept the<span style={{ color: "#ff4800"}}> Terms and Conditions</span></label>
          </div>
          <div className="com-btns">
                <button className="btn-bac" onClick={()=>prePage()}>Back</button>
                <div className="btn-alg">
                  { companyName !== "" && emailId !== "" && jobTitle !== "" && yearExp !== "" && checked === true ?  <button className="btn-mov" onClick={()=>nextPage()}>Send OTP</button> : <button className="btn-dis" disabled >Send OTP</button>}
                </div>
            </div>
        </div>
      </center>
    </div>
  );
}
