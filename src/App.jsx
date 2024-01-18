import { useState } from 'react'
import ProgressBar from './ProgressBar.jsx'
import './App.css'

function App() {
  const [password, setPassword] = useState('')
  const [possibleDigits, setPossibleDigits] = useState(0)
  const [passwordEntropy, setPasswordEntropy] = useState(0)

  const passwords = [
    "123456",
    "123456789",
    "qwerty",
    "12345678",
    "111111",
    "1234567890",
    "1234567",
    "password",
    "123123",
    "987654321",
    "qwertyuiop",
    "mynoob",
    "123321",
    "666666",
    "18atcskd2w",
    "7777777",
    "1q2w3e4r",
    "654321",
    "555555",
    "3rjs1la7qe",
    "google",
    "1q2w3e4r5t",
    "123qwe",
    "zxcvbnm",
    "1q2w3e",
    "admin",
    "qwertyuiopasdfghjklzxcvbnm",
    "Admin",
    "qwerty123",
    "admin123",
    "Password",
    "p@ssw0rd",
    "p@55w0rd",
    "passw0rd",
    "password1",
    "password123",
    "Password1",
    "Password123",
    "123456789a"]
  const handlePasswordChange = (event) => {
    if(event.target.value.length>28){
      alert('Password too long')
      return
    }
    event.preventDefault()
    setPassword(event.target.value.replace(/\s/g, ''))
    checkPasswordStrength(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    checkPasswordStrength(password)
  }

  function searchDictionary (password) {
    // fetch('./src/dictionary.json')
    //   .then((response) => response.json())
    //   .then((data) => { console.log(data) })
  
    const found = passwords.includes(password)
    if (found) {
      alert('Password was found in our dictionary and is not secure')
    } 
    console.log('searching dictionary')
    console.log(password)
  }
  
  const checkPasswordStrength = (password) => {
    let tempPossibleDigits = 0
    searchDictionary(password)

    if (password.match(/[a-z]+/)) {
      tempPossibleDigits += 26
    }
    if (password.match(/[A-Z]+/)) {

      tempPossibleDigits += 26
    }
    if (password.match(/[0-9]+/)) {

      tempPossibleDigits += 10
    }
    if (password.match(/[~!@#$%^&*;/|<>:"'`.?,()\-=_+[{\]}\\]+/g)) {
      tempPossibleDigits += 32
    }
    setPossibleDigits(tempPossibleDigits)
    setPasswordEntropy((password.length>0) ? (password.length * Math.log2(tempPossibleDigits)).toFixed(2) : 0)
  }
  

 
  return (
    <>
      <div className="PasswordApp">
        <h1>Password Strength Checker</h1>
        <p>Enter a password to check its strength</p>
        <input className='input' id='input' value={password} onChange={handlePasswordChange}/>
        <button onClick={handleSubmit}>Check Password</button>
        <ProgressBar progress={passwordEntropy}/>
        <div className='PasswordDetails'>
            <p>Password Length: {password.length}</p>
            <p>Password Complexity: {possibleDigits} possible digits</p>
            <p>Password Entropy: {passwordEntropy} bits</p>
        </div>
      </div>
    </>
  )
}

export default App
