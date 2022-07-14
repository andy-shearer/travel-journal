import React from "react"
import Header from "./components/Header"
import Stop from "./components/Stop"
import data from "./data.js"
import "./style.css"

export default function App() {
    const locations = data.map(item => {
        return <Stop key={item.id} {...item} />
    })
    
    return (
        <>
            <Header />
            <section className="loc-container">
                {locations}
            </section>
        </>
    )
}