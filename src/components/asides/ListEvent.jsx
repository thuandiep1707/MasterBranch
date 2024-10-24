import convertTimeto12h from "../../utils/convertTimeto12h"

export default function ({eventList, selectedDate, setModalAddEvent, setEventSelected, setAsideRender}) {
    const todate = new Date()
    const handleSetEvent = (event) => {
        setEventSelected(event)
        setAsideRender('detail')
    }
    return (
        <div className="list-event-container">
            <div className="list-event">
                <h2 className="list-event_title">{
                    selectedDate.toDateString() === todate.toDateString()
                    ?
                    'Upcomming Events'
                    :
                    'Events'
                }</h2>
                <h3 className="list-event_selectday">{selectedDate.toDateString()}
                    <span className="list-event_add" onClick={() => setModalAddEvent(true)}> Add Event</span>
                </h3>
                <div className="list-event_des">
                    {eventList?.map((event, key) => (
                    <div key={event?.id + key} className={event?.typeEvent === 'Event' ? "list-event_des_item list-event_des_event-item" : "list-event_des_item list-event_des_appointment-item"} >
                        <div className="item-header">
                            <p className="title-time">
                                <span className="title pointer" onClick={()=>handleSetEvent(event)}>{event?.title}</span>
                                <span className="time">{convertTimeto12h(event?.start)} - {convertTimeto12h(event?.end)} GMT +{event?.end.getTimezoneOffset() / -60}</span>
                            </p>
                            <p>
                                {
                                    event?.typeEvent === 'Event'
                                    &&
                                    <i className="fa-solid fa-video meeting pointer"/>
                                }
                            </p>
                        </div>
                        {
                            event?.typeEvent === 'Event'
                            &&
                            <div className="item-client">
                                <img src={event?.clientAvatar} alt="avt" className="client-avatar"/>
                                <a href="#">View Client Profile</a>
                            </div>
                        }
                    </div>
                    ))}
                    
                </div>
            </div>
        </div>
    )
}