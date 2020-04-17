import React from "react"
import Header from "./header"
import Footer from "./footer"

type ShellProps = {
  header?: React.ReactNode
  footer?: React.ReactNode
}
const Shell: React.FC<ShellProps> = ({
  children,
  header,
  footer,
}) => {
  return (
    <div className="bg-gray-200">
      <Header>{header && header}</Header>
      <div className="min-h-screen">{children}</div>
      <Footer>{footer && footer}</Footer>
    </div>
  )
}

export default Shell
