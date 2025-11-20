import React from "react";
import Image from "next/image";
import Logo from "../../../public/logo.svg";
import Link from "next/link";

export default function navbar() {
  return (
    <>
      <header>
        <div className="container">
          <div className="header-wrapper">
            <a href="/" className="header-logo-content">
              <Image
                src={Logo}
                alt="Site Logo"
                className="logo-img"
                width={100}
                height={100}
              />
            </a>
            <ul className="header-list">
              <li className="header-option">
                <Link href="" className="header-link">
                  Home
                </Link>
              </li>
              <li className="header-option">
                <Link href="" className="header-link">
                  About
                </Link>
              </li>
              <li className="header-option">
                <Link href="" className="header-link">
                  Pages
                </Link>
              </li>
              <li className="header-option">
                <Link href="" className="header-link">
                  Our Menu
                </Link>
              </li>
              <li className="header-option">
                <Link href="" className="header-link">
                  Contact
                </Link>
              </li>
            </ul>
            <form>
              <div className="form-input-wrapper">
                <div className="form-input-content">
                  <input
                    type="search"
                    placeholder="Search.."
                    className="search-input"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icon-tabler-search"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                    <path d="M21 21l-6 -6" />
                  </svg>
                </div>
                <a href="javascriptvoid(0)" className="header-cart-icon">
                <svg xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-basket"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M5.001 8h13.999a2 2 0 0 1 1.977 2.304l-1.255 7.152a3 3 0 0 1 -2.966 2.544h-9.512a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304z" /><path d="M17 10l-2 -6" /><path d="M7 10l2 -6" /></svg>
                </a>
              </div>
            </form>
          </div>
        </div>
      </header>
    </>
  );
}
