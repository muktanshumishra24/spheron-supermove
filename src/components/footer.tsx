"use client";
import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-400 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">
            Spheron Supermove Tour
          </h2>
          <p className="mb-4">
            A Journey of Empowerment: Shaping India’s Blockchain Future!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:text-white transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-white transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition-colors">
                Contact
              </a>
            </li>
            <li>
              <a href="#privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://twitter.com"
              className="hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M24 4.557a9.839 9.839 0 01-2.827.775 4.92 4.92 0 002.165-2.723 9.865 9.865 0 01-3.127 1.196 4.916 4.916 0 00-8.37 4.482 13.942 13.942 0 01-10.125-5.14 4.918 4.918 0 001.524 6.575A4.904 4.904 0 01.964 8.578v.062a4.914 4.914 0 003.946 4.817 4.936 4.936 0 01-2.216.084 4.92 4.92 0 004.59 3.417A9.869 9.869 0 010 19.54a13.933 13.933 0 007.548 2.213c9.058 0 14.01-7.514 14.01-14.018 0-.213-.005-.426-.014-.637A10.012 10.012 0 0024 4.557z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              className="hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M22.225 0H1.771C.79 0 0 .782 0 1.75v20.495c0 .967.79 1.755 1.771 1.755h20.451c.98 0 1.779-.788 1.779-1.755V1.75C24 .782 23.205 0 22.225 0zM7.121 20.452H3.577V9.029h3.544v11.423zm-1.775-13.01a2.061 2.061 0 110-4.122 2.061 2.061 0 010 4.122zm15.366 13.01h-3.544v-5.955c0-3.08-4.093-2.846-4.093 0v5.955h-3.544V9.029h3.544v1.561c1.552-2.877 8.091-3.082 8.091 2.739v7.123z" />
              </svg>
            </a>
            <a
              href="https://github.com"
              className="hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M12 .297C5.373.297 0 5.671 0 12.297c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.173c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.084-.73.084-.73 1.205.085 1.84 1.236 1.84 1.236 1.072 1.836 2.81 1.305 3.495.998.107-.776.42-1.305.763-1.605-2.665-.303-5.467-1.333-5.467-5.93 0-1.311.469-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.009-.322 3.3 1.23a11.51 11.51 0 016 0c2.29-1.553 3.296-1.23 3.296-1.23.656 1.653.245 2.873.12 3.176.77.84 1.233 1.91 1.233 3.221 0 4.607-2.807 5.624-5.48 5.92.43.37.812 1.097.812 2.214v3.286c0 .322.218.694.825.575C20.565 22.092 24 17.597 24 12.297 24 5.671 18.627.297 12 .297z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Your Brand. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
