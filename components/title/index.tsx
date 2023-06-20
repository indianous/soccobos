import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Title(props: Props) {
  return <h1>{props.children}</h1>;
}
