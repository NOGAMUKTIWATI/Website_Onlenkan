import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import "./globals.css";

// const inter = Inter({ subsets: ['latin'] })
const pjs = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Onlinekan | Website building for business",
  description: "Create business webstie with Onlinekan.com for your business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={pjs.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
