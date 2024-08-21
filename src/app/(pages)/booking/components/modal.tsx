'use client'

import { Button } from '@/components/button'
import { TextRestaurantInfo } from '@/components/text-restaurant-info'

import { useReservation } from '@/contexts/reservation-context'

import { ModalReservationInfo } from './modal-reservation-info'

import data from '@/data.json'

export function Modal() {
  const { reservationDetails, setReservationDetails } = useReservation()

  if (!reservationDetails) {
    return null
  }

  const restaurantInfo = data.restaurantInfo

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-sm">
      <div className="bg-white p-sm flex flex-col gap-6 z-10">
        <p className="text-almostBlack text-2xl font-medium lg:text-3xl">
          Your reservation is confirmed
        </p>

        <ModalReservationInfo label="Name" value={reservationDetails.name} />
        <ModalReservationInfo label="Email" value={reservationDetails.email} />
        <ModalReservationInfo
          label="Table for"
          value={reservationDetails.currentPeople.toString()}
        />

        <div className="flex flex-col gap-5 text-center text-mediumGray">
          <div>
            {restaurantInfo.contact.map((contactInfo, index) => (
              <TextRestaurantInfo key={index} text={contactInfo} />
            ))}
          </div>

          <div>
            {restaurantInfo.businessHours.map((businessInfo, index) => (
              <TextRestaurantInfo key={index} text={businessInfo} />
            ))}
          </div>
        </div>

        <Button
          title="close"
          className="mx-auto"
          onClick={() => setReservationDetails(null)}
        />
      </div>
    </div>
  )
}
