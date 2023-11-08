import MigrationServicesBanner from "@/assets/rpl/rpl-banner.png";
import one1 from "@/assets/migration-services/one1.png";
import one2 from "@/assets/migration-services/one2.png";
import one3 from "@/assets/migration-services/one3.png";
import two1 from "@/assets/migration-services/two1.png";
import three1 from "@/assets/migration-services/three1.png";
import visaServices from "@/assets/migration-services/visa-services.png";
import whichVisaIsRightForMe from "@/assets/migration-services/which-visa-is-right-for-me.png";
import IndependentVisas from "@/assets/migration-services/visa-services/IndependentVisas.png";
import MARACodeOfConduct from "@/assets/migration-services/visa-services/MARACodeOfConduct.png";
import OurVisaMigrationCounsellorsareleadingtheindustry from "@/assets/migration-services/visa-services/OurVisaMigrationCounsellorsareleadingtheindustry.png";
import WhichVisaIsRightForMeBanner from "@/assets/migration-services/WhichVisaIsRightForMe/WhichVisaIsRightForMeBanner.png";
import TemporaryGraduateVisa from "@/assets/migration-services/WhichVisaIsRightForMe/TemporaryGraduateVisa.png";

export const ServiceMigrationServicesDummyData = {
  banner: MigrationServicesBanner,
  sectionOne: {
    title: "Australia Visa Application & Migration Process",
    itemData: [
      {
        id: 1,
        img: one1,
        description:
          "Securing your study or migration visas shouldn’t be stressful – we’llmake the process seem easy",
      },
      {
        id: 2,
        img: one2,
        description:
          "Thousands of students from across the globe have trusted us with their Australian visa applications",
      },
      {
        id: 3,
        img: one3,
        description:
          "Our team speaks over 21 different languages, so you can get help from us in a language you’re comfortable with",
      },
    ],
  },
  sectionTwo: {
    left: {
      img: two1,
    },
    right: {
      title: "Why use a Migration Service?",
      description: [
        "Applying for a visa to study or live in Australia can be a confusing and complicated process with the ever-changing rules and documentation requirements.",
        "Our team of registered and experienced migration agents (MARN: 1791460, 2217765) can offer comprehensive guidance and end to end management of your visa application for you.",
      ],
    },
  },
  sectionThree: {
    left: {
      title: "International Students Advisory Support",
      description: [
        "At GMQ Global, we’re committed to providing international students with ethical advice and unbiased support and our high visa success rate is testimony to that.",
        "We’ll always tell you the truth, and you can trust us to act in your interests, so you feel comfortable, informed and in control at every step of the way.",
        "Not only do we understand the nuances of each visa application type, we also stay on top of the frequent regulatory changes within the industry so you don’t get caught out whether it’s a student visa extension or a complicated appeal.",
      ],
    },
    right: {
      img: three1,
    },
  },
  sectionFour: {
    courses: [
      {
        id: 1,
        img: visaServices,
        title: "Visa Services",
        description:
          "We offer comprehensive Australian visa counselling and migration services, in accordance with the Migration Agent’s Registration Authority (MARA) Code of Conduct ",
        btn: {
          text: "learn more",
          href: "/migration-services/visa-services",
        },
      },
      {
        id: 2,
        img: whichVisaIsRightForMe,
        title: "Which Australian Visa is right for me?",
        description:
          "We’ll show you which visa works best for your needs and situation, then help you with the application requirements and the process there on",
        btn: {
          text: "learn more",
          href: "/migration-services/which-visa-is-right-for-me",
        },
      },
    ],
  },
};

export const VisaServicesMigrationServicesDummyData = {
  sectionOne: {
    left: {
      img: IndependentVisas
    },
    right: {
      title: "482 Visas to Partner Visas and Skilled Independent Visas",
      text: `<p>When it comes to visas, experience makes all the difference. It is so important to stay compliant at all times or you could risk serious consequences.</p>
      <p>&nbsp;</p>
      <p>Our team of qualified migration agents manages hundreds of cases every month and from&nbsp;<a title="482 visa" href="#" target="_blank" rel="noopener noreferrer">482 visas</a>&nbsp;to partner visas and skilled independent visas, we know what the Department of Home Affairs requires and we make sure that your application will meet these requirements..</p>
      <p>&nbsp;</p>
      <ul>
      <li>Ethical, unbiased support when you need it most</li>
      <li>Comprehensive end-to-end services</li>
      <li>Affordable service fees&nbsp; &nbsp;</li>
      </ul>`,
    },
  },
  sectionTwo: {
    left: {
      img: MARACodeOfConduct,
    },
    right: {
      title: "We follow the MARA Code of Conduct",
      text: `<p>Our Migration Agents are individually registered&nbsp; with the Australian Government&rsquo;s Migration Agents Registration Authority (MARA), which outlines the professional standards, rules and regulations of&nbsp;the industry.</p>
      <p>&nbsp;</p>
      <p>Because of this, you can have complete peace of mind that we&rsquo;ll do a perfect&nbsp;<a title="highest paying jobs in australia" href="#" target="_blank" rel="noopener noreferrer">job for you</a>.</p>`,
    },
  },
  sectionThree: {
    left: {
      img: OurVisaMigrationCounsellorsareleadingtheindustry,
    },
    right: {
      title: "Our Visa & Migration Counsellors are leading the industry",
      text: `<p>Not all visa services are the same, but we&rsquo;ve gone above and beyond to seek out talented and qualified Migration Team (MARN: 1791460, 2217765) who speak your language and have also been through the process. So they know exactly what you need to do and how to go about it. With an unmatched level of experience and comprehensive one-on-one support, you&rsquo;ll find that our visa process is straightforward and simple.&nbsp;<a title="speak with us" href="#" target="_blank" rel="noopener noreferrer">Talk with us</a>&nbsp;today &ndash; to get more information.</p>`,
    },
  },
};

