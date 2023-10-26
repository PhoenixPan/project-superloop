import styled from "styled-components";

import { CountryData } from "./SeatchAndDisplay";
import useScreenQuery from "../utils/useScreenQuery";

const CountryDetails = ({ data }: Props) => {
  const { isSmall } = useScreenQuery();

  return (
    <div>
      <TitleText $isSmallScreen={isSmall}>
        We found something for {data?.name?.common || "you"}!
      </TitleText>
      <CountryDetailsContainer>
        <Row $isSmallScreen={isSmall}>
          <RowName>
            <BoldedText>Official name: </BoldedText>
          </RowName>
          <RowContent>
            <NormalText>{data?.name.official}</NormalText>
          </RowContent>
        </Row>
        <Row $isSmallScreen={isSmall}>
          <RowName>
            <BoldedText>Currency name and symbol: </BoldedText>
          </RowName>
          <RowContent>
            <CurrenciesContainer>
              {Object.entries(data.currencies).map((e) => {
                return <NormalText>{`${e[1].name} ${e[1].symbol}`}</NormalText>;
              })}
            </CurrenciesContainer>
          </RowContent>
          <NormalText></NormalText>
        </Row>

        <Row $isSmallScreen={isSmall}>
          <RowName>
            <BoldedText>Flag: </BoldedText>
          </RowName>
          <RowContent>
            <Image
              src={data.flags.png || data.flags.svg}
              alt={data.flags.alt}
            />
          </RowContent>
        </Row>
        <Row $isSmallScreen={isSmall}>
          <RowName>
            <BoldedText>Coat of arms: </BoldedText>
          </RowName>
          <RowContent>
            <Image
              src={data.coatOfArms.png || data.coatOfArms.svg}
              alt={"Coat of arms"}
            />
          </RowContent>
        </Row>
        <Row $isSmallScreen={isSmall} $isLast={true}>
          <RowName>
            <BoldedText>What side of the road they drive on: </BoldedText>
          </RowName>
          <RowContent>
            <NormalText>{data.car.side}</NormalText>
          </RowContent>
        </Row>
      </CountryDetailsContainer>
    </div>
  );
};

export default CountryDetails;

interface Props {
  data: CountryData;
}

const TitleText = styled.h1<{ $isSmallScreen: boolean }>`
  font-size: ${({ $isSmallScreen }) => ($isSmallScreen ? "24px" : "40px")};
  background: -webkit-linear-gradient(
    180deg,
    rgba(228, 4, 12, 1) 0%,
    rgba(68, 4, 180, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const CountryDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const BoldedText = styled.p`
  font-size: 20px;
  font-weight: 600;
  font-family: Helvetica;
  color: #555555;
  margin: 0;
`;

const NormalText = styled.p`
  font-size: 20px;
  font-family: Helvetica;
  color: #555555;
  margin: 0;
`;

const Row = styled.div<{ $isSmallScreen: boolean; $isLast?: boolean }>`
  display: flex;
  flex-direction: ${({ $isSmallScreen }) =>
    $isSmallScreen ? "column" : "row"};
  align-items: flex-start;
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: ${({ $isLast }) => ($isLast ? "none" : "2px solid lightgrey")};
`;

const RowName = styled.div`
  flex-basis: 50%;
`;

const RowContent = styled.div`
  flex-basis: 50%;
`;

const CurrenciesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  height: 80px;
`;
