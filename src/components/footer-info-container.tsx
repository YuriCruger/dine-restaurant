import { ReactNode } from 'react'

export function FooterInfoContainer({ children }: { children: ReactNode }) {
  return <div className="flex flex-col gap-2 lg:text-start">{children}</div>
}
