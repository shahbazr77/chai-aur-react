import React, {useState, useEffect} from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
    const data = useLoaderData();
    //  const [data,setdata] = useState([]);
    // useEffect(() => {
    //     fetch("https://api.github.com/users/shahbazr77")
    //     .then((response) => response.json())
    //     .then((data)=>{
    //         console.log(data);
    //         setdata(data);

    //     })
    // },[])



    return (
       <div className="text-center,bg-gray-400,text-white,p-4,text-3xl bg-gray-500 text-center w-72 h-72 mx-auto">
        <h1 className="text-3xl font-bold">Github Details</h1>
        <img className="w-20 h-20 rounded-full  justify-center items-center" src={data.avatar_url} alt="avatar" />
        <div className="flex flex-col items-center justify-center">
        <h1>{data.name}</h1>
        <h2>{data.location}</h2>
        <h3>{data.followers}</h3>
        </div>
        
       </div> 
    )
}

export default Github;

const githubinfoLoader = async () =>{
    const response = await fetch("https://api.github.com/users/shahbazr77");
    const data = await response.json();
    return data;
}
export {githubinfoLoader};