export const WhichVisaIsRightForMeDummyData = {
  banner: WhichVisaIsRightForMeBanner,
  sectionOne: {
    left:{
      title:'Australia Visa and Migration process can be streamlined with our help',
      text:`<p>We understand that visa and migration process can seem very complicated and carries inherent risk if you are not careful with your application and documentation. We are here to simplify it for you.</p>
      <p>&nbsp;</p>
      <p><strong>As registered migration agents (MARN:&nbsp; 1791460, 2217765)</strong>&nbsp;with extensive industry experience, we can guide you through the process of selecting the right visa and applying for it correctly.<br />&nbsp;you can check processing times information to our<a href="#" target="_blank" rel="noopener noreferrer">&nbsp;<strong>visa migration agent</strong></a></p>`
    },
    right:{
      submitForm: `<iframe src="https://form.jotform.com/232981505164053" class="contactFormOfHome iframeClass"></iframe>`
    },
  },
  sectionTwo: {
    left: {
      img: MARACodeOfConduct,
    },
    right: {
      title: "How do I know which Australia Visa I need?",
      text: `<p>In an migration counselling session, we&rsquo;ll help determine which one is right for you.</p>
      <p>We&rsquo;ll look at your needs and background, as well as discuss your future goals so you that we can advise on the Visa that gives you the best chance to study and reside in Australia. It&rsquo;s important to get this right, so speaking with our friendly consultants will ensure you&rsquo;ve chosen well.</p>
      <p><br />Information about all&nbsp;<strong>Australia visa types,</strong>&nbsp;requirements, the application process, fees and more relevant details.</p>`,
    },
  },
  sectionThree:{
    title: 'You want to apply for Australia Visa?',
    btn:{
      text:'get in touch with us',
      href: '#'
    }
  },
  sectionFour: {
    title: 'Here are the different types of Australia Visas that we can help with',
    left: {
      img: MARACodeOfConduct,
    },
    right: {
      title: "Everything You Want to Know About Employer Nomination Scheme Visa(186)",
      text: `<p>Employer Nomination Scheme visa&nbsp;<strong>(Subclass 186)</strong>&nbsp;is for skilled employees to reside and work permanently in Australia after their employers nominate them for specific jobs. It requires an employer nomination, so it is trickier to get as compared to some other visas. However, the option to stay and work indefinitely in Australia makes the visa worthwhile.</p>
      <p><br /><strong>applicant to apply for Australian citizenship.</strong>&nbsp;Your sponsor relatives can also come and reside in the country.</p>`,
      btn:{
        text: 'Read more about 186 visa',
        href: '#',
      }
    },
  },
  sectionSix: {
    title: 'A Detailed Guide to Temporary Graduate Visa (Subclass 485)',
    left: {
      img: TemporaryGraduateVisa,
    },
    right: {
      title: "Everything You Want to Know About Employer Nomination Scheme Visa(186)",
      text: `<p>Are you an international student who studied in Australia for 2 years and got graduated and wants to stay further here? If so, you can apply for a Temporary Graduate Visa&nbsp;<strong><a href="#" target="_blank" rel="noopener noreferrer">(Subclass 485)</a>.</strong>&nbsp;It is a transitory visa that allows onshore international students to reside, study, and get employment after their education in Australia. Depending on your educational qualification and citizenship or nationality, you can stay in Australia for two or five years and get work experience with the visa.</p>
      <p><br />All you need to know about the 485 visa, processing time, eligibility and estimated fees.Take a look&nbsp;<strong>latest cost of 485 visa here</strong>..</p>`,
      btn:{
        text: 'Read more about 186 visa', 
        href: '#',
      }
    },
  },
}