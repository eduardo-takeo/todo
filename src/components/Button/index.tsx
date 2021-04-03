import React from "react";
import { CustomButton } from "./styles";

interface AppProps {
  title: string;
}

export default function Button({ title }: AppProps): JSX.Element {
  return <CustomButton>{title}</CustomButton>;
}
