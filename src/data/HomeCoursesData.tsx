import Nursing from '@/assets/nursing.png'
import HospitalityCookery from '@/assets/hospitality-cookery.png'
import Teaching from '@/assets/teaching.png'
import informationTechnology from '@/assets/information-technology.png'
import tradeCourses from '@/assets/Student-Health.png'
import StudentAccommodation from '@/assets/StudentAccommodation.png'

export const HomeCoursesDummyData = {
  title: "GMQ Global Services Overview",
  subTitle: 'Count on GMQ Global for every step of your educational journey',
  CoursesData:[
    {
        id: 1,
        img: Nursing,
        title:'Nursing',
        description:'Our Education Counsellors will learn about your career aspirations, lifestyle and study goals so that we can offer tailored advice.',
        btn:{
            text:"learn more",
            href:'/popular-courses/nursing'
        },
    },
    {
        id: 2,
        img: HospitalityCookery,
        title:'Hospitality & Cookery',
        description:'Need the right advice for university or college placement, scholarships and internships? From the initial consultation to application, find out more how we can help.',
        btn:{
            text:"learn more",
            href:'/popular-courses/hospitality_and_cookery'
        },
    },
    {
        id: 3,
        img: Teaching,
        title:'Teaching',
        description:'GMQ Global represent over 750+ top universities, schools and colleges globally. Browse our fields of study to find your perfect course and institution today.',
        btn:{
            text:"learn more",
            href:'/popular-courses/teaching'
        },
    },
    {
        id: 4,
        img: informationTechnology,
        title:'Information Technology',
        description:'Whether you’re looking to study abroad or planning for a career overseas. See how we can help you study, work and live in leading destinations around the world.',
        btn:{
            text:"learn more",
            href:'/popular-courses/information-technology'
        },
    },
    {
        id: 5,
        img: tradeCourses,
        title:'Trade Courses',
        description:'From finding the best health cover policies to ensuring the insurance benefits for you, we have got you covered.',
        btn:{
            text:"learn more",
            href:'/popular-courses/trade-courses'
        },
    }
  ]
};
