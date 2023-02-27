// import './App.scss'
import React from 'react'
import Button from '@mui/material/Button';
import QuestionScreen from './components/QuestionScreen';
import { useState } from 'react';

function App() {

  const [start, setStart] = useState(false);

  return (
    <>
      {start ? <QuestionScreen /> :
        (<main>  <div>upraised</div>
          <div className='quiz__label'>
            <p>Quiz</p>
          </div>
          <div>
            <Button variant="contained"
              onClick={() => setStart(true)}
              sx={{
                width: '80vw',
                height: '3em',
                borderRadius: "2em",
                backgroundColor: 'var( --color-red)',
                fontFamily: 'var(--font-base)'
              }}
            >Start</Button>
          </div></main>
        )}
    </>
  )
}
export default App

