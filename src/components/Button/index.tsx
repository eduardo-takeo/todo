import React from "react";
import { CustomButton } from "./styles";

interface AppProps {
  title: string;
  onClick: () => void;
}

export default function Button({ title, onClick }: AppProps): JSX.Element {
  return <CustomButton onClick={onClick}>{title}</CustomButton>;
}
