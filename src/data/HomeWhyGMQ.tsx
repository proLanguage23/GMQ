import { logoWithOutIcon } from "./ShareData";
import locator from '@/assets/locator.png'
import route from '@/assets/route.png'
import university from '@/assets/university.png'
import passport from '@/assets/passport.png'
import whyGMQ from '@/assets/whyGMQ.png'

export const WhyGMQ_DummyData = {
    title: 'Why GMQ Global?',
    logo: logoWithOutIcon,
    description: `
    <p class="part">
Take part in the increasing tide of international students who have relied on GMQ Global to achieve their educational and career goals in Australia. For more than a decade, we have consistently delivered results with our skilled counselors and personalized approach. Share your goals with us, and we'll help you get there.
    </p>

    <ul class="text-left">
        <li>15+ Years of Industry Experience: </li>
        <li>Assisted 2000+ Students in Achieving their Dreams 
        </li>
        <li>100+ University and Institute Collaborations </li>
        <li>Located in 5+ Countries
        </li>
    </ul>
    
    
    `,
    whyGMQFetuses: [
        {
            id: 1,
            text:`15+ Years of Industry Experience: `,
            icon_img: locator
        },
        {
            id: 2,
            text:"Assisted 2000+ Students in Achieving their Dreams",
            icon_img: route
        },
        {
            id: 3,
            text:"100+ University and Institute Collaborations",
            icon_img: university
        },
        {
            id: 4,
            text:"Located in 5+ Countries",
            icon_img: passport
        },
    ],
    secondaryImg: whyGMQ
}