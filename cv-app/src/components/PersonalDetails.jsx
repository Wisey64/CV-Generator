import React from "react";
import { useState } from "react";
import App from "../App";

function PersonalDetails({data, handleChange}){
    return (<>
    <form>
        <h1>Personal Details</h1>
        <p>Full name</p>
        <input type="text" name="name" value={data.name}  onChange={handleChange}/>
        <p>Email</p>
        <input type="email" name="email" value={data.email} onChange={handleChange} />
        <p>Phone number</p>
        <input type="tel" name="phone" value={data.phone} onChange={handleChange} />
        <p>Address</p>
        <input type="text" name="address" value={data.address} onChange={handleChange} />
        <button>Save</button>
    </form>
    </>)
    
}

export default PersonalDetails