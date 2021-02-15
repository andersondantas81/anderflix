import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--white);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--black);
  text-align: center;
  img {
    max-width:100px;
    max-height:50px;
    width: auto;
    height: auto;
  }
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
