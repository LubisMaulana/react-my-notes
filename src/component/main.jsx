import React from 'react'
import {createRoot} from "react-dom/client";
import MainApp from "./App";

const root = createRoot(document.getElementById('root'));
root.render(<MainApp />);