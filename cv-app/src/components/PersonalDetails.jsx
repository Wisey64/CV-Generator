import React from "react";
import { useState } from "react";

function PersonalDetails(){
    return (<>
    <form>
        <h1>Personal Details</h1>
        <p>Full name</p>
        <input type="text" />
        <p>Email</p>
        <input type="email" />
        <p>Phone number</p>
        <input type="telephone" />
        <p>Address</p>
        <input type="text" />
        <button>Save</button>
    </form>
    </>)
    
}

export default PersonalDetails