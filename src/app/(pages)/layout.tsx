import { Footer } from "@/components/footer";
import { ReservationProvider } from "@/contexts/reservation-context";

export default function RootPages({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReservationProvider>
      <div className="min-h-screen w-full h-full flex flex-col text-white">
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />
      </div>
    </ReservationProvider>
  );
}
