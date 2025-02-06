import React, { useState } from "react";
import axios from "axios";
import { AppBar, Toolbar, Typography, Button, Box, Container, Modal, TextField, Grid, Snackbar, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { Close } from "@mui/icons-material";

function getCSRFToken() {
  const cookies = document.cookie.split('; ');
  for (let i = 0; i < cookies.length; i++) {
    const [key, value] = cookies[i].split('=');
    if (key === "csrftoken") {
      return value;
    }
  }
  return null; // If CSRF token is not found
}
const getCookie = (name) => {
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith(name + "="))
    ?.split("=")[1];

  return cookieValue || "";
};


axios.defaults.xsrfCookieName = "csrftoken"; // Django sets this cookie name
axios.defaults.xsrfHeaderName = "X-CSRFToken"; // Django expects this header

const csrfToken = getCookie("csrftoken");
if (csrfToken) {
  axios.defaults.headers.common["X-CSRFToken"] = csrfToken;
}

async function fetchCSRFToken() {
  try {
    await axios.get("http://127.0.0.1:8000/csrf/", { withCredentials: true });
  } catch (error) {
      console.error("CSRF Token Fetch Error:", error);
  }
}


const ReportPhishingPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", company: "", type: "", details: "" });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  

  const handleSubmit = async () => {
    //e.preventDefault();
    //await fetchCSRFToken();  // Ensure CSRF token is set
    const csrfToken = getCSRFToken();

    if (!csrfToken) {
      setSnackbarMessage("CSRF token is missing.");
      setSnackbarOpen(true);
      return;
  }

    if (formData.details.length > 200) {
      setSnackbarMessage("Report details can't exceed 200 characters.");
      setSnackbarOpen(true);
    } else {
      try {
        await axios.post("http://127.0.0.1:8000/phishingform", formData, {
          headers: { 
            "Content-Type": "application/json",
            'X-CSRFToken': csrfToken
           },

           withCredentials: true  
        });
        setSnackbarMessage("Phishing report submitted successfully.");
        setFormData({ name: "", company: "", type: "", details: "" });
        handleCloseModal();
      } catch (error) {
        console.error("Axios Error:", error.response ? error.response.data : error.message);
        setSnackbarMessage("Phishing report failed to get submitted.");
      }
      setSnackbarOpen(true);
    }
  };

  return (
    <Box sx={{ bgcolor: "black", color: "white", minHeight: "100vh", padding: 3, textAlign: "center", width: "100vw", overflowX: "hidden" }}>
      <AppBar position="fixed" sx={{ bgcolor: "#0a0a0a", top: 20, right: 20, left: 20, borderRadius: 2 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" fontWeight="bold" sx={{ color: "#4CAF50" }}>
            HASHOM
          </Typography>
          <Box>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/learn">Learn</Button>
            <Button color="inherit" component={Link} to="/report-phishing">Report Phishing</Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ marginTop: 10 }}>
        <Typography variant="h4" gutterBottom sx={{ color: "#4CAF50" }}>Report Phishing</Typography>
        <br></br>
        <h2>Contribute to Phishing Awareness and Protection</h2>
        <p>If you have experienced a phishing incident, we encourage you to share your experience with us. By reporting such incidents, you provide valuable insight that can help raise awareness among your colleagues and contribute to a collective effort in combating phishing attacks. Your submission will be featured as an article on our website, serving as an acknowledgment of the threat and alerting other employees to the potential risks they may face. Together, we can foster a proactive and secure environment by learning from real-world experiences and ensuring that others are better equipped to recognize and respond to phishing attempts.</p>
        <br></br>
        <Button variant="contained" color="success" onClick={handleOpenModal}>Report Phishing</Button>
      </Container>

      <Modal open={openModal} onClose={handleCloseModal} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Box sx={{ bgcolor: "#1e1e1e", padding: 3, borderRadius: 2, width: 400 }}>
          <Typography variant="h6" gutterBottom sx={{ color: "#4CAF50" }}>Report a Phishing Incident</Typography>
          <TextField
            label="Your Name"
            fullWidth
            variant="outlined"
            sx={{ marginBottom: 2, bgcolor: "#4CAF50", color: "white" }}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <TextField
            label="Your Company"
            fullWidth
            variant="outlined"
            sx={{ marginBottom: 2, bgcolor: "#4CAF50", color: "white" }}
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          />
          <TextField
            select
            label="Type of Phishing"
            fullWidth
            variant="outlined"
            sx={{ marginBottom: 2, bgcolor: "#4CAF50", color: "white" }}
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          >
            <MenuItem value="Email Phishing">Email Phishing</MenuItem>
            <MenuItem value="Spear Phishing">Spear Phishing</MenuItem>
            <MenuItem value="Whaling">Whaling</MenuItem>
            <MenuItem value="Smishing">Smishing (SMS Phishing)</MenuItem>
            <MenuItem value="Vishing">Vishing (Voice Phishing)</MenuItem>
          </TextField>
          <TextField
            label="Details of the Report"
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            sx={{ marginBottom: 2, bgcolor: "#4CAF50", color: "white" }}
            value={formData.details}
            onChange={(e) => setFormData({ ...formData, details: e.target.value })}
            inputProps={{ maxLength: 200 }}
          />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button fullWidth variant="outlined" color="error" onClick={handleCloseModal}>Cancel</Button>
            </Grid>
            <Grid item xs={6}>
              <Button fullWidth variant="contained" color="success" onClick={handleSubmit}>Submit</Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        message={snackbarMessage}
        action={<Close sx={{ color: "white" }} onClick={() => setSnackbarOpen(false)} />}
      />
    </Box>
  );
};

export default ReportPhishingPage;
