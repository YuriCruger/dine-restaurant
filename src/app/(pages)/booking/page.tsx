import Link from 'next/link'

import { Form } from './components/form'
import { Modal } from './components/modal'

import { Button } from '@/components/button'

import data from '@/data.json'

export default function Booking() {
  const { title, description } = data.booking

  return (
    <div className="flex flex-col flex-grow bg-white">
      <section className="p-sm flex flex-col items-center text-center gap-5 bg-booking-mobile bg-no-repeat bg-cover bg-top w-full h-[600px] sm:bg-booking-tablet lg:bg-booking-desktop lg:text-start lg:items-start 2xl:px-lg">
        <Link href={'/'}>
          <h1 className="text-6xl ">dine</h1>
        </Link>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl lg:mt-14">{title}</h2>

        <p className="text-lg max-w-sm sm:text-xl lg:text-2xl">{description}</p>
      </section>

      <section className="bg-white px-sm pb-sm flex-grow 2xl:px-lg">
        <Form />
      </section>

      <Modal />
    </div>
  )
}
