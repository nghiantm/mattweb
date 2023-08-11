import { Box, ButtonBase, Container, Grid, ThemeProvider, Typography, createTheme } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import React from "react";

const aboutTheme = createTheme();
aboutTheme.typography.h1 = {
    fontWeight: 800,
    fontSize: "3.5rem",
    [aboutTheme.breakpoints.down("sm")]: {
        fontSize: "2.5rem"
    }
}
aboutTheme.typography.body1 = {
    color: "#6b6f76",
    fontSize: "1.25rem",
    fontWeight: 400,
    [aboutTheme.breakpoints.down("sm")]: {
        fontSize: "1rem"
    }
}

const About = props => {
    return (
        <ThemeProvider theme={aboutTheme}>
            <Box sx={{ pt: 12 }}>
                <Container maxWidth="md">
                    <Box>
                        <Typography
                            variant="h1"
                            sx={{
                                display: "inline",
                            }}
                        >
                            Hi, my name is
                        </Typography>

                        <Typography 
                            variant="h1"
                            sx={{ 
                                color: "#0388ff" 
                            }} 
                        >
                            Matt Nguyen.
                        </Typography>
                            
                        <Typography
                            variant="h1"
                            sx={{

                            }}
                        >
                            I'm a Software Developer.
                        </Typography>
                    </Box>
                    
                    <Grid container>
                        <Grid item xs={12} md={10}>
                            <Typography
                                variant="body1"
                                sx={{
                                    mt: 2
                                }}
                            >
                                I'm all about crafting clean and effective digital solutions.
                                My days are currently focused on web development, trying to create sleek 
                                products that make life a litte easier.
                            </Typography>
                            
                            <Box sx={{ mt: 3 }}>
                                <ButtonBase 
                                    href="https://www.linkedin.com/in/nghiantm/"
                                    target="_blank"
                                    sx={{ 
                                        bgcolor: "#0188ff",
                                        borderRadius: "999px",
                                        boxShadow: "0 10px 20px -10px #0188ff",
                                        mr: 2,
                                        ":hover": {
                                            bgcolor: "#0178cc"
                                        }
                                    }}
                                >
                                    <LinkedInIcon 
                                        sx={{
                                            display: "flex",
                                            alignContent: "center",
                                            fontSize: "2rem",
                                            color: "#fff",
                                            py: 1,
                                            px: 3
                                        }}
                                    />
                                </ButtonBase>

                                <ButtonBase 
                                    href="https://github.com/nghiantm"
                                    target="_blank"
                                    sx={{ 
                                        bgcolor: "#0188ff",
                                        borderRadius: "999px",
                                        boxShadow: "0 10px 20px -10px #0188ff",
                                        mr: 2,
                                        ":hover": {
                                            bgcolor: "#0178cc"
                                        }
                                    }}
                                >
                                    <GitHubIcon 
                                        sx={{
                                            display: "flex",
                                            alignContent: "center",
                                            fontSize: "2rem",
                                            color: "#fff",
                                            py: 1,
                                            px: 3
                                        }}
                                    />
                                </ButtonBase>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </ThemeProvider>
    )
};

export default About;