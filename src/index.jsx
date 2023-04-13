import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/App/App";
import "./style.css";
import Navigation from "./Navigation/Navigation";

export const API_BASE_URL = "https://apps.kodim.cz/daweb/leviexpress/api";

const AppEntry = () => <Navigation />;

createRoot(document.querySelector("#app")).render(<AppEntry />);
