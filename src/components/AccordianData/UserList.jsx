/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";

import './UserList.css'
import EditIcon from "../../assets/images/edit.png";
import DeleteIcon from "../../assets/images/delete.png";
// import Form from "../FormData/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// export default function UserList() {


  const UserList= ({dataList, onDeleteItem, onUpdateItem})=>{

    const [userData, setUserData]= useState(0);

    const deleteData= (e,data)=>{
      
      onDeleteItem(data);
    }

    let navigate = useNavigate(); 
    const showForm= (e, id)=>{
      
        let path= `userData/${id}`;
        navigate(path);
        //setUserData(id);
    }

    const updateUser=(data)=>{
        
        setUserData(0);
        onUpdateItem(data)
    }
  
    return (
      <div>
        {
          dataList.
          map((item)=>{

           return <Accordion key={item.id}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      
                      <div>
                      <span className="image-data"><img src={item.picture}/></span>
                      <span className="name-data">{item.first} {item.last}</span>
                      </div>
                      
                    </AccordionSummary>
                    <AccordionDetails>

                    <div className="text-data">
                            <div className="field-data">
                              <div className="age-gen-country">
                                <div className="field">
                                  <div className="title">DOb</div>
                                  <div>{item.dob}</div>
                                </div>

                                <div className="field">
                                  <div className="title">Gender</div>
                                  <div>{item.gender}</div>
                                </div>

                                <div className="field">
                                  <div className="title">Country</div>
                                  <div>{item.country}</div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="field-data desc">
                              <div className="field">
                                <div className="title">Description</div>
                                <div>{item.description}</div>
                              </div>
                            </div>
                          </div>
                  

                      <div className="field-data">
                        <div className="field-icons">
                          <div className="delete-icon edit-data" onClick={(e)=>deleteData(e, item.id)}><img src={DeleteIcon}/></div>
                          <div className="edit-icon" onClick={(e)=>showForm(e, item.id)}><img src={EditIcon}/></div>
                          
                        </div>
                      </div>
                      
                    </AccordionDetails>
                  </Accordion>            

          })
        }
      
    </div>
    );
  }

export default UserList;