import convertTimeto12h from "../../utils/convertTimeto12h";

export default function ({eventSelected}) {
    console.log(eventSelected)
    if (eventSelected.typeEvent === 'Event') {
        return(
            <div className="detail-event-container">
                <div className="detail-event">
                    <a href="#" style={{display: 'flex', justifyContent: 'center'}}>
                        <img src={eventSelected.clientAvatar} alt="avt" className="detail-event_avatar"/>
                    </a>
                    <h2 className="detail-event_title">{eventSelected?.title}</h2>
                    <p className="detail-event_date">Time start: {convertTimeto12h(eventSelected?.start)} GMT +{eventSelected?.end.getTimezoneOffset() / -60}</p>
                    <p className="detail-event_date">Time end:  {convertTimeto12h(eventSelected?.end)} GMT +{eventSelected?.end.getTimezoneOffset() / -60}</p>
                    <p className="detail-event_location">Type of event: Meeting online </p>
                    <p className="detail-event_about">About event: {eventSelected?.about || "There is no description for this meeting"}</p>
                    <div className="detail-event_btn">
                        <div className="btn btn-cancle">Cancle Meeting</div>
                        <div className="btn btn-accept">Join Meeting</div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="detail-event-container">
        <div className="detail-event">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2100017971206!2d106.71921627581747!3d10.795221889354726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527c2f8f30911%3A0x36ac5073f8c91acd!2sLandmark%2081!5e0!3m2!1svi!2s!4v1729757185200!5m2!1svi!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <h2 className="detail-event_title">{eventSelected?.title}</h2>
            <p className="detail-event_date">Time start: {convertTimeto12h(eventSelected?.start)} GMT +{eventSelected?.end.getTimezoneOffset() / -60}</p>
            <p className="detail-event_date">Time end:  {convertTimeto12h(eventSelected?.end)} GMT +{eventSelected?.end.getTimezoneOffset() / -60}</p>
            <p className="detail-event_location">Location: {eventSelected?.location}</p>
            <p className="detail-event_about">About event: {eventSelected?.about || "There is no description for this meeting"}</p>
            <div className="detail-event_btn">
                <div className="btn btn-cancle">Cancle Event</div>
                <div className="btn btn-accept">Edit Event</div>
            </div>
        </div>
    </div>
    )
}