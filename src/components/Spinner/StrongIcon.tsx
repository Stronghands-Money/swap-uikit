import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <image width="32" height="32" href="/images/coins/0x53B988068cb6f8CB87c6428307e5f642e473D820.png" />
    </Svg>
  );
};

export default Icon;
