import React from "react";
import { createRoot } from "react-dom/client";
import WizzyRoomLandingPage from "./WizzyRoomLandingPage";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<WizzyRoomLandingPage />);
