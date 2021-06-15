import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 28 28" {...props}>
      <path d="M22.167 9.33317L17.5003 13.9998H21.0003C21.0003 17.8615 17.862 20.9998 14.0003 20.9998C12.822 20.9998 11.702 20.7082 10.7337 20.1832L9.03032 21.8865C10.4653 22.7965 12.1687 23.3332 14.0003 23.3332C19.157 23.3332 23.3337 19.1565 23.3337 13.9998H26.8337L22.167 9.33317ZM7.00033 13.9998C7.00033 10.1382 10.1387 6.99984 14.0003 6.99984C15.1787 6.99984 16.2987 7.2915 17.267 7.8165L18.9703 6.11317C17.5353 5.20317 15.832 4.6665 14.0003 4.6665C8.84366 4.6665 4.66699 8.84317 4.66699 13.9998H1.16699L5.83366 18.6665L10.5003 13.9998H7.00033Z" fill="#FCFCFC"/>
    </Svg>
  );
};

export default Icon;
