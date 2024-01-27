/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Aside = () => {
  return (
    <>
      <aside
        className="sidebar-left border-right bg-white shadow"
        id="leftSidebar"
        data-simplebar
      >
        <a
          href="#"
          className="btn collapseSidebar toggle-btn d-lg-none text-muted ml-2 mt-3"
          data-toggle="toggle"
        >
          <i className="fe fe-x">
            <span className="sr-only"></span>
          </i>
        </a>
        <nav className="vertnav navbar navbar-light">
          <div className="w-100 mb-4 d-flex">
            <a
              className="navbar-brand mx-auto mt-2 flex-fill text-center"
              href="./index.html"
            >
              <svg
                version="1.1"
                id="logo"
                className="navbar-brand-img brand-sm"
                x="0px"
                y="0px"
                viewBox="0 0 120 120"
              >
                <g>
                  <polygon className="st0" points="78,105 15,105 24,87 87,87" />
                  <polygon className="st0" points="96,69 33,69 42,51 105,51" />
                  <polygon className="st0" points="78,33 15,33 24,15 87,15" />
                </g>
              </svg>
            </a>
          </div>
          <ul className="navbar-nav flex-fill w-100 mb-2">
            <li className="nav-item dropdown">
              <a
                href="#dashboard"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle nav-link"
              >
                <i className="fe fe-home fe-16"></i>
                <span className="ml-3 item-text">Dashboard</span>
                <span className="sr-only">(current)</span>
              </a>
              <ul className="collapse list-unstyled pl-4 w-100" id="dashboard">
                <li className="nav-item active">
                  <a className="nav-link pl-3" href="/home">
                    <span className="ml-1 item-text">Home</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <p className="text-muted nav-heading mt-4 mb-1">
            <span>Apps</span>
          </p>
          <ul className="navbar-nav flex-fill w-100 mb-2">
            <li className="nav-item dropdown">
              <a
                href="#fileman"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle nav-link"
              >
                <i className="fe fe-folder fe-16"></i>
                <span className="ml-3 item-text">Crud Manager</span>
              </a>
              <ul className="collapse list-unstyled pl-4 w-100" id="fileman">
                <a className="nav-link pl-3" href="/energy">
                  <span className="ml-1">Energy</span>
                </a>
                <a className="nav-link pl-3" href="/transmission">
                  <span className="ml-1">Transmission</span>
                </a>
                <a className="nav-link pl-3" href="/mark">
                  <span className="ml-1">Mark</span>
                </a>
                <a className="nav-link pl-3" href="/model">
                  <span className="ml-1">Model</span>
                </a>
              </ul>
            </li>
            <li className="nav-item w-100">
              <a className="nav-link" href="/announcement">
                <i className="fe fe-file-text fe-16"></i>
                <span className="ml-3 item-text">Announcement Publish</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Aside;
