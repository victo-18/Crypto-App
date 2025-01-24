import { ReactNode } from "react"


export const Error = ({children}:{children:ReactNode}) => {
  return (
    <p className="error">{children}</p>
  )
}
