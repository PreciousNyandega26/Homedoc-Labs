
const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-[                  
            © {new Date().getFullYear()} HomeDoc Labs. All rights reserved.
          </p>
          
          <ul className="flex space-x-6 mt-4 md:mt-0">
            <li>
              <a href="#privacy" className="text-[#1a1a1a] hover:text-[#00e676] text-sm">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="                                                                
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#contact" className="text-[#1a1a1a] hover:text-[#00e676] text-sm">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
