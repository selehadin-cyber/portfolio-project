import styled from "styled-components";

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    display: none;
  }
  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: #a8b2d1;
  }
  a {
    margin: 20px auto;
    padding: 10px;
    font-size: 13px;
    line-height: 18px;
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;
    text-decoration: none;
    color: #a8b2d1;
    &:hover,
    &:focus {
      transform: translateY(-3px);
    }
  }
`;


function Email() {
   const email = "sele4416@gmail.com" 
  return (
    <StyledLinkWrapper>
        <a href={`mailto:${email}`}>{email}</a>
    </StyledLinkWrapper>
  )
}

export default Email