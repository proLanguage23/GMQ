import { MdAddCall } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { call } from "./ShareData";

export const ContactDummyData = {
  ContactSectionOne: {
    title: `Get In Touch`,
    text: `Chat to us about your NDIS support needs and our team will work with you to come up with the best solutions to help you meet your goals. We love hearing from all our stakeholders, so get in touch today for any reason.`,
    data: [
      {
        asserts: <MdAddCall size={32} color="#fff" />,
        title: `Phone Number`,
        text: `${call}`,
      },
      {
        asserts: <MdOutlineMailOutline size={32} color="#fff" />,
        title: `Email`,
        text: `info@gmqglobal.com.au`,
      },
      {
        asserts: <FaRegClock size={32} color="#fff" />,
        title: `Office Hours`,
        text: `
                <div class="group grid grid-cols-1 mt-4">
                    <div class="group item grid lg:grid-cols-3 grid-cols-2 justify-center items-center">
                        <div class="left">
                                <p class="part">Saturday</p>
                        </div>
                        <div class="right">
                            <p class="part">: Closed</p>
                        </div>
                    </div>
                    <div class="group item grid lg:grid-cols-3 grid-cols-2 justify-center items-center">
                        <div class="left">
                            <p class="part">Sunday</p>
                            <p class="part">(Christmas Eve)</p>
                        </div>
                        <div class="right">
                            <p class="part">: Closed</p>
                        </div>
                    </div>
                    <div class="group item grid lg:grid-cols-3 grid-cols-2 justify-center items-center">
                        <div class="left">
                            <p class="part">Monday</p>
                        </div>
                        <div class="right">
                            <p class="part">: 10 am-6pm</p>
                        </div>
                    </div>
                    <div class="group item grid lg:grid-cols-3 grid-cols-2 justify-center items-center">
                        <div class="left">
                            <p class="part">(Christmas Day)</p>
                        </div>
                        <div class="right">
                            <p class="part text-secondary">: Hours might differ</p>
                        </div>
                    </div>
                    <div class="group item grid lg:grid-cols-3 grid-cols-2 justify-center items-center">
                        <div class="left">
                            <p class="part">Tuesday</p>
                        </div>
                        <div class="right">
                            <p class="part">: 10 am-6pm</p>
                        </div>
                    </div>
                    <div class="group item grid lg:grid-cols-3 grid-cols-2 justify-center items-center">
                        <div class="left">
                            <p class="part">(Boxing Day)</p>
                        </div>
                        <div class="right">
                            <p class="part text-secondary">: Hours might differ</p>
                        </div>
                    </div>
                    <div class="group item grid lg:grid-cols-3 grid-cols-2 justify-center items-center">
                        <div class="left">
                            <p class="part">Wednesday</p>
                        </div>
                        <div class="right">
                            <p class="part">: 10 am-6pm</p>
                        </div>
                    </div>
                    <div class="group item grid lg:grid-cols-3 grid-cols-2 justify-center items-center">
                        <div class="left">
                            <p class="part">Thursday</p>
                        </div>
                        <div class="right">
                            <p class="part">: 10 am-6pm</p>
                        </div>
                    </div>
                    <div class="group item grid lg:grid-cols-3 grid-cols-2 justify-center items-center">
                        <div class="left">
                            <p class="part">Friday</p>
                        </div>
                        <div class="right">
                            <p class="part">: 10 am-6pm</p>
                        </div>
                    </div>
                </div>
                `,
      },
    ],
  },
};
