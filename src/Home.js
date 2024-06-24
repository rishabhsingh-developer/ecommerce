import Brand from "./components/Brand";
import FeatureProduct from "./components/FeatureProduct";

import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import { useProductContext } from "./context/Productcontext";
export default function Home() {
  const { name } = useProductContext();
  return (
    <>
      <p>{name}</p>
      <HeroSection name="Thapa Store" />
      <FeatureProduct />
      <Services />
      <Brand />
    </>
  );
}
