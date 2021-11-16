import React from 'react'
import map from "../image/map.png"
export default function Contact() {
    return (
        <>
            <h1 className="  bg-red-900 w-full p-36 text-7xl h-1/3 m-0 text-center text-white"> Contact </h1>
            <section className="bg-black w-full">
                <div className=" h-screen flex w-full p-12"> 
                  <img src={map} alt="" className=" w-2/4 h-full b-10  "/>
                  <div className="w-6/12 h-auto ">
                      <h1 className="text-white mx-52  text-6xl">Contact With Us.</h1>
                      <p className="text-white mx-52 my-10">Phone: 91-xxxxxxx</p>
                         <p className="text-white mx-52 my-10">Gmail: xxxxxx.gmail.com</p>
                         <p className="text-white mx-52 my-10">Adress: xxxxxxx xxxx xxxx <br/>
                                                                       xxxxxxxxxxxxxxxx x <br /></p>
                     <h1 className="text-white mx-52  text-6xl">Social Media.</h1>
                  </div>
                </div>
            </section>
        </>
    )
}
