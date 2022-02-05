import * as React  from 'react';
import ReactWordcloud from 'react-wordcloud';
import "./portfolio.scss"





const words = [
  {
    text: 'GIT',
    value: 500,
  },
  {
    text: 'Laravel',
    value: 500,
  },
  {
    text: 'Laravel',
    value: 500,
  },
  {
    text: 'Nodejs',
    value: 500,
  },
  {
    text: 'SQL',
    value: 500,
  },
  {
    text: 'PHP',
    value: 500,
  },
  {
    text: 'GITHUB',
    value: 300,
  },
  {
    text: 'REACTJS',
    value: 500,
  },
  {
    text: 'REACT-NATIVE',
    value: 500,
  },
  {
    text: 'HTML',
    value: 500,
  },
  {
    text: 'API',
    value: 300,
  },
  {
    text: 'NODEJS',
    value: 400,
  },
  {
    text: 'JAVASCRIPT',
    value: 300,
  },
  {
    text: 'JQUERY',
    // value: 400,
  },
  {
    text: 'JSON',
    // value: 300,
  },
  {
    text: 'YARN',
    value: 300,
  },
  {
    text: 'NPM',
    value: 300,
  },
  {
    text: 'BOOTSRAP',
    value: 400,
  },
  {
    text: 'SASS',
    value: 400,
  },
]


export default function Portfolio(){
 

  return (
    <div className="contact" id="#skills">

        <div className="left">
        <h2>LANGUAGES</h2>
        <div className="langue">
        <span>Anglais: B2+</span>
        <span>Espagnol: C1</span>
        </div>
        </div>
        <div className="idioma">
        <div className="hob">
          <h2>hobbies</h2>
        </div>
        
        <div className="perspective-text">
          <div className="perspective-line">
            <p></p>
            <p>Lecture</p>
          </div>
          <div className="perspective-line">
            <p>Lecture</p>
            <p>Football</p>
          </div>
          <div className="perspective-line">
            <p>Football</p>
            <p>Action</p>
          </div>
          <div className="perspective-line">
            <p>Action</p>
            <p>Humanitaire</p>
          </div>
          <div className="perspective-line">
            <p>Humanitaire</p>
            <p></p>
          </div>
        </div>
        </div>
        
      <div className="right">
        <h2>SKILLS</h2>
            <ReactWordcloud words={words} />
      </div>
    </div>
  )
}


