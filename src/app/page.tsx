import Image from "next/image";
import Hero from "./components/Hero";
import Gearup from "./components/Gearup";
import Dontmiss from "./components/Dontmiss";
import Essential from "./components/Essential";
import Bottom from "./components/Bottom";
import Feature from "./components/Feature";
import Best from "./components/Best";


export default function Home() {
  return (
    <div>
        <Hero/>
        <Best/>
        <Feature />
        <Gearup/>
        <Dontmiss/>
        <Essential/>
        <Bottom/>
    </div>
  );
}
