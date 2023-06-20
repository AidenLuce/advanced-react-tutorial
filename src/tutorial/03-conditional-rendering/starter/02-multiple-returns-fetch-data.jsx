import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(()=>{
    const fetchUser = async () => {
      try{
        const resp = await fetch(url)
        const user = resp.json()
        setUser(user)
        console.log(user)
      } catch (error){
        setIsError(true)
      }
      setIsLoading(false)
    }
    fetchUser()
  },[])

  if(isLoading){
    return <h2>Loading...</h2>
  }
  if(isError){
    return <h2>There was an error...</h2>
  }
  return (
      <div>
        <h2>{user.name}</h2>
        <h4>Works at {user.company}</h4>
        <p>{user.bio}</p>
      </div>
  );
};
export default MultipleReturnsFetchData;
