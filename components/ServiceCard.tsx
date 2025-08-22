import { ReactNode } from 'react'

export default function ServiceCard({ title, children }: { title: string, children: ReactNode }) {
  return (
    <div className="rounded-xl border p-6 hover:shadow-md transition bg-white">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="opacity-80 text-sm leading-7">{children}</div>
    </div>
  )
}
