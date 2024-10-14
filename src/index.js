import React from "react"
import ReactDom from "react-dom/client"
import App from "./App"
import './index.css'; // Import the Tailwind CSS file


const root = ReactDom.createRoot(document.getElementById("root"))

root.render(
 <>
 <App></App>
 </>
)