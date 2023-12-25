import React from "react"
import { Link } from "react-router-dom"

type StyledLinkProps = {
    LinkText: string
    to: string
}

export const StyledLink = ({ LinkText, to }: StyledLinkProps) => {
    return <Link to={to}>{LinkText}</Link>
}