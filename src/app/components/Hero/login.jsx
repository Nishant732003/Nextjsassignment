"use client"
import React, { useState } from "react";
import Image from "next/image";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="flex flex-col justify-center px-4 py-6 sm:px-8 mt-12">
      <div className="mx-auto w-full max-w-sm">
        <div className="flex justify-center mb-6">
          <span
            className={`text-xl font-bold cursor-pointer ${
              isSignIn ? "underline text-searchIcon" : ""
            }`}
            onClick={() => setIsSignIn(true)}
          >
            Sign In
          </span>
          <span className="mx-4"> </span>
          <span
            className={`text-xl font-bold cursor-pointer ${
              !isSignIn ? "underline text-searchIcon" : ""
            }`}
            onClick={() => setIsSignIn(false)}
          >
            Join In
          </span>
        </div>
        <form className="space-y-6">
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-8 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 border border-searchIcon"
            >
              <Image className="w-6 h-5 mr-3" src="/Google.svg" alt="Google" />
              Continue With Google
            </button>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-8 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 border border-searchIcon"
            >
              <Image
                className="w-6 h-5 mr-3"
                src="/Facebook.svg"
                alt="Facebook"
              />
              Continue With Facebook
            </button>
            <Image className="mt-1.5" src="/Connect.svg" alt="Connect" />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-4 text-gray-900 mt-4"
            >
              Email
            </label>
            <div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-b py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border border-black"
              />
            </div>
          </div>

          <div>
            <div className="mt-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-4 text-gray-900"
              >
                Password
              </label>
              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-b py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border border-black"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 border border-black"
              />
              <label htmlFor="remember-me" className="ml-2 text-gray-600">
                Remember me
              </label>
            </div>

            <a
              href="#"
              className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Forgot password?
            </a>
          </div>

          <div>
            <button
              type="submit"
              className={`flex w-full justify-center rounded-md px-8 py-2 text-sm font-semibold leading-6 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 border border-black ${
                isSignIn
                  ? "bg-searchIcon text-searchInputBg hover:bg-indigo-500 focus:ring-indigo-600"
                  : "bg-searchIcon text-searchInputBg hover:bg-purple-600 focus:ring-purple-600"
              }`}
            >
              {isSignIn ? "Continue" : "Agree and Continue"}
            </button>
          </div>

          {!isSignIn && (
            <p className="text-sm text-gray-300 text-center mt-1">
              By continuing you agree to our{" "}
              <a
                style={{ fontWeight: 700 }}
                href="#"
                className="text-indigo-300 hover:text-indigo-500"
              >
                Terms of Service{" "}
              </a>
              and{" "}
              <a
                style={{ fontWeight: 700 }}
                href="#"
                className="text-indigo-300 hover:text-indigo-200"
              >
                privacy policy
              </a>
              .
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
