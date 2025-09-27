import React from "react";

const Register = () => {
  return (
    <div>
      <div className="py-20 bg-nu10">
        <div className="container-2">
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <form className="bg-white shadow-md rounded-2xl px-10 py-10 w-full max-w-2xl space-y-4">
              <h1 className="text-xl font-bold text-center">
                Login your account
              </h1>

              {/* Email */}
              <div>
                <label htmlFor="name" className="block mb-1 font-semibold">
                  Name
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email..."
                  className="w-full px-3 py-2 border border-nu60 placeholder:text-nu20 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="email" className="block mb-1 font-semibold">
                  Email
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password..."
                  className="w-full px-3 py-2 border border-nu60 placeholder:text-nu20 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full text-white py-2 rounded-xl bg-secondary1 duration-500  font-bold"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
