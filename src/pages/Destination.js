import React from 'react'
import ocean from "../image/ocean.jpg"
import desert from "../image/desert.jpg"
import mount from "../image/mountain.jpg"

export default function Destination() {
    return (
        <>
            <h1 className="  bg-red-900 w-full p-36 text-7xl h-1/3 m-0 text-center text-white"> Destination</h1>
            <section className="bg-black w-full">
                <div className=" h-screen flex w-full p-12"> 
                  <img src={ocean} alt="" className=" w-2/4 h-full b-10  "/>
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
            <section className="bg-black w-full">
                <div className=" h-screen flex w-full p-12"> 
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
                  <img src={desert} alt="" className=" w-2/4 h-full b-10  "/>
                </div>
            </section>
            <section className="bg-black w-full">
                <div className=" h-screen flex w-full p-12"> 
                  <img src={mount} alt="" className=" w-2/4 h-full b-10  "/>
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
