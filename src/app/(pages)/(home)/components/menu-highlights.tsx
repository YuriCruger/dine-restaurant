import { Separator } from '@/components/separator'

import { DishCard } from './dish-card'

import data from '@/data.json'

export function MenuHighlights() {
  const { content, dishcards } = data.menuHighlights

  return (
    <section className="flex flex-col items-center bg-almostBlack p-sm xl:flex-row xl:items-start xl:pt-lg 2xl:px-lg xl:gap-20 xl:justify-between">
      <div className="flex flex-col items-center text-center gap-2 xl:items-start xl:text-start">
        <Separator />
        <span className="mt-4 text-3xl font-bold md:text-4xl">
          {content.title}
        </span>
        <p className="max-w-sm md:text-lg lg:text-xl">{content.description}</p>
      </div>

      <div>
        {dishcards.map((dish) => (
          <DishCard
            key={dish.title}
            src={dish.image.src}
            alt={dish.image.src}
            title={dish.title}
            description={dish.description}
          />
        ))}
      </div>
    </section>
  )
}
