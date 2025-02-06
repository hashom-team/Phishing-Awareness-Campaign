import React from "react";
import { AppBar, Toolbar, Typography, Button, Card, CardContent, Container, Box, IconButton } from "@mui/material";
import { ArrowForwardIos, Facebook, Twitter, LinkedIn } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Draggable from "react-draggable";

const Home = () => {
  return (
    <Box sx={{ bgcolor: "black", color: "white", minHeight: "100vh", padding: 3, textAlign: "center", width: "100vw", overflowX: "hidden" }}>
      {/* Navbar */}
      <AppBar position="fixed" sx={{ bgcolor: "#0a0a0a", top: 20, right: 20, left: 20, borderRadius: 2 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" fontWeight="bold" sx={{ color: "#4CAF50" }}>
            HASHOM
          </Typography>
          <Box>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/learn">Learn</Button>
            <Button color="inherit" component={Link} to="/report">Report Phishing</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <br></br>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ marginTop: 10 }}>
        <Typography variant="h4" gutterBottom sx={{ color: "#4CAF50" }}>
          Phishing Awareness
        </Typography>

        <Box sx={{ marginTop: 5 }}>
          <Typography variant="h5" gutterBottom>
            Available's
          </Typography>
          <Box sx={{ display: "flex", overflowX: "auto", gap: 2, paddingBottom: 2 }}>
            <Card sx={{ minWidth: 250, bgcolor: "#0a0a0a", color: "white" }}>
              <CardContent>
                <Typography variant="h6">
                  Phishing 101
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between", margin: 1, padding: 2}}>
                  <Button variant="outlined" color="success" endIcon={<ArrowForwardIos />} component={Link} to="http://127.0.0.1:8000/t1">
                    Read
                  </Button>
                  <Button variant="contained" color="success" endIcon={<ArrowForwardIos />} component={Link} to="http://127.0.0.1:8000/p1">
                    quiz
                  </Button>
                </Box>
              </CardContent>
            </Card> 
            <Card sx={{ minWidth: 250, bgcolor: "#0a0a0a", color: "white" }}>
              <CardContent>
                <Typography variant="h6">
                  Phishing and Spoofing
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between", margin: 1, padding: 2}}>
                  <Button variant="outlined" color="success" endIcon={<ArrowForwardIos />} component={Link} to="http://127.0.0.1:8000/t2">
                    Read
                  </Button>
                  <Button variant="contained" color="success" endIcon={<ArrowForwardIos />} component={Link} to="http://127.0.0.1:8000/p2">
                    quiz
                  </Button>
                </Box>
              </CardContent>
            </Card> 
            <Card sx={{ minWidth: 250, bgcolor: "#0a0a0a", color: "white" }}>
              <CardContent>
                <Typography variant="h6">
                  Phishing and Identity Theft
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between", margin: 1, padding: 2}}>
                  <Button variant="outlined" color="success" endIcon={<ArrowForwardIos />} component={Link} to="http://127.0.0.1:8000/t3">
                    Read
                  </Button>
                  <Button variant="contained" color="success" endIcon={<ArrowForwardIos />} component={Link} to="http://127.0.0.1:8000/p3">
                    quiz
                  </Button>
                </Box>
              </CardContent>
            </Card> 
            <Card sx={{ minWidth: 250, bgcolor: "#0a0a0a", color: "white" }}>
              <CardContent>
                <Typography variant="h6">
                  10 Way's to Prevent Phishing!
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-around", margin: 1, padding: 2}}>
                  <Button variant="outlined" color="success" endIcon={<ArrowForwardIos />} component={Link} to="http://127.0.0.1:8000/t4">
                    Read
                  </Button>
                  <Button variant="contained" color="success" endIcon={<ArrowForwardIos />} component={Link} to="http://127.0.0.1:8000/p4">
                    quiz
                  </Button>
                </Box>
              </CardContent>
            </Card> 
          </Box>
        </Box>

      </Container>

      <Container maxWidth="lg" sx={{ marginTop: 10 }}>
        <Typography variant="h4" gutterBottom sx={{ color: "#4CAF50" }}>
          Tutorial's
        </Typography>

        <Box sx={{ marginTop: 5 }}>
          <Box sx={{ display: "flex", overflowX: "auto", gap: 2, paddingBottom: 2 }}>
            <Card sx={{ minWidth: 560, bgcolor: "#0a0a0a", color: "white" }}>
              <CardContent>
                <Typography variant="h6">
                  Phishing attacks are SCARY 
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between", margin: 1, padding: 2}}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/u9dBGWVwMMA?si=QbrlkU-FXGvqOIsJ?controls=0&modestbranding=1&rel=0&showinfo=0&fs=0&iv_load_policy=3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </Box>
              </CardContent>
            </Card>
            <Card sx={{ minWidth: 560, bgcolor: "#0a0a0a", color: "white" }}>
              <CardContent>
                <Typography variant="h6">
                  Email Phishing attacks are easy to do!
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between", margin: 1, padding: 2}}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/PSWsajTwVsM?si=OCE_a3uy_yt2yfM5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </Box>
              </CardContent>
            </Card>  
          </Box>
          <Box sx={{ display: "flex", overflowX: "auto", gap: 2, paddingBottom: 2 }}>
            <Card sx={{ minWidth: 560, bgcolor: "#0a0a0a", color: "white" }}>
              <CardContent>
                <Typography variant="h6">
                  Email Phishing/ Spoofing
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between", margin: 1, padding: 2}}>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/AsnaqTCA95o?si=AruARg831yivYM7p" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </Box>
              </CardContent>
            </Card>
            <Card sx={{ minWidth: 560, bgcolor: "#0a0a0a", color: "white" }}>
              <CardContent>
                <Typography variant="h6">
                  How Scammer create fake login pages!?
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between", margin: 1, padding: 2}}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/cQOR0pVfDS8?si=R5nomToOkkKI1z6t" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </Box>
              </CardContent>
            </Card>  
          </Box>
          <Box sx={{ display: "flex", overflowX: "auto", gap: 2, paddingBottom: 2 }}>
            <Card sx={{ minWidth: 560, bgcolor: "#0a0a0a", color: "white" }}>
              <CardContent>
                <Typography variant="h6">
                  How Hacker's can *OWN YOU*!!!
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between", margin: 1, padding: 2}}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ldwy6Opg-5M?si=nRps7sr8vcIiXgqk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </Box>
              </CardContent>
            </Card>
            <Card sx={{ minWidth: 560, bgcolor: "#0a0a0a", color: "white" }}>
              <CardContent>
                <Typography variant="h6">
                  Phishing Attack Prevention
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between", margin: 1, padding: 2}}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/URxhrDfRCew?si=cB-5H1TGXO5mHg86" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </Box>
              </CardContent>
            </Card>  
          </Box>
          <Box sx={{ display: "flex", overflowX: "auto", gap: 2, paddingBottom: 2 }}>
            <Card sx={{ minWidth: 560, bgcolor: "#0a0a0a", color: "white" }}>
              <CardContent>
                <Typography variant="h6">
                  Types of Phishing
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between", margin: 1, padding: 2}}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/67YquMUViHs?si=eDv35SHBL2SZLU6P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </Box>
              </CardContent>
            </Card>
            <Card sx={{ minWidth: 560, bgcolor: "#0a0a0a", color: "white" }}>
              <CardContent>
                <Typography variant="h6">
                  EmailPhishing Prevention
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between", margin: 1, padding: 2}}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/_cgqOwU9ca0?si=dEECLVb070FCX8EA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </Box>
              </CardContent>
            </Card>  
          </Box>
        </Box>

      </Container>

      {/* Footer */}
      <Box sx={{ bgcolor: "#0a0a0a", padding: 3, textAlign: "center", marginTop: 5 }}>
        <Typography variant="h6" fontWeight="bold" sx={{ color: "#4CAF50" }}>HASHOM</Typography>
        <Typography variant="body2" sx={{ opacity: 0.8, marginBottom: 1 }}>© 2025 Hashom. All rights reserved.</Typography>
        <Box>
          <IconButton href="#" sx={{ color: "#4CAF50" }}><Facebook /></IconButton>
          <IconButton href="#" sx={{ color: "#4CAF50" }}><Twitter /></IconButton>
          <IconButton href="#" sx={{ color: "#4CAF50" }}><LinkedIn /></IconButton>
        </Box>
      </Box>

      {/* Floating Ask AI Container */}
      <Draggable>
        <Box sx={{ position: "fixed", bottom: 20, right: 20, bgcolor: "#0a0a0a", padding: 2, borderRadius: 2, color: "white", cursor: "grab", boxShadow: 3 }}>
          <Typography variant="h6">Ask AI</Typography>
          <Typography variant="body2">How can I help you?</Typography>
        </Box>
      </Draggable>
    </Box>
  );
};

export default Home;
