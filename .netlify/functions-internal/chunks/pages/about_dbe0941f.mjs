/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, g as addAttribute, h as renderHead, i as renderComponent, j as renderSlot, m as maybeRenderHead } from '../astro_592235c1.mjs';
import 'html-escaper';
import 'clsx';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
/* empty css                           */
const Logo = () => {
  return /* @__PURE__ */ jsx("img", { src: "logo.png", width: 70, height: 70 });
};

function useMediaQuery(query) {
  const getMatches = (query2) => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query2).matches;
    }
    return false;
  };
  const [matches, setMatches] = useState(getMatches(query));
  function handleChange() {
    setMatches(getMatches(query));
  }
  useEffect(() => {
    const matchMedia = window.matchMedia(query);
    handleChange();
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener("change", handleChange);
    }
    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener("change", handleChange);
      }
    };
  }, [query]);
  return matches;
}

const Navbar = () => {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width: 1280px)");
  const linkStyle = "text-xl leading-6 font-jost text-primary-200";
  return /* @__PURE__ */ jsxs("div", { className: "max-w-[1200px] px-12 xl:px-0 m-auto w-full py-11 flex justify-between items-center", children: [
    /* @__PURE__ */ jsxs("a", { href: "/", children: [
      " ",
      /* @__PURE__ */ jsx(Logo, {})
    ] }),
    matches && /* @__PURE__ */ jsxs("nav", { className: "flex flex-row gap-6", children: [
      /* @__PURE__ */ jsx("a", { href: "/", className: linkStyle, children: "Home" }),
      /* @__PURE__ */ jsx("a", { href: "/about", className: linkStyle, children: "About Us" }),
      /* @__PURE__ */ jsx("a", { href: "/services", className: linkStyle, children: "Services" }),
      /* @__PURE__ */ jsx("a", { href: "/contact", className: linkStyle, children: "Contact Us" })
    ] }),
    !matches && /* @__PURE__ */ jsxs(
      "div",
      {
        onClick: () => setToggled(!toggled),
        className: "space-y-1 cursor-pointer",
        children: [
          /* @__PURE__ */ jsx(
            motion.span,
            {
              animate: { rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 },
              className: "block h-0.5 w-8 bg-black"
            }
          ),
          /* @__PURE__ */ jsx(
            motion.span,
            {
              animate: { width: toggled ? 0 : 24 },
              className: "block h-0.5 w-6 bg-black"
            }
          ),
          /* @__PURE__ */ jsx(
            motion.span,
            {
              animate: {
                rotateZ: toggled ? -45 : 0,
                y: toggled ? -8 : 0,
                width: toggled ? 32 : 16
              },
              className: "block h-0.5 w-4 bg-black"
            }
          )
        ]
      }
    ),
    toggled && !matches && /* @__PURE__ */ jsxs(
      motion.nav,
      {
        initial: { opacity: 0, x: 25 },
        animate: { opacity: 1, x: 0 },
        className: "flex flex-col fixed h-screen bg-white w-[75%] md:w-[90%] text-black bottom-0 left-0 gap-6 items-center justify-center",
        children: [
          /* @__PURE__ */ jsx("a", { href: "/", className: linkStyle, children: "Home" }),
          /* @__PURE__ */ jsx("a", { href: "/about", className: linkStyle, children: "About Us" }),
          /* @__PURE__ */ jsx("a", { href: "/services", className: linkStyle, children: "Services" }),
          /* @__PURE__ */ jsx("a", { href: "/contact", className: linkStyle, children: "Contact Us" })
        ]
      }
    )
  ] });
};

const Facebook = () => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      width: "11",
      height: "19",
      viewBox: "0 0 11 19",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M9.68359 10.875L10.1758 7.64062H7.04688V5.53125C7.04688 4.61719 7.46875 3.77344 8.875 3.77344H10.3164V0.996094C10.3164 0.996094 9.01562 0.75 7.78516 0.75C5.21875 0.75 3.53125 2.33203 3.53125 5.14453V7.64062H0.648438V10.875H3.53125V18.75H7.04688V10.875H9.68359Z",
          fill: "#292F36"
        }
      )
    }
  );
};

