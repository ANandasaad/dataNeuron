const Footer = () => {
  return (
    <div className="flex flex-col justify-center bg-white text-black py-8 shadow-2xl rounded-lg">
      <div className="  gap-4 mx-auto flex  justify-between items-center">
        <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
          <h2 className="text-xl font-bold mb-4">Company Name</h2>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm leading-relaxed">
            123 Street Name, City, Country
          </p>
          <p className="text-sm leading-relaxed">Email: info@example.com</p>
          <p className="text-sm leading-relaxed">Phone: +1234567890</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4">
          <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm">
          {" "}
          &copy; {new Date().getFullYear()} Company Name. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
