import React from "react";
import { Routes, Route } from "react-router-dom";
import Frontend from './Frontend'
import Auth from './Auth'
import Dashboard from './Dashboard'

function Router() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Frontend />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default Router;
