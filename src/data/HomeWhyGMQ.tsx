import { logoWithOutIcon } from "./ShareData";
import locator from '@/assets/locator.png'
import route from '@/assets/route.png'
import university from '@/assets/university.png'
import passport from '@/assets/passport.png'
import whyGMQ from '@/assets/whyGMQ.png'

export const WhyGMQ_DummyData = {
    title: 'why',
    logo: logoWithOutIcon,
    description: `Like you, a remarkable number of international students from across the world, from diverse backgrounds, have achieved their education and career goals in Global successfully through us. Our ethical, accurate & friendly guidance in the last 15 years has been the recipe. Now, it's your turn. Tell us your dreams, we will get you there.`,
    whyGMQFetuses: [
        {
            id: 1,
            text:`Located in 15 Countries`,
            icon_img: locator
        },
        {
            id: 2,
            text:"End to End Services",
            icon_img: route
        },
        {
            id: 3,
            text:"750+ Partner Institutions",
            icon_img: university
        },
        {
            id: 4,
            text:"High Visa Success Rate",
            icon_img: passport
        },
    ],
    secondaryImg: whyGMQ
}