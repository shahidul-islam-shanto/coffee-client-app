import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { singInEmailPassword } = useContext(AuthContext);

  const handleLogIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    singInEmailPassword(email, password)
      .then((result) => {
        console.log(result.user);
        const users = {
          email,
          lastLoggedAt: result.user?.metadata?.lastSignInTime,
        };

        // last logged in the database
        fetch("http://localhost:5000/showUsers", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(users),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <div className="bg-nu10">
        <div className="container-2">
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <form
              onSubmit={handleLogIn}
              className="bg-white shadow-md rounded-2xl px-10 py-10 w-full max-w-2xl space-y-4"
            >
              <h1 className="text-xl font-bold text-center">
                Login your account
              </h1>

              {/* Email */}
              <div>
                <label htmlFor="name" className="block mb-1 font-semibold">
                  Email
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
                  Password
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
                className="w-full text-white py-2 rounded-xl bg-secondary1 duration-500 cursor-pointer  font-bold"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
