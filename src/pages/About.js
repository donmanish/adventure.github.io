import React from 'react'


export default function About() {
    return (
        <>
            <h1 className="  bg-red-900 w-full p-36 text-7xl h-1/3 m-0 text-center text-white"> About</h1>
            <section className="bg-black w-full">
                <div className=" h-screen flex w-full p-12"> 
                  <img src={Image} alt="" className=" w-2/4 h-full b-10  "/>
                  <div className="w-6/12 h-auto ">
                      <h1 className="text-white mx-52  text-6xl">About us</h1>
                      <p className="text-white mx-52 my-20">Go towars the montain, oceans and desert keep<br/> 
                         Keep journey Until the end and  see the the world <br />
                         Better way how you want.Keep journey Until the end and  see the the<br /> world 
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
