import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound(props) {
    return (
        <div style={style.container}>
            <div style={style.item}>
                <h1>404</h1>
                <h2>Oops! This Page Could Not Be Found</h2>
                <p>SORRY BUT THE PAGE YOU ARE LOOKING FOR DOES NOT EXIST, HAVE BEEN REMOVED. NAME CHANGED OR IS TEMPORARILY UNAVAILABLE</p>
                <Link to="/"><button style={style.btn}>Back to home page</button></Link>
            </div>
        </div>
    );
}

const style = {
    container: {
        backgroundColor: "#F0F0F0",
        height: "100vh"
    },
    item: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
    },
    btn:{
        backgroundColor:"#9c27b0",
        color:"#FFFFFF",
        padding:10
    }
}

