import styled from "styled-components";

import useScreenQuery from "../utils/useScreenQuery";

const Banner = () => {
  const { isSmall } = useScreenQuery();
  return (
    <BannerContainer>
      <TitleText $isSmallScreen={isSmall}>Country Seeker</TitleText>
      <BannerText>
        Your best mate to find information about any country you're interested
        in!
      </BannerText>
      <BannerText>Type in any country name to start:</BannerText>
    </BannerContainer>
  );
};

export default Banner;

const BannerContainer = styled.div``;

const TitleText = styled.h1<{ $isSmallScreen: boolean }>`
  font-size: ${({ $isSmallScreen }) => ($isSmallScreen ? "36px" : "80px")};
  background: -webkit-linear-gradient(
    180deg,
    rgba(228, 4, 12, 1) 0%,
    rgba(68, 4, 180, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const BannerText = styled.p`
  font-size: 20px;
  font-family: Helvetica;
  color: #555555;
`;
