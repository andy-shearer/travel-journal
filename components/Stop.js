import React from "react"
import StopDetail from "./StopDetail"

export default function Stop(props) {
    return (
        <section className="loc">
            <img src={props.imageUrl} className="loc-image" />
            <StopDetail {...props} />
        </section>
    )
}
