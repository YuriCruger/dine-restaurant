import { Button } from '@/components/button'
import Link from 'next/link'

export function ReadyBooking() {
  return (
    <section className="bg-booking-tablet bg-no-repeat bg-top bg-cover px-sm h-[240px] flex flex-col justify-center items-center text-center gap-10 lg:bg-booking-desktop xl:text-start xl:justify-between xl:flex-row 2xl:px-lg">
      <p className="font-bold text-4xl xl:text-5xl">
        Ready to make a reservation?
      </p>

      <Link href={'/booking'} className="w-full max-w-64">
        <Button
          title="book a table"
          className="bg-transparent hover:border-white"
        />
      </Link>
    </section>
  )
}
