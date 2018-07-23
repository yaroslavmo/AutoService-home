import React from 'react';
import Aux from "../../hoc/Auxiliary";
import NavBar from "../../components/NavBar/NavBar";

function Layout(props) {
    const contentStyle = {
        marginTop: '30px'
    };

    return (
        <Aux>
        <div>
            <NavBar />

        </div>
        <main style={contentStyle}> { props.children }</main>
        </Aux>
    );
}

export default Layout;
