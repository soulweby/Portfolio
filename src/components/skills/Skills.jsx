import React from "react"
import { Chrono } from "react-chrono"
import "./skills.scss"

export default function Skills() {

    const items = [{
        title: "Octobre 2021",
        cardTitle: "ACTION",
        cardSubtitle:"Employé de commerce multi-spé",
        cardDetailedText: "Info client, gestion de stock",
        media: {
            type: "IMAGE",
            source: {
              url: "./assets/ACTION.png"
            }
          }
      },
      {
        title: "Novembre 2020",
        cardTitle: "AMAZON",
        cardSubtitle:"Agent d'Explotation Logistique",
        cardDetailedText: "Picking, Stock, Packaging",
        media: {
          type: "IMAGE",
          source: {
            url: "./assets/amazon.png"
          }
        }
      },
     
      {
        title: "Juin 2020",
        cardTitle: "LECLERC",
        cardSubtitle:"Alternance commerce",
        cardDetailedText: "Implantation, Operations Promotionneles, Drive",
        media: {
          type: "IMAGE",
          source: {
            url: "./assets/leclerc.jpg"
          }
        }
      },
      {
        title: "Juin 2019",
        cardTitle: "CARREFOUR",
        cardSubtitle:" Alternance Employé de Commerce Multi-spé",
        cardDetailedText: "Reception des marchandises, Mise en rayon, livraison des commandes,",
        media: {
            type: "IMAGE",
            source: {
              url: "./assets/carrefour.png"
            }
          }
      }, ];
    return (

        <div className="timeline" id="#portfolio">
         
          <div className="hob">
          <h2>experience</h2>
        </div>
            <Chrono items={items}
                theme={{
                    primary: " #15023a",
                    secondary: " rgba( 255, 255, 255, 0.2 )",
                    cardBgColor: " rgba( 255, 255, 255, 0.2 )",
                    cardForeColor: "white",
                    titleColor: "white"
                }}
            slideShow
            mode="VERTICAL_ALTERNATING" />
        </div>
    )
}
