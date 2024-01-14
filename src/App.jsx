import React, { useState, useEffect } from 'react'
import ProgressBar from './ProgressBar.jsx'

function App() {
  const [password, setPassword] = useState('')
  const [passwordStrength, setPasswordStrength] = useState(0)
  
  // useEffect(() => {
  //   document.querySelector('input').value = password
  //   checkPasswordStrength(password)
  //   console.log(passwordStrength)
  //   console.log(password)
  // }, [password])
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
    checkPasswordStrength(event.target.value)
  }

  const checkPasswordStrength = (password) => {
    let strength = 0
    if (password.length >= 8) {
      strength += 1
    }
    if (password.length >= 12) {
      strength += 1
    }
    if (password.length >= 16) {
      strength += 1
    }
    if (password.match(/[a-z]+/)) {
      strength += 1
    }
    if (password.match(/[A-Z]+/)) {
      strength += 1
    }
    if (password.match(/[0-9]+/)) {
      strength += 1
    }
    if (password.match(/[$@#&!]+/)) {
      strength += 1
    }
    setPasswordStrength(strength)
  }

 
  return (
    <>
      <div className="PasswordApp">
        <h1>Password Strength Checker</h1>
        <p>Enter a password to check its strength</p>
        <input id='input' value={password} onChange={handlePasswordChange}/>
        <button>Check Password</button>
        <p>Password Strength: {passwordStrength}</p>
        <ProgressBar progress={passwordStrength}/>
      </div>
    </>
  )
}

export default App
