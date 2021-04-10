import styled from "styled-components";

interface TitleProps {
  status: string;
}

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;
  border-bottom: 1px solid grey;
`;

export const Title = styled.h1<TitleProps>`
  font-size: 1.4em;
  font-weight: 300;
  text-decoration: ${({ status }) =>
    status === "active" ? "none" : "line-through"};
`;

export const IconContainer = styled.div`
  display: flex;
  width: 60px;
  justify-content: space-between;
  align-items: center;
`;
