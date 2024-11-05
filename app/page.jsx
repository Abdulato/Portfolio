"use client";
import Image from "next/image";
import Link from "next/link"
import picture from "./assets/picture.png"
import boy from "./assets/Boy.png"

/*import sloi from "../Image/images/Слой 8.png"
import rebb from "../Image/images/reebok_web.png"
import camera from "../Image/images/reebok_web (1).png"
import camin from "../Image/surface1 6.png"
import inst from "../Image/Group 2 (1).png"
import ball from "../Image/surface1 7.png"
import wall from "../Image/behance.png"*/
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import ChangeLanguage from "./components/changelanguage.jsx";
import { text } from "./util/text";
import { useLanguage } from "./hooks/useLanguage";
import Aboutfunc from "./components/about";




const links = [
  {
    url: "#home",
    text: "Home",
  },
  {
    url: "#about",
    text: "About",
  },
  {
    url: "#skills",
    text: "Skills",
  },
  {
    url: "#portfolio",
    text: "Portfolio",
  },
  {
    url: "#contact",
    text: "Contact",
  },
];

export default function Main() {
  const [openModal, setOpenModal] = useState(false);
  const [number, setNumber] = useState(0);
  const {language} = useLanguage()
   
  const links = [
   { url: '#home', text:text.house[language]},
   { url: '#about', text:text.abut[language]},
   { url: '#skills', text:text.skulls[language]},
   { url: '#portfolio', text:text.pirtfol[language]},
   { url: '#contact', text:text.cont[language]},
  ]

  useEffect(() => {
    console.log(number);
  }, []);

  function closeMenu() {
    setOpenModal(false);
  }

  function openMenu() {
    setOpenModal(true);
  }

  function increment() {
    setNumber(number + 1);
  }

  function decrement() {
    if (!number) return;
    setNumber(number - 1);
  }

  return (
    <>
    <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      <div className="container mx-auto max-w-screen-xl px-4 2xl:px-0 relative">
        <nav className="w-full">
          <ul className="w-full hidden md:flex justify-between font-bold text-lg py-6 border-b-2 ">
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <a href={link.url}>{link.text}</a>
                </li>
              );
            })}
          </ul>
          <div className="md:hidden py-4 inset-0 z-50 absolute top-2 right-2 h-10">
            {openModal ? (
              <button onClick={closeMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            ) : (
              <button onClick={openMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  />
                </svg>
              </button>
            )}
          </div>           
            </nav>
        <section className="py-20 flex flex-col gap-6">
          <div className="flex items-end justify-between w-full">
            <p className="text-3xl md:text-5xl font-bold py-[0.5px]">
            {text.name[language]} <br />   {text.sureName[language]}
            </p>

            <p className="text-xl" 
            dangerouslySetInnerHTML={{__html: text.short_boi[language]}}
            ></p>
            
           <ChangeLanguage />
          </div>
          <Image
            src={picture}
            className="w-full h-full hidden md:block"
            alt="image"
          />
          <Image
            src={boy}
            className="w-[700px] h-[850px] block md:hidden"
            alt="image"
          />
        </section>
      </div>
      <Transition appear show={openModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 md:hidden"
          onClose={closeMenu}
        >
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out  transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out  transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto min-h-screen bg-transparent w-full h-screen">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-200 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-500 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-full h-full bg-white relative p-4">
              <Dialog.Panel>
                  <div className='w-full h-full flex flex-col pt-10'>
                    {links.map((link, index) => (
                      <Link key={index} href={link.url} onClick={closeMenu}>
                        <h1 className='text-[34px] font-bold text-start pl-3 mb-8 font- '>
                          {link.text}
                        </h1>
                      </Link>
                    ))}
                  </div>
                  {/* Кнопка выбора языка */}
                  <div className='text-[34px] flex md:hidden justify-end z-50 absolute bottom-16 pb-12 right-0 '>
                    <button className='rotate-90 pl-5'>
                      <span className='text-neutral-400 font-semibold'>RU|</span>
                      <span className='font-bold'>ENG</span>
                    </button>
                  </div>
                </Dialog.Panel>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      
<Aboutfunc />
    </>
    
  );
}