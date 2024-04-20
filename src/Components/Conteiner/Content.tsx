import { BlockOne, BlockTwo, IconBlockTwo, Img, NumberBlockTwo, Segundario, TitleBlockOne } from "./style"
import Foto from "../../assets/CAPA.jpg"

interface ContentProps {
  text?: string;
  Numero?: string;
  foto?: string;
}

function Content({Numero, text, foto}: ContentProps){
  return(
    <Segundario>
      <BlockOne>
        <Img src={foto || Foto} alt="" />
        <TitleBlockOne>{text}</TitleBlockOne>
      </BlockOne>
      
      <BlockTwo>
        <NumberBlockTwo>{Numero}</NumberBlockTwo>
        <IconBlockTwo className="bi bi-alarm-fill"/>
      </BlockTwo>
    </Segundario>
  )
}
export default Content