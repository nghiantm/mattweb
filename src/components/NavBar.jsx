import { AppBar, Box, Button, ButtonBase, ThemeProvider, Toolbar, Typography, createTheme } from "@mui/material";
import React from "react";

const NavBar = () => {
    return (
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static" sx={{ bgcolor: "#fff", boxShadow: "none" }}>
                    <Toolbar>
                        <Box sx={{ flexGrow: 1 }}>
                            <ButtonBase 
                                sx={{ 
                                    justifyContent: "flex-start",
                                    mx: 12/8
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: 20,
                                        fontWeight: 700,
                                        color: "#313131"
                                    }}
                                >
                                    Matt
                                </Typography>
                            </ButtonBase>
                        </Box>

                        <ButtonBase sx={{ px: 5/8, mx: 12/8 }}>
                            <Typography
                                sx={{
                                    fontWeight: 500,
                                    color: "#313131",
                                }}
                            >
                                About
                            </Typography>
                        </ButtonBase>

                        <ButtonBase sx={{ px: 5/8, mx: 12/8 }}>
                            <Typography
                                sx={{
                                    fontWeight: 500,
                                    color: "#313131",
                                }}
                            >
                                Blog
                            </Typography>
                        </ButtonBase>

                        <ButtonBase 
                            sx={{ 
                                bgcolor: "#0188ff",
                                borderRadius: "999px",
                                boxShadow: "0 10px 20px -10px #0188ff",
                                ml: 17/8,
                                mr: 12/8
                            }}
                        >
                            <Typography
                                sx={{
                                    fontWeight: 700,
                                    color: "#fff",
                                    py: 6/8,
                                    px: 20/8
                                }}
                            >
                                Contact Me →
                            </Typography>
                        </ButtonBase>
                    </Toolbar>
                </AppBar>
            </Box>
    )
}

export default NavBar;