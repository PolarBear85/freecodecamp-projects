const { useState, useEffect, useRef } = React;


export const OTPGenerator = () => {

//useState hooks
const [thisOTP, newOTP] = useState(null)
const [thisTimer, setTimer] = useState(null)

//useEffect hooks
useEffect(() => {
  if (thisTimer > 0) {
    const timeoutId = setTimeout(() => {
      setTimer(thisTimer - 1);

    },1000)
    return () => clearTimeout(timeoutId)
  }
},[thisTimer])


//event handler
const handleGenerate = () => {
  newOTP(generateOTP())
  setTimer(5)
}

//helper function for OTP Display
const renderOTPDisplay = () => {
  if (thisTimer === null) {
    return "Click 'Generate OTP' to get a code"
  }
  return thisOTP
};

//helper function for countdown Display
const renderCountdown = () => {
  if (thisTimer === null) {
    return
  }
  if (thisTimer === 0) {
    return "OTP expired. Click the button to generate a new OTP."
  }
  return `Expires in: ${thisTimer} seconds`
}

//Generate code function
function generateOTP() {
  const codeArr =[]
  for (let x = 0; x<=5; x++) {
    const number = Math.floor(Math.random()*10)
    codeArr.push(number)
  }
  return codeArr.join("")
}


//HTML code

  return (

    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
        <h2 id="otp-display">
          {renderOTPDisplay()}
        </h2>

        <p id="otp-timer" aria-live="polite">
          {renderCountdown()}
        </p>


      <button 
      id="generate-otp-button"
      onClick={handleGenerate}
      disabled={thisTimer>0}>
        Generate OTP
      </button>

    </div>

  )


};