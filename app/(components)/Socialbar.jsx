"use client";
import React from "react";

import TwitterIcon from "@mui/icons-material/Twitter";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import Instagram from "@mui/icons-material/Instagram";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

import "./Menubar.css";

const Socialbar = () => {
  return (
    <div className="float-right">
      <ul className="inline-flex">
        <li></li>
        <li>
          <a href="#">become an affiliate</a>
        </li>
        <li>
          <TwitterIcon />
        </li>
        <li>
          {" "}
          <MusicNoteOutlinedIcon />
        </li>
        <li>
          <Instagram />
        </li>
        <li>
          <PersonOutlineOutlinedIcon />
        </li>
        <li>
          <SearchIcon />
        </li>
        <li>
          <LocalMallOutlinedIcon />
        </li>
      </ul>
    </div>
  );
};

export default Socialbar;
