import { Box, Container, ThemeProvider, Typography, createTheme } from "@mui/material";
import React from "react";

const theme = createTheme();
theme.typography.h1 = {
    fontSize: "3.5rem",
    [theme.breakpoints.down("sm")]: {
        fontSize: "2.5rem"
    }
}

const About = props => {
    return (
        <ThemeProvider theme={theme}>
        <Box sx={{ mt: 12 }}>
            <Container maxWidth="md">
                <Box>
                    <Typography
                        variant="h1"
                        sx={{
                            display: "inline",
                            fontWeight: 700
                        }}
                    >
                        Hi, I'm {' '}
                        <Typography 
                            sx={{ 
                                display: "inline", 
                                fontSize: "inherit", 
                                fontWeight: "inherit", 
                                color: "#0388ff" 
                            }} 
                        >
                            Matt Nguyen
                        </Typography>
                    </Typography>
                </Box>
            </Container>
        </Box>
        </ThemeProvider>
    )
};

export default About;