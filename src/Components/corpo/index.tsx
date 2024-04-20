
import { Notification } from "..";
import { BlockHeader, Body, Header, Segundario, TitleBlock, TitleHeader } from "./style";

function Corpo() {
  return (
    <Body>
      <Header>
        <TitleHeader>Total burn</TitleHeader>
        <BlockHeader>
          <TitleBlock>30:45</TitleBlock>
          <Notification.Icone Icon="bi bi-alarm-fill" Cor={{color:'red'}}/>
        </BlockHeader>
      </Header>     

        <Notification.Block Title="Warm up"/>

      <Segundario>
        <Notification.Root>
          <Notification.Conteiner text='Lower body' Numero='01:00'/>
          <Notification.Conteiner text='Push ups' Numero='00:30' foto="../../../src/assets/sporty-athletic-woman-in-crossfi-1024x682.webp"/>
          <Notification.Conteiner text='Descanso' Numero='01:45' foto="../../../src/assets/treino-de-membros-superiores-para-mulheres.webp"/>
          <Notification.Conteiner text='Almoço' Numero='12:00' foto="../../../src/assets/Treino-de-Musculacao-mulheres-1-1024x683.webp"/>
          <Notification.Conteiner text='Café tarde' Numero='04:00' foto="../../../src/assets/mulher-malhando-cpt.jpg"/>
        </Notification.Root>
      </Segundario>

    </Body>
  );
}

export default Corpo;


