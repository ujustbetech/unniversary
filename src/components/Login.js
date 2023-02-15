
"use client"; // this is a client component
import axios from 'axios';
import React, { useState } from 'react';
// import logo from '../images/logo.png'

function Login() {
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [role, setrole] = useState('');
    const [mobilenumber, setmobilenumber] = useState('');
    // const [showpopup, setshowpopup] = useState('');

 

      const handleClick = async (e) => {
        e.preventDefault();
        const user = {
            firstname: firstname,
            lastname: lastname,
            role: role,
            mobilenumber: mobilenumber,
          }
        const response = await axios
            .post('https://plankton-app-i2dnd.ondigitalocean.app/reg/', user)
            .catch((error) => console.log('Error: ', error));
        if (response && response.data) {
            console.log(response);
            console.log(response.data);
        }

    //     fetch('https://plankton-app-i2dnd.ondigitalocean.app/reg/')
    //   .then(response => response.json())
    //   .then(json => console.log(json))
        //add class success-popup to c-login  and to show hide 
    };



    return (
        <section className='c-loginpage'>
             <div className='c-login'>
                <div className='logo'>
                    <div className='ujblogo'>
                        <img src="/static/images/logo.png" />
                    </div>
                    <div className='unniversarylogo'>
                        <img src="/static/images/unniversary.png" />
                    </div>
                </div>
                <div className='regfrom'>
                    <input placeholder='First Name' onChange={(event) => {
                        setfirstname(event.target.value)
                    }}></input>
                    <input placeholder='Last Name' onChange={(event) => {
                        setlastname(event.target.value)
                    }}></input>
                    <select name="role" id="role" onChange={(event) => {
                                        setrole(event.target.value)
                                    }}>
                        <option value="none" selected disabled hidden>Select Role</option>
                        <option value="Partner">Partner</option>
                        <option value="Listed Partner">Listed Partner</option>
                    </select>
                    <input placeholder='Mobile Number' onChange={(event) => {
                                        setmobilenumber(event.target.value)
                                    }}></input>
                    <button type="submit" onClick={handleClick}> Submit</button>
                </div>
            </div>
            <div className='c-loginpopup'>
                <img src="/static/images/checked.png" />
                <h5>Hi Orbiter Rajeev Ubhe</h5>
                <h4>Welcome to celebration </h4>
            </div>
        </section>
    )
}

export default Login