import { ReactNode } from 'react'

export function SelectGroup({ children }: { children: ReactNode }) {
  return <div className="flex items-center gap-4">{children}</div>
}
