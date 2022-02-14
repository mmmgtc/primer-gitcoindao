import { useTranslation } from "next-i18next";
import { useState } from "react";
import { Link } from "react-scroll";
import {
  Root,
  Inner,
  Header,
  List,
  ListContainer,
  Item,
  ButtonText,
  Circle,
} from "./styles";

const Menu = () => {
  const { t } = useTranslation(["primer"]);
  const [active, setActiveState] = useState(false);
  return (
    <Root>
      <Inner isActive={active}>
        <Header
          isActive={active}
          onClick={() => {
            active ? setActiveState(false) : setActiveState(true);
          }}>
          <ButtonText>{t("page-primer-contents")}</ButtonText>
          <Circle className="menu__circle" />
        </Header>
        <List isActive={active}>
          <ListContainer isActive={active}>

            <Item>
              <Link
                activeClass="active"
                to="introduction"
                spy
                smooth
                offset={-50}
                duration={500}
                onClick={() => {
                  setActiveState(false);
                }}>
                {t("page-primer-contents-intro")}
              </Link>
            </Item>

            <Item>
              <Link
                activeClass="active"
                to="chapter1"
                spy
                ignoreCancelEvents={true}
                smooth
                offset={-50}
                duration={500}
                onClick={() => {
                  setActiveState(false);
                }}>
                {t("page-primer-contents-who")}
              </Link>
            </Item>

            <Item>
              <Link
                activeClass="active"
                to="chapter2"
                spy
                smooth
                offset={-50}
                duration={500}
                onClick={() => {
                  setActiveState(false);
                }}>
                {t("page-primer-contents-token")}
              </Link>
            </Item>

            <Item>
              <Link
                activeClass="active"
                to="chapter3"
                spy
                smooth
                offset={-50}
                duration={500}
                onClick={() => {
                  setActiveState(false);
                }}>
                {t("page-primer-contents-how-it-funds-projects")}
              </Link>
            </Item>
            
            <Item>
              <Link
                activeClass="active"
                to="chapter4"
                spy
                smooth
                offset={-50}
                duration={500}
                onClick={() => {
                  setActiveState(false);
                }}>
                {t("page-primer-contents-mission")}
              </Link>
            </Item>

            <Item>
              <Link
                activeClass="active"
                to="Chapter5"
                spy
                smooth
                offset={-50}
                duration={500}
                onClick={() => {
                  setActiveState(false);
                }}>
                {t("page-primer-contents-involved")}
              </Link>
            </Item>
            
          </ListContainer>
        </List>
      </Inner>
    </Root>
  );
};

export default Menu;
