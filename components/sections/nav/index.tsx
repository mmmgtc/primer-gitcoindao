// @jsx jsx 
import {
  jsx,
  Box,
  Container,
  NavLink,
  Link as A,
  IconButton,
  Flex,
  Button,
  Text,
} from "theme-ui";
import GitcoinLogo from "components/svgs/gitcoin-logo";
import { useEffect, useCallback, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

import Menu from "components/sections/primer/Menu";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
//import LanguageDropdown from "components/primitives/language-dropdown";


const navHeight = "72px";

export type NavProps = {
  isInmersive?: boolean;
  isPrimer?: boolean;
  background?: "muted" | "dark" | "white" | "black" | "translucent";
};

const Nav = ({ background, isInmersive, isPrimer = false }: NavProps) => {
  
  const { t } = useTranslation(["primer"]); 
  const router = useRouter();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const { scrollTop } = document.documentElement;
    if (scrollTop > 0){
      setHasScrolled(true);
    } 
    else {
      setHasScrolled(false);
      
    }
  }, []);

  useEffect(() => {
    handleScroll();
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);


  const isDark = background === "black" || background === "dark";
  let bg: string;
  let color: string;
  switch (background) {
    default:
    case "white":
      bg =
        isInmersive && !hasScrolled && !mobileMenuIsOpen
          ? "transparent"
          : "background";
      color = "text";
      break;
    case "muted":
      bg =
        isInmersive && !hasScrolled && !mobileMenuIsOpen
          ? "transparent"
          : isPrimer
          ? "rgba(255, 255, 255, .6)"
          : "muted";
      color = "text";
      break;
    case "dark":
      bg =
        isInmersive && !hasScrolled && !mobileMenuIsOpen
          ? "transparent"
          : "text";
      color = "background";
      break;
    case "black":
      bg =
        isInmersive && !hasScrolled && !mobileMenuIsOpen
          ? "transparent"
          : "black";
      color = "background";
      break;
    case "translucent":
      bg =
        isInmersive && !hasScrolled && !mobileMenuIsOpen
          ? "transparent"
          : "rgba(255, 255, 255, .5)";
      color = "text";
      break;
  }

  return (
    <>
      <Box
        sx={{
          bg,
          color,
          position: "sticky",
          top: 0,
          width: "100%",
          zIndex: "header",
          transition: "box-shadow .3s, top .3s",
          boxShadow: hasScrolled ? "magical" : "none",
          backdropFilter:
            isPrimer && hasScrolled ? "saturate(180%) blur(7px)" : "none",
        }}>
        <Container
          sx={{
            display: "flex",
            alignItems: "right",
            justifyContent: "space-between",
            height: navHeight,
          }}>
          <GitcoinLogo/>
          <Box
            sx={{
              ".nav-link": {
                fontSize: 16,
                position: "fixed",
                top: "0",
              },
              ".nav-link:not(:last-child)": { mr: 56 },
              display: [isPrimer ? "null" : "none", null, "flex"],
            }}>

            
            {isPrimer && (
              <Box
                sx={{
                  top: [hasScrolled ? 12 : 48, 0],
                  right: [16, 0],
                  position: ["fixed", "initial"],
                  pointerEvents: "none",
                }}>
                <Menu />
              </Box>
            )}
          </Box>

        </Container>
        <Box
          sx={{
            bg,
            color,
            position: "fixed",
            top: 0,
            height: mobileMenuIsOpen ? "200vh" : 0,
            transition: "height .2s",
            overflow: "hidden",
            width: "100%",
            zIndex: "dropdown",
            visibility: mobileMenuIsOpen ? "visible" : "hidden",
          }}>
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: navHeight,
            }}>

            <Flex sx={{ alignItems: "center" }}>
              <NavLink
                sx={{
                  mr: 3,
                  pr: 20,
                  borderRight: "1px solid",
                  borderColor: "ultraLightGray",
                }}
                className="nav-link"
                as={Box}
                data-dark={isDark}>

              </NavLink>
              <IconButton
                sx={{ color, fontSize: 6 }}
                onClick={() => setMobileMenuIsOpen(false)}>
                <FiX size="24px" />
              </IconButton>
            </Flex>
          </Container>
          <Container
            sx={{
              pb: 4,
              pt: "10vh",
              "a:not(:last-of-type)": { mb: 2 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: `calc(100vh - ${navHeight})`,
            }}>



          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Nav;

