"use client";
import { Logo } from "@/assets";
import { nav } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "../elements/Button";
import { H4 } from "../elements/Typography";
import { usePathname } from "next/navigation";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
const Navbar = () => {
  const pathname = usePathname();
  const [isNav, setIsNav] = useState(false);
  return (
    <nav className="h-[80px] bg-transparent">
      <div className="container h-full flex items-center justify-between">
        <div className="flex items-center justify-center">
          <Image
            src={Logo}
            width={80}
            height={80}
            alt="Arbitra Logo"
            className="object-cover"
          />
          <H4 className="font-poppins text-white">Arbitra</H4>
        </div>
        <div
          className={`fixed top-0 lg:left-0 ${
            isNav ? "left-0" : "-left-full"
          } transition-all duration-300
                      z-10 lg:relative w-9/12 lg:w-auto h-screen lg:h-fit bg-n-3 lg:bg-transparent flex flex-col lg:flex-row items-stretch lg:items-center
                      justify-start lg:justify-between flex-1 p-8 lg:p-0`}
        >
          <ul className="lg:flex-1 flex flex-col lg:flex-row items-center gap-8 justify-center font-poppins">
            {nav.links.map((link, key) => (
              <li
                key={key}
                className={
                  `${pathname === link.href ? "text-primary" : "text-white/65"} hover:text-primary transition-all`
                }
              >
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
          </ul>
          <div className="pt-8 lg:pt-0">
            <Link href="/" className="w-full">
              <Button className="w-full">Get Started</Button>
            </Link>
          </div>
        </div>
        <div className="block lg:hidden">
          {isNav ? (
            <IoCloseOutline size={30} onClick={() => setIsNav(!isNav)} color="white"/>
          ) : (
            <IoMenuOutline size={30} onClick={() => setIsNav(!isNav)} color="white"/>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
