import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 90 90" {...props}>
      <image width="90" height="90" href="/images/coins/0x53B988068cb6f8CB87c6428307e5f642e473D820.png" />
    </Svg>
  );
};

export default Icon;
