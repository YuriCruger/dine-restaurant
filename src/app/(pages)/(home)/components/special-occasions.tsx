"use client";
import { OccasionShowcase } from "./occasion-showcase";

import data from "@/data.json";

export function SpecialOccasions() {
  return (
    <section className="bg-white p-sm 2xl:px-lg">
      <OccasionShowcase occasions={data.specialOcassions} />
    </section>
  );
}
