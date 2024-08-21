import { FooterInfoContainer } from "./footer-info-container";
import { TextRestaurantInfo } from "./text-restaurant-info";

import data from "@/data.json";

export function Footer() {
  const restaurantInfo = data.restaurantInfo;

  return (
    <footer className="flex flex-col items-center text-center gap-5 p-5 bg-almostBlack md:flex-row md:justify-between lg:p-10">
      <span className="text-5xl md:w-full">dine</span>

      <div className="flex flex-col gap-6 md:w-full lg:flex-row lg:gap-12">
        <FooterInfoContainer>
          {restaurantInfo.contact.map((contactInfo, index) => (
            <TextRestaurantInfo key={index} text={contactInfo} />
          ))}
        </FooterInfoContainer>

        <FooterInfoContainer>
          {restaurantInfo.businessHours.map((businessInfo, index) => (
            <TextRestaurantInfo key={index} text={businessInfo} />
          ))}
        </FooterInfoContainer>
      </div>
    </footer>
  );
}
