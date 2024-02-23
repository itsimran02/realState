import React from 'react';
import { NavLink } from "react-router-dom";
import AboutUs from '../Components/About/AboutUs';

const Register = () => {
  return (
    <section>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-left text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Create an account
                    </h2>
                </div>

                <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder="Enter your email"
                                    required
                                    className="block w-full rounded-md border border-slate-300 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-2 focus:ring-2 focus:ring-inset focus:ring-[#24ab70] sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    placeholder="Enter your password"
                                    required
                                    className="block w-full rounded-md border border-slate-300 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-2 focus:ring-2 focus:ring-inset focus:ring-[#24ab70] sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className='gap-y-7'>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md primary-button px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#24ab70] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24ab70]"
                            >
                                Create account
                            </button>
                            <button
                            class="flex w-full justify-center rounded-md bg-[#d1e9ff] px-3 mt-5 py-1.5 text-sm font-semibold leading-6 text-blue-700 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24ab70]">
                            <div class="pt-1 rounded-full">
                                <svg class="w-4" viewBox="0 0 533.5 544.3">
                                    <path
                                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                        fill="#4285f4" />
                                    <path
                                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                        fill="#34a853" />
                                    <path
                                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                        fill="#fbbc04" />
                                    <path
                                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                        fill="#ea4335" />
                                </svg>
                            </div>
                            <span class="ml-2">
                                Continue with Google
                            </span>
                        </button>
                        </div>
                    </form>

                    <p className="mt-5 text-center text-sm text-gray-500 capitalize">
                    Already have an account?{' '}
                        <NavLink to="/login" className="text-blue-400">
                            Log in
                        </NavLink>
                    </p>
                </div>
            </div>
            <div className='px-3 py-12'>
                <AboutUs />
            </div>
        </section>
  )
}

export default Register