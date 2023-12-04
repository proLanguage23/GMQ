import footerBG from '@/assets/footerBG.png'
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import { ACN_Number, whiteLogo } from './ShareData';

export const HomeFooterDummyData = {
  generalData:{
    whiteLogo,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae.',
    abn: `ABN: ${ACN_Number}`
  },
  footerLinkGP: [
    {
      id: 100,
      title: "about us",
      link: [
        {
          id: 0,
          text: "Who We Are",
          href: "#",
        },
        {
          id: 1,
          text: "Our Leadership Team",
          href: "#",
        },
        {
          id: 2,
          text: "Partner With Us",
          href: "#",
        },
        {
          id: 3,
          text: "Careers",
          href: "#",
        },
      ],
    },
    {
      id: 102,
      title: "Our Services",
      link: [
        {
          id: 4,
          text: "Education Counselling",
          href: "#",
        },
        {
          id: 5,
          text: "Visa & Migration Counselling",
          href: "#",
        },
        {
          id: 6,
          text: "Scholarships",
          href: "#",
        },
        {
          id: 7,
          text: "Health Cover",
          href: "#",
        },
        {
          id: 8,
          text: "Student Accomodation",
          href: "#",
        },
      ],
    },
    {
      id: 103,
      title: "Quick Links",
      link: [
        {
          id: 9,
          text: "Education Counselling",
          href: "#",
        },
        {
          id: 10,
          text: "Visa & Migration Counselling",
          href: "#",
        },
        {
          id: 11,
          text: "Scholarships",
          href: "#",
        },
        {
          id: 12,
          text: "Health Cover",
          href: "#",
        },
        {
          id: 13,
          text: "Student Accomodation",
          href: "#",
        },
      ],
    },
    {
      id: 104,
      title: "Study to Migrate",
      link: [
        {
          id: 14,
          text: "Education Counselling",
          href: "#",
        },
        {
          id: 15,
          text: "Visa & Migration Counselling",
          href: "#",
        },
        {
          id: 16,
          text: "Scholarships",
          href: "#",
        },
        {
          id: 17,
          text: "Health Cover",
          href: "#",
        },
        {
          id: 18,
          text: "Student Accomodation",
          href: "#",
        },
      ],
    },
    {
      id: 105,
      title: "Which Visa is Right for me",
      link: [
        {
          id: 19,
          text: "Education Counselling",
          href: "#",
        },
        {
          id: 20,
          text: "Visa & Migration Counselling",
          href: "#",
        },
        {
          id: 21,
          text: "Scholarships",
          href: "#",
        },
        {
          id: 22,
          text: "Health Cover",
          href: "#",
        },
        {
          id: 23,
          text: "Student Accomodation",
          href: "#",
        },
      ],
    },
    {
      id: 106,
      title: "Popular Courses",
      link: [
        {
          id: 24,
          text: "Education Counselling",
          href: "#",
        },
        {
          id: 25,
          text: "Visa & Migration Counselling",
          href: "#",
        },
        {
          id: 26,
          text: "Scholarships",
          href: "#",
        },
        {
          id: 27,
          text: "Health Cover",
          href: "#",
        },
        {
          id: 28,
          text: "Student Accomodation",
          href: "#",
        },
      ],
    },
    {
      id: 107,
      title: "Resources",
      link: [
        {
          id: 29,
          text: "Pathfinder Youtube",
          href: "#",
        },
        {
          id: 30,
          text: "Pathfinder Podcast",
          href: "#",
        },
      ],
    },
    {
      id: 108,
      title: "Our Branches",
      link: [
        {
          id: 31,
          text: "Sydney",
          href: "#",
        },
        {
          id: 32,
          text: "Melbourne",
          href: "#",
        },
        {
          id: 33,
          text: "Brisbane",
          href: "#",
        },
      ],
    },
    {
      id: 109,
      title: "other links",
      link: [
        {
          id: 34,
          text: "Useful Links",
          href: "#",
        },
        {
          id: 35,
          text: "Glossary ",
          href: "#",
        },
        {
          id: 36,
          text: "Terms of Use",
          href: "#",
        },
        {
          id: 37,
          text: "Privacy Policy",
          href: "#",
        },
        {
          id: 38,
          text: "Refund Policy",
          href: "#",
        },
      ],
    },
  ],
  countries: [
    {
      id: 39,
      text: "Australia",
      href: "#",
    },
    {
      id: 40,
      text: "Bangladesh",
      href: "#",
    },
    {
      id: 41,
      text: "India",
      href: "#",
    },
    {
      id: 42,
      text: "Nepal",
      href: "#",
    },
    {
      id: 43,
      text: "Philippines",
      href: "#",
    },
    {
      id: 44,
      text: "indonesia",
      href: "#",
    },
  ],
  socialLinks: [
    {
      id: 1,
      href: 'https://www.facebook.com/gmqglobal',
      text: "Facebook",
      icon: <AiFillFacebook className="Facebook socialLink" size={24} />,
    },
    {
      id: 2,
      href: '#',
      text: "linkedin",
      icon: <AiFillLinkedin className="linkedin socialLink" size={24} />,
    },
    {
      id: 3,
      href: '#',
      text: "twitter",
      icon: <AiFillTwitterSquare className="twitter socialLink" size={24} />,
    },
    // {
    //   id: 4,
    //   text: "youtube",
    //   icon: <AiFillYoutube className="youtube socialLink" size={22} />,
    // },
    {
      id: 5,
      href: '#',
      text: "instagram",
      icon: <AiFillInstagram className="instagram socialLink" size={24} />,
    },
  ],
  copyRight: `Copyright© 2023 GMQ. All Rights Reserved.`,
  secondaryImg: footerBG,
};
// ${new Date().getFullYear()}