const Instagram = () => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      width: "18",
      height: "18",
      viewBox: "0 0 18 18",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M9 4.60742C6.625 4.60742 4.73242 6.53711 4.73242 8.875C4.73242 11.25 6.625 13.1426 9 13.1426C11.3379 13.1426 13.2676 11.25 13.2676 8.875C13.2676 6.53711 11.3379 4.60742 9 4.60742ZM9 11.6582C7.47852 11.6582 6.2168 10.4336 6.2168 8.875C6.2168 7.35352 7.44141 6.12891 9 6.12891C10.5215 6.12891 11.7461 7.35352 11.7461 8.875C11.7461 10.4336 10.5215 11.6582 9 11.6582ZM14.418 4.45898C14.418 3.90234 13.9727 3.45703 13.416 3.45703C12.8594 3.45703 12.4141 3.90234 12.4141 4.45898C12.4141 5.01562 12.8594 5.46094 13.416 5.46094C13.9727 5.46094 14.418 5.01562 14.418 4.45898ZM17.2383 5.46094C17.1641 4.125 16.8672 2.9375 15.9023 1.97266C14.9375 1.00781 13.75 0.710938 12.4141 0.636719C11.041 0.5625 6.92188 0.5625 5.54883 0.636719C4.21289 0.710938 3.0625 1.00781 2.06055 1.97266C1.0957 2.9375 0.798828 4.125 0.724609 5.46094C0.650391 6.83398 0.650391 10.9531 0.724609 12.3262C0.798828 13.6621 1.0957 14.8125 2.06055 15.8145C3.0625 16.7793 4.21289 17.0762 5.54883 17.1504C6.92188 17.2246 11.041 17.2246 12.4141 17.1504C13.75 17.0762 14.9375 16.7793 15.9023 15.8145C16.8672 14.8125 17.1641 13.6621 17.2383 12.3262C17.3125 10.9531 17.3125 6.83398 17.2383 5.46094ZM15.457 13.7734C15.1973 14.5156 14.6035 15.0723 13.8984 15.3691C12.7852 15.8145 10.1875 15.7031 9 15.7031C7.77539 15.7031 5.17773 15.8145 4.10156 15.3691C3.35938 15.0723 2.80273 14.5156 2.50586 13.7734C2.06055 12.6973 2.17188 10.0996 2.17188 8.875C2.17188 7.6875 2.06055 5.08984 2.50586 3.97656C2.80273 3.27148 3.35938 2.71484 4.10156 2.41797C5.17773 1.97266 7.77539 2.08398 9 2.08398C10.1875 2.08398 12.7852 1.97266 13.8984 2.41797C14.6035 2.67773 15.1602 3.27148 15.457 3.97656C15.9023 5.08984 15.791 7.6875 15.791 8.875C15.791 10.0996 15.9023 12.6973 15.457 13.7734Z",
          fill: "#292F36"
        }
      )
    }
  );
};

const LinkedIn = () => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      width: "17",
      height: "17",
      viewBox: "0 0 17 17",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M4.14062 16.5V5.98828H0.871094V16.5H4.14062ZM2.48828 4.58203C3.54297 4.58203 4.38672 3.70312 4.38672 2.64844C4.38672 1.62891 3.54297 0.785156 2.48828 0.785156C1.46875 0.785156 0.625 1.62891 0.625 2.64844C0.625 3.70312 1.46875 4.58203 2.48828 4.58203ZM16.3398 16.5H16.375V10.7344C16.375 7.92188 15.7422 5.74219 12.4375 5.74219C10.8555 5.74219 9.80078 6.62109 9.34375 7.42969H9.30859V5.98828H6.17969V16.5H9.44922V11.2969C9.44922 9.92578 9.69531 8.625 11.3828 8.625C13.0703 8.625 13.1055 10.1719 13.1055 11.4023V16.5H16.3398Z",
          fill: "#292F36"
        }
      )
    }
  );
};

const Twitter = () => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      width: "19",
      height: "16",
      viewBox: "0 0 19 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M16.6367 4.09375C17.3398 3.56641 17.9727 2.93359 18.4648 2.19531C17.832 2.47656 17.0938 2.6875 16.3555 2.75781C17.1289 2.30078 17.6914 1.59766 17.9727 0.71875C17.2695 1.14062 16.4609 1.45703 15.6523 1.63281C14.9492 0.894531 14 0.472656 12.9453 0.472656C10.9062 0.472656 9.25391 2.125 9.25391 4.16406C9.25391 4.44531 9.28906 4.72656 9.35938 5.00781C6.30078 4.83203 3.55859 3.35547 1.73047 1.14062C1.41406 1.66797 1.23828 2.30078 1.23828 3.00391C1.23828 4.26953 1.87109 5.39453 2.89062 6.0625C2.29297 6.02734 1.69531 5.88672 1.20312 5.60547V5.64062C1.20312 7.43359 2.46875 8.91016 4.15625 9.26172C3.875 9.33203 3.52344 9.40234 3.20703 9.40234C2.96094 9.40234 2.75 9.36719 2.50391 9.33203C2.96094 10.8086 4.33203 11.8633 5.94922 11.8984C4.68359 12.8828 3.10156 13.4805 1.37891 13.4805C1.0625 13.4805 0.78125 13.4453 0.5 13.4102C2.11719 14.4648 4.05078 15.0625 6.16016 15.0625C12.9453 15.0625 16.6367 9.47266 16.6367 4.58594C16.6367 4.41016 16.6367 4.26953 16.6367 4.09375Z",
          fill: "#292F36"
        }
      )
    }
  );
};

