const Footer = () => {
    return (
        <footer className="footer max-w-screen-2xl justify-between mx-auto  p-10">
            <aside>
                <img
                    className="w-20 h-16"
                    src="https://png.pngtree.com/png-vector/20220922/ourmid/pngtree-language-learning-png-image_6211944.png"
                    alt="Language Exchange Logo"
                />
                <p>
                    Language Exchange Ltd.
                    <br />
                    Connecting people through languages since 2010
                </p>
            </aside>
            <nav>
                <h6 className="footer-title text-gray-700 dark:text-slate-50">Services</h6>
                <a className="link link-hover text-gray-600 dark:text-slate-400">Language Learning</a>
                <a className="link link-hover text-gray-600 dark:text-slate-400">Cultural Exchange</a>
                <a className="link link-hover text-gray-600 dark:text-slate-400">Online Courses</a>
                <a className="link link-hover text-gray-600 dark:text-slate-400">Translation Services</a>
            </nav>
            <nav>
                <h6 className="footer-title text-gray-800 dark:text-slate-50">Company</h6>
                <a className="link link-hover text-gray-600 dark:text-slate-400">About Us</a>
                <a className="link link-hover text-gray-600 dark:text-slate-400">Contact</a>
                <a className="link link-hover text-gray-600 dark:text-slate-400">Careers</a>
                <a className="link link-hover text-gray-600 dark:text-slate-400">Media Kit</a>
            </nav>
            <nav>
                <h6 className="footer-title text-gray-800 dark:text-slate-50">Legal</h6>
                <a className="link link-hover text-gray-600 dark:text-slate-400">Terms of Service</a>
                <a className="link link-hover text-gray-600 dark:text-slate-400">Privacy Policy</a>
                <a className="link link-hover text-gray-600 dark:text-slate-400">Cookie Policy</a>
            </nav>
        </footer>
    );
};

export default Footer;
