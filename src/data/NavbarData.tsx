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
                    text:"PR Pathway Courses",
                    href:'#',
                    megaMenu: true,
                    megaMenuData:[
                        {
                            id: 'megaMenu1',
                            text:'Nursing',
                            href:'/popular-courses/nursing'
                        },
                        {
                            id: 'megaMenu2',
                            text:'Hospitality & Cookery',
                            href:'/popular-courses/cookery-courses-in-australia'
                        },
                        {
                            id: 'megaMenu3',
                            text:'Teaching',
                            href:'#'
                        },
                        {
                            id: 'megaMenu4',
                            text:'Information Technology ',
                            href:'#'
                        },
                        {
                            id: 'megaMenu4',
                            text:'Trade Courses',
                            href:'#'
                        },
                    ]
                },
            ]
        },
        {
            id: '2',
            text: 'RPL',
            href:'/rpl',
            submenu: false,
        },
        {
            id: '3',
            text: 'Services',
            href:'#',
            submenu: true,
            subMenuData:[
                {
                    id: 'subMenu1',
                    text:"Education Counselling",
                    href:'/migration-services',
                    megaMenu: false,
                },
                {
                    id: 'subMenu2',
                    text:"Professional Year Program",
                    href:'/student-services',
                    megaMenu: false,
                },
                {
                    id: 'subMenu3',
                    text:"PTE",
                    href:'/rpl',
                    megaMenu: false,
                },
                {
                    id: 'subMenu3',
                    text:"NAATI",
                    href:'/rpl',
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