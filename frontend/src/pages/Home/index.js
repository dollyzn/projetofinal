import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  AspectRatio,
  IconButton,
  SvgIcon,
  Divider,
  Badge,
  Grid,
} from "@mui/joy";

import { motion } from "framer-motion";

import { AuthContext } from "../../context";

import useIsMobile from "../../hooks/isMobile";
import TypeEffect from "../../components/TypingHomeEffect";

import { ReactComponent as IconGPT } from "../../assets/gpt.svg";
import { ReactComponent as IconDialogFlow } from "../../assets/dialogflow.svg";
import Ia from "../../assets/dash.png";
import { useContext } from "react";
import { Link as RouterLink } from "react-router-dom";

function Home() {
  const { user } = useContext(AuthContext);
  const [showCard, setShowCard] = useState(false);
  const isMobile = useIsMobile();

  const cardVariants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 30 },
  };

  const firstName = user?.name.split(" ")[0];

  function RenderLink(props) {
    const { to, variant, size, icon } = props;

    const renderLink = React.useMemo(
      () =>
        React.forwardRef((itemProps, ref) => (
          <RouterLink to={to} ref={ref} {...itemProps} />
        )),
      [to]
    );

    return (
      <IconButton component={renderLink} variant={variant} size={size}>
        {icon}
      </IconButton>
    );
  }

  return (
    <Box sx={{ mt: 4, mx: 4 }}>
      <Grid container sx={{ flexGrow: 1 }}>
        <Grid xs={12} md={6}>
          <Card
            variant="outlined"
            sx={{
              zIndex: 1,

              mt: 5,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography level="h1" sx={{ mr: 5 }}>
                {isMobile ? "Olá!" : `Olá! ${firstName}.`}
              </Typography>
              <div style={{ display: "flex", gap: 15 }}>
                <Badge badgeContent="!">
                  <RenderLink
                    variant="outlined"
                    to="/chat/chatgpt"
                    icon={
                      <SvgIcon component={IconGPT} inheritViewBox></SvgIcon>
                    }
                    size="lg"
                    fullWidth
                  ></RenderLink>
                </Badge>
                <Badge badgeContent="!">
                  <RenderLink
                    variant="outlined"
                    to="/chat/dialogflow"
                    icon={
                      <SvgIcon
                        component={IconDialogFlow}
                        inheritViewBox
                      ></SvgIcon>
                    }
                    size="lg"
                    fullWidth
                  ></RenderLink>
                </Badge>
              </div>
            </Box>
            <Divider sx={{ mt: 2, mb: 3 }} />
            <TypeEffect />
          </Card>
        </Grid>
        <Grid
          xs={6}
          sx={{
            backgroundImage: `url(${Ia})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></Grid>
        {/* {!isMobile && (
          <motion.div
            initial="hidden"
            animate={showCard ? "hidden" : "visible"}
            variants={cardVariants}
            transition={{ duration: 0.3 }}
            style={{
              position: "absolute",
              bottom: 20,
              right: 30,
              width: "300px",
            }}
          >
            <Card
              variant="outlined"
              orientation="horizontal"
              sx={{
                gap: 2,
                "&:hover": {
                  boxShadow: "md",
                  borderColor: "neutral.outlinedHoverBorder",
                },
                mb: 1,
              }}
              onClick={() => setShowCard(!showCard)}
            >
              <AspectRatio ratio="1" sx={{ width: 45 }}>
                <img
                  src="https://avatars.githubusercontent.com/u/66445721?v=4"
                  srcSet="https://avatars.githubusercontent.com/u/66445721?v=4"
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>
              <div>
                <Typography
                  level="h2"
                  fontSize="lg"
                  id="card-description"
                  mb={0.5}
                >
                  Natã Santos
                </Typography>
                <Typography fontSize="sm" aria-describedby="card-description">
                  Técnico Informática - IFF
                </Typography>
              </div>
            </Card>
            <Card
              variant="outlined"
              orientation="horizontal"
              sx={{
                gap: 2,
                "&:hover": {
                  boxShadow: "md",
                  borderColor: "neutral.outlinedHoverBorder",
                },
              }}
            >
              <AspectRatio ratio="1" sx={{ width: 45 }}>
                <img
                  src="https://avatars.githubusercontent.com/u/66445721?v=4"
                  srcSet="https://avatars.githubusercontent.com/u/66445721?v=4"
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>
              <div>
                <Typography
                  level="h2"
                  fontSize="lg"
                  id="card-description"
                  mb={0.5}
                >
                  Gabrielly Chaim
                </Typography>
                <Typography fontSize="sm" aria-describedby="card-description">
                  Técnico Informática - IFF
                </Typography>
              </div>
            </Card>
          </motion.div>
        )} */}
      </Grid>
    </Box>
  );
}

export default Home;
