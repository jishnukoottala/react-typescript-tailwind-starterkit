import React from "react"
import { BrowserRouter as Router } from "react-router-dom"

import "../assets/main.css"

import Shell from "Shell/shell"
import Routes from "Routes/routes"
import Header from "Container/Header"
import Footer from "Container/Footer"

const App: React.FC = () => {
  return (
    <Router>
      <Shell header={<Header />} footer={<Footer />}>
        <Routes />
      </Shell>
    </Router>
  )
}

export default App
