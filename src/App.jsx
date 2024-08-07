
import './App.css'

import { Outlet } from 'react-router-dom';

function App() {
  

  
  return (
    // <>
    //   <InputData searchUser={searchData}/>
    //   {dataListJson.length===0 && <h3>Loading Users data...</h3>}
    //   <UserList dataList={userItems} onUpdateItem={updateItem}  onDeleteItem={deleteItem}/>
    // </>
    <Outlet/>
    
  )
}

export default App
