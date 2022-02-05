import "./intro.scss"
import { KeyboardArrowDown} from "@material-ui/icons"
import { init } from 'ityped'
import {useEffect, useRef } from "react"


export default function Intro() {
    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, {
             showCursor: true,
             backDelay: 1500,
             backSpeed: 60,
              strings: [ "Full-stack" ], })
        },[])

    return (
        <div className="intro" id="intro">
           <div className="left">
               <div className="imgContainer">
                   <img src="assets/jobTeaser.jpg" alt=""/>
               </div>
           </div>
           <div className="right">
                <div className="wrapper">
                <h2>Hello There, I'm</h2>
                <h1>Souleymane Camara</h1>
                <h3>Web Dev <span ref={textRef}> Full stack</span></h3>
                
                </div>
                <a href="#projet">
                    <KeyboardArrowDown className="arrowdown" />
                </a>
           </div>
        </div>
    )
}
