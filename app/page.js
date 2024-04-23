import Image from "next/image";
import Navbar from "./component/navbar/navbar";
import Header from "./component/header/header";
import Footer from "./component/footer/footer";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Navbar/>
        <Header/>
        <Footer/>
    </main>
  );
}
