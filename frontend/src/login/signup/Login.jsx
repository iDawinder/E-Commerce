import { useState } from 'react';
import {useNavigate} from "react-router-dom"


function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();


    await fetch("http://localhost:7000/login",{
      method:"POST",
      headers:{
        "Content-Type":"apllication/json"
      },
      body:JSON.stringify({
        email,
        password
      })
    }).then(response=>response.json())
    .then(()=>{

      navigate("/")
    }).catch((err)=>{
      alert(err)
    })


    // console.log('Email:', email);
    // console.log('Password:', password);

  };

  return (

    <div className='tw-flex tw-align-center tw-justify-center tw-my-10 form'>
      <div className=' tw-bg-gray-300 tw-max-w-[380px]  tw-h-auto tw-rounded-xl tw-overflow-hidden sm:tw-mx-4'>
        <h2 className='tw-bg-red-500 tw-p-7 tw-text-3xl tw-font-bold'>LOGIN</h2>
        <hr></hr>
    <form onSubmit={handleSubmit}>
      
<div className='tw-px-16 ' >
  
       
     

   
        <label className='tw-font-bold tw-py-3 label'>Email:</label>
        <input
          className='tw-border-red-500 tw-rounded-xl tw-bg-gray-100 tw-p-3 input'
          placeholder='abc@gmail.com'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
    

   
        <label className='tw-font-bold tw-py-3 label'>Password:</label>
        <input
          className='tw-border-red-500 tw-rounded-xl tw-bg-gray-100 tw-p-3 input'
          placeholder='Enter your password'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
     

      <button type="submit" className=' tw-py-2 tw-px-7 tw-bg-red-500 tw-item-center tw-my-5 tw-rounded-2xl tw-font-bold'>Submit</button>
      </div>   
    </form>
    </div>
    </div>
  );
}

export default Login;