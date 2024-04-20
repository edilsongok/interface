import { IconHeader } from "./style"

interface IconProps {
  Cor?: React.CSSProperties;
  Icon?: string;
}

function Icon({Cor, Icon}: IconProps){
  return(
    <IconHeader style={Cor} className={Icon}/>
  )
}
export default Icon