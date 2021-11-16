import React from 'react'
import Image from "./image/adv.jpg";


export default function Home() {
 
    return (
        <>
            <img src={Image} alt="" className=" "/>
            <section className="bg-black w-full h-screen  ">
                <h1 className="text-white text-center text-5xl p-12 font-bold ">Welcome to have Tour</h1>
                <div className="w-full  h-2/3 flex items-center justify-center">
                    <div className="cards bg-red-900  w-1/5 h-4/5 m-10  shadow-inner border-gray-100 ring-4 ring-pink-600 ring-opacity-40 rounded-md">
                        <h1 className="text-white text-center m-10 text-5xl">Adventure in mountain</h1>
                        <p className="text-2xl mx-12 my-9">Mountain is one of most<br />
                           Good to camping and now <br />
                           the nature of the world.</p>
                           <button className=" bg-black text-white p-10 rounded-md delay-200 duration-150 transform  motion-safe:hover:scale-110" >Visit Us</button>
                    </div>
                    <div className="cards bg-red-900  w-1/5 h-4/5 m-10 shadow-inner border-gray-100 ring-4 ring-pink-600 ring-opacity-40 rounded-md">
                        <h1 className="text-white text-center m-10 text-5xl">Adventure in Oceans</h1>
                        <p className="text-2xl mx-12 my-9">Oceans is one of most<br />
                           Good for stress relief<br /> 
                            and for fishing.</p>
                            <button className="  bg-black text-white p-10 rounded-md delay-200 duration-150">Visit Us</button>
                    </div>
                    <div className="cards bg-red-900  w-1/5 h-4/5 m-10 shadow-inner border-gray-100  ring-4 ring-pink-600 ring-opacity-40 rounded-md">
                        <h1 className="text-white text-center m-10 text-5xl">Adventure in  Desert</h1>
                        <p className="text-2xl mx-12 my-9">Desrt is one of most<br />
                           dry adventure and say <br /> about 
                           the life.</p>
                           <button className=" bg-black text-white p-10 rounded-md delay-20 duration-150">Visit Us</button>
                    </div>
                </div>
            </section>
            <section className="bg-black w-full">
                <h1 className="text-white text-center text-5xl p-12 font-bold ">Lets life to be btter</h1>
                <div className=" h-screen flex w-full p-12"> 
                  <img src={Image} alt="" className=" w-2/4 h-full b-10  "/>
                  <div className="w-6/12 h-auto ">
                      <h1 className="text-white mx-52  text-6xl">Go Towards where you Desire.</h1>
                      <p className="text-white mx-52 my-20">Go towars the montain, oceans and desert keep<br/> 
                         Keep journey Until the end and  see the the world <br />
                         Better way how you want.</p>
                         <p className="text-white mx-52 my-20">Go towars the montain, oceans and desert keep<br/> 
                         Keep journey Until the end and  see the the world <br />
                         Better way how you want.</p>
                         <p className="text-white mx-52 my-20">Go towars the montain, oceans and desert keep<br/> 
                         Keep journey Until the end and  see the the world <br />
                         Better way how you want.</p>
                  </div>
                </div>
            </section>
        </>
    )
}
