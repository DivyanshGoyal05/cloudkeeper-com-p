
const Footer = () => (
  <footer className="bg-white border-t border-gray-200 py-10 px-4 text-gray-700">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
      <div>
        <img src="/logo.svg" alt="CloudKeeper Logo" className="h-8 mb-4" />
        <p className="text-sm mb-4">
          Be the first to know the latest FinOps insights and news!
        </p>
        <form className="flex gap-2">
          <input
            type="email"
            placeholder="Your email"
            className="px-3 py-2 border rounded w-full"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-700 text-white rounded font-semibold"
          >
            Subscribe
          </button>
        </form>
      </div>
      <div>
        <h4 className="font-bold mb-2">Solutions</h4>
        <ul className="space-y-1 text-sm">
          <li>
            <a href="#" className="hover:text-blue-700">
              CloudKeeper AZ
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-700">
              CloudKeeper EDP+
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-700">
              CloudKeeper Axis
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-700">
              CloudKeeper Lens
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-700">
              CloudKeeper Tune
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-2">Company</h4>
        <ul className="space-y-1 text-sm">
          <li>
            <a href="#" className="hover:text-blue-700">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-700">
              Careers
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-700">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-700">
              Blog
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-2">Follow Us</h4>
        <div className="flex gap-3 mb-4">
          <span className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            F
          </span>
          <span className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            T
          </span>
          <span className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            L
          </span>
          <span className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            Y
          </span>
        </div>
        <div className="flex flex-col gap-2 text-black">
          <div>
            <img
              src="/icons/Cloudkeeper_New.svg"
              alt="CloudKeeper Logo"
              width={150}
              height={40}
            />
          </div>
          <div>Copyright ©2025</div>
        </div>
      </div>
    </div>
    <div className="text-center text-xs text-gray-400">
      &copy; {new Date().getFullYear()} CloudKeeper. All rights reserved.
    </div>
  </footer>
);

export default Footer;
