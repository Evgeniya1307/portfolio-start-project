import styled from "styled-components"
import { thema } from "../../styles/Thema"
import { font } from "../../styles/Common";

// Определяем тип для пропсов SocialItem, исключая 'key'
type SocialItemProps = React.HTMLAttributes<HTMLLIElement>;

const Footer = styled.footer`
  background-color: ${thema.colors.primaryBg};
  padding: 40px 0;
`;

const Name = styled.span`
  ${font({
    family: '"Josefin Sans", sans-serif',
    weight: 700,
    Fmax: 22,
    Fmin: 16,
  })}
  letter-spacing: 3px;
`;

const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0;
`;

// Используем тип SocialItemProps для стилизованного компонента SocialItem
const SocialItem = styled.li<SocialItemProps>``;

const SocialLink = styled.a`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${thema.colors.accent};
  &:hover {
    color: ${thema.colors.primaryBg};
    transform: translateY(-4px);
  }
`;

const Copyright = styled.small`
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  opacity: 0.5;
`;



export const S = {
    Footer,
    Copyright,
    SocialLink,
    SocialItem,
    SocialList,
    Name
}