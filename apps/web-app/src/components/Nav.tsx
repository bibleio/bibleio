import { Button, Logo } from "@bibleio/design";
import { useState } from "react";

export function Nav({ path }: { path: string }) {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex h-fit max-h-screen min-h-0 w-screen flex-col text-text max-[770px]:h-screen">
      <div className="flex justify-between p-16">
        <div className="flex h-[2.5rem] items-center rounded-full border border-stroke bg-fg-1 px-24 py-12 shadow-popup">
          <a
            href="/"
            className="duration-150 ease-out hover:-translate-y-2 active:translate-y-2"
          >
            <Logo size={26} subText="App" />
          </a>
        </div>
        <div className="flex h-[2.5rem] gap-24 items-center rounded-full border border-stroke bg-fg-1 px-24 py-12 shadow-popup max-[770px]:hidden max-[770px]:h-full">
          <a
            href="/bible"
            className={`text-body leading-none duration-150 ease-out hover:text-accent-reversed ${path === "/bible" && "font-semibold"}`}
          >
            Bible
          </a>
        </div>
        <div className="h-[2.5rem] w-fit items-center justify-center gap-24 rounded-full border border-stroke bg-fg-1 px-24 shadow-popup max-[770px]:flex min-[770px]:hidden">
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
      <div
        className={`m-16 mt-0 h-full min-h-0 flex-col items-center gap-[40px] overflow-y-scroll rounded-16 border border-stroke bg-fg-1 p-24 shadow-popup ${navOpen ? "flex animate-scale-in" : "hidden"}`}
      >
        <a
          href="/bible"
          className={`text-h4 leading-none  ${path === "/bible" && "font-semibold"}`}
        >
          Bible
        </a>
      </div>
    </nav>
  );
}

const Menu = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.5rem"
    height="1.5rem"
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
const Close = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.5rem"
    height="1.5rem"
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

const ChevronDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1rem"
    height="1rem"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="origin-center duration-150 ease-out group-hover:text-accent-reversed group-data-[state=open]:-rotate-180"
  >
    <path d="M4 6L8 10L12 6" />
  </svg>
);

const ArrowUpRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1rem"
    height="1rem"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M11.3332 4.66699L4.6665 11.3337M11.3332 4.66699H5.33317M11.3332 4.66699V10.667" />
  </svg>
);
