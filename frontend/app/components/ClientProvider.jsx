"use client"; // Mark this as a Client Component

import { AuthProvider } from "../contexts/AuthContext";

export default function ClientProvider({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}
