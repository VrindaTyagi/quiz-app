import './App.scss'
import React from 'react'
import Button from '@mui/material/Button';

function App() {

  return (
    <>
      <main>
        <div>Upraised</div>
        <div className='quiz__label'>
          <p>Quiz</p>
        </div>
        <div>
        <Button variant="contained"
         sx={{
          width: '80vw',
          borderRadius: "2em",
          backgroundColor: 'var( --color-red)',
        }}
        >Start</Button>
        </div>
      </main>
    </>
  )
}
export default App

