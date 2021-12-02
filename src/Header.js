import React from "react";
import "./Header.css";
import iiitulogo from "./iiitulogo.png";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SchoolIcon from "@material-ui/icons/School";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import StorefrontIcon from "@material-ui/icons/Storefront";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ForumIcon from "@material-ui/icons/Forum";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useStateValue } from "./StateProvider";

export default function Header() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <img src={iiitulogo} alt="IIIT Una logo" className="header__logo" />
        <div className="header__input">
          <SearchIcon />
          <input type="text" placeholder="Search Something" />
        </div>
      </div>
      <div className="header__center"></div>
      <div className="header__option header__option--active">
        <HomeIcon fontsize="large" />{" "}
      </div>
      <div className="header__option">
        <a target="_blank" href="http://www.iiitu.ac.in/#gsc.tab=0">
          <SchoolIcon fontsize="large" />{" "}
        </a>
      </div>
      <div className="header__option">
        <a target="_blank" href="https://www.youtube.com">
          <SubscriptionsIcon fontsize="large" />{" "}
        </a>
      </div>
      <div className="header__option">
        <StorefrontIcon fontsize="large" />{" "}
      </div>
      <div className="header__option">
        <SupervisedUserCircleIcon fontsize="large" />{" "}
      </div>

      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL} />
          <h4> {user.displayName}</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>

        <a href="/Login">
          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </a>
      </div>
    </div>
  );
}
