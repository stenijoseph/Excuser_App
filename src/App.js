import axios from "axios";
import { useState } from "react";


function App() {
const[excuse,setexcuse]=useState("When someone asked me about my blood group, I told him that I'm a code blooded person.")

const fetchData=async(excuse)=>{
  const{data}=await axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`)
  setexcuse(data[0].excuse)
}
  return (
    <div className="flex justify-center items-center flex-col bg-red-200 h-screen ">
   <div className="flex-justify-center">
   <h1 className="text-2xl ml-10 font-bold text-green-900">Generate an execuse</h1>
   </div>
    <div className="flex flex-col gap-10 pt-12">
      <button className="bg-red-600 text-white font-semibold px-4 py-3 rounded-lg" onClick={()=>{fetchData("funny")}}>Funny</button>
      <button  className="bg-pink-600 text-white font-semibold  px-4 py-3 rounded-lg" onClick={()=>{fetchData("family")}}>Family</button>
      <button  className="bg-blue-600 text-white font-semibold  px-4 py-3 rounded-lg" onClick={()=>{fetchData("developers")}}>Developer</button>
    </div>
    <h1 className="text-black font-bold text-xl mt-10">{excuse}</h1>
    </div>
  );
}

export default App;
