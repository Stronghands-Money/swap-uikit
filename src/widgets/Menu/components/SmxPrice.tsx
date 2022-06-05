import React from "react";
import styled from "styled-components";
import { StronghandsRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  smxPriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const SmxPrice: React.FC<Props> = ({ smxPriceUsd }) => {
  return smxPriceUsd ? (
    <PriceLink href="https://dexscreener.com/cronos/0x4e79f2aaeaa3ad154373fe217b72d8c788172b83" target="_blank">
      <StronghandsRoundIcon width="24px" mr="8px" />
      <Text color="textSubtle" bold>{`$${smxPriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(SmxPrice);
