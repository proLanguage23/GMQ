import { MdAddCall } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";

export const ContactDummyData = {
    ContactSectionOne: {
        title: `Get In Touch`,
        text: `Chat to us about your NDIS support needs and our team will work with you to come up with the best solutions to help you meet your goals. We love hearing from all our stakeholders, so get in touch today for any reason.`,
        data: [
            {
                asserts: <MdAddCall size={32} color="#fff" />,
                title: `Call Us`,
                text: `+61416310688` 
            },
            {
                asserts: <MdOutlineMailOutline size={32} color="#fff" />,
                title: `Send Us A Message`,
                text: `info@gmqglobal.com.au` 
            },
            {
                asserts: <FaRegClock size={32} color="#fff" />,
                title: `Office Hours`,
                text: `8:00AM - 5:00PM` 
            },
        ]
    }
}