import React from "react";
import { useState } from "react";


function Education({data, handleChange}){
    return (<>
    <form>
        <h1>Education</h1>
        <p>School</p>
        <input type="text" name="schoolname" value={data.schoolname}  onChange={handleChange} />
        <p>Degree</p>
        <input type="text" name="degree" value={data.degree}  onChange={handleChange} />
        <p>Start Date</p>
        <input type="date" name="schoolstartdate" value={data.schoolstartdate}  onChange={handleChange} />
        <p>End Date</p>
        <input type="date" name="schoolenddate" value={data.schoolenddate}  onChange={handleChange} />
        <p>School Location</p>
        <input type="text" name="schooladdress" value={data.schooladdress}  onChange={handleChange} />
        <button>Save</button>
    </form>
    </>)
    
}

export default Education