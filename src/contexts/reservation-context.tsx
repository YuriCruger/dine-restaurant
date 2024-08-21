"use client";

import { ReservationSchema } from "@/app/(pages)/booking/components/form";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface ReservationContextType {
  handlePersonIncrement: () => void;
  handlePersonDecrement: () => void;
  currentPeople: number;
  handleMakeReservation: (formData: ReservationSchema) => void;
  reservationDetails: ExtendedReservationSchema | null;
  setReservationDetails: Dispatch<
    SetStateAction<ExtendedReservationSchema | null>
  >;
}

export type ExtendedReservationSchema = ReservationSchema & {
  currentPeople: number;
};

const ReservationContext = createContext({} as ReservationContextType);

export function ReservationProvider({ children }: { children: ReactNode }) {
  const [currentPeople, setCurrentPeople] = useState(1);
  const [reservationDetails, setReservationDetails] =
    useState<ExtendedReservationSchema | null>(null);

  const handleMakeReservation = (formData: ReservationSchema) => {
    setReservationDetails({
      ...formData,
      currentPeople,
    });
  };

  const handlePersonIncrement = () =>
    setCurrentPeople((prevState) => prevState + 1);

  const handlePersonDecrement = () =>
    setCurrentPeople((prevState) => (prevState > 1 ? prevState - 1 : 1));

  return (
    <ReservationContext.Provider
      value={{
        handlePersonDecrement,
        handlePersonIncrement,
        currentPeople,
        handleMakeReservation,
        reservationDetails,
        setReservationDetails,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
}

export const useReservation = () => useContext(ReservationContext);
