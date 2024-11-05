import { text } from "../util/text";
import { useLanguage } from "../hooks/useLanguage";


export default function Aboutfunc () {

  const {language} = useLanguage();

<section id="about" className=" text-2xl py-20 bg-neutral-100">
<div className="w-full flex flex-col justify-center items-center gap-6 container mx-auto max-w-screen-xl">
  <p className="text-5xl font-bold">{text.abut[language]}</p>
  <div className="w-1/2 flex flex-col text-center gap-6">
    <p>
      Hi, I'm Abdulato – Frontend developer from Dushanbe. I'm interested
      in design and everything connected with it.
    </p>
    <p>
      I'm studying at courses "Introduction to Frontend" in Re-Skilss.
    </p>
    <p>Ready to implement excellent projects with wonderful people.</p>
  </div>
</div>
</section>
}