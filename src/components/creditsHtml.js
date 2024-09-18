import React from 'react'

function CreditText() {
  return (
    <>
      <h1
        style={{
          position: 'absolute',
          top: '20vh',
          left: '10vw', // Move to the left
          
          fontFamily: "Helvetica",
          color: 'white',
          textAlign: "left", // Align text to the left
          width: '80vw', // Adjust width as needed
          fontSize:"50px"
        }}>
        VFX Specialist
      </h1>
      <h2
        style={{
          position: 'absolute',
          top: '30vh',
          width: '80vw',
          left: '10vw', // Move to the left
          color: 'orange',
          textAlign: 'left', 
          fontSize:"30px"
          
        }}>
        Rushmil Goel
      </h2>
      <h1
        style={{
          position: 'absolute',
          top: '50vh',
          left: '10vw', // Move to the left
          
          fontFamily: "Helvetica",
          color: 'white',
          textAlign: "left", 
          width: '80vw', 
          fontSize:"50px"
        }}>
        Design Architect
      </h1>
      <h2
        style={{
          position: 'absolute',
          top: '60vh',
          width: '80vw',
          left: '10vw', // Move to the left
          color: 'orange',
          textAlign: 'left', // Align text to the left
          fontSize:"30px",
          
        }}>
        Trisha Agrawal
      </h2>
      <h1
        style={{
          position: 'absolute',
          top: '80vh',
          left: '10vw', // Move to the left
          
          fontFamily: "Helvetica",
          color: 'white',
          textAlign: "left", 
          width: '80vw',
          fontSize:"50px" 
        }}>
        Content Lead
      </h1>
      <h2
        style={{
          position: 'absolute',
          top: '90vh',
          width: '80vw',
          left: '10vw', // Move to the left
          color: 'orange',
          textAlign: 'left', 
          fontSize:"30px"
          
        }}>
        Heet Jani
      </h2>
    </>
  )
}

export { CreditText }
