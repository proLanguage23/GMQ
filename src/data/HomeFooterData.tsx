import footerBG from '@/assets/footerBG.png'
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import { whiteLogo } from './ShareData';

export const HomeFooterDummyData = {
  generalData:{
    whiteLogo,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae.',
    abn: 'ABN: 12 123 123 123'
  },
  footerLinkGP: [
    {
      id: 1,
      title: "about us",
      link: [
        {
          text: "Who We Are",
          href: "#",
        },
        {
          text: "Our Leadership Team",
          href: "#",
        },
        {
          text: "Partner With Us",
          href: "#",
        },
        {
          text: "Careers",
          href: "#",
        },
      ],
    },
    {
      id: 2,
      title: "Our Services",
      link: [
        {
          text: "Education Counselling",
          href: "#",
        },
        {
          text: "Visa & Migration Counselling",
          href: "#",
        },
        {
          text: "Scholarships",
          href: "#",
        },
        {
          text: "Health Cover",
          href: "#",
        },
        {
          text: "Student Accomodation",
          href: "#",
        },
      ],
    },
    {
      id: 3,
      title: "Quick Links",
      link: [
        {
          text: "Education Counselling",
          href: "#",
        },
        {
          text: "Visa & Migration Counselling",
          href: "#",
        },
        {
          text: "Scholarships",
          href: "#",
        },
        {
          text: "Health Cover",
          href: "#",
        },
        {
          text: "Student Accomodation",
          href: "#",
        },
      ],
    },
    {
      id: 4,
      title: "Study to Migrate",
      link: [
        {
          text: "Education Counselling",
          href: "#",
        },
        {
          text: "Visa & Migration Counselling",
          href: "#",
        },
        {
          text: "Scholarships",
          href: "#",
        },
        {
          text: "Health Cover",
          href: "#",
        },
        {
          text: "Student Accomodation",
          href: "#",
        },
      ],
    },
    {
      id: 5,
      title: "Which Visa is Right for me",
      link: [
        {
          text: "Education Counselling",
          href: "#",
        },
        {
          text: "Visa & Migration Counselling",
          href: "#",
        },
        {
          text: "Scholarships",
          href: "#",
        },
        {
          text: "Health Cover",
          href: "#",
        },
        {
          text: "Student Accomodation",
          href: "#",
        },
      ],
    },
    {
      id: 6,
      title: "Popular Courses",
      link: [
        {
          text: "Education Counselling",
          href: "#",
        },
        {
          text: "Visa & Migration Counselling",
          href: "#",
        },
        {
          text: "Scholarships",
          href: "#",
        },
        {
          text: "Health Cover",
          href: "#",
        },
        {
          text: "Student Accomodation",
          href: "#",
        },
      ],
    },
    {
      id: 7,
      title: "Resources",
      link: [
        {
          text: "Pathfinder Youtube",
          href: "#",
        },
        {
          text: "Pathfinder Podcast",
          href: "#",
        },
      ],
    },
    {
      id: 8,
      title: "Our Branches",
      link: [
        {
          text: "Sydney",
          href: "#",
        },
        {
          text: "Melbourne",
          href: "#",
        },
        {
          text: "Brisbane",
          href: "#",
        },
      ],
    },
    {
      id: 9,
      title: "other links",
      link: [
        {
          text: "Useful Links",
          href: "#",
        },
        {
          text: "Glossary ",
          href: "#",
        },
        {
          text: "Terms of Use",
          href: "#",
        },
        {
          text: "Privacy Policy",
          href: "#",
        },
        {
          text: "Refund Policy",
          href: "#",
        },
      ],
    },
  ],
  countries: [
    {
      text: "Australia",
      href: "#",
    },
    {
      text: "Bangladesh",
      href: "#",
    },
    {
      text: "India",
      href: "#",
    },
    {
      text: "Nepal",
      href: "#",
    },
    {
      text: "Philippines",
      href: "#",
    },
    {
      text: "indonesia",
      href: "#",
    },
  ],
  socialLinks: [
    {
      id: 1,
      href: '#',
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