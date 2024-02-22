import React from 'react'
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const admin = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      {admin ? (
        admin.role === "admin" ? (
          children
        ) : (
          <Navigate to="/" />
        )
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}
