const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {



//useState hooks
  const [thisOTP, setOTP] = useState("")
  const [thisTimer, setTimer] = useState(0)

//useEffect hooks
useEffect(() => {
  if (thisTimer > 0) {
    const timeoutId = setTimeout(() => {
      setTimer(thisTimer - 1);
    },1000);
    return () => clearTimeout(timeoutId)
  }
}, [thisTimer]);


//event handler
  const handleGenerate = () => {
    setOTP(generateOTP())
    setTimer(5)
    //setButton(!buttonState)
  }

//generate OTP function
const generateOTP = () => {
  const codeArr = []
  for (let x = 0; x<= 5; x++) {
    const number = Math.floor(Math.random()*9+1)
    codeArr.push(number)
  }
  return codeArr.join("")
}

  return(
    <div class="container">
      <h1 id="otp-title">OTP Generator</h1>

      {thisOTP.length < 6 ? 
      (<h2 id="otp-display">
       Click 'Generate OTP' to get a code
      </h2>
      )
      :
      (
        <h2>{thisOTP}</h2>
      )
      }

      {thisTimer == 0 ?
      (<p id="otp-timer" aria-live="assertive">
          OTP expired. Click the button to generate a new OTP.
        </p>
        )
        :
        (
        <p id="otp-timer" aria-live="assertive">
          Expires in: {thisTimer} seconds
        </p>
        )

      }



      <button 
      id="generate-otp-button"
      onClick={handleGenerate}>
        Generate OTP
      </button>

    </div>
    )

};