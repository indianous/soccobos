import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Title(props: Props) {
  return <h1 className="text-3xl mb-4 font-bold">{props.children}</h1>;
}
