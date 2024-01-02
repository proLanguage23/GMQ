import { logoWithOutIcon } from "./ShareData";
import locator from "@/assets/locator.png";
import route from "@/assets/route.png";
import university from "@/assets/university.png";
import passport from "@/assets/passport.png";
import whyGMQ from "@/assets/whyGMQ.png";

export const WhyGMQ_DummyData = {
  title: "About GMQ GLOBAL",
  logo: logoWithOutIcon,
  description: `
  <p class="part text-[17px]">With over 15 years of dedicated service in student counseling, GMQ Global serves as a beacon for students all over the world trying to achieve their academic goals. We are dedicated to assisting and enabling students as they negotiate the complications of studying abroad. </p>
  <p class="part text-[17px]">Our ongoing evolution and adoption of innovative ideas ensure that we provide the ultimate solutions for each individual. We're not just counselors at GMQ Global; we're passionate mentors who care about your success in career & education. We're here to help you realize your goals, from personalized assistance to extensive support services.
  </p>
    `,

  whyGMQFetuses: [
    {
      id: 1,
      text: `15+ Years of Industry Experience: `,
      icon_img: locator,
    },
    {
      id: 2,
      text: "Assisted 2000+ Students in Achieving their Dreams",
      icon_img: route,
    },
    {
      id: 3,
      text: "100+ University and Institute Collaborations",
      icon_img: university,
    },
    {
      id: 4,
      text: "Located in 5+ Countries",
      icon_img: passport,
    },
  ],
  secondaryImg: whyGMQ,
};
