import "./globals.css";
import { Cairo, Poppins } from "next/font/google";
import Footer from "@/components/layouts/Footer";

const cario = Cairo({ subsets: ["latin"], weight: ["200", "300", "400", "500", "600", "700", "800", "900","1000"], variable: "--font-cairo" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: "--font-poppins"
})
export const metadata = {
  title: "Arbitra",
  description: "Arbitra landing page website by ammar yasser designed Tomek Kwiatkowski",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${cario.variable} ${poppins.variable} font-sans bg-n-2`}>
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
