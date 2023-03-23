import React from "react";
import './css/Footer.css'

function Footer() {
    return (
        <>
            <div className="FooterBox">
                <div className="socials">
                    <a href="https://www.facebook.com/login/" role="button" className="facebook"> <img src="../imgs/sm-icons-facebook-logo.png" alt="face"></img></a>
                    <a href="https://twitter.com/login/" role="button" className="twitter"><img src="../imgs/sm-icons-twitter-social-icon-circle-color.png" alt="twit" /></a>
                    <a href="https://www.github.com/login/" role="button" className="github"><img src="../imgs/GitHub-Mark.png" alt="git" /></a>
                    <a href="https://www.instagram.com/login/" role="button" className="instagram"><img src="../imgs/insta-logo-icon.png" alt="insta" /></a>
                    <a href="https://www.linkedin.com/login/" role="button" className="linkedIn"><img src="../imgs/linkedIN.png" alt="lIn" /></a>
                </div>
                <section className="links">
                    <div className="leftLinkCol">
                        <h2 className="LinkTitle1">LINK</h2>
                        <a href="https://www.google.com/">Link 1</a>
                        <a href="https://www.google.com/">Link 2</a>
                        <a href="https://www.google.com/">Link 3</a>
                        <h2 className="LinkTitle2">LINK</h2>
                        <a href="https://www.google.com/">Link 1</a>
                        <a href="https://www.google.com/">Link 2</a>
                        <a href="https://www.google.com/">Link 3</a>
                    </div>
                    <div className="rightLinkCol">
                    <h2 className="LinkTitle1">LINK</h2>
                        <a href="https://www.google.com/">Link 1</a>
                        <a href="https://www.google.com/">Link 2</a>
                        <a href="https://www.google.com/">Link 3</a>
                        <h2 className="LinkTitle2">LINK</h2>
                        <a href="https://www.google.com/">Link 1</a>
                        <a href="https://www.google.com/">Link 2</a>
                        <a href="https://www.google.com/">Link 3</a>
                    </div>

                </section>
            </div>
        </>
    )
}

export default Footer
