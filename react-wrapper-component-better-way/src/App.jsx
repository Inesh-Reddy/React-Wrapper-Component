

function App() {

  return <div>
      <CardWrapper>
        Hey Inesh! <br />
      </CardWrapper><br />
      <CardWrapper>
        How are you? <br />
      </CardWrapper>
    </div>
}

function CardWrapper({children}){
  return <div style={{
    border:"2px solid black", 
    padding:"2px",
    margin:"2px"  
  }}>
    {children}
  </div>
}



export default App
