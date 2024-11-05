import "./globals.css";
import { LanguageProvider } from "./hooks/useLanguage.jsx";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <body>
      <LanguageProvider>{children}</LanguageProvider>
     </body>
        
    </html>
  );
}
