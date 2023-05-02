import React from 'react'
// import Main from '../components/main/Main'
import clientAxios from '../utils/clientAxios';
import { endPoint } from '../utils/configs';



const Home = () => {
  const getUsers = async () => {
    try {
      const resp = await clientAxios.get(`${endPoint.getAllUsers}`)
      console.log(resp);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div>
      {/* <Main /> */ }
      <h1>Home</h1>
      <button className='btn - btn-primary' onClick={()=> getUsers()}>Obtener usuarios</button>
    </div>
      
  )
}

export default Home
