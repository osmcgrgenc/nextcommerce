import React from 'react';

function Copyright(props) {
    return (
        <>
            <div className="footer-bottom">
                <div className="container">
                    <p className="footer-copyright">Copyright © 2019 Molla Store. All Rights
                        Reserved.</p>
                    <ul className="footer-menu">
                        <li><a href="#">Terms Of Use</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>

                    <div className="social-icons social-icons-color">
                        <span className="social-label">Social Media</span>
                        <a href="#" className="social-icon social-facebook" title="Facebook" target="_blank"><i
                            className="icon-facebook-f"></i></a>
                        <a href="#" className="social-icon social-twitter" title="Twitter" target="_blank"><i
                            className="icon-twitter"></i></a>
                        <a href="#" className="social-icon social-instagram" title="Instagram"
                           target="_blank"><i
                            className="icon-instagram"></i></a>
                        <a href="#" className="social-icon social-youtube" title="Youtube" target="_blank"><i
                            className="icon-youtube"></i></a>
                        <a href="#" className="social-icon social-pinterest" title="Pinterest"
                           target="_blank"><i
                            className="icon-pinterest"></i></a>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Copyright;