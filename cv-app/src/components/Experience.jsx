import React from "react";
import { useState } from "react";


function Experience({data, handleChange}){
    return (<>
    <form>
        <h1>Experience</h1>
        <p>Company Name</p>
        <input type="text" name="companyname" value={data.companyname}  onChange={handleChange} />
        <p>Position Title</p>
        <input type="text" name="position" value={data.position}  onChange={handleChange} />
        <p>Start Date</p>
        <input type="date" name="companystartdate" value={data.companystartdate}  onChange={handleChange} />
        <p>End Date</p>
        <input type="date" name="companyenddate" value={data.companyenddate}  onChange={handleChange} />
        <p>Location</p>
        <input type="text" name="companyaddress" value={data.companyaddress}  onChange={handleChange} />
        <p>Description</p>
        <textarea name="description" id="Description" value={data.description}  onChange={handleChange}></textarea>
        <button>Save</button>
    </form>
    </>)
    
}

export default Experience