
import "./globle.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

export const metadata = {
  title: "Modern Next.js Website",
  description: "A sleek layout built with pure CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
