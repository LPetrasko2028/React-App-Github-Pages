import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import './ProgressBar.css';

function ProgressBar(props) {
    
    const passwordStrength = props.progress
    

    const [messageToUser, setMessageToUser] = useState('')

    function updateMessage() {
        if (passwordStrength === 0) {
          setMessageToUser('Please enter a password')
        }
        if (passwordStrength === 1) {
          setMessageToUser('Weak')
        }
        if (passwordStrength === 2) {
          setMessageToUser('Fair')
        }
        if (passwordStrength === 3) {
          setMessageToUser('Good')
        }
        if (passwordStrength === 4) {
          setMessageToUser('Strong')
        }
        if (passwordStrength === 5) {
          setMessageToUser( 'Very Strong')
        }
      }
      useEffect(() => {
        updateMessage()
        updateColor()
      }, [passwordStrength])

      const [color, setColor] = useState('Red')
      function updateColor() {
        if (passwordStrength === 0) {
          setColor('Red')
        }
        if (passwordStrength === 1) {
          setColor('red')
        }
        if (passwordStrength === 2) {
          setColor('orange')
        }
        if (passwordStrength === 3) {
          setColor('yellow')
        }
        if (passwordStrength === 4) {
          setColor('green')
        }
        if (passwordStrength === 5) {
          setColor('green')
        }
      }

    return (
        <>
        <div className="progress-bar">
            <div className="progress" style={{ width: `${passwordStrength*14}%`, backgroundColor: {color} }}>{messageToUser}</div>
        </div>
        <div className='PasswordDetails'>
            <p>Password Length: </p>
            <p>Password Complexity: </p>
            <p>Password Entropy: </p>
        </div>
        </>
    )
}
ProgressBar.propTypes = {
    progress: PropTypes.number.isRequired,
};
export default ProgressBar;
