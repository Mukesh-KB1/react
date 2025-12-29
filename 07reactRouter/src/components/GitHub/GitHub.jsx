import React, { useEffect, useState } from 'react'
import {useLoaderData} from 'react-router';

function GitHub() {
    const data = useLoaderData();
    // const [data,setData] = useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Mukesh-KB1')
    //     .then(res => res.json())
    //     .then(data => setData(data))
    // },[]);
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl rounded-lg">
        GitHub followers: {data.followers}
      </div>

      <img
        src={data.avatar_url}
        alt="Git Profile"
        className="w-72 rounded-full shadow-lg border-4 border-gray-300"
      />
    </div>
  )
}

export default GitHub

export async function GitHubLoader() {
    const res = await fetch('https://api.github.com/users/Mukesh-KB1');
    return res.json();
}