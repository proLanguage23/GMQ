import { logo } from "./ShareData";

export const NavbarDummyData = {
    Logo: logo,
    Menus: [
        {
            id: '0',
            text: 'home',
            href:'/',
            submenu: false,
        },
        {
            id: '1',
            text: 'courses',
            href:'#',
            submenu: true,
            subMenuData:[
                {
                    id: 'subMenu1',
                    text:"Diploma",
                    href:'#',
                    megaMenu: true,
                    megaMenuData:[
                        {
                            id: 'megaMenu1',
                            text:'Nursing',
                            href:'#'
                        },
                        {
                            id: 'megaMenu2',
                            text:'Community Services',
                            href:'#'
                        },
                        {
                            id: 'megaMenu3',
                            text:'Cookery and Hospitality',
                            href:'#'
                        },
                        {
                            id: 'megaMenu4',
                            text:'Information Technology',
                            href:'#'
                        },
                        {
                            id: 'megaMenu4',
                            text:'Early Childhood Education',
                            href:'#'
                        },
                    ]
                },
                {
                    id: 'subMenu2',
                    text:"PR Pathway Courses ",
                    href:'#',
                    megaMenu: true,
                    megaMenuData:[
                        {
                            id: 'megaMenu1',
                            text:'Nursing',
                            href:'#'
                        },
                        {
                            id: 'megaMenu2',
                            text:'Cookery and Hospitality',
                            href:'#'
                        },
                        {
                            id: 'megaMenu3',
                            text:'Information Technology',
                            href:'#'
                        },
                        {
                            id: 'megaMenu4',
                            text:'Teaching',
                            href:'#'
                        },
                        {
                            id: 'megaMenu4',
                            text:'Automotive',
                            href:'#'
                        },
                    ]
                },
                {
                    id: 'subMenu3',
                    text:"Bachelors",
                    href:'#',
                    megaMenu: true,
                    megaMenuData:[
                        {
                            id: 'megaMenu1',
                            text:'Bachelor of Nursing',
                            href:'#'
                        },
                        {
                            id: 'megaMenu2',
                            text:'Bachelor of Social Work',
                            href:'#'
                        },
                        {
                            id: 'megaMenu3',
                            text:'Bachelor of Cyber Security',
                            href:'#'
                        },
                        {
                            id: 'megaMenu4',
                            text:'Bachelor of Occupational Therapy',
                            href:'#'
                        },
                    ]
                },
                {
                    id: 'subMenu4',
                    text:"Masters",
                    href:'#',
                    megaMenu: true,
                    megaMenuData:[
                        {
                            id: 'megaMenu1',
                            text:'Master of Nursing',
                            href:'#'
                        },
                        {
                            id: 'megaMenu2',
                            text:'Master of Social Work',
                            href:'#'
                        },
                        {
                            id: 'megaMenu3',
                            text:'Master of Cyber Security',
                            href:'#'
                        },
                        {
                            id: 'megaMenu4',
                            text:'Master of Occupational Therapy',
                            href:'#'
                        },
                    ]
                },
                {
                    id: 'subMenu5',
                    text:"Other Courses",
                    href:'#',
                    megaMenu: true,
                    megaMenuData:[
                        {
                            id: 'megaMenu1',
                            text:'Humanities and Social Sciences',
                            href:'#'
                        },
                        {
                            id: 'megaMenu2',
                            text:'Creative Arts Design and Communication',
                            href:'#'
                        },
                        {
                            id: 'megaMenu3',
                            text:'Law',
                            href:'#'
                        },
                        {
                            id: 'megaMenu4',
                            text:'Medicine ',
                            href:'#'
                        },
                        {
                            id: 'megaMenu5',
                            text:'Occupational Therapy ',
                            href:'#'
                        },
                        {
                            id: 'megaMenu6',
                            text:'Sciences  ',
                            href:'#'
                        },
                        {
                            id: 'megaMenu7',
                            text:'Health and Allied Health ',
                            href:'#'
                        },
                        {
                            id: 'megaMenu8',
                            text:'Cyber Security ',
                            href:'#'
                        },
                        {
                            id: 'megaMenu9',
                            text:'Building Construction ',
                            href:'#'
                        },
                        {
                            id: 'megaMenu10',
                            text:'Aged Care',
                            href:'#'
                        },
                    ]
                },
            ]
        },
        {
            id: '2',
            text: 'Migration and Visas',
            href:'#',
            submenu: true,
            subMenuData:[
                {
                    id: 'subMenu1',
                    text:"skilled migration visa",
                    href:'https://mjlegal.com.au/immigration-lawyers-melbourne/skilled-migration-visa',
                    megaMenu: false,
                },
                {
                    id: 'subMenu2',
                    text:"work visa",
                    href:'https://mjlegal.com.au/immigration-lawyers-melbourne/employer-sponsored-work-visa',
                    megaMenu: false,
                },
                {
                    id: 'subMenu3',
                    text:"partner visa",
                    href:'https://mjlegal.com.au/immigration-lawyers-melbourne/partner-visa',
                    megaMenu: false,
                },
                {
                    id: 'subMenu4',
                    text:"business visa",
                    href:'https://mjlegal.com.au/immigration-lawyers-melbourne/business-investment-visa',
                    megaMenu: false,
                },
                {
                    id: 'subMenu5',
                    text:"Student Visa",
                    href:'https://mjlegal.com.au/immigration-lawyers-melbourne/student-visa-sc500',
                    megaMenu: false,
                },
                {
                    id: 'subMenu6',
                    text:"Temporary Graduate Visa",
                    href:'https://mjlegal.com.au/immigration-lawyers-melbourne/temporary-graduate-visa-485',
                    megaMenu: false,
                },
                {
                    id: 'subMenu7',
                    text:"Australian Citizenship",
                    href:'https://mjlegal.com.au/immigration-lawyers-melbourne/australian-citizenship',
                    megaMenu: false,
                },
                {
                    id: 'subMenu7',
                    text:"Parent Visa",
                    href:'https://mjlegal.com.au/immigration-lawyers-melbourne/parent-visa-australia',
                    megaMenu: false,
                },
            ]
        },
        {
            id: '3',
            text: 'Services',
            href:'#',
            submenu: true,
            subMenuData:[
                {
                    id: 'subMenu1',
                    text:"Migration Services",
                    href:'/migration-services',
                    megaMenu: true,
                    megaMenuData:[
                        {
                            id: 'megaMenu1',
                            text:'PR Pathways in Australia',
                            href:'/migration-services/permanent-residency-pathways-in-australia'
                        },
                    ]
                },
                {
                    id: 'subMenu2',
                    text:"Student Services",
                    href:'/student-services',
                    megaMenu: true,
                    megaMenuData:[
                        {
                            id: 'megaMenu1',
                            text:'Education Counselling',
                            href:'/student-services/education-counselling'
                        },
                        {
                            id: 'megaMenu2',
                            text:'Visa and Migration Counselling',
                            href:'/student-services/visa-and-migration-counselling'
                        },
                        {
                            id: 'megaMenu3',
                            text:'Scholarships',
                            href:'/student-services/scholarships'
                        },
                        {
                            id: 'megaMenu4',
                            text:'Insurance',
                            href:'/student-services/'
                        },
                        {
                            id: 'megaMenu5',
                            text:'Student Accommodation',
                            href:'/student-services/'
                        },
                        {
                            id: 'megaMenu6',
                            text:'Assessment Test',
                            href:'/student-services/gmq-career-and-personality-assessment-test'
                        },
                        {
                            id: 'megaMenu7',
                            text:'Program Refer and Earn',
                            href:'/student-services/'
                        },
                    ]
                },
                {
                    id: 'subMenu3',
                    text:"RPL Services",
                    href:'/rpl',
                    megaMenu: true,
                    megaMenuData:[
                        {
                            id: 'megaMenu1',
                            text:'RPL qualifications',
                            href:'/rpl/qualifications'
                        },
                        {
                            id: 'megaMenu2',
                            text:'RPL industries',
                            href:'/rpl'
                        },
                    ]
                },
            ]
        },
        {
            id: '4',
            text: 'English test preparation',
            href:'#',
            submenu: true,
            subMenuData:[
                {
                    id: 'subMenu1',
                    text:"PTE",
                    href:'/english-proficiency-test/pte',
                    megaMenu: true,
                    megaMenuData:[
                        {
                            id: 'megaMenu1',
                            text:'PTE Eligibility',
                            href:'/english-proficiency-test/pte'
                        },
                        {
                            id: 'megaMenu2',
                            text:'PTE Pattern & Syllabus ',
                            href:'/english-proficiency-test/pte'
                        },
                        {
                            id: 'megaMenu3',
                            text:'PTE Preparation',
                            href:'/english-proficiency-test/pte'
                        },
                        {
                            id: 'megaMenu4',
                            text:'PTE Result & Scores',
                            href:'/english-proficiency-test/pte'
                        },
                        {
                            id: 'megaMenu5',
                            text:'PTE FAQs',
                            href:'/english-proficiency-test/pte'
                        },
                    ]
                },
                {
                    id: 'subMenu2',
                    text:"IELTS",
                    href:'#',
                    megaMenu: false,

                },
                {
                    id: 'subMenu3',
                    text:"TOEFL",
                    href:'#',
                    megaMenu: false,
                },
            ]
        },
        {
            id: '5',
            text: 'latest updates',
            href:'#',
            submenu: true,
            subMenuData:[
                {
                    id: 'subMenu1',
                    text:"blogs",
                    href:'#',
                    megaMenu: false,
                },
                {
                    id: 'subMenu2',
                    text:"news",
                    href:'#',
                    megaMenu: false,

                },
                {
                    id: 'subMenu3',
                    text:"events",
                    href:'#',
                    megaMenu: false,
                },
            ]
        },
        {
            id: '6',
            text: 'contact us',
            href:'#',
            submenu: false,
        },
    ]
}