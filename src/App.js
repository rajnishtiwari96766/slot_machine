import logo from './logo.svg';
import './App.css';

const Slot_m=(props)=>{
  // let x='😄';
  // let y='😄';
  // let z='🥹';

  let x=props.x;
  let y=props.y;
  let z=props.z;
  if((x===y) && (y===z)){
    return(
      <>
      <div className='slot_inner'>
        <h1>
          {x} {y} {z}
           </h1>
           <h1>This is matching.</h1>
           <hr/>
      </div>
      </>
    )
  }else{
    return(
      <>
      <div className='slot_inner'>
        <h1>
          {x} {y} {z}
           </h1>
           <h1>This is not matching.</h1>
           <hr/>
      </div>
      </>
    )
  }
}

const App=()=> {
  return (
    <div className="App">
    <>
    <h1>🎰 Welcome to <span style={{fontWeight:"light"}}> Slot Machine Game 🎰</span> <hr/> </h1>

<div className='slotMachine'>
    <Slot_m x='😀' y='😚' z='🤬'/>
    <Slot_m x='😀'  y='😀' z='😀' />
    <Slot_m x='😀'  y='😀' z='😎'/>
</div>
    </>
    </div>
  );
}

export default App;
