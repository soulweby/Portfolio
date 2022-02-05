import "./topbar.scss"
import {Person, Mail, LinkedIn, GitHub} from "@material-ui/icons";

export default function Topbar({menuOpen, setMenuOpen}) {


    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                        <a href="#intro" className="logo">Souley</a>
                        <div className="itemContainer">
                            <Person className="icon" />
                            <span>+33 610 948 774</span>
                        </div>
                        <div className="itemContainer">
                            <Mail className="icon"/>
                            <span>souleymane.camara@epitech.eu</span>
                        </div>
                    
                        <div className="itemContainer">
                         <a   style={{textDecoration: "none", color:"white"}} href="https://www.linkedin.com/in/souldev/"><LinkedIn className="icon" /></a>
                        </div>
                        <div className="itemContainer">
                            <a   style={{textDecoration: "none",  color:"white"}} href="https://github.com/soulweby/"><GitHub className="icon"/></a>
                        <div className="itemContainer">
                        <button > <a  style={{textDecoration: "none"}} href="assets/cv-png.png" download>CV</a></button>
                        </div>
                        </div>
                </div>
                <div className="right">

                        <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                            <span className="line1"></span>
                            <span className="line2"></span>
                            <span className="line3"></span>
                        </div>
                </div>
            </div>
            
        </div>
    )
}
