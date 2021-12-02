import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChatIcon from "@material-ui/icons/Chat";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import { useStateValue } from "./StateProvider";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="Sidebar">
      <SidebarRow src={user.photoURL} title={user.displayName} />

      <a target="_blank" href="https://talk-me-8e24c.web.app">
        <SidebarRow Icon={ChatIcon} title="Messenger" />{" "}
      </a>
      <a
        target="_blank"
        href="https://covid.giveindia.org/?utm_source=google&utm_medium=cpc&utm_campaign=SB_GI_Corona_Relief_Fund_Generic_India_April2021&utm_adgroup=123183407722&utm_term=help%20to%20fight%20covid-19&utm_matchtype=b&utm_device=c&gclid=Cj0KCQiA7oyNBhDiARIsADtGRZYukpz8SoDOHP79nlym0FzIvBaiML9tCbsf2gKMK4UeMcaeeZ-tZLkaAoLJEALw_wcB"
      >
        <SidebarRow
          Icon={LocalHospitalIcon}
          title="COVID-19 Information Center"
        />
      </a>

      <a
        target="_blank"
        href="https://news.google.com/topstories?hl=en-IN&gl=IN&ceid=IN:en"
      >
        <SidebarRow Icon={AnnouncementIcon} title="News" />
      </a>

      <a target="_blank" href="https://github.com/saurabhh-svg">
        <SidebarRow Icon={GitHubIcon} title="Github" />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/saurabh-singh-82287a201"
      >
        <SidebarRow Icon={LinkedInIcon} title="Linkedin" />
      </a>
      <a target="_blank" href="mailto:singhsaurabh2901@gmail.com">
        <SidebarRow Icon={EmailIcon} title="ContactUs" />
      </a>

      <SidebarRow Icon={ExpandMoreIcon} title="Marketplace" />
    </div>
  );
}
export default Sidebar;
