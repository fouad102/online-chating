import axios from 'axios';
import React from 'react';
import { useState } from 'react'

function LoginForm() {
  const [userName, setuserName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    //user name | password ==>chatengine---->givemessage
    //worksout -->login
    //error --->try with new user name 
    const authObject = { 'project-ID': '359c8da4-dc65-4d3e-bfa6-72bff4bade92', 'User-Name': userName, 'User-Secret': password }
    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject })
      localStorage.setItem('username', userName)
      localStorage.setItem('password', password)
      window.location.reload()

    } catch (error) {
      setError('Oops ,incrroct crendatials.')
    }

  }
  return (
    <div className='wrapper'>
      <div className='form'>
        <h1 className='title'>Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={userName} onChange={(e) => setuserName(e.target.value)} className="input" placeholder='UserName' required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder='Password' required />
          <div>
            <button type='submit' className='button'>
              <span>Start Chatting</span>
            </button>
          </div>
          <h1 className='error'>{error}</h1>
        </form>

      </div>
    </div>
  );
}

export default LoginForm;
