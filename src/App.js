import React from 'react'
import Image from './img/people.svg'
import './App.css'

function App() {
  const [comment, setComment] = React.useState()
  const [allComments, setAllComments] = React.useState([])

  function writeInTextArea(e){
    setComment(e.target.value)
  }

  function clickOnButton(){
    const allPreviousComments = [...allComments, comment]
    
    setAllComments(allPreviousComments)
  }

  return (
    <div>
      <img src={Image} alt="Imagem-pessoas"/>
      <textarea onChange={writeInTextArea}></textarea>
      <button onClick={clickOnButton}>Comentar</button>

      <ul>
        {allComments.map(comment => (
        <li key={comment}><span>{comment}</span></li>
        ))}
      </ul>
    </div>
  )
}

export default App
