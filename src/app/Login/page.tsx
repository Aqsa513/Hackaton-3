export default function Login() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-80 p-6 bg-white rounded shadow-md">
          <div className="text-center mb-6">
            <img src="/nike.png" alt="Nike Logo" className="mx-auto h-6 mb-4" />
            <h2 className="text-lg text-center font-semibold">YOUR ACCOUNT FOR EVERYTHING NIKE</h2>
          </div>
          <form>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-xs text-gray-500">Keep me signed in</span>
              </label>
              <a href="#" className=" flex text-xs text-gray-500 hover:underline mb-0">
                Forgotten your password?
              </a>
            </div>
            <p className="text-xs text-gray-600 mb-6">
          By logging in, you agree to Nike's{" "}
          <a href="#" className="text-gray-500 hover:underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="text-gray-500 hover:underline">
            Terms of Use
          </a>.
        </p>
            <button
              type="submit"
              className="w-full py-2 bg-black text-white font-normal rounded hover:bg-black"
            >
              SIGN IN
            </button>
          </form>
          <div className="text-center mt-4 text-x-s font-normal text-gray-500">
            Not a Member?{' '}
            <a href="#" className="text-black hover:underline">
              Join Us
            </a>
          </div>
        </div>
      </div>
    );
  }