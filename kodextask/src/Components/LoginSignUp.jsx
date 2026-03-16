import React, { useState } from "react";

const LoginSignUp = () => {
  const [isSignup, setIsSignup] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">

      <div className="w-full max-w-md bg-slate-100 rounded-2xl shadow-lg p-8">

        {/* TITLE */}
        <h2 className="text-3xl font-bold text-center text-slate-800">
          {isSignup ? "Create account" : "Welcome back"}
        </h2>

        <p className="text-center text-gray-500 mt-2">
          {isSignup ? "Join us today" : "Login to your account"}
        </p>

        {/* FORM */}
        <form className="mt-6 space-y-4">

          {/* FULL NAME (Signup only) */}
          {isSignup && (
            <div>
              <label className="text-sm text-gray-600">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-600"
              />
            </div>
          )}

          {/* EMAIL */}
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-600"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-600"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full mt-4 bg-slate-900 text-white py-3 rounded-lg hover:bg-slate-700 transition"
          >
            {isSignup ? "Sign up" : "Login"}
          </button>

        </form>

        {/* TOGGLE */}
        <p className="text-center text-gray-600 mt-6">
          {isSignup
            ? "Already have an account?"
            : "Don't have an account?"}{" "}
          <span
            onClick={() => setIsSignup(!isSignup)}
            className="text-slate-900 font-semibold cursor-pointer hover:underline"
          >
            {isSignup ? "Sign in" : "Sign up"}
          </span>
        </p>

      </div>
    </div>
  );
};

export default LoginSignUp;