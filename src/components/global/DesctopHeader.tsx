"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoCloseSharp } from "react-icons/io5";
import { AiOutlineMenuFold } from "react-icons/ai";
import { usePathname } from "next/navigation";
import ContactIcon from "@/icons/ContactIcon";
import HeaderServicwDropdown from "./HeaderServicwDropdown";

interface MenuLink {
  text: string;
  href: string;
}

interface NavItem {
  text: string;
  href?: string;
  subMenu?: MenuLink[];
}

const DesctopHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  // const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const pathname = usePathname();
  const [isServicesHovered, setIsServicesHovered] = useState(false);

  // const toggleAppointmentModal = () =>
  //   setIsAppointmentModalOpen(!isAppointmentModalOpen);

    const btnRef = useRef<HTMLButtonElement>(null);

    const [showServices, setShowServices] = useState(false);
const closeTimer = useRef<number | null>(null);

const openServices = () => {
  if (closeTimer.current) {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = null;
  }
  setShowServices(true);
};

const scheduleClose = () => {
  if (closeTimer.current) window.clearTimeout(closeTimer.current);
  // small delay prevents flicker when moving from tab to dropdown
  closeTimer.current = window.setTimeout(() => setShowServices(false), 120);
};


  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      btn.style.setProperty('--x', `${x}%`);
      btn.style.setProperty('--y', `${y}%`);
      btn.style.setProperty('--o', '1');
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;

      let x = 50, y = 50;
      const exitSpeed = 20; // how far the glow slides outward

      if (offsetX < 0) x = -exitSpeed;              // left
      else if (offsetX > rect.width) x = 100 + exitSpeed; // right
      else x = (offsetX / rect.width) * 100;

      if (offsetY < 0) y = -exitSpeed;              // top
      else if (offsetY > rect.height) y = 100 + exitSpeed; // bottom
      else y = (offsetY / rect.height) * 100;

      btn.style.setProperty('--x', `${x}%`);
      btn.style.setProperty('--y', `${y}%`);

      btn.style.setProperty('--o', '0');
    };

    btn.addEventListener('mousemove', handleMouseMove);
    btn.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      btn.removeEventListener('mousemove', handleMouseMove);
      btn.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const isActive = (path: string) => {
    return pathname === path;
  };

  const NavLinksData: NavItem[] = [
    {
      text: "home",
      href: "/",
    },
    {
      text: "About",
      href: "",
    },
    {
      text: "Services",
      href: "",
    },
    {
      text: "Products",
      href: "",
    },
    {
      text: "Case Studies",
      href: "",
    },
    {
      text: "Career",
      href: "",
    },
    {
      text: "Blog",
      href: "",
    },
  ];

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 60);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={` fixed  h-[4.5rem] md:h-[5rem] xxl:h-[6rem] w-full z-[60]  flex justify-center items-center     ${
          scrolled ? "top-0 shadow-xl bg-linear-to-r from-custom-black to-custom-black " : " top-0 bg-transparent  "
        }`}
      >
        {scrolled ? (<div className=" w-full  absolute">
          <div className=" absolute w-[20rem] h-[20rem] left-[40%] bg-custom-green bottom-0 blur-[120px] rounded-b-full"></div>
           <div className=" absolute w-[20rem] h-[20rem] left-0 bg-custom-darkblue bottom-0 blur-[120px] rounded-b-full"></div>
           <div className=" absolute w-[20rem] h-[20rem] right-0 bg-custom-darkblue bottom-0 blur-[120px] rounded-b-full"></div>

        </div>):""}
        <div className=" max-w-[1200px] w-full  h-full flex justify-between items-center  py-4  xl:px-16 lg:px-8  px-4">
          {/* Logo */}

          <Link href={"/"}>
            <Image
              src={"/images/logo.png"}
              alt="logo"
              width={336}
              height={356}
              priority
              className="md:h-[2.5rem] lg:h-[2.5rem] xlg:h-[3rem] xl:h-[2rem] xxl:h-[4rem] h-[2rem] w-fit"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center  justify-center gap-5">
          {NavLinksData.map((item, index) => (
  <li key={index} className="relative group">
    {/* If it’s a normal link */}
    {item.href && item.text !== "Services" ? (
      <Link
        href={item.href}
        className={`
          text-sm xlg:text-sm xl:text-base xxl:text-xl xxxl:text-xl font-medium capitalize 
          hover:text-custom-darkblue flex justify-center items-center rounded-full duration-700  text-shadow-sm  ${ isActive(item.href) ? "text-custom-darkblue" : "text-white" }`}
      >
        {item.text}
      </Link>
    ) : item.text === "Services" ? (
      // SPECIAL: Services hover zone
      <div
        className="relative"
        onMouseEnter={openServices}
        onMouseLeave={scheduleClose}
      >
        <span
          className={`text-sm xlg:text-sm xl:text-base xxl:text-xl xxxl:text-xl font-medium 
                     capitalize cursor-pointer flex justify-center items-center rounded-full text-shadow-sm text-white`}
        >
          {item.text}
        </span>
      </div>
    ) : (
      // Any other non-link with submenu (unchanged)
      <div className="relative">
        <span className={`text-sm xlg:text-sm xl:text-base xxl:text-xl xxxl:text-xl font-medium capitalize cursor-pointer flex justify-center items-center rounded-full  text-shadow-sm  text-white`}>
          {item.text}
        </span>
        {item.subMenu && item.subMenu.length > 0 && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 duration-500 transition-all origin-top-right opacity-0 group-hover:opacity-100 w-0 group-hover:w-auto overflow-hidden flex rounded bg-custom-darkgreen/80">
            <ul className="flex flex-col text-white whitespace-nowrap">
              {item.subMenu.map((menu, con) => (
                <li key={con} className="text-base xlg:text-lg p-2 xlg:p-4">
                  <Link href={menu.href} className="flex items-center gap-2 font-medium">
                    <span>&gt;</span>
                    {menu.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )}
  </li>
))}

          </ul>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center lg:gap-5 text-white xlg:text-lg text-base xl:text-xl font-medium">
            <button className="btn" ref={btnRef}
      id="downloadBtn">
              <ContactIcon className=" size-[2rem]" />
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <button
            type="button"
            className="inline-flex lg:hidden text-3xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            title="menu-open"
          >
            <svg width="0" height="0">
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1e3a8a" />
                <stop offset="100%" stopColor="#38bdf8" />
              </linearGradient>
            </svg>
            <span
              className={`transform transition-transform duration-500 ${
                isMenuOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              {isMenuOpen ? (
                <IoCloseSharp
                  style={{
                    fill: "url(#gradient1)",
                  }}
                />
              ) : (
                <AiOutlineMenuFold
                  style={{
                    fill: "url(#gradient1)",
                  }}
                />
              )}
            </span>
          </button>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="bg-black/90 absolute top-full w-full left-0 text-white lg:hidden p-6 pb-12 rounded-b-lg h-fit overflow-y-scroll">
              <ul className="flex flex-col gap-4 capitalize ">
                {NavLinksData.map((item, index) => (
                  <li key={index} className="relative">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="hover:text-primary lg:text-base text-base md:text-xl xlg:text-lg "
                      >
                        {item.text}
                      </Link>
                    ) : (
                      <div>
                        <div
                          className="flex justify-between items-center cursor-pointer lg:text-base text-base md:text-xl xlg:text-lg"
                          onClick={() =>
                            setOpenDropdown(
                              openDropdown === index ? null : index
                            )
                          }
                        >
                          <span className="capitalize">{item.text}</span>
                          <span>{openDropdown === index ? "-" : "+"}</span>
                        </div>

                        {openDropdown === index && (
                          <div
                            className={`duration-500 transition-all origin-top ${
                              openDropdown === index
                                ? "h-auto opacity-100"
                                : "h-0 opacity-0"
                            } overflow-hidden flex flex-col rounded`}
                          >
                            {item.subMenu && item.subMenu.length > 0 && (
                              <ul className="flex flex-col gap-4 p-2">
                                {item.subMenu.map((menu, subIndex) => (
                                  <li
                                    key={subIndex}
                                    className="lg:text-base text-base md:text-xl xlg:text-lg"
                                  >
                                    <Link
                                      href={menu.href}
                                      className="flex items-center gap-2"
                                    >
                                      <span className="text-primary">&gt;</span>
                                      {menu.text}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </li>
                ))}

                <Link
                  href={"/our-products"}
                  className=" h-[3rem] xxl:h-[4rem] rounded-full flex gap-2 justify-center items-center bg-gradient-to-r from-custom-black to-custom-lightblue  px-4  xlg:px-4 xl:px-6 font-medium"
                >
                  Shop Today
                </Link>
              </ul>
            </div>
          )}
        </div>
      </div>
    {showServices && (
  <div
    className="fixed inset-x-0 top-[4.5rem] md:top-[5rem] xxl:top-[6rem] z-[59]"
    onMouseEnter={openServices}
    onMouseLeave={scheduleClose}
  >
    {/* Optionally add a subtle backdrop click catcher if you ever want click-to-close
        <div className="absolute inset-0" onClick={() => setShowServices(false)} />
    */}
    <div className="relative flex justify-center items-center w-full px-4 xl:px-16 lg:px-8">
      <HeaderServicwDropdown />
    </div>
  </div>
)}
    </>
  );
};

export default DesctopHeader;
