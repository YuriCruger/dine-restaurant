'use client'

import { useForm } from 'react-hook-form'

import { Label } from './label'
import { Input } from './input'
import { Select } from './select'
import { ErrorMessage } from './error-message'
import { PeopleCounter } from './people-counter'
import { SelectGroup } from './select-group'

import { Button } from '@/components/button'
import {
  DAYS,
  HOURS,
  MINUTES,
  MONTHS,
  TIME_PERIOD,
  YEARS,
  EMPTY_VALUES,
} from '@/utils'

import { zodResolver } from '@hookform/resolvers/zod'

import { useReservation } from '@/contexts/reservation-context'

import z from 'zod'

const reservationSchema = z.object({
  name: z.string().trim().min(1, 'Name must contain at least 1 character(s)'),
  email: z.string().email('Invalid email address'),
  month: z.string().min(1),
  day: z.coerce.string().min(1),
  year: z.coerce.string().min(1),
  hours: z.string().min(1),
  minutes: z.string().min(1),
  timePeriod: z.string().min(1),
})

export type ReservationSchema = z.infer<typeof reservationSchema>

export function Form() {
  const { handleMakeReservation } = useReservation()
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<ReservationSchema>({
    resolver: zodResolver(reservationSchema),
    defaultValues: EMPTY_VALUES,
  })

  const formValues = {
    month: watch('month'),
    day: watch('day'),
    year: watch('year'),
    hours: watch('hours'),
    minutes: watch('minutes'),
    timePeriod: watch('timePeriod'),
  }

  const onSubmit = (formData: ReservationSchema) => {
    handleMakeReservation(formData)
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white shadow-md shadow-almostBlack/50 p-5 flex flex-col gap-5 -mt-20 max-w-sm mx-auto lg:ml-auto lg:mr-0 lg:-mt-40 xl:-mt-60"
    >
      <Input placeholder="Name" {...register('name')} />
      {errors.name && <ErrorMessage message={errors.name.message} />}
      <Input placeholder="Email" {...register('email')} />
      {errors.email && <ErrorMessage message={errors.email.message} />}

      <div className="flex flex-col gap-4">
        <Label label="Pick a date" />

        <SelectGroup>
          <Select
            options={MONTHS}
            placeholder="MM"
            value={formValues.month}
            {...register('month')}
          />

          <Select
            options={DAYS}
            placeholder="DD"
            value={formValues.day}
            {...register('day')}
          />

          <Select
            options={YEARS}
            placeholder="YYYY"
            value={formValues.year}
            {...register('year')}
          />
        </SelectGroup>
        {(errors.year || errors.day || errors.month) && (
          <ErrorMessage message="Please select a valid month, day, and year." />
        )}
      </div>

      <div className="flex flex-col gap-4">
        <Label label="Pick a time" />

        <SelectGroup>
          <Select
            options={HOURS}
            placeholder="00"
            value={formValues.hours}
            {...register('hours')}
          />

          <Select
            options={MINUTES}
            placeholder="00"
            value={formValues.minutes}
            {...register('minutes')}
          />

          <Select
            options={TIME_PERIOD}
            placeholder="AM/PM"
            value={formValues.timePeriod}
            {...register('timePeriod')}
          />
        </SelectGroup>
        {(errors.hours || errors.minutes || errors.timePeriod) && (
          <ErrorMessage message="Please select a valid hour, minute, and time period." />
        )}
      </div>

      <PeopleCounter />

      <Button title="make a reservation" className="max-w-none" type="submit" />
    </form>
  )
}
