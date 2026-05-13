import React from "react";
import { useState } from "react";


function Cv({data}){
    return (<>
    <div>
        <div>
            <div>
                <h1>{data.name}</h1>
            </div>
            <p>{data.email}</p>
            <p>{data.phone}</p>
            <p>{data.address}</p>
        </div>
        <div>
            <div>
                <h2>Education</h2>
                <div>
                    <div>
                        <p>from  {data.schoolstartdate}  to  {data.schoolenddate}</p>
                        <p>{data.schooladdress}</p>
                    </div>
                    <div>
                        <p>{data.schoolname}</p>
                        <p>{data.degree}</p>
                    </div>
                </div>
            </div>
            <div>
                <h2>Experience</h2>
                <div>
                    <div>
                        <p>from  {data.companystartdate}  to  {data.companyenddate}</p>
                        <p>{data.companyaddress}</p>
                        
                    </div>
                    <div>
                        <p>{data.companyname}</p>
                        <p>{data.position}</p>
                        <p>{data.description}</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
    </>)
    
}

export default Cv