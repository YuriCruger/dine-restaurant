import Link from 'next/link'

import { HeroSectionImage } from './hero-section-image'

import { Button } from '@/components/button'

import data from '@/data.json'

export function HeroSection() {
  const { image, content } = data.heroSection

  return (
    <section className="bg-almostBlack z-10 pb-40 xl:flex xl:flex-row-reverse xl:pb-0 xl:justify-between xl:items-center">
      <div className="xl:hidden">
        <HeroSectionImage src={image.mobile.src} alt={image.mobile.alt} />
      </div>

      <div className="hidden xl:block">
        <HeroSectionImage src={image.desktop.src} alt={image.desktop.alt} />
      </div>

      <div className="flex flex-col items-center gap-5 px-sm mt-6 text-center 2xl:gap-8 xl:items-start xl:text-start 2xl:pl-lg">
        <h1 className="text-6xl">dine</h1>

        <p className="text-2xl xl:text-5xl 2xl:text-7xl">{content.title}</p>

        <p className="max-w-sm xl:text-lg 2xl:text-xl">{content.description}</p>

        <div className="w-full">
          <Link href={'/booking'}>
            <Button title="book a table" />
          </Link>
        </div>
      </div>
    </section>
  )
}
