const { useState } = React;

export function EventRSVPForm() {
  //State handlers

  const [guestName, setGuestName] = useState('')
  const [email,setEmail] = useState('')
  const [attendees,setAttendees] = useState(1)
  const [diet,setDiet] = useState('')
  const [guests,setGuests] = useState("false")
  const [isSubmitted, setSubmitted] = useState(false)


  //functions

  const handleAttendees = e => {
    const attendees = parseInt(e.target.value,10) || 1
    attendees <=0 ? setAttendees(1) : setAttendees(attendees)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }




  //return HTML

  return (
    <div>
    <form className="form-container" onSubmit={handleSubmit}>
      <h1>Event RVSP Form </h1>

      <div className="form-group">
        <label id="name-label" htmlFor="name-input">Name:
          <input required
            type="text" 
            id="name-input"
            placeholder="Your Name"
            value={guestName}
            onChange={e => setGuestName(e.target.value)}
          />
        </label>
      </div>

      <div className="form-group">
        <label id="mail-label" htmlFor="mail-input">Email:
          <input required
            type="email" 
            id="mail-input"
            placeholder="Your Email"
            onChange={e => setEmail(e.target.value)}
          />
        </label>
      </div>

      <div className="form-group">
        <label id="people-label" htmlFor="people-input">Number of Attendees:
          <input required
            min="1"
            type="number" 
            id="people-input"
            onChange={e => handleAttendees(e)}
            value={attendees}
          />
        </label>
      </div>

      <div className="form-group">
        <label id="diet-label" 
        htmlFor="diet-input">
          Dietary Preferences:
          <input 
            type="text" 
            id="diet-input"
            placeholder="Dietary Preferences (Optional)"
            onChange={e => setDiet(e.target.value)}
            value={diet}
          />
        </label>
      </div>

      <div className="form-group">
        <label id="guest-label" 
        htmlFor="guest-input">
          Additional Guests:
          <input 
            type="checkbox" 
            id="guest-input"
            value={guests}
            onChange={e => setGuests(!guests)}
          />
        </label>
      </div>

      <button 
        className="submit-btn"
        type="submit"
        disabled={!guestName || !email || !attendees}>
        Submit RSVP
      </button>

    </form>

  {isSubmitted && (
    <div>
    <h1>Answer Submitted</h1>
    <p>Name: {guestName}</p>
    <p>Email: {email}</p>
    <p>Attendees: {attendees}</p>
    <p>Dietary Preferences: {diet || "None"}</p>
    <p>Additional Guest: {guests ? "Yes" : "No"}</p>

    </div>
  )}

    </div>

  )




}