import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { uniqueNamesGenerator, Config, names } from "unique-names-generator";
import { Paper, Button, Typography, TextField } from "@mui/material";
import ArrowForward from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const getRandomNickname = () => {
    const config: Config = {
      dictionaries: [names],
      separator: " ",
      style: "capital",
    };
    setNickname(uniqueNamesGenerator(config));
  };

  const handleContinue = () => {
    console.log(nickname);
    navigate("/home");
  };

  return (
    <Container
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url("https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-71554.jpg?w=1060&t=st=1672743749~exp=1672744349~hmac=7abe054ff9ed4063b56bd8090a73e0014095fe7f96078bca1fe2fe4e47b88134)`,
      }}
    >
      <Paper sx={{ width: "45%", p: 3, borderRadius: 3 }}>
        <Row style={{ display: "flex" }}>
          <Col>
            <img
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMTAwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe29wYWNpdHk6MC43O2ZpbGw6I0ZGOTgwMDt9Cgkuc3Qxe29wYWNpdHk6MC43O2ZpbGw6IzAzQTlGNDt9Cgkuc3Qye29wYWNpdHk6MC43O2ZpbGw6IzhCQzM0QTt9Cgkuc3Qze29wYWNpdHk6MC43O2ZpbGw6IzlDMjdCMDt9Cgkuc3Q0e29wYWNpdHk6MC43O2ZpbGw6I0Y0NDMzNjt9Cgkuc3Q1e29wYWNpdHk6MC43O2ZpbGw6IzAwOTY4ODt9Cgkuc3Q2e29wYWNpdHk6MC43O2ZpbGw6IzNGNTFCNTt9Cgkuc3Q3e29wYWNpdHk6MC43O2ZpbGw6I0ZGRUIzQjt9Cgkuc3Q4e2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CjxnPgoJPGc+CgkJPGVsbGlwc2UgY2xhc3M9InN0MCIgY3g9IjUwIiBjeT0iMzMuNyIgcng9IjE1LjYiIHJ5PSIzMi43Ii8+CgkJPGVsbGlwc2UgY2xhc3M9InN0MSIgY3g9IjUwIiBjeT0iNjYuMyIgcng9IjE1LjYiIHJ5PSIzMi43Ii8+CgkJPGVsbGlwc2UgY2xhc3M9InN0MiIgY3g9IjY2LjMiIGN5PSI1MCIgcng9IjMyLjciIHJ5PSIxNS42Ii8+CgkJPGVsbGlwc2UgY2xhc3M9InN0MyIgY3g9IjMzLjciIGN5PSI1MCIgcng9IjMyLjciIHJ5PSIxNS42Ii8+CgkJCgkJCTxlbGxpcHNlIHRyYW5zZm9ybT0ibWF0cml4KDAuNzA3MSAtMC43MDcxIDAuNzA3MSAwLjcwNzEgLTE1LjkyOTggMzguNDU3OSkiIGNsYXNzPSJzdDQiIGN4PSIzOC41IiBjeT0iMzguNSIgcng9IjE1LjYiIHJ5PSIzMi43Ii8+CgkJCgkJCTxlbGxpcHNlIHRyYW5zZm9ybT0ibWF0cml4KDAuNzA3MSAtMC43MDcxIDAuNzA3MSAwLjcwNzEgLTI1LjQ5MTYgNjEuNTQyMSkiIGNsYXNzPSJzdDUiIGN4PSI2MS41IiBjeT0iNjEuNSIgcng9IjE1LjYiIHJ5PSIzMi43Ii8+CgkJCgkJCTxlbGxpcHNlIHRyYW5zZm9ybT0ibWF0cml4KDAuNzA3MSAtMC43MDcxIDAuNzA3MSAwLjcwNzEgLTMyLjI1MjggNDUuMjE5MSkiIGNsYXNzPSJzdDYiIGN4PSIzOC41IiBjeT0iNjEuNSIgcng9IjMyLjciIHJ5PSIxNS42Ii8+CgkJCgkJCTxlbGxpcHNlIHRyYW5zZm9ybT0ibWF0cml4KDAuNzA3MSAtMC43MDcxIDAuNzA3MSAwLjcwNzEgLTkuMTY4NiA1NC43ODA5KSIgY2xhc3M9InN0NyIgY3g9IjYxLjUiIGN5PSIzOC41IiByeD0iMzIuNyIgcnk9IjE1LjYiLz4KCTwvZz4KCTxjaXJjbGUgY2xhc3M9InN0OCIgY3g9IjUwIiBjeT0iNTAiIHI9IjEyLjYiLz4KPC9nPgo8L3N2Zz4K"
              alt="logo"
              style={{
                width: "25px",
                height: "25px",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            />
          </Col>
          <Col>
            <Typography variant="h6" component="div" color="grey">
              Dear Diary
            </Typography>
          </Col>
        </Row>
        <Typography
          variant="h4"
          component="div"
          sx={{ p: 2 }}
          style={{
            display: "flex",
            justifyContent: "center",
            color: "#0081C9",
          }}
        >
          Sign In
        </Typography>

        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Col>
            <TextField
              type="text"
              id="outlined-basic"
              name="nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              label="Your Nickname*"
              variant="outlined"
              fullWidth
            />
          </Col>
          <Col>
            <Button
              variant="contained"
              onClick={getRandomNickname}
              sx={{ borderRadius: 10, m: 1, ml: 3 }}
            >
              Random
            </Button>
          </Col>
        </Row>
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            sx={{
              borderRadius: 10,
              m: 2,
            }}
            onClick={handleContinue}
            disabled={!nickname}
          >
            Continue
            <ArrowForward />
          </Button>
        </Row>
      </Paper>
    </Container>
  );
}

export default SignIn;
