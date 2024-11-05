import { useLanguage } from "../hooks/useLanguage";

export default function ChangeLanguage() {
  const { language, languages, handleChange } = useLanguage();

  return (
    <button
      onClick={handleChange}
      className=" text-lg z-50  right-0 bottom-10 items-end h-10 rotate-90  md:block hidden divide-x-2 divide-black"
      // divide-x-2 divide-black возвращаем |
    >
      <span className="divide-x-2 divide-black overflow-hidden">
        {languages.map((lang) => {
          return (
            <span
              key={lang.lang}
              className={`p-1 styles.rotate ${
                lang.lang === language ? "font-bold" : ""
              }`}
            >
              {lang.text}
            </span>
          );
        })}
      </span>
    </button>
  );
}