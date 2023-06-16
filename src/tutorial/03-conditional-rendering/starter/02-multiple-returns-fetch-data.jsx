import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null)

  useEffect(()=>{
    const fetchUser = async () => {
      try{
        const resp = await fetch(url)
        const user = resp.json()
        console.log(user)
      } catch (error){
        console.log(error)
      }
    }
    fetchUser()
  },[])

  return <h2>Fetch Data </h2>;
};
export default MultipleReturnsFetchData;
