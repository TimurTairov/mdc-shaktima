import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer-1 max-w-screen-xl mx-auto border-t mt-auto py-10 px-2 bg-gray-100">
      <div className="md:flex">
        <div className="w-full mb-5 md:w-2/5">
          <h6 className="dark:text-white font-semibold text-gray-700 mb-4">Company</h6>
          <ul>
            <li>
              <a className="footer-link" href="#">
                Team
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                About us
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full mb-5 md:w-2/5">
          <h6 className="dark:text-white font-semibold text-gray-700 mb-4">Content</h6>
          <ul>
            <li>
              <a className="footer-link" href="#">
                Block
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Policy
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Documentation
              </a>
            </li>
          </ul>
        </div>

        <div className="w-1/5">
          <h6 className="dark:text-white font-semibold text-gray-700 mb-4">Contact Us</h6>
          <ul className="flex">
            <li className="mr-2">
              <a className="footer-link" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-7 h-7 stroke-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  />
                </svg>
              </a>
            </li>
            <li className="mr-2">
              <a className="footer-link" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-7 h-7 stroke-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-7 h-7 stroke-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
