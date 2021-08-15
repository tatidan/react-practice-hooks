import styled from "styled-components";

export const HeaderContainer = styled.header`
height: 60px;
border-bottom: 1px solid grey;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 30px;
background-color: ${(props) => props.colors.background};

.headerLogo{
  color: ${(props) => props.colors.text};
}
`;