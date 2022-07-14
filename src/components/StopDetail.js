import React from "react"

export default function StopDetail(props) {
    return (
        <section className="detail-container">
            <div className="location-container">
                <i className="fa-solid fa-location-dot location-marker">&nbsp;{props.location}</i>
                <a className="location-link" href={props.googleMapsUrl}>View on Google Maps</a>
            </div>
            <h2 className="detail-heading">{props.title}</h2>
            <h3 className="detail-subheading">{props.startDate} - {props.endDate}</h3>
            <p className="detail-description">{props.description}</p>
        </section>
    )
}