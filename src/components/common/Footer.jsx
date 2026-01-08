import { Link } from 'react-router';

function Footer() {
    return (
        <footer className="site-footer site-footer-three">
            <div className="site-footer-three__shape-1 float-bob-y">
                <img
                    src="/assets/images/shapes/site-footer-three-shape-1.png"
                    alt=""
                />
            </div>
            <div className="site-footer__top">
                <div className="container">
                    <div className="site-footer__top-inner">
                        <div className="row">
                            <div
                                className="col-xl-5 col-lg-4 col-md-6 wow fadeInUp"
                                data-wow-delay="100ms"
                            >
                                <div className="footer-widget__about">
                                    <div className="footer-widget__about-logo">
                                        <Link to="/">
                                            <img src="/assets/logos/bsfoundation_logo_large.png" alt="BS Foundation" />
                                        </Link>
                                    </div>
                                    <p className="footer-widget__about-text">
                                        Charity and donation is category that <br />
                                        involves giving.
                                    </p>
                                    <div className="site-footer__social">
                                        <a href="#">
                                            <i className="icon-facebook"></i>
                                        </a>
                                        <a href="#">
                                            <i className="icon-twitter"></i>
                                        </a>
                                        <a href="#">
                                            <i className="icon-instagram"></i>
                                        </a>
                                        <a href="#">
                                            <i className="icon-youtube"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                                data-wow-delay="200ms"
                            >
                                <div className="footer-widget__links">
                                    <h4 className="footer-widget__title">Quick links</h4>
                                    <ul className="footer-widget__links-list list-unstyled">
                                        <li>
                                            <Link to="/about">About Us</Link>
                                        </li>
                                        <li>
                                            <Link to="/services">Our Services</Link>
                                        </li>
                                        <li>
                                            <Link to="/team">Our Team</Link>
                                        </li>
                                        <li>
                                            <Link to="/faq">FAQ</Link>
                                        </li>
                                        <li>
                                            <Link to="/blog">Our Blog</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div
                                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                                data-wow-delay="300ms"
                            >
                                <div className="footer-widget__services">
                                    <h4 className="footer-widget__title">Services</h4>
                                    <ul className="footer-widget__links-list list-unstyled">
                                        <li>
                                            <Link to="/about">Emergency Relief</Link>
                                        </li>
                                        <li>
                                            <Link to="/about">Medical Outreach</Link>
                                        </li>
                                        <li>
                                            <Link to="/about">Educational Support</Link>
                                        </li>
                                        <li>
                                            <Link to="/about">Mental Health</Link>
                                        </li>
                                        <li>
                                            <Link to="/about">Community Development</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-footer__middle">
                <div className="container">
                    <ul className="site-footer__middle-list list-unstyled">
                        <li>
                            <div className="icon">
                                <span className="icon-location"></span>
                            </div>
                            <div className="content">
                                <h3>Visit our office</h3>
                                <p>
                                    4517 Washington Ave. Manchester, <br />
                                    Kentucky 39495
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <span className="icon-mail"></span>
                            </div>
                            <div className="content">
                                <h3>Send us an Email</h3>
                                <p>
                                    <a href="mailto:chioary@gmail.com">example@gmail.com</a>
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <span className="icon-call-two"></span>
                            </div>
                            <div className="content">
                                <h3>Ask any questions</h3>
                                <p>
                                    <a href="tel:2395550108">(239) 555-0108</a>
                                    <span> - </span>
                                    <a href="tel:2395550108">(239) 555-0108</a>
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="site-footer__bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="site-footer__bottom-inner">
                                <div className="site-footer__copyright">
                                    <p className="site-footer__copyright-text">
                                        © 1995-2024 All rights for
                                        <a href="#">Hermony</a> exclusive
                                    </p>
                                </div>
                                <div className="site-footer__bottom-menu-box">
                                    <ul className="list-unstyled site-footer__bottom-menu">
                                        <li>
                                            <Link to="/about">Terms of Service</Link>
                                        </li>
                                        <li>
                                            <Link to="/about">Privacy policy</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