const Footer = () => {
  return /* @__PURE__ */ jsx("footer", { className: "mt-[135px] w-full", children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-[1200px] px-12 xl:px-0 mx-auto pb-[135px] grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 gap-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-2", children: [
      /* @__PURE__ */ jsx("a", { href: "/", className: "", children: /* @__PURE__ */ jsx(Logo, {}) }),
      /* @__PURE__ */ jsx("p", { className: "tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray pt-[18px] pb-[33px]", children: "It is a long established fact that a reader will be distracted lookings." }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-5 md:gap-[54px]", children: [
        /* @__PURE__ */ jsx("a", { href: "/", children: /* @__PURE__ */ jsx(Facebook, {}) }),
        /* @__PURE__ */ jsx("a", { href: "/", children: /* @__PURE__ */ jsx(Twitter, {}) }),
        /* @__PURE__ */ jsx("a", { href: "/", children: /* @__PURE__ */ jsx(LinkedIn, {}) }),
        /* @__PURE__ */ jsx("a", { href: "/", children: /* @__PURE__ */ jsx(Instagram, {}) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "col-span-1 flex flex-col gap-4", children: [
      /* @__PURE__ */ jsx("h5", { className: "text-primary-200 font-dm text-[22px] lg:text-[25px] leading-loose", children: "Pages" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/about",
            className: "tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray",
            children: "About Us"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/services",
            className: "tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray",
            children: "Services"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/contact",
            className: "tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray",
            children: "Contact Us"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "col-span-1 flex flex-col gap-4", children: [
      /* @__PURE__ */ jsx("h5", { className: "text-primary-200 font-dm text-[22px] lg:text-[25px] leading-loose", children: "Services" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ jsx("p", { className: "tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray", children: "Kitchen" }),
        /* @__PURE__ */ jsx("p", { className: "tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray", children: "Living Room" }),
        /* @__PURE__ */ jsx("p", { className: "tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray", children: "Dining Hall" }),
        /* @__PURE__ */ jsx("p", { className: "tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray", children: "Bedroom" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "col-span-1 flex flex-col gap-4", children: [
      /* @__PURE__ */ jsx("h5", { className: "text-primary-200 font-dm text-[22px] lg:text-[25px] leading-loose", children: "Contact" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ jsx("p", { className: "tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray", children: "55 East Birchwood Ave. Brooklyn, New York 11201" }),
        /* @__PURE__ */ jsx("p", { className: "tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray", children: "contact@interno.com" }),
        /* @__PURE__ */ jsx("p", { className: "tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray", children: "(123) 456 - 7890" })
      ] })
    ] })
  ] }) });
};

const $$Astro = createAstro();
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="description" content="Diligenciascortes.com"><meta${addAttribute(title, "title")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"><title>${title}</title>${renderHead()}</head> <body> <main class="bg-main bg-no-repeat bg-cover bg-center"> ${renderComponent($$result, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/acerosillo/Desktop/dev/caros/src/components/navbar.tsx", "client:component-export": "default" })} ${renderSlot($$result, $$slots["default"])} <!-- All different pages to be rendered here --> ${renderComponent($$result, "Footer", Footer, {})} </main> <p class="tracking-tight text-base text-center border border-gray-300 bg-white py-10 lg:text-[22px] lg:leading-[33px] font-jost text-text-gray">
Developed by <a href="https://www.acerosillo.com">acerosillo.com</a> </p> </body></html>`;
}, "/Users/acerosillo/Desktop/dev/caros/src/layouts/main-layout.astro", void 0);

const RightPattern = () => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      width: "201",
      className: "hidden md:flex",
      height: "454",
      viewBox: "0 0 201 454",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M3.74169e-05 441H118.5C157.16 441 188.5 409.66 188.5 371L188.5 83C188.5 44.34 157.16 13 118.5 13L0 13",
          stroke: "#F4F0EC",
          "stroke-width": "25"
        }
      )
    }
  );
};

const LeftPattern = () => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      width: "202",
      height: "454",
      className: "hidden md:flex",
      viewBox: "0 0 202 454",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M201.5 13H83C44.3401 13 13 44.3401 13 83V371C13 409.66 44.3401 441 83 441H201.5",
          stroke: "#F4F0EC",
          strokeWidth: "25"
        }
      )
    }
  );
};

const Quote = () => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      width: "32",
      height: "25",
      viewBox: "0 0 32 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M6.84309 24.07C4.97309 24.07 3.44309 23.4467 2.25309 22.2C1.11975 20.9533 0.553086 19.2817 0.553086 17.185C0.553086 13.5017 1.77142 10.3 4.20809 7.58C6.70142 4.86 9.67642 2.62166 13.1331 0.864999L13.9831 2.31C12.5664 3.21666 11.2348 4.37833 9.98809 5.795C8.79809 7.21167 7.86309 8.74167 7.18309 10.385L9.56309 12.17C10.5264 12.7933 11.3198 13.6433 11.9431 14.72C12.5664 15.74 12.8781 16.7317 12.8781 17.695C12.8781 19.5083 12.3114 21.0383 11.1781 22.285C10.1014 23.475 8.65642 24.07 6.84309 24.07ZM24.3531 24.07C22.4831 24.07 20.9531 23.4467 19.7631 22.2C18.6298 20.9533 18.0631 19.2817 18.0631 17.185C18.0631 13.5017 19.2814 10.3 21.7181 7.58C24.2114 4.86 27.1864 2.62166 30.6431 0.864999L31.4931 2.31C30.0764 3.21666 28.7448 4.37833 27.4981 5.795C26.3081 7.21167 25.3731 8.74167 24.6931 10.385L27.0731 12.17C28.0364 12.7933 28.8298 13.6433 29.4531 14.72C30.0764 15.74 30.3881 16.7317 30.3881 17.695C30.3881 19.5083 29.8214 21.0383 28.6881 22.285C27.6114 23.475 26.1664 24.07 24.3531 24.07Z",
          fill: "#292F36"
        }
      )
    }
  );
};

const QuoteText = ({ text, name }) => {
  return /* @__PURE__ */ jsxs("div", { className: "flex w-full max-w-full lg:max-w-[80%]", children: [
    /* @__PURE__ */ jsx(LeftPattern, {}),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col w-full items-center justify-center gap-4 lg:gap-8 lg:mx-[-30px]", children: [
      /* @__PURE__ */ jsx(Quote, {}),
      /* @__PURE__ */ jsx("h4", { className: "text-[20px] leading-[33px] lg:text-[35px] lg:leading-[43.75px] italic tracking-wide font-dm text-primary-200 text-center", children: text }),
      /* @__PURE__ */ jsxs("p", { className: "text-text-gray text-base tracking-tight lg:text-[25px] font-jost lg:leading-[37px] text-center ", children: [
        " ",
        `-${name}`,
        " "
      ] })
    ] }),
    /* @__PURE__ */ jsx(RightPattern, {})
  ] });
};

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Diligenciascortes.com - About Us", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="w-full bg-about h-[50vh] flex justify-center items-end" data-astro-cid-kh7btl4r> <div class="py-[30px] lg:py-[41px] px-[60px] lg:px-[152px] flex flex-col justify-center items-center bg-white rounded-tl-[37px] rounded-tr-[37px] gap-2.5" data-astro-cid-kh7btl4r> <h1 class="text-[30px] leading-[40px] lg:text-[50px] lg:leading-[62px] font-dm capitalize text-primary-200 " data-astro-cid-kh7btl4r>About Us</h1> <p class="text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-gray" data-astro-cid-kh7btl4r> <a href="/" data-astro-cid-kh7btl4r>Home</a> / About Us </p> </div> </section>  <section class="w-full px-12 lg:px-0 pt-[100px] lg:pt-[200px] lg:max-w-[1200px] mx-auto flex items-center justify-center" data-astro-cid-kh7btl4r> ${renderComponent($$result2, "QuoteText", QuoteText, { "text": "I like an interior that defies labeling. I don't really want someone to walk into a room and know that I did it", "name": "BUNNY WILLIAMS", "data-astro-cid-kh7btl4r": true })} </section>  <section class="w-full pt-[100px] lg:pt-[150px] px-12 lg:px-0 mx-auto lg:max-w-[1200px] " data-astro-cid-kh7btl4r> <div class="w-full flex flex-col-reverse lg:flex-row justify-between gap-10 items-center" data-astro-cid-kh7btl4r> <div class="flex flex-col gap-6" data-astro-cid-kh7btl4r> <h2 class="text-[30px] text-center lg:text-left font-dm tracking-wide capitalize leading-8 md:leading-[62.50px] md:text-[50px] text-text-blue " data-astro-cid-kh7btl4r>We what we do</h2> <p class="text-base md:text-[22px] lg:max-w-[85%] text-center lg:text-left tracking-tight font-jost text-text-gray leading-[33px]" data-astro-cid-kh7btl4r>It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.</p> </div> <img src="/about1.png" alt="" data-astro-cid-kh7btl4r> </div> </section>  <section class="w-full pt-[100px] lg:pt-[150px] px-12 lg:px-0 mx-auto lg:max-w-[1200px] " data-astro-cid-kh7btl4r> <div class="w-full flex flex-col-reverse lg:flex-row-reverse justify-between gap-24 items-center" data-astro-cid-kh7btl4r> <div class="flex flex-col gap-6" data-astro-cid-kh7btl4r> <h2 class="text-[30px] text-center lg:text-left font-dm tracking-wide capitalize leading-8 md:leading-[62.50px] md:text-[50px] text-text-blue " data-astro-cid-kh7btl4r>The End Result</h2> <p class="text-base md:text-[22px] lg:max-w-[95%] text-center lg:text-left tracking-tight font-jost text-text-gray leading-[33px]" data-astro-cid-kh7btl4r>It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.</p> </div> <img src="/about2.png" alt="" data-astro-cid-kh7btl4r> </div> </section>  <section class="w-full py-[100px] lg:py-[185px] mt-[173px] px-12 lg:px-0 mx-auto bg-primary-300 " data-astro-cid-kh7btl4r> <div class="w-full flex flex-col gap-10 lg:max-w-[1200px] mx-auto" data-astro-cid-kh7btl4r> <h2 class="font-dm tracking-wide text-center leading-[37px] lg:leading-[62.50px] text-[30px] lg:text-[50px] w-full lg:max-w-[50%] pb-9 mx-auto" data-astro-cid-kh7btl4r>What the People Thinks About Us</h2> <div class="flex w-full overflow-x-scroll gap-4 flex-row no-scrollbar" data-astro-cid-kh7btl4r> <img src="/person1.png" alt="" data-astro-cid-kh7btl4r> <img src="/person2.png" alt="" data-astro-cid-kh7btl4r> <div class="flex flex-col gap-10 w-full justify-between py-[70px] px-7 bg-white min-w-[284px] items-center rounded-[32px]" data-astro-cid-kh7btl4r> <p class="flex flex-col tracking-tight leading-9 text-center" data-astro-cid-kh7btl4r> <span class="text-primary-200 text-lg lg:text-[25px] font-dm" data-astro-cid-kh7btl4r>Nattasha Julie</span> <span class="text-text-gray-200 text-base lg:text-lg font-jost" data-astro-cid-kh7btl4r> Design, Australia</span> </p> <div class="flex gap-6" data-astro-cid-kh7btl4r> <a href="/" data-astro-cid-kh7btl4r> ${renderComponent($$result2, "Facebook", Facebook, { "data-astro-cid-kh7btl4r": true })} </a> <a href="/" data-astro-cid-kh7btl4r> ${renderComponent($$result2, "Twitter", Twitter, { "data-astro-cid-kh7btl4r": true })} </a> <a href="/" data-astro-cid-kh7btl4r> ${renderComponent($$result2, "LinkedIn", LinkedIn, { "data-astro-cid-kh7btl4r": true })} </a> <a href="/" data-astro-cid-kh7btl4r> ${renderComponent($$result2, "Instagram", Instagram, { "data-astro-cid-kh7btl4r": true })} </a> </div> <p class="flex flex-col tracking-tight leading-9 text-center" data-astro-cid-kh7btl4r> <span class="text-text-gray-200 text-base lg:text-lg font-jost" data-astro-cid-kh7btl4r> +1 (378) 400-1234</span> <span class="text-text-gray-200 text-base lg:text-lg font-jost" data-astro-cid-kh7btl4r> julie@email.com</span> </p> </div> <img src="/person3.png" alt="" data-astro-cid-kh7btl4r> </div> </div> </section> ` })} `;
}, "/Users/acerosillo/Desktop/dev/caros/src/pages/about.astro", void 0);

const $$file = "/Users/acerosillo/Desktop/dev/caros/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$MainLayout as $, about as a };
