import React, { Component } from "react";
import "./NavBar.css";

class NavigationBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <a
          className="navbar-brand d-block d-sm-block d-md-block d-lg-none"
          href="#"
        >
          <img
            src="assets/img/logo-dark.png"
            width="145"
            height="32.3"
            alt="RadioTALK"
          />
        </a>
        <button
          className="hamburger hamburger--slider"
          type="button"
          data-target=".sidebar"
          aria-controls="sidebar"
          aria-expanded="false"
          aria-label="Toggle Sidebar"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
        {/* <!-- Added Mobile-Only Menu --> */}
        <ul className="navbar-nav ml-auto mobile-only-control d-block d-sm-block d-md-block d-lg-none">
          <li className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              id="navbar-notification-search-mobile"
              data-toggle="dropdown"
              data-flip="false"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="batch-icon batch-icon-search" />
            </a>
            <ul
              className="dropdown-menu dropdown-menu-fullscreen"
              aria-labelledby="navbar-notification-search-mobile"
            >
              <li>
                <form className="form-inline my-2 my-lg-0 no-waves-effect">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Buscar contatos..."
                      aria-label="Buscar contatos..."
                      aria-describedby="basic-addon2"
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-primary btn-gradient waves-effect waves-light"
                        type="button"
                      >
                        <i className="batch-icon batch-icon-search" />
                      </button>
                    </div>
                  </div>
                </form>
              </li>
            </ul>
          </li>
        </ul>

        {/* <!-- .collapse added to the element --> */}
        <div className="collapse navbar-collapse" id="navbar-header-content">
          <ul className="mr-auto"></ul>
          <ul>
            <img
              src="assets/img/icons8-whatsapp-green.svg"
              alt="Whatsapp-active"
            />
            <img
              src="assets/img/icons8-whatsapp-red.svg"
              alt="Whatsapp-disable"
            />
          </ul>
          <ul className="navbar-nav navbar-notifications float-right">
            <li className="nav-item dropdown">
              <a
                href="#!"
                className="nav-link dropdown-toggle"
                id="navbar-notification-search"
                data-toggle="dropdown"
                data-flip="false"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="batch-icon batch-icon-search" />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-fullscreen"
                aria-labelledby="navbar-notification-search"
              >
                <li>
                  <form className="form-inline my-2 my-lg-0 no-waves-effect">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Buscar contatos..."
                        aria-label="Buscar contatos..."
                        aria-describedby="basic-addon2"
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-primary btn-gradient waves-effect waves-light"
                          type="button"
                        >
                          Buscar
                        </button>
                      </div>
                    </div>
                  </form>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle no-waves-effect"
                id="navbar-notification-calendar"
                data-toggle="dropdown"
                data-flip="false"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="batch-icon batch-icon-calendar" />
                <span className="notification-number">6</span>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-right dropdown-menu-md"
                aria-labelledby="navbar-notification-calendar"
              >
                <li className="media">
                  <a href="task-list.html">
                    <i className="batch-icon batch-icon-calendar batch-icon-xl d-flex mr-3" />
                    <div className="media-body">
                      <h6 className="mt-0 mb-1 notification-heading">
                        Meeting with Project Manager
                      </h6>
                      <div className="notification-text">
                        Cras sit amet nibh libero
                      </div>
                      <span className="notification-time">Right now</span>
                    </div>
                  </a>
                </li>
                <li className="media">
                  <a href="task-list.html">
                    <i className="batch-icon batch-icon-calendar batch-icon-xl d-flex mr-3" />
                    <div className="media-body">
                      <h6 className="mt-0 mb-1 notification-heading">
                        Sales Call
                      </h6>
                      <div className="notification-text">
                        Nibh amet cras sit libero
                      </div>
                      <span className="notification-time">
                        One hour from now
                      </span>
                    </div>
                  </a>
                </li>
                <li className="media">
                  <a href="task-list.html">
                    <i className="batch-icon batch-icon-calendar batch-icon-xl d-flex mr-3" />
                    <div className="media-body">
                      <h6 className="mt-0 mb-1 notification-heading">
                        Email CEO new expansion proposal
                      </h6>
                      <div className="notification-text">
                        Cras sit amet nibh libero
                      </div>
                      <span className="notification-time">In 3 days</span>
                    </div>
                  </a>
                </li>
                <li className="media">
                  <a href="task-list.html">
                    <i className="batch-icon batch-icon-calendar batch-icon-xl d-flex mr-3" />
                    <div className="media-body">
                      <h6 className="mt-0 mb-1 notification-heading">
                        Team building exercise
                      </h6>
                      <div className="notification-text">
                        Cras sit amet nibh libero
                      </div>
                      <span className="notification-time">In one week</span>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                href="#!"
                className="nav-link dropdown-toggle no-waves-effect"
                id="navbar-notification-misc"
                data-toggle="dropdown"
                data-flip="false"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="batch-icon batch-icon-bell" />
                <span className="notification-number">4</span>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-right dropdown-menu-md"
                aria-labelledby="navbar-notification-misc"
              >
                <li className="media">
                  <a href="task-list.html">
                    <i className="batch-icon batch-icon-bell batch-icon-xl d-flex mr-3" />
                    <div className="media-body">
                      <h6 className="mt-0 mb-1 notification-heading">
                        General Notification
                      </h6>
                      <div className="notification-text">
                        Cras sit amet nibh libero
                      </div>
                      <span className="notification-time">Just now</span>
                    </div>
                  </a>
                </li>
                <li className="media">
                  <a href="task-list.html">
                    <i className="batch-icon batch-icon-cloud-download batch-icon-xl d-flex mr-3" />
                    <div className="media-body">
                      <h6 className="mt-0 mb-1 notification-heading">
                        Your Download Is Ready
                      </h6>
                      <div className="notification-text">
                        Nibh amet cras sit libero
                      </div>
                      <span className="notification-time">5 minutes ago</span>
                    </div>
                  </a>
                </li>
                <li className="media">
                  <a href="task-list.html">
                    <i className="batch-icon batch-icon-tag-alt-2 batch-icon-xl d-flex mr-3" />
                    <div className="media-body">
                      <h6 className="mt-0 mb-1 notification-heading">
                        New Order
                      </h6>
                      <div className="notification-text">
                        Cras sit amet nibh libero
                      </div>
                      <span className="notification-time">Yesterday</span>
                    </div>
                  </a>
                </li>
                <li className="media">
                  <a href="task-list.html">
                    <i className="batch-icon batch-icon-pull batch-icon-xl d-flex mr-3" />
                    <div className="media-body">
                      <h6 className="mt-0 mb-1 notification-heading">
                        Pull Request
                      </h6>
                      <div className="notification-text">
                        Cras sit amet nibh libero
                      </div>
                      <span className="notification-time">3 day ago</span>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="navbar-nav ml-5 navbar-profile">
            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                id="navbar-dropdown-navbar-profile"
                data-toggle="dropdown"
                data-flip="false"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <div className="profile-name">Vipphone</div>
                <div className="profile-picture bg-gradient bg-primary has-message float-right">
                  <img
                    src="assets/img/profile-pic.jpg"
                    width="44"
                    height="44"
                    alt="Profile"
                  />
                </div>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbar-dropdown-navbar-profile"
              >
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                  >
                    Perfil
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                  >
                    Configurações
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sair
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavigationBar;
