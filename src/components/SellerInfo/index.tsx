import React from    'react';
import {
  Container,
  LocationCard,
  LocationIcon,
  ReputationCard,
  ReputationThermometer,
  ReputationRow,
  SupportIcon,
  ClockIcon,
  More

} from './styles';

const SellerInfo: React.FC = () => {
  return (
    <Container>
    <title> Informações sobre o vendedor</title>

    <LocationCard>

    <LocationIcon/>

    <div>
      <p>Localização</p>
      <strong>São Paulo, São Paulo</strong>
    </div>


    </LocationCard>

    <ReputationCard>
    <ReputationThermometer>
      <li />
      <li />
      <li />
      <li />
      <li className="active"/>
    </ReputationThermometer>
    <ReputationRow>
      <div>
        <strong>561</strong>
        <span>venda nos últimos 4meses</span>
      </div>
      <div>
        <strong><SupportIcon/></strong>
        <span>Presta um bom atendimento</span>
      </div>
      <div>
        <strong><ClockIcon/></strong>
        <span>vendas nos últimos 4meses</span>
      </div>
    </ReputationRow>
    </ReputationCard>

    <More >Ver mais dados do vendedor</More>
    </Container>
  );
};

export default SellerInfo;
