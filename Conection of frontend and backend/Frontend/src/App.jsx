import axios from 'axios';
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
      .then((res) => {
        setJokes(res.data);
      })
      .catch(
        (error) => {
          console.log(error);

        }
      )
  })
  return (
    <>
      <h1>Nirdesh and FullStack</h1>
      <p>JOKES:{jokes.length}</p>
      {
        jokes.map((joke) => (
          <div key={jokes.id}>
            <p>{joke.joke}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
