import React from "react";
import { useState } from "react";


function Cv(){
    return (<>
    <div>
        <div>
            <div>
                <h1>name</h1>
            </div>
            <p>email</p>
            <p>phone</p>
            <p>Location</p>
        </div>
        <div>
            <div>
                <h2>Education</h2>
                <div>
                    <div>
                        <p>date</p>
                        <p>city</p>
                    </div>
                    <div>
                        <p>school name</p>
                        <p>degrree</p>
                    </div>
                </div>
            </div>
            <div>
                <h2>Experience</h2>
                <div>
                    <div>
                        <p>date</p>
                        <p>city</p>
                    </div>
                    <div>
                        <p>company name</p>
                        <p>degree</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
    </>)
    
}

export default Cv