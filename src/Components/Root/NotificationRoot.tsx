import { ReactNode } from "react"
import { Segundario } from "./style"

interface NotificationRooProps {
  children: ReactNode;
}

function NotificationRoot({children}: NotificationRooProps){
  return(
    <Segundario>
      {children}
    </Segundario>
  )
}
export default NotificationRoot