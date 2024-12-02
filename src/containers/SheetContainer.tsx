import { ReactNode } from "react"
import Sheet from "../components/Sheet"

type Props = {
    children: ReactNode | string
}

function SheetContainer({}: Props) {
  return (
   <Sheet />
  )
}

export default SheetContainer