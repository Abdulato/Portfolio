"use client";

import { text }  from '../util/text'
import Image from 'next/image'
import { useLanguage } from '../hooks/useLanguage'
import photoshop from "../assets/photoshop.png"
import after from "../assets/after.png"
import illustrator from "../assets/illustrator.png"
import figma from "../assets/figma.png"











export default function Skillsfunc()  {
    const {language} = useLanguage();

<section id="skills" className="text-2xl py-20 " >
       <div className="w-full flex flex-col justify-center items-center gap-6  mx-auto max-w-screen-xl">
        <p className="text-5xl font-medium">Skills</p>
        <div className="w-1/2 flex flex-col text-center gap-6 py-10">
        <p>I work in such programs as</p>
        
        </div> 
        </div>
        <div className="flex gap-6 justify-between py-11 md:flex-row flex-col items-center">

<Image  src = {photoshop}  />
<Image  src = {illustrator}  />
<Image  src = {after}   />
<Image  src = {figma}   />


        </div>
        </section>
};