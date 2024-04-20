import { BlockRound, TitleBlockRound } from "./style"

interface BlockProps {
  Title: string;
}

function Bloc({Title}: BlockProps){
  return(
    <BlockRound>
    <TitleBlockRound>{Title}</TitleBlockRound>
  </BlockRound>
  )
}
export default Bloc