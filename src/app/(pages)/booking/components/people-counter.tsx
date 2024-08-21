import { useReservation } from "@/contexts/reservation-context";
import { Minus, Plus } from "lucide-react";

export function PeopleCounter() {
  const { handlePersonDecrement, handlePersonIncrement, currentPeople } =
    useReservation();
  const buttonSize = 20;
  const buttonColor = "#9e8f5f";

  return (
    <div className="flex items-center justify-between gap-5 border-b border-almostBlack pb-2">
      <button onClick={handlePersonDecrement} type="button">
        <Minus color={buttonColor} size={buttonSize} />
      </button>

      <span className="text-xl font-bold text-almostBlack">
        {currentPeople}
      </span>

      <button onClick={handlePersonIncrement} type="button">
        <Plus color={buttonColor} size={buttonSize} />
      </button>
    </div>
  );
}
