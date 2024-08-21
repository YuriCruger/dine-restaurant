import { ExperienceCard } from './experience-card'

import data from '@/data.json'

export function RestaurantExperience() {
  const { familyDiningExperience, localSourcingExperience } =
    data.restaurantExperience

  return (
    <section className="flex flex-col gap-8 bg-white pb-10 px-sm xl:pb-0 2xl:px-lg">
      <ExperienceCard
        title={familyDiningExperience.title}
        description={familyDiningExperience.description}
        className="xl:mr-auto"
        firstContent
      />

      <ExperienceCard
        title={localSourcingExperience.title}
        description={localSourcingExperience.description}
        className="xl:ml-auto xl:flex-row-reverse"
      />
    </section>
  )
}
