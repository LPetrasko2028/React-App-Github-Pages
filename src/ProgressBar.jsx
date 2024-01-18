import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import './ProgressBar.css';

function ProgressBar(props) {
    
    const passwordEntropy = props.progress
    const [messageToUser, setMessageToUser] = useState('')
    const [color, setColor] = useState('red')

    function updateMessage() {
        if (passwordEntropy === 0) {
          setMessageToUser('')
          setColor('red')
        }
        else if (passwordEntropy < 50) {
          setMessageToUser('Weak')
          setColor('red')
        }
        else if (passwordEntropy < 60) {
          setMessageToUser('Fair')
          setColor('orange')
        }
        else if (passwordEntropy < 70) {
          setMessageToUser('Good')
          setColor('yellow')
        }
        else if (passwordEntropy < 80) {
          setMessageToUser('Strong')
          setColor('green')
        }
        else if (passwordEntropy < 90) {
          setMessageToUser( 'Very Strong')
          setColor('blue')
        }
      }
      // useEffect(() => {
      //   updateMessage()
      // }, [passwordEntropy])
      useEffect(updateMessage, [passwordEntropy])

    return (
        <>
        <div className="progress-bar">
            <div className="progress" style={{ width: `${(passwordEntropy<=100) ? passwordEntropy : 100}%`, 
            backgroundColor: `${color}` }}>{messageToUser}</div>
        </div>
        </>
    )
}
ProgressBar.propTypes = {
    progress: PropTypes.number.isRequired,
};
export default ProgressBar;
