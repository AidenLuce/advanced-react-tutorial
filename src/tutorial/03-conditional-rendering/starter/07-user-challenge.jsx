import {useState} from "react";

const UserChallenge = () => {
  const [lang, setLang] = useState(true)

  const english = () => {
    // normally connect to db or api
    setLang(true)
  }
  const spanish = () => {
    setLang(false)
  }

  return (
    <div>
      {lang?
          <div>
            <h4>Hello, My name is Aiden Luce</h4>
            <button className='btn' onClick={spanish}>Espanol</button>
          </div>
      :
          <div>
            <h4>Hola, me llamo Aiden Luce</h4>
            <button className='btn' onClick={english}>English</button>
          </div>
      }
    </div>
  )
};

export default UserChallenge;
