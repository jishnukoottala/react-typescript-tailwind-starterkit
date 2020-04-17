import React from "react"

const Header: React.FC = ({ children }) => {
  return (
    <div className="lg:px-16 px-6 flex flex-wrap items-center lg:py-0 py-4 bg-white">
      {children}
    </div>
  )
}

export default Header
