import React from "react";

const currentTime = new Date();
const currentYear = currentTime.getFullYear();

function Footer(){
    return (
        <footer>
            <p>Copyright &copy; {currentYear} </p>
        </footer>
    );
}

export default Footer;