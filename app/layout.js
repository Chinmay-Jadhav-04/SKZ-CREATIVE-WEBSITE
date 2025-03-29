
import { Inter, Cedarville_Cursive } from "next/font/google";
import "./globals.css";
import Header from "@/components/main/Header";
import Footer from "@/components/main/Footer";
import '@/utils/emailjs';

const inter = Inter({ subsets: ["latin"] });
const cedarville = Cedarville_Cursive({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-cedarville',
});

export const metadata = {
  title: "SKZ Creative Portfolio",
  description: "This is our creative team portfolio",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${cedarville.variable} bg-dark-blue overflow-x-hidden`}>
        {/* Main background video - will be present across all pages */}
        <div className="fixed top-0 left-0 w-full h-full z-[0]">
          <div className="absolute top-0 left-0 w-full h-full bg-dark-blue opacity-90 z-[1]" />
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-[0]"
        
          >
            <source src="/Creativity.mp4" type="video/mp4" />
          </video>
        </div>
        
        {/* Content wrapper */}
        <div className="relative z-[2] w-full">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}





