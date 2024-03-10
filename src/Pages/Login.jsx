import React from 'react'
import Popular from '../Components/Popular/Popular';
import { NavLink } from "react-router-dom";

const Login = () => {
    return (
        <section>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Login to your account
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
                                <div className="text-sm">
                                    <a href="#" className="text-blue-400">
                                        Forgot password?
                                    </a>
                                </div>
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

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md primary-button px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#24ab70] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24ab70]"
                            >
                                Login Now
                            </button>
                        </div>
                    </form>

                    <p className="mt-5 text-center text-sm text-gray-500 capitalize">
                        Don't have an account?{' '}
                        <NavLink to="/register" className="text-blue-400">
                            Sign Up
                        </NavLink>
                    </p>
                </div>
            </div>
            <div className='px-3 py-12'>
                <Popular />
            </div>
        </section>
    )
}

export default Login