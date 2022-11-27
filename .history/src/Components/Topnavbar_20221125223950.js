import React from 'react'
import {EnvelopeFill,TelephoneOutboundFill} from "react-bootstrap-icons"
export default function Topnavbar() {
    return (
        <div className="top-bar container d-flex justify-content-between">
           <div>
           <span> <EnvelopeFill className="icons"/> official@mayonity.com</span>
           <span className="set-padding ml-3"> <TelephoneOutboundFill className="icons ml-3"/> official@mayonity.com</span>
           </div>
           <div>
               asdf
           </div>
        </div>
    )
}
