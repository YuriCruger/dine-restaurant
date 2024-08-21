export function ErrorMessage({ message }: { message: string | undefined }) {
  return <p className="text-red-500 text-sm">{message}</p>
}
