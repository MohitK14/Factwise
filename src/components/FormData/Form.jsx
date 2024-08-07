/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import './Form.css';
import TickIcon from "../../assets/images/tick-icon.png";
import {useParams } from 'react-router-dom'
import dataListJson from "../../DataList/DataList.json"
import { useNavigate } from "react-router-dom";

import CrossIcon from "../../assets/images/cross-icon.png";

const Form= ()=>{

    const [first, setFirst]= useState("");
    const [last, setLast]= useState("");
    const [picture, setPicture]= useState("");
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [country, setCountry] = useState('');
    const [description, setDescription] = useState('');
    const params = useParams();


    useEffect(()=>{
        getData();
      },[]);

    const getData=()=>{
        
        let result= dataListJson.filter(x=> x.id=== Number(params.id))[0];
        
        setFirst(result.first);
        setLast(result.last);
        setPicture(result.picture);
        setDob(result.dob);
        setGender(result.gender);
        setCountry(result.country);
        setDescription(result.description);
    }



    let navigate = useNavigate(); 
    const handleUpdate= (event)=>{

        event.preventDefault();
        
        setDob(dob);
        setGender(gender);
        setCountry(country);
        setDescription(description);

        // let newItem={
        //     id: Number(params.id),
        //     dob: dob,
        //     gender: gender,
        //     country: country,
        //     description: description
        // }
        dataListJson.forEach(x=>{
            if(x.id===Number(params.id)){
              x.dob= dob,
              x.gender= gender,
              x.country= country,
              x.description= description
            }
          })


        let path= "/";
        navigate(path);
    }

    const routeToList=()=>{
        let path= "/";
        navigate(path);
    }

    return(
        <>
        <div className="form-data">
            <div className="iamge-name">
                <span className="image-data"><img src={picture}/></span>
                <span className="name-data">{first} {last}</span>
            </div>
            
            <form>
                <div className="row-one">
                    <div>
                        <div className="field-title">Dob</div>
                        <input
                            type="text"
                            name="Dob"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                            placeholder="Dob"
                            required
                        />
                    </div>

                    <div>
                        <div className="field-title">Gender</div>
                        <input
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            placeholder="gender"
                            type="text"
                            name="gender"
                            required
                        />
                    </div>

                    <div>
                        <div className="field-title">Country</div>
                            <input
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                placeholder="country"
                                type="country"
                                name="country"
                                required
                            />
                    </div>
                </div>
                <div className="row-two">
                <div>
                    <div>Description</div>
                        <input
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="description"
                            type="description"
                            name="description"
                            required
                        />
                    </div>
                </div>
                
                
            <div className="form-button">
                <div className="close-icon" onClick={(e)=>routeToList(e)}><img src={CrossIcon}/></div>
                <button className="submit-btn" onClick={(e)=>handleUpdate(e)}><img className="confirm-icon" src={TickIcon}/></button> 
            </div>
        
            </form>
        </div>



        
        </>
    )
}

export default Form;