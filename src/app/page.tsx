import Image from "next/image";
import LandingPage from "@/modules/home-page/components/landingpage";
import { Navbar } from "@/shared/components/navbar";


export default function Home() {
  return (
  <>
  <Navbar/>
       <div className="mt-[75px]">
  <LandingPage/>

  </div>
  </>
  );
}
