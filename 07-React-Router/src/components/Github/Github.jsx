// import { useEffect } from 'react';
// import { useState } from 'react';
 import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=> {
    //     fetch('https://api.github.com/users/ladaniprem')
    //     .then((res) => res.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} className="mx-auto" />
    </div>
  )
} 
export default Github
export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/ladaniprem')
    return res.json()
}