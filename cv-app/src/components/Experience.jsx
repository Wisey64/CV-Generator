import React from "react";
import { useState } from "react";


function Experience(){
    return (<>
    <form>
        <h1>Experience</h1>
        <p>Company Name</p>
        <input type="text" />
        <p>Position Title</p>
        <input type="text" />
        <p>Start Date</p>
        <input type="date" />
        <p>End Date</p>
        <input type="date" />
        <p>Location</p>
        <input type="text" />
        <p>Description</p>
        <textarea name="" id="Description"></textarea>
    </form>
    </>)
    
}

export default Experience