import { text } from "./util/text"
import { useLanguage } from "./hooks/useLanguage";













<section id="contact" className="text-2xl py-6 h-full " >
          <div className="flex w-full justify-center items-center flex-col">
            <p className="text-3xl font-bold  py-6  md:font-medium ">
             Contacts
            </p>
            <p>Want to know more or just chat? 
            </p>
            <p> 
            You are welcome!</p>
            </div>
          <div className="w-full flex flex-col items-center py-9 max-auto max-w-screen-xl">
           <button className="text-white   p-2 bg-neutral-900 rounded-full w-[200px]">
            Send message
           </button>
          </div>
          <div className="flex flex-column items-center justify-center gap-20">
          <Image src={inst}  />
          <Image src={camin}  />
          <Image src={ball}  />
          <Image src={wall}  />
         </div>
        </section>