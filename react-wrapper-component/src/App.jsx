import React from 'react';

function App() {
  return (
    <div>  
      <CardWrapper innerComponent={<TextComponent/>}/><br />
      <CardWrapper innerComponent={<TextComponent2/>}/>
    </div>
  );
}

function CardWrapper({innerComponent}){
  return (
    <div style={{border:"2px solid black", padding:"20px"}}>
        {innerComponent}
    </div>
  );
}

function TextComponent(){
  return (
    <div>
        Hey!!, Inesh Reddy.
    </div>
  );
}

function TextComponent2(){
  return (
    <div>
        . How is your programming journey?
    </div>
  );
}

export default App;
