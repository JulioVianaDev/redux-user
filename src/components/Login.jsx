import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../reducers/userSlice'

function Login() {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [disable,setDisable] = useState(true);
  const dispatch = useDispatch();
  function validateEmail(email) {
    if (email.includes('@')){
        console.log('é email')
        
      }else{
        console.log('não é email')
      }
      return email;
    }
  function ValidarSenha(senha){
    if (password.length < 5){
        setDisable(true)
        setPassword(senha)
    }else{
      setDisable(false)
      setPassword(senha);
    }
  }
  function handleSubmit(e){
    e.preventDefault()
    dispatch(login({
      name: name,
      email: email,
      password: password,
      loggedIn: true,
    }))
  }
  
  return (
    <div className='login'>
      <form className='login-form' onSubmit={(e)=>handleSubmit(e)}>
        <h1>Login</h1>
        <input 
          type="name" 
          placeholder='Name' 
          value={name} 
          onChange={(e)=> setName(e.target.value)}
        />
        <input 
          type="email"
          placeholder='email' 
          value={email}
          onChange={(e)=> setEmail(validateEmail(e.target.value))}
          />
        <input 
          type="password" 
          placeholder='password' 
          value={password}
          onChange={(e)=> ValidarSenha(e.target.value)}
        />  
        <button disabled={disable} type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Login