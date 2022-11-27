import React from 'react'
import {EnvelopeFill,TelephoneOutboundFill,Twitter,Youtube,Instagram,Facebook} from "react-bootstrap-icons"
export default function Topnavbar() {
    return (
        <div className="top-bar container d-flex justify-content-between">
           <div>
           <span> <EnvelopeFill className="icons"/> official@mayonity.com</span>
           <span className="set-padding p-4"> <TelephoneOutboundFill className="icons ml-3"/> +1 646-535-1149</span>
           </div>
           <div>
               <span><Facebook /></span>
               <span className="p-3 icons"><Twitter /></span>
               <span className="p-3 icons"><Youtube /></span>
               <span className="p-3 icons"><Instagram /></span>
           </div>
        </div>
    )
}
