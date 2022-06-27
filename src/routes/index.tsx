import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Login from "../views/Login";
import Home from "../views/Home";
import SignUp from "../views/SignUp";

const AppRoutes = () => {
  return (
    // <ThemeProvider theme={null}>
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
    // </ThemeProvider>
  );
};

export default AppRoutes;
