
import dataListJson from "../../DataList/DataList.json"
import { useState } from 'react';
import InputData from "../InputData/InputData";
import UserList from "../AccordianData/UserList";


const Body= ()=>{

    const [userItems, setUserItems]= useState(dataListJson)
    const [query, setQuery]= useState("");
    const keys= ["first", "last", "email"]
  
  
    const searchData=(data)=>{
      console.log(data)
      console.log(userItems);
      setQuery(data)
       //if(data=="")
       if(userItems.length==0 || data==" "){
        setUserItems(dataListJson);
       }
       else{
        let newItem= userItems.filter((item)=>
            keys.some((key)=>
              item[key].toLowerCase().includes(query)));
    
          setUserItems(newItem);
       }

      
  
    }
  
    const updateItem=(data)=>{
      console.log(data);
       userItems.forEach(x=>{
        if(x.id===data.id){
          x.dob= data.dob,
          x.gender= data.gender,
          x.country= data.country,
          x.description= data.description
        }
      })
  
      setUserItems(userItems)
    }
  
    const deleteItem= (data)=>{
      console.log(data);
      let newItem= userItems.filter(x=> x.id!==data);
      //console.log(newItem)
      setUserItems(newItem);
    }

    return (
        <>
            <InputData searchUser={searchData}/>
            {dataListJson.length===0 && <h3>Loading Users data...</h3>}
            <UserList dataList={userItems} onUpdateItem={updateItem}  onDeleteItem={deleteItem}/>
        </>
    )
}

export default Body;