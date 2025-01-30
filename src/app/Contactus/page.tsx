import { IoSearch } from "react-icons/io5";
import { CiMobile1 } from "react-icons/ci";


export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col py-10">
      {/* Main Heading */}
      <h1 className="text-3xl font-bold text-black mb-6 text-center">GET HELP</h1>

      {/* Search Section */}
      <div className="relative w-full max-w-md mx-auto mb-10">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
     <IoSearch/>
        </div>
        <input
          type="text"
          placeholder="What can we help you with?"
          className="w-full border border-gray-300 px-12 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
        />
                
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col lg:flex-row w-full mt-4">
        {/* Left Section 60% */}
        <div className="lg:w-3/5 bg-white py-8 px-10 border-r border-gray-300">
          {/* Intro Heading */}
          <h1 className="text-2xl font-bold text-black mb-4">What Payment Options Can I Use on Nike Orders?</h1>
          <p className="text-black mb-6 leading-relaxed text-sm">
          We want to make buying your favorite Nike shoes and gear online fast and easy, and we accept the following payment options:</p>
             <p className="mb-5 text-sm">
          Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro
        </p>
        <p className="mb-4 text-sm">If you enter your PAN information at checkout, you'll be able to pay for your order with PayTM or a local credit or debit card.</p>
        <p className="mb-6">Apple Pay </p>
        <p className="mb-4 text-sm"> Nike Members can store multiple debit or credit cards in their profile for faster checkout. If you're not already a Member, join us today.</p>


          {/* Divider */}
          <hr className="border-t-2 border-gray-300 mb-6" />

          {/* Buttons Section */}
          <div className="flex gap-4 mb-6">
            {/* Login Button */}
            <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800">
              <a href="/login">JOIN US</a>
            </button>

            {/* Sign-Up Button */}
            <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800">
              <a href="/signin">SHOP NIKE</a>
            </button>
          </div>

          {/* Section with headings & paragraphs */}
          <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">FAQs</h2>
        <div className="mb-4">
          <p className="font-semibold">Does my card need international purchases enabled?</p>
          <p className="text-sm mb-2">Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.</p>
        <p className="text-sm">Please note, some banks may charge a small transaction fee for international orders.</p>
        </div>
        <div className="mb-4">
          <p className="font-semibold">Can I pay for my order with multiple methods?</p>
          <p className="text-sm">No, payment for Nike orders can't be split between multiple payment methods.</p>
        </div>
        <div className="mb-4">
          <p className="font-semibold">What payment method is accepted for SNKRS orders?</p>
          <p className="text-sm">You can use any accepted credit card to pay for your SNKRS order.</p>
        </div>
        <div className="mb-4">
          <p className="font-semibold">Why don’t I see Apple Pay as an option?</p>
          <p className="text-sm">To see Apple Pay as an option in the Nike App or on Nike.com, you’ll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet.</p>
             </div>
           </div>
        </div>

        {/* Right Section 40% */}
        <div className="lg:w-2/6 bg-gray-100 py-8 px-6 flex flex-col justify-center items-center">
          {/* Centered Heading */}
          <h1 className="text-2xl font-bold text-black mb-4">CONTACT US</h1>
          <div className="flex items-center mb-4">
        <img src="/phone.png" alt="Phone" className="h-8 w-8 mr-3" />
        <div>
          <p>000 800 919 0566</p>
          <p>Products & Orders: 24 hours a day, 7 days a week</p>
          <p>Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</p>
        </div>
      </div>

      <div className="flex items-center mb-4">
        <img src="/chat.png" alt="Chat" className="h-6 w-6 mr-3" />
        <p>24 hours a day, 7 days a week</p>
      </div>

      <div className="flex items-center mb-4">
        <img src="/email.png" alt="Email" className="h-6 w-6 mr-3" />
        <p>We’ll reply within five business days</p>
      </div>

      <div className="flex items-center">
        <img src="/store.png" alt="Nike" className="h-6 w-6 mr-3" />
        <p>
          <strong>STORE LOCATOR</strong>: Find Nike retail stores near you
        </p>
      </div>


                  </div>
      </div>
    </div>
  );
}