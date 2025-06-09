// components/FooterBottom.tsx
import Image from "next/image";

const FooterBottom = () => {
  return (
    <div className="bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-4">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div>
            <h4 className="font-bold text-gray-800">Follow Us</h4>
          </div>

          <div className="flex gap-3 justify-center items-center">
            <a href="#" className="hover:opacity-80">
              <Image
                src="/icons/in.svg"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </a>
            <a href="#" className="hover:opacity-80">
              <Image
                src="/icons/twitter_0.svg"
                alt="Twitter"
                width={24}
                height={24}
              />
            </a>
            <a href="#" className="hover:opacity-80">
              <Image
                src="/icons/youtube_0.svg"
                alt="YouTube"
                width={24}
                height={24}
              />
            </a>
            <a href="#" className="hover:opacity-80">
              <Image
                src="/icons/medium-logo-93CDCF6451-seeklogo.com 1.svg"
                alt="Medium"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 py-2 text-gray-600">
          <a href="#" className="hover:text-blue-600">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-blue-600">
            Responsible Disclosure
          </a>
        </div>

        <div className="flex flex-col gap-1 text-gray-600">
          <div>
            <Image
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
  );
};

export default FooterBottom;
