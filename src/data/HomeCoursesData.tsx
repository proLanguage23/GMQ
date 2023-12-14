import Nursing from '@/assets/nursing.png'
import HospitalityCookery from '@/assets/hospitality-cookery.png'
import Teaching from '@/assets/teaching.png'
import informationTechnology from '@/assets/information-technology.png'
import tradeCourses from '@/assets/Student-Health.png'
import StudentAccommodation from '@/assets/StudentAccommodation.png'

export const HomeCoursesDummyData = {
  title: "Select from a range of courses at GMQ Global",
  subTitle: 'Count on GMQ Global for every step of your educational journey',
  CoursesData:[
    {
        id: 1,
        img: Nursing,
        title:'Education Counseling',
        description:'Our education counselors are here to ignite your passion by discussing your career aspirations and properly guiding you to your goals. Book a consultation with us today!        ',
        btn:{
            text:"learn more",
            href:'/popular-courses/nursing'
        },
    },
    {
        id: 2,
        img: HospitalityCookery,
        title:'Student Services',
        description:`Don't get caught up in the hurdle of choosing the right university for yourself to decide what to do next! We're here to guide you from start to success. Click to learn more!`,
        btn:{
            text:"learn more",
            href:'/popular-courses/hospitality-and-cookery'
        },
    },
    {
        id: 3,
        img: Teaching,
        title:'Popular Courses',
        description:'GMQ Global partners with 100+ leading universities, schools, and colleges worldwide. Explore your options from the in-demand study fields to discover your ideal course and institution today.',
        btn:{
            text:"learn more",
            href:'/popular-courses/teaching'
        },
    },
    {
        id: 4,
        img: informationTechnology,
        title:'Student Visa',
        description:'Are you considering studying, working, or migrating? Learn how we can assist you in studying, working, and living in Australia by aiding you in obtaining the visas of your choosing.',
        btn:{
            text:"learn more",
            href:'/popular-courses/information-technology'
        },
    },
    {
        id: 5,
        img: tradeCourses,
        title:'Student Health',
        description:`GMQ Global is well-resourced with renowned organizations to ensure the best health cover policies tailored for you. We've got you covered, securing comprehensive insurance benefits. Our partner health insurance providers are listed below: 1.NIB, 2.Allianz
        `,
        btn:{
            text:"learn more",
            href:'/popular-courses/trade-courses'
        },
    }
  ]
};
