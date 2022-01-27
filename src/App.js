import { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import mdDocument from './content.md';
import './App.css';

const App = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(mdDocument)
      .then(res => res.text())
      .then(md => { setContent(md) })
  })

  return (
    <div >
    
    <div className="centerBox">
    <div className="imageBox">
      <img className="image" src="./pfp.jpg" alt=""/>
    </div>
    <div><Markdown  children={content} /></div>
    
    </div>
    
    <br/>
    </div>
    )
}

export default App;
