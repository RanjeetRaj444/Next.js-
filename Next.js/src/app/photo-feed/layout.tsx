// import React from 'react'
import "./styles.css"
const Layout = (props: {
    modal: React.ReactNode;
    children: React.ReactNode;
}) => {
    return (
        <>
            {props.modal}
            {props.children}
        </>
    )
}

export default Layout