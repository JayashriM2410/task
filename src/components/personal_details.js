// Personal Detail Component

import React, { useState } from "react";
import "./form";
import Flag from '../images/flag.jpg';
import history from './history';
import "../styles/personal_details.css";

const gender=["Male", "Female", "Other"]
const countrys = [ "India","America"];
const states = ["Tamil Nadu", "Kerala", "Karnadaka"]
const phone = ["+91", "+81", "+71"]

function PersonalDetails (){
  const [name , setName] = useState('');
  const [phoneNo, setphoneNo] = useState('');
  const [countryVal, setcountryVal] = useState('India');
  const [stateVal, setStateVal] = useState('Tamil Nadu');
  const [buttonAct, setbuttonAct] = useState(false);
  const [active, setactive] = useState();

  function nameChange(event){
    setName(event.target.value);
  }

  function phnInpChange(e){
    const num = /^[0-9\b]+$/;
    if (e.target.value === '' || num.test(e.target.value)) 
    {
      setphoneNo(e.target.value);  
     }
  }

  function nextPage(){
    if(name !== "" && phoneNo !== "" && countryVal !== "" && stateVal !== "" && buttonAct === true){
      history.push('/CompanyDetails')
    }
    else{
      alert("Please Enter All Details")
    }
  }

  function buttonClick(val){
    setbuttonAct(true);
    if(active === val){
      setactive('');
    }
    else {
        setactive(val);
    }
  }

  function myColor(val) {
    if (active === val) {
        return "#ffeee5";
    }
    return "";
  }

  function fontColor(val) {
    if (active === val) {
        return "#ff4800";
    }
    return "";
  }
  function borderClr(val) {
    if (active === val) {
        return "none";
    }
    return "";
  }

  function countryChange(e){
    setcountryVal(e.target.value)
  }

  function stateChange(e){
    setStateVal(e.target.value)
  }

  return (
    <div className="per-det">
      <div className="tab">
        <div className="step1">
          <div className="stp-act">1</div>
          <label className="stp-lbl">Personal Details</label>
        </div>
        <div className="step2">
          <div className="stp-dea">2</div>
          <label className="stp-dea-lbl">Company Details</label>
        </div>
        <div className="step3">
          <div className="stp-dea">3</div>
          <label className="stp-dea-lbl">Email Verification</label>
        </div>
      </div>
      <center>
        <div className="per-det-hed">Add your Personal Details</div>
          <p style={{fontSize: "11px"}}>
            Lorem Ipsum is the simply dummy text of printing and typesetting
            industy
          </p>
      </center>
      <center>
        <div className="per-det-box">
          <div className="per-det-inp">
            <label className="lbl">Full Name</label>
            <input className="nam-inp" id="name" required type="text" value={name} onChange={(event)=>{nameChange(event)}} />
          </div>
          <div className="gen">
            <label className="gen-lbl">Gender</label>
            <div className="btn-gen-grp">
              {
                gender.map((Ind, i)=>{
                  return(
                    <div className="btn-lod">
                      <button className="btn-gen" style={{ backgroundColor:  myColor(i), color : fontColor(i), border : borderClr(i)}} key={i} id={i} onClick={() => buttonClick(i)}>{Ind}</button>
                    </div>
                  );
                })
              }
            </div>
          </div>
          <div className="cont">
            <div className="tex-lbl">
            <label className="cont-lbl">Country</label>
            </div>
            <div className="sel">
              <img className="flg" src={Flag} alt="flag" width={14} height={13}/>
              <select className="cont-sel" onChange={(e) => countryChange(e)}>
                {
                  countrys.map((contry, i)=>{
                    return (
                      <option className="opt" value={countryVal}>{contry}</option>
                    )
                  })
                }
              </select>
            </div>
          </div>
          <div className="state">
          <div className="tex-lbl">
            <label className="state-lbl">State</label>
            </div>
            <select className="state-sel" onChange={(e) => {stateChange(e)}}>
              {
                states.map((state, i)=>{
                  return (
                    <option className="opt" value={stateVal}>{state}</option>
                  )
                })
              }
             </select>
          </div>
          <div className="pho">
          <div className="tex-lbl">
            <label className="pho-lbl">Phone</label>
            </div>
            <div className="sel">
              <img className="flg" src={Flag} alt="flag" width={15} height={14}/>
              <select className="phn-sel">
              {
                  phone.map((phone, i)=>{
                    return (
                      <option className="opt">{phone}</option>
                    )
                  })
              }
                </select>
              <input className="pho-inp" value={phoneNo} onChange={(event) =>{phnInpChange(event)}} />
            </div>
          </div>
          <br />
          { name !== "" && phoneNo !== "" && countryVal !=="" && stateVal !=="" && buttonAct === true ? <button className="nex-btn" onClick={() => nextPage()}>Next</button> :  <button className="btn-dis" disabled >Next</button>}
        </div>
        <p style={{ color: "#b5b5b5", fontSize: "12px"}}>Already have an account? <span style={{ color: "orange"}}>Login In</span></p>
      </center>
    </div>
  );
}

export default PersonalDetails;
