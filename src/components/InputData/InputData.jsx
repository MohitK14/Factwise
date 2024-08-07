/* eslint-disable react/prop-types */
import { useState } from "react";


const InputData= ({searchUser})=>{

    const[inputData, setInputData]= useState("")

    const handleInputChange= (e)=>{
        //console.log(e.target.value)
        setInputData(e.target.value);
         searchUser(e.target.value);
    }

    return (
        <div className="input-data">
            <input type="text" placeholder="Search User" value={inputData} onChange={handleInputChange}/>
        </div>
        
    )
}

export default InputData