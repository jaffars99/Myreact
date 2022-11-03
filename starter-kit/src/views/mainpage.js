import React from "react"
import './nav.css'
import Left from './leftmain'
import Effect from "./effect"
class Mainpage extends React.Component {
    render() {
        return (
        <div className="Mainpage card">
            <Left/>
            <Effect/>
        </div>
        )
    }
}
export default Mainpage