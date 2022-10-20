import React, { FC, useState } from "react";

export enum CardVariant {
  outlined = "outlined",
  primary = "primary",
}

interface CardProps {
  width?: string;
  height?: string;
  variant: CardVariant;
  children?: React.ReactChild | React.ReactNode;
}

const Card: FC<CardProps> = ({ width, height, variant, children }) => {
  const [state, setState] = useState(0);

  return (
    <div
      style={{
        width,
        height,
        border: variant === CardVariant.outlined ? "1px solid black" : "none",
        background: variant === CardVariant.primary ? "grey" : "",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 15,
      }}
    >
      {children}
    </div>
  );
};

export default Card;
