import { ReadyBooking } from "./components/ready-booking";
import { HeroSection } from "./components/hero-section";
import { RestaurantExperience } from "./components/restaurant-experience";
import { MenuHighlights } from "./components/menu-highlights";
import { SpecialOccasions } from "./components/special-occasions";

export default function Home() {
  return (
    <>
      <HeroSection />
      <RestaurantExperience />
      <MenuHighlights />
      <SpecialOccasions />
      <ReadyBooking />
    </>
  );
}
