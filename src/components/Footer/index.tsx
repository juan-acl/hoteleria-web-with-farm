import "./footer.css";

export const Footer = () => {
    return (
        <>
            <footer>
                <div className="principal__info">
                    <div className="footer__info">
                        <h4 className="title__footer__info">About Us</h4>
                        <span className="description__footer__info">
                            Company
                        </span>
                        <span className="description__footer__info">
                            Mision
                        </span>
                        <span className="description__footer__info">
                            Vision
                        </span>
                        <span className="description__footer__info">Blog</span>
                    </div>
                    <div className="footer__info">
                        <h4 className="title__footer__info">
                            Customer Service
                        </h4>
                        <span className="description__footer__info">FAQs</span>
                        <span className="description__footer__info">
                            Live Chat
                        </span>
                        <span className="description__footer__info">
                            Booking Policy
                        </span>
                        <span className="description__footer__info">
                            Cancellation Policy
                        </span>
                    </div>
                    <div className="footer__info">
                        <h4 className="title__footer__info">Explore</h4>
                        <span className="description__footer__info">
                            Destinations
                        </span>
                        <span className="description__footer__info">
                            Special Offerts
                        </span>
                        <span className="description__footer__info">
                            Travels
                        </span>
                        <span className="description__footer__info">
                            Guides
                        </span>
                    </div>
                    <div className="footer__info">
                        <h4 className="title__footer__info">Support</h4>
                        <span className="description__footer__info">
                            Privacy Policy
                        </span>
                        <span className="description__footer__info">
                            Terms & Conditions
                        </span>
                        <span className="description__footer__info">
                            Sitemap
                        </span>
                        <span className="description__footer__info">
                            Feedback
                        </span>
                    </div>
                </div>
                <div>
                    <div className="line__footer"></div>
                </div>
            </footer>
        </>
    );
};
