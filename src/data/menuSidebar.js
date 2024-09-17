import { AiOutlineBarChart, AiOutlineFileText, AiOutlineLogout, AiOutlineMail, AiOutlineSetting } from "react-icons/ai";
import { BsFillImageFill, BsPerson, BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";

export const menu = [
    { title: "Dashboard", icon: <RxDashboard /> },
    { title: "Pages", icon: <AiOutlineFileText /> },
    { title: "Mendia", icon: <BsFillImageFill />, spacing: true },
    {
        title: "Project",
        icon: <BsReverseLayoutTextSidebarReverse />,
        submenu: true,
        submenuItems: [
            { title: "Submenu 1" },
            { title: "Submenu 2" },
            { title: "Submenu 3" }
        ]
    },
    { title: "Analisytics", icon: <AiOutlineBarChart /> },
    { title: "Inbox", icon: <AiOutlineMail /> },
    { title: "Profile", icon: <BsPerson />, spacing: true },
    { title: "Setting", icon: <AiOutlineSetting /> },
    { title: "Logout", icon: <AiOutlineLogout /> }
]

