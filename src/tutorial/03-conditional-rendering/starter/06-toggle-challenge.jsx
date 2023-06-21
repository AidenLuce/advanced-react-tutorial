import {useState} from "react";

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] =useState(false);

  const toggleAlert = () =>{
    if(showAlert){
      setShowAlert(false)
      return
    }
    setShowAlert(true)
  }



  return <div>
    <button className='btn' onClick={toggleAlert}>Toggle</button>
    {showAlert && <AlertComponent/>}
  </div>;
};

const AlertComponent = () => {
  return(
      <div className='alert alert-danger'>Hello World</div>
  )
}

export default ToggleChallenge;
