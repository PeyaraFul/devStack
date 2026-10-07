const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal text-black text-base-content p-10">
        <aside>
          <img src="/public/devstack-logo.png" alt="devstack logo" />
          <p>
            Curated tools, technologies, and resources for
            <br />
            developers building modern software.
          </p>
          <div className="flex gap-6 font-semibold cursor-pointer underline">
            <a>Github</a>
            <a>Twitter</a>
            <a>LinkedIn</a>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">Product</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Technology</a>
          <a className="link link-hover">Projects</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Careers</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of service</a>
          <a className="link link-hover">Privacy policy</a>
        </nav>
        
      </footer>
      <div className="mt-15 text-black p-4 flex justify-between">
          <p>Copyright © 2023 - All right reserved by Devstack</p>
          <a className="link">Terms of service</a>
        </div>
    </div>
  );
};

export default Footer;
