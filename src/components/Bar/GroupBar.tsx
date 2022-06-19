import styled from "styled-components";

const Div = styled.div`
  border-left: 3px solid #008060;
  padding-left: 10px;
  margin-left: 10px;
`;

type TProps = {};

export const GroupBar: React.FC<TProps> = ({ children }) => {
  return <Div>{children}</Div>;
};
