import { Button, Logo } from "@bibleio/design";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { useState } from "react";

export function Nav({ path }: { path: string }) {
  const [navOpen, setNavOpen] = useState(false);

  const navItems = [
    {
      section: "Website",
      items: [
        { text: "Home", link: "/" },
        { text: "Web app", link: "https://app.bibleio.com" },
      ],
    },
    {
      section: "Products",
      items: [{ text: "Apps", link: "/apps" }],
    },
    {
      section: "You",
      items: [
        { text: "Why believe?", link: "/why-believe" },
        { text: "Give your rights", link: "/give-your-rights" },
        {
          text: "Contribute",
          link: "https://cat-skate-e91.notion.site/Onboarding-132aafe2ea3c800ab45ddbe0a5db3da8?pvs=4",
        },
      ],
    },
    {
      section: "Us",
      items: [
        { text: "README", link: "/readme" },
        { text: "Roadmap", link: "/roadmap" },
        { text: "Blog", link: "/blog" },
      ],
    },
  ];

  return (
    <nav className="fixed z-50 flex h-fit max-h-screen min-h-0 w-screen flex-col text-text max-[770px]:h-screen">
      <div className="flex justify-between p-16">
        <div className="flex h-[2.5rem] items-center rounded-full border border-stroke bg-fg-1 px-24 py-12 shadow-popup">
          <a
            href="/"
            className="duration-150 ease-out hover:-translate-y-2 active:translate-y-2"
          >
            <Logo size={26} subText="Website" />
          </a>
        </div>
        <div className="custom-nav-class-cause-tailwind-is-broken min-h-0 max-[770px]:hidden max-[770px]:h-full">
          <NavigationMenu.Root className="flex h-fit w-fit flex-col items-end gap-6 max-[770px]:hidden">
            <div className="flex gap-4 max-[770px]:hidden">
              <NavigationMenu.List className="flex h-[2.5rem] w-fit items-center gap-24 rounded-full border border-stroke bg-fg-1 px-24 py-12 shadow-popup max-[770px]:hidden">
                <NavigationMenu.Item>
                  <NavigationMenu.Link
                    href="/"
                    className={`text-body leading-none duration-150 ease-out hover:text-accent-reversed ${path === "/" && "font-semibold"}`}
                  >
                    Home
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item className="max-[770px]:hidden">
                  <NavigationMenu.Link
                    href="/why-believe"
                    className={`text-body leading-none duration-150 ease-out hover:text-accent-reversed ${path === "/why-believe" && "font-semibold"}`}
                  >
                    Why believe?
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Trigger className="group flex items-center gap-6 text-body leading-none duration-150 ease-out hover:text-accent-reversed">
                    Products <ChevronDown />
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content className="grid h-[12.5rem] w-[43rem] animate-scale-in grid-cols-3 gap-12 rounded-[20px] border border-stroke bg-fg-1 p-12 shadow-popup">
                    <NavigationMenu.Link
                      href="/apps#web"
                      className="flex flex-col justify-end gap-8 rounded-8 border border-stroke bg-fg-2 p-16 shadow-material-component duration-150 ease-out hover:border-accent-reversed hover:text-accent-reversed"
                    >
                      <h4 className="text-h4">Web</h4>
                      <p className="text-body leading-[140%]">
                        Simple Bible study app in the web
                      </p>
                    </NavigationMenu.Link>

                    <NavigationMenu.Link
                      href="/apps#mobile"
                      className="flex flex-col justify-end gap-8 rounded-8 border border-stroke bg-fg-2 p-16 shadow-material-component duration-150 ease-out hover:border-accent-reversed hover:text-accent-reversed"
                    >
                      <h4 className="text-h4">Mobile</h4>
                      <p className="text-body leading-[140%]">
                        Bible study environment on the go
                      </p>
                    </NavigationMenu.Link>

                    <NavigationMenu.Link
                      href="/apps#desktop"
                      className="flex flex-col justify-end gap-8 rounded-8 border border-stroke bg-fg-2 p-16 shadow-material-component duration-150 ease-out hover:border-accent-reversed hover:text-accent-reversed"
                    >
                      <h4 className="text-h4">Desktop</h4>
                      <p className="text-body leading-[140%]">
                        Fully featured Bible study environment
                      </p>
                    </NavigationMenu.Link>
                  </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Trigger className="group flex items-center gap-6 text-body leading-none duration-150 ease-out hover:text-accent-reversed">
                    You <ChevronDown />
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content className="grid h-[12.5rem] animate-scale-in grid-cols-3 gap-12 rounded-[20px] border border-stroke bg-fg-1 p-12 shadow-popup">
                    <NavigationMenu.Link
                      href="https://cat-skate-e91.notion.site/Onboarding-132aafe2ea3c800ab45ddbe0a5db3da8?pvs=4"
                      className="flex flex-col justify-end gap-8 rounded-8 border border-stroke bg-fg-2 p-16 shadow-material-component duration-150 ease-out hover:border-accent-reversed hover:text-accent-reversed"
                    >
                      <h4 className="text-h4">Contribute</h4>
                      <p className="text-body leading-[140%]">
                        Help us build Bibleio
                      </p>
                    </NavigationMenu.Link>

                    <NavigationMenu.Link
                      href="/why-believe"
                      className="flex flex-col justify-end gap-8 rounded-8 border border-stroke bg-fg-2 p-16 shadow-material-component duration-150 ease-out hover:border-accent-reversed hover:text-accent-reversed"
                    >
                      <h4 className="text-h4">Why believe?</h4>
                      <p className="text-body leading-[140%]">
                        Why believe in God or Jesus?
                      </p>
                    </NavigationMenu.Link>

                    <NavigationMenu.Link
                      href="/give-your-rights"
                      className="flex flex-col justify-end gap-8 rounded-8 border border-stroke bg-fg-2 p-16 shadow-material-component duration-150 ease-out hover:border-accent-reversed hover:text-accent-reversed"
                    >
                      <h4 className="text-h4">Give your rights</h4>
                      <p className="text-body leading-[140%]">
                        For the sake of the gospel
                      </p>
                    </NavigationMenu.Link>
                  </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Trigger className="group flex items-center gap-6 text-body leading-none duration-150 ease-out hover:text-accent-reversed">
                    Us <ChevronDown />
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content className="flex h-[18rem] animate-scale-in gap-12 rounded-[20px] border border-stroke bg-fg-1 p-12 shadow-popup">
                    <div className="grid h-full min-h-0 w-fit grid-cols-1 grid-rows-5 gap-12">
                      <NavigationMenu.Link
                        href="https://github.com/bibleio"
                        className="flex h-full w-fit items-center gap-8 rounded-8 border border-stroke bg-fg-2 p-8 shadow-material-component duration-150 ease-out hover:border-accent-reversed hover:text-accent-reversed"
                      >
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
                          className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                        </svg>
                      </NavigationMenu.Link>
                      <NavigationMenu.Link
                        href="https://x.com/bibleioo"
                        className="flex h-full w-fit items-center gap-8 rounded-8 border border-stroke bg-fg-2 p-8 shadow-material-component duration-150 ease-out hover:border-accent-reversed hover:text-accent-reversed"
                      >
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
                          className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                          <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                        </svg>
                      </NavigationMenu.Link>
                      <NavigationMenu.Link
                        href="https://bsky.app/profile/bibleio.bsky.social"
                        className="flex h-full w-fit items-center gap-8 rounded-8 border border-stroke bg-fg-2 p-8 shadow-material-component duration-150 ease-out hover:border-accent-reversed hover:text-accent-reversed"
                      >
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
                          className="icon icon-tabler icons-tabler-outline icon-tabler-brand-bluesky"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M6.335 5.144c-1.654 -1.199 -4.335 -2.127 -4.335 .826c0 .59 .35 4.953 .556 5.661c.713 2.463 3.13 2.75 5.444 2.369c-4.045 .665 -4.889 3.208 -2.667 5.41c1.03 1.018 1.913 1.59 2.667 1.59c2 0 3.134 -2.769 3.5 -3.5c.333 -.667 .5 -1.167 .5 -1.5c0 .333 .167 .833 .5 1.5c.366 .731 1.5 3.5 3.5 3.5c.754 0 1.637 -.571 2.667 -1.59c2.222 -2.203 1.378 -4.746 -2.667 -5.41c2.314 .38 4.73 .094 5.444 -2.369c.206 -.708 .556 -5.072 .556 -5.661c0 -2.953 -2.68 -2.025 -4.335 -.826c-2.293 1.662 -4.76 5.048 -5.665 6.856c-.905 -1.808 -3.372 -5.194 -5.665 -6.856z" />
                        </svg>
                      </NavigationMenu.Link>
                      <NavigationMenu.Link
                        href="https://discord.gg/7eVCyQ5GGb"
                        className="flex h-full w-fit items-center gap-8 rounded-8 border border-stroke bg-fg-2 p-8 shadow-material-component duration-150 ease-out hover:border-accent-reversed hover:text-accent-reversed"
                      >
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
                          className="icon icon-tabler icons-tabler-outline icon-tabler-brand-discord"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                          <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                          <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3" />
                          <path d="M7 16.5c3.5 1 6.5 1 10 0" />
                        </svg>
                      </NavigationMenu.Link>
                      <NavigationMenu.Link
                        href="https://www.youtube.com/@bibleio"
                        className="flex h-full w-fit items-center gap-8 rounded-8 border border-stroke bg-fg-2 p-8 shadow-material-component duration-150 ease-out hover:border-accent-reversed hover:text-accent-reversed"
                      >
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
                          className="icon icon-tabler icons-tabler-outline icon-tabler-brand-youtube"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
                          <path d="M10 9l5 3l-5 3z" />
                        </svg>
                      </NavigationMenu.Link>
                    </div>

                    <div className="grid h-full min-h-0 grid-cols-1 grid-rows-2 gap-12">
                      <NavigationMenu.Link
                        href="/blog"
                        className="flex flex-col justify-end gap-8 rounded-8 border border-stroke bg-fg-2 p-16 shadow-material-component duration-150 ease-out hover:border-accent-reversed hover:text-accent-reversed"
                      >
                        <h4 className="text-h4">Blog</h4>
                        <p className="text-body leading-[140%]">
                          Updates & Christian content
                        </p>
                      </NavigationMenu.Link>
                      <NavigationMenu.Link
                        href="/roadmap"
                        className="flex w-[15rem] flex-col justify-end gap-8 rounded-8 border border-stroke bg-fg-2 p-16 shadow-material-component duration-150 ease-out hover:border-accent-reversed hover:text-accent-reversed"
                      >
                        <h4 className="text-h4">Roadmap</h4>
                        <p className="text-body leading-[140%]">
                          Our plans & progress
                        </p>
                      </NavigationMenu.Link>
                    </div>

                    <NavigationMenu.Link
                      href="/readme"
                      className="flex h-full min-h-0 w-[15rem] flex-col justify-end gap-8 rounded-8 border border-stroke bg-fg-2 p-16 shadow-material-component duration-150 ease-out hover:border-accent-reversed hover:text-accent-reversed"
                    >
                      <h4 className="text-h4">README</h4>
                      <p className="text-body leading-[140%]">About us</p>
                    </NavigationMenu.Link>
                  </NavigationMenu.Content>
                </NavigationMenu.Item>
              </NavigationMenu.List>
              <a href="https://app.bibleio.com" className="max-[770px]:hidden">
                <Button>
                  Web App
                  <ArrowUpRight />
                </Button>
              </a>
            </div>

            <NavigationMenu.Viewport />
          </NavigationMenu.Root>
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
        className={`m-16 mt-0 h-full min-h-0 flex-col items-start gap-[40px] overflow-y-scroll rounded-16 border border-stroke bg-fg-1 p-24 shadow-popup ${navOpen ? "flex animate-scale-in" : "hidden"}`}
      >
        {navItems.map((section, index) => (
          <div key={section.section} className="flex flex-col gap-[28px]">
            <p className="text-text/50 -mb-12 text-sub">{section.section}</p>
            {section.items.map((item) => (
              <a href={item.link} key={item.link} className="text-h4 text-text">
                {item.text}
              </a>
            ))}
          </div>
        ))}
        <div className="flex gap-32">
          <a
            href="https://github.com/bibleio"
            className="text-text duration-150 ease-out hover:text-accent-reversed"
          >
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
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
          </a>
          <a
            href="https://x.com/bibleioo"
            className="text-text duration-150 ease-out hover:text-accent-reversed"
          >
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
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
            </svg>
          </a>
          <a
            href="https://bsky.app/profile/bibleio.bsky.social"
            className="text-text duration-150 ease-out hover:text-accent-reversed"
          >
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
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-bluesky"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6.335 5.144c-1.654 -1.199 -4.335 -2.127 -4.335 .826c0 .59 .35 4.953 .556 5.661c.713 2.463 3.13 2.75 5.444 2.369c-4.045 .665 -4.889 3.208 -2.667 5.41c1.03 1.018 1.913 1.59 2.667 1.59c2 0 3.134 -2.769 3.5 -3.5c.333 -.667 .5 -1.167 .5 -1.5c0 .333 .167 .833 .5 1.5c.366 .731 1.5 3.5 3.5 3.5c.754 0 1.637 -.571 2.667 -1.59c2.222 -2.203 1.378 -4.746 -2.667 -5.41c2.314 .38 4.73 .094 5.444 -2.369c.206 -.708 .556 -5.072 .556 -5.661c0 -2.953 -2.68 -2.025 -4.335 -.826c-2.293 1.662 -4.76 5.048 -5.665 6.856c-.905 -1.808 -3.372 -5.194 -5.665 -6.856z" />
            </svg>
          </a>
          <a
            href="https://discord.gg/7eVCyQ5GGb"
            className="text-text duration-150 ease-out hover:text-accent-reversed"
          >
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
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-discord"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
              <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
              <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3" />
              <path d="M7 16.5c3.5 1 6.5 1 10 0" />
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@bibleio"
            className="text-text duration-150 ease-out hover:text-accent-reversed"
          >
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
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-youtube"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
              <path d="M10 9l5 3l-5 3z" />
            </svg>
          </a>
        </div>
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
