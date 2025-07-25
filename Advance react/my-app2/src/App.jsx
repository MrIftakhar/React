import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Form';
import MyChild from './Component/MyChild';
import AppHome from './Component/AppHome';
import UseEffect from './Component/UseEffect'
import FetchData from './Component/FetchData';
import ShowImg from './Component/ShowImg';
import ShowCustomData from './Component/showCustomData'


const App = () => {
  // const ParentData = "I am your King"
  // const DataPassing = (para) => {
  //   console.log(para)
  // }

  return (
    <div>
      {/* <Form/>
      <MyChild Title={ParentData} OnMethod={DataPassing}/>
      <AppHome/>
      <UseEffect/> */}
      {/* <FetchData/> */}
      {/* <ShowImg/> */}
      <ShowCustomData/>
    </div>
  )
}

export default App;
