// Email  Verification Component

import React, { useState } from 'react';
import OtpInput from "react-otp-input";
import Tick from '../images/tick.png';
import history from './history';
import '../styles/email_verification.css';

export default function EmailVerification() {
  const [code, setCode] = useState("");

  const handleChange = (code) => setCode(code);

  function perPage(){
    history.goBack('/CompanyDetails')
  }

  function verifyBtn(){
      alert("verified")
  }
  
  return (
    <div className="email-ver">
      <div className="tab">
        <div className="step1">
              <div className="stp-dea"><img src={Tick} alt="tick" width={9} height={9} /></div>
              <label className="stp-dea-lbl">Personal Details</label>
        </div>
        <div className="step2">
            <div className="stp-dea"><img src={Tick} alt="tick" width={9} height={9} /></div>
            <label className="stp-dea-lbl">Company Details</label>
        </div>
        <div className="step3">
            <div className="stp-act">3</div>
            <label className="stp-lbl">Email Verification</label>
        </div>
      </div>
      <center>
        <div className="email-ver-hed">Enter Your OTP</div>
        <div className="email-inf">
          For your security,we need to verify your identity.We sent 5-digit <br />code
          to <span style={{ fontWeight: "bold" }}>name@domain.com </span>Please enter it below
        </div>
      </center>
      <center>
        <div className="email-ver-cont">
          <div className="email-ver-box">
            <label className="code-lbl">Enter your Code</label>
            <div className="otp-box">
              <OtpInput
                inputStyle={{  
                  width: '2.3rem',  
                  height: '2.3rem', 
                  fontSize: '1rem',  
                  borderRadius: 4,  
                  border: '1px solid #a3a2a2', 
                }}  
                  shouldAutoFocus
                  isInputNum={true}
                  focusStyle={{
                    border: "1px solid #ff4800",
                    outline: "#ff4800"
                  }}
                  value={code}
                  onChange={handleChange}
                  numInputs={5}
                  separator={<span style={{ width: "26px"}}></span>}
              />
            </div>
            <br />
            <div className="btns">
                <button className="btn-bac" onClick={() =>perPage()}>Back</button>
                <div className="btn-alg">
                  {code.toString().length < 5 ? <button className="btn-dis" disabled >Verify</button> : <button className="btn-mov" onClick={() =>verifyBtn()}>Verify</button>}
                </div>
            </div>
          </div>
            <hr />
            <p style={{ textAlign: "center", color: "#a3a2a2", fontSize: "12px" }}>
              Didnt receive the mail? Check your spam filters for an email<br /> from <span style={{ color: "#ff4800" }}>name@domain.com</span>
            </p>
        </div>
      </center>
    </div>
  );
}
