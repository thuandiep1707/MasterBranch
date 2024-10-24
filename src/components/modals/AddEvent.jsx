import { useState } from "react"

export default function ({date, handleAddEvent, setModalAddEvent}){
    const [eventData, setEnventData] = useState({
        title: "",
        start: new Date(date),
        end: new Date(date),
        location: "",
        about: "",
        typeEvent: 'Appointment',
    })
    const setTimeStart = (e) => {
        const [hour, minute] = e.target.value.split(':')
        const newdata = {...eventData}
        console.log(hour, minute)
        if (hour && minute) {
            newdata.start.setHours(hour)
            newdata.start.setMinutes(minute)
            setEnventData(newdata)
        }
    }
    const setTimeEnd = (e) => {
        const [hour, minute] = e.target.value.split(':')
        const newdata = {...eventData}
        console.log(hour, minute)
        if (hour && minute) {
            newdata.end.setHours(hour)
            newdata.end.setMinutes(minute)
            setEnventData(newdata)
        }
    }
    const setEventTitle = (e) => {
        setEnventData(prev => ({...prev, title: e.target.value}))
    }
    const handleLocation = (e) => {
        setEnventData(prev => ({...prev, location: e.target.value}))
    }
    const handleAbout = (e) => {
        setEnventData(prev => ({...prev, about: e.target.value}))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        handleAddEvent(eventData)
        alert("Add event success")
        setModalAddEvent(false)
        console.log(eventData)
    }
    return(
        <div className="modal-around">
            <form className="add-event-modal" onSubmit={handleSubmit}>
                <h2 className="add-event-modal_title">ADD NEW EVENT</h2>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" defaultValue={eventData.title} onChange={setEventTitle} required/>
                <div className="add-event-modal_time">
                    <label htmlFor="hour-from">Time start</label>
                    <input type="time" name="hour" id="hour-from" min="00:00" max="23:59" required className="hour-label" onChange={setTimeStart}/>
                    <label htmlFor="hour-to" className="label-end">Time end</label>
                    <input type="time" name="hour-to" id="hour-to" min="00:00" max="23:59" required className="hour-labe" onChange={setTimeEnd}/>
                </div>
                <label htmlFor="location">Location</label>
                <input type="text" name="location" id="location" defaultValue={eventData.location} onChange={handleLocation} required/>
                <label htmlFor="title">AboutEvent</label>
                <textarea name="title" id="title" rows="10" defaultValue={eventData.about} onChange={handleAbout} required/>
                <div className="add-event-modal_btn">
                    <div onClick={()=>setModalAddEvent(false)} className="btn btn-cancle ">Cancle</div>
                    <input type="submit" className="btn btn-submit" value="Add Event" />
                </div>
            </form>
        </div>
    )
}