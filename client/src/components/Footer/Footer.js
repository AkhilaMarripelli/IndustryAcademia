function Footer() {
    return (
        <footer className="bg-light text-center text-lg-start">
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Jaldhaara</h5>
                        
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Contact Info</h5>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <p>call us: 040 2770 6789</p>
                            </li>
                            <li>
                                <p>Phone: +91 6281706245</p>
                            </li>
                            <li>
                                <p>Email: info@jaldhaara.org</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                &copy; 2024 MyApp
            </div> */}
        </footer>
    );
}

export default Footer;