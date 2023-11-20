import PTE_GROUP_TRAINING from "@/assets/student-services/pte/PTE_GROUP_TRAINING.png";
import PTE_ONE_TO_ONE_TRAINING from "@/assets/student-services/pte/PTE_ONE_TO_ONE_TRAINING.png";
import PTE_MOCK_TEST from "@/assets/student-services/pte/PTE_MOCK_TEST.png";
import What_is_PTE from "@/assets/student-services/pte/What_is_PTE.jpg";

import GROUP_TRAININGOne1 from "@/assets/student-services/pte/GROUPTRAININGOne1.jpg";
import one from "@/assets/student-services/pte/one.png";
import two from "@/assets/student-services/pte/two.png";
import three from "@/assets/student-services/pte/three.png";
import four from "@/assets/student-services/pte/four.png";

export const PTE_Dummy_data = {
  PTE_SectionOne: {
    title: `PTE`,
    subTitle: `We provide our best services`,
    data: [
      {
        img: PTE_GROUP_TRAINING,
        title: `PTE - GROUP TRAINING`,
        btn: {
          text: "Read More",
          href: "/pte/group-training",
        },
      },
      {
        img: PTE_ONE_TO_ONE_TRAINING,
        title: `PTE - ONE TO ONE TRAINING`,
        btn: {
          text: "Read More",
          href: "#",
        },
      },
      {
        img: PTE_MOCK_TEST,
        title: `PTE - MOCK TEST`,
        btn: {
          text: "Read More",
          href: "#",
        },
      },
    ],
    description: `PTE Coaching and Training Classes in Melbourne, Adelaide and Canberra`,
  },
  PTE_SectionTwo: {
    title: `What is PTE?`,
    left: {
      text: `Every student wishes a blooming future and if that future leads you abroad, especially in Australia, then settling down here definitely calls for PTE clearance. PTE is a form of examination that helps prove his/her ability to understand the English Language in all the four aspects, such as Reading, Listening, Writing and Speaking. Earlier, only IELTS was a medium for students to assess their English competency level. However, the DIBP (Department of Immigration and Border Protection) has focused on the PTE examination as well. As a result, candidates opting to lead their life internationally are undertaking the Pearson Test of English Exam to satisfy their eligibility requirements for the English language.`,
    },
    right: {
      img: What_is_PTE,
    },
  },
  PTE_SectionThree: {
    left: {
      title: `Advantages of PTE Academic Exam`,
      listData: [
        `A fully computerized test including Speaking too`,
        `PTE Academic test results are available within five days`,
        `Impartial and Accurate Scoring with the transparent marketing system`,
        `All the more practical, reliable and easier`,
        `Admissions in reputed universities abroad, visa application`,
      ],
    },
    right: {
      title: `Why Choose GMQ?`,
      text: `
        <p>
    GMQ delivers the best PTE coaching in Melbourne. With reference materials, PTE practice tests, we ensure candidate success with successful strategies and proven tips. The online practice materials are designed in a way that gives a real test interface to our candidates. If you need further inquiry regarding best PTE training in Melbourne, contact us to get a deeper insight.
</p>

</br>

- Well organized online resource materials
</br>
</br>
- High success rates
</br>
</br>
- Qualified and skilled professionals
</br>
</br>
- Flexible interactive sessions

</br>
</br>

<p>Get into further details of the PTE exam by connecting with our team. We also provide pte training classes in Adelaide and Canberra.</p>
        `,
    },
  },
};

export const GroupTrainingDummyData = {
  GROUP_TRAININGSectionOne: {
    left: {
      title: "What is PTE - GROUP TRAINING ?",
      text: `The mission ofGMQ is to make PTE training or PTE Online Coaching accessible and affordable for every international student in Australia and New Zealand. The group training provides a lucrative opportunity to study collaboratively at an affordable training cost of 199 AUD. To keep the best quality training standard and help students to make it to The Wall of Fame, the maximum class size is capped at 7. That means you can train efficiently with just 6 other students in the batch. Say No to Hesitation and Yes to Success.`,
      data: [
        `Pocket Friendly but Quality Training`,
        `Maximum class size of 7 students`,
        `Unlimited QnAs and doubt clearing sessions`,
      ],
    },
    right: {
      img: GROUP_TRAININGOne1,
    },
  },
  GROUP_TRAININGSectionTwo: {
    title: `WHAT'S FOR PTE AT GMQ`,
    description: `Let’s make your learning meaningful and successful!`,
    data: [
      {
        img: one,
      },
      {
        img: two,
      },
      {
        img: three,
      },
      {
        img: four,
      },
    ],
    btn: {
      text: `contact Now`,
      href: "#",
    },
  },
  GROUP_TRAININGSectionThree: {
    left: {
      title: 'A progressive approach',
      data: [
        {
          title: 'Interactive Sessions:',
          text: `Our educators put special emphasis on each student to assist them properly. Productive interaction is our goal.`
        },
        {
          title: `Affordable Fees:`,
          text: `Our courses are budget-friendly. They are suitable for you in all aspects.`,
        },
        {
          title: `A Real-Time Experience:`,
          text: `Educators atGMQ provide you with several Mock Tests for Reading, Listening, Writing, and Speaking. `,
        },
        {
          title: `Online Support:`,
          text: `Through tough times, Educators atGMQ, with their expertise will always guide the students. `,
        },
      ],
    },
    right: {
      title: 'We help you learn better',
      data: [
        {
          title: 'Experienced Trainers:',
          text: `Our team, assembled by the founder ofGMQ,  Mr Mmanu Bhardwaj focuses on polishing the potential of the candidates`
        },
        {
          title: `Latest Resources:`,
          text: `All our study material is current and fresh. We keep ourselves updated and informed about our industry changes.`,
        },
        {
          title: `High Success Record:`,
          text: `We do this right by making your future bright.GMQ grooms students to meet their future `,
        },
        {
          title: `Online Practice Test:`,
          text: `We make practice exams to test your interpretation capacity routinely. The tests are easily accessible on our software.`,
        },
      ],
    }
  }
};
