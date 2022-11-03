import React from "react"
import './nav.css'
import { Button } from "reactstrap"
class About extends React.Component {
    render() {
        return (
        <div className="about card">
            <h1>About</h1>
            <Button.Ripple color='primary'>Primary</Button.Ripple>
        </div>
        )
    }
}
export default  About