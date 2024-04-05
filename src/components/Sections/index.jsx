import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import DrawIcon from "@mui/icons-material/Draw";
import Home from "../Home";
import About from "../About";
import Contact from "../Contact";
import Services from "../Services";

export const sections = [
  {
    label: "home",
    icon: <HomeIcon color="lightGreen" fontSize="small" />,
    component: <Home idSelector="home" />,
  },
  {
    label: "about",
    icon: <InfoIcon color="lightGreen" fontSize="small" />,
    component: <About idSelector="about" />,
  },
  {
    label: "services",
    icon: <DrawIcon color="lightGreen" fontSize="small" />,
    component: <Services idSelector="services" />,
  },
  {
    label: "contact",
    icon: <ContactsIcon color="lightGreen" fontSize="small" />,
    component: <Contact idSelector="contact" />,
  },
];
