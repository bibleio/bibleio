import { Logo } from "@bibleio/design";
import { useState } from "react";

export function Nav({ path }: { path: string }) {
  const [navOpen, setNavOpen] = useState(false);

  const navItems = [
    { text: "Home", link: "/" },
    { text: "API", link: "/api" },
    { text: "Design", link: "/design" },
    { text: "BibleJSON", link: "/biblejson" },
  ];

  return (
    <nav className="sticky top-0 z-50 flex h-72 w-screen flex-col">
      <div className="flex justify-between p-16">
        <div className="flex h-[40px] items-center rounded-full border border-stroke bg-fg-2 px-24 py-12 shadow-popup">
          <a
            href="/"
            className="duration-150 ease-out hover:-translate-y-2 active:translate-y-2"
          >
            <Logo size={26} subText="Developers" />
          </a>
        </div>
        <div className="flex h-[40px] items-center gap-24 rounded-full border border-stroke bg-fg-2 px-24 py-12 shadow-popup">
          {navItems.map((item, index) => (
            <a
              key={item.text}
              href={item.link}
              className={`text-body leading-none text-text duration-150 ease-out hover:text-accent-reversed max-[680px]:hidden ${path === item.link && "font-semibold"}`}
            >
              {item.text}
            </a>
          ))}
          <a
            href="https://discord.com/invite/7eVCyQ5GGb"
            className="max-[680px]:hidden"
          >
            <Discord />
          </a>
          <a href="https://github.com/bibleio" className="max-[680px]:hidden">
            <GitHub />
          </a>
          <div className="items-center max-[680px]:flex min-[680px]:hidden">
            {navOpen ? (
              <button
                type="button"
                onClick={() => {
                  setNavOpen(!navOpen);
                }}
                className="animate-scale-in"
              >
                <Close />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setNavOpen(!navOpen);
                }}
                className="active:animate-scale-out"
              >
                <Menu />
              </button>
            )}
          </div>
        </div>
      </div>
      <div
        className={`m-16 mt-0 flex-col items-center gap-36 rounded-16 border border-stroke bg-fg-2 p-24 shadow-popup ${navOpen ? "flex animate-scale-in" : "hidden"}`}
      >
        {navItems.map((item, index) => (
          <a
            key={item.text}
            href={item.link}
            className={`text-h4 leading-none text-text ${path === item.link && "font-semibold"}`}
            onClick={() => {
              setNavOpen(false);
            }}
          >
            {item.text}
          </a>
        ))}
        <a
          href="https://discord.com/invite/7eVCyQ5GGb"
          className="text-h4 leading-none text-text"
        >
          Discord
        </a>
        <a
          href="https://github.com/bibleio"
          className="text-h4 leading-none text-text"
        >
          GitHub
        </a>
      </div>
    </nav>
  );
}

const Menu = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-text"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 8l16 0" />
      <path d="M4 16l16 0" />
    </svg>
  );
};
const Close = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-text"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
};
const Discord = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-text duration-150 ease-out hover:text-accent-reversed"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
      <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
      <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3" />
      <path d="M7 16.5c3.5 1 6.5 1 10 0" />
    </svg>
  );
};
const GitHub = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-text duration-150 ease-out hover:text-accent-reversed"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
    </svg>
  );
};
