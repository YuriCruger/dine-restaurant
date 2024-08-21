type Props = {
  label: string;
  value: string;
};

export function ModalReservationInfo({ label, value }: Props) {
  return (
    <div className="flex items-center justify-between border-b border-mediumGray text-mediumGray gap-2">
      <span>{label}:</span>
      <span className="lowercase">{value}</span>
    </div>
  );
}
