import React from "react";
import { Link } from "react-router-dom";
import Settingcss from "../../Assets/CSS/Setting.css";
import Porto1 from "../../Assets/images/logo-blue.png";
import Profile from "../../Assets/images/people.png";

const Setting = () => {
  return (
    <>
      <section>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* <!-- Boxicons --> */}
        <link
          href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css"
          rel="stylesheet"
        />
        {/* <!-- My CSS --> */}
        <link rel="stylesheet" type="text/css" href={Settingcss}></link>

        <title>AdminHub</title>

        <body className="body-setting">
          {/* <!-- SIDEBAR --> */}
          <section id="sidebar-set">
            <a href="#" class="brand">
              <i class="bx bxs-smile"></i>
              <h2>
                Ipmu<span class="text">Go</span>
              </h2>
            </a>
            <ul class="side-menu top">
              <li class="active">
                <a href="#">
                  <i class="bx bxs-dashboard"></i>
                  <span class="text">Dashboard</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="bx bxs-shopping-bag-alt"></i>
                  <span class="text">My Store</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="bx bxs-doughnut-chart"></i>
                  <span class="text">Analytics</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="bx bxs-message-dots"></i>
                  <span class="text">Message</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="bx bxs-group"></i>
                  <span class="text">Team</span>
                </a>
              </li>
            </ul>
            <ul class="side-menu">
              <li>
                <a href="#">
                  <i class="bx bxs-cog"></i>
                  <span class="text">Settings</span>
                </a>
              </li>
              <li>
                <a href="#" class="logout">
                  <i class="bx bxs-log-out-circle"></i>
                  <span class="text">Logout</span>
                </a>
              </li>
            </ul>
          </section>
          {/* <!-- SIDEBAR --> */}

          {/* <!-- CONTENT --> */}
          <section id="content-set">
            {/* <!-- NAVBAR --> */}
            <nav>
              <i class="bx bx-menu"></i>
              <a href="#" class="nav-link">
                Categories
              </a>
              <form action="#">
                <div class="form-input">
                  <input type="search" placeholder="Search..." />
                  <button type="submit" class="search-btn">
                    <i class="bx bx-search"></i>
                  </button>
                </div>
              </form>
              <input type="checkbox" id="switch-mode" hidden />
              <label for="switch-mode" class="switch-mode"></label>
              <a href="#" class="notification">
                <i class="bx bxs-bell"></i>
                <span class="num">8</span>
              </a>
              <div className="info-du">
                <p>
                  Hey, <b>Daniel</b>
                </p>
                <small className="text-muted-du">Admin</small>
              </div>
              <a href="#" class="profile">
                <img class="img-du" src={Profile} alt="..." />
              </a>
            </nav>
            {/* <!-- NAVBAR --> */}

            {/* <!-- MAIN --> */}
            <main>
              <div class="head-title">
                <div class="left">
                  <h1>Dashboard</h1>
                  <ul class="breadcrumb">
                    <li>
                      <a href="#">Dashboard</a>
                    </li>
                    <li>
                      <i class="bx bx-chevron-right"></i>
                    </li>
                    <li>
                      <a class="active" href="#">
                        Setting
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/*}	<div className="page-set">
			<div className="content-form">
                <div className="wrapper">
					<h4>Profile</h4>
				<div className="avatar">
				<tr>
					<td>Avatar</td>
					<td>
                    	<img class="img-du" src={Profile} alt="..." />
					</td>
				</tr>
				<a href="#" class="btn-download">
					<span class="text">Change Avatar</span>
				</a>
				</div>
				
				<div className="form d-flex flex-column justify-content-center align-items-end">
				<div className="contact-form">
				<td>
                    <div className="wrap">
						<div className="input-data">
                        	<input type="text" required />
							<div className="underline"></div>
							<label>First Name*</label>
						</div>
                    </div>
				</td>
				<td>
					<div className="wrap">
						<div className="input-data">
                        	<input type="text" required />
							<div className="underline"></div>
							<label>Last Name*</label>
						</div>
                    </div>
				</td>
				</div>
				<div className="contact-form">
				<td>
                    <div className="wrap">
						<div className="input-data">
                        	<input type="text" required />
							<div className="underline"></div>
							<label>Email</label>
						</div>
                    </div>
				</td>
				<td>
                    <div className="wrap">
						<div className="input-data">
                        	<input type="text" required />
							<div className="underline"></div>
							<label>Affiliation</label>
						</div>
                    </div>
				</td>
				</div>
				<div className="contact-form">
				<td>
                    <div className="wrap">
						<div className="input-data">
                        	<input type="text" required />
							<div className="underline"></div>
							<label>Interest</label>
						</div>
                    </div>
				</td>
				<td>
                    <div className="wrap">
						<div className="input-data">
                        	<input type="text" required />
							<div className="underline"></div>
							<label>Departement</label>
						</div>
                    </div>
				</td>
				</div>
				<div className="contact-form">
				<td>
                    <div className="wrap">
						<div className="input-data">
                        	<input type="text" required />
							<div className="underline"></div>
							<label>ORCID</label>
						</div>
                    </div>
				</td>
				<td>
                    <div className="wrap">
						<div className="input-data">
                        	<input type="text" required />
							<div className="underline"></div>
							<label>Scopus ID</label>
						</div>
                    </div>
				</td>
				</div>
				<div className="contact-form">
				<td>
                    <div className="wrap">
						<div className="input-data">
                        	<input type="text" required />
							<div className="underline"></div>
							<label>Publons</label>
						</div>
                    </div>
				</td>
				<td>
                    <div className="wrap">
						<div className="input-data">
                        	<input type="text" required />
							<div className="underline"></div>
							<label>Linked In</label>
						</div>
                    </div>
				</td>
				</div>
				<div className="contact-form">
				<td>
                    <div className="wrap">
						<div className="input-data">
                        	<input type="text" required />
							<div className="underline"></div>
							<label>Bio</label>
						</div>
                    </div>
				</td>
				<td>
                    <div className="wrap">
						<div className="input-data">
                        	<input type="text" required />
							<div className="underline"></div>
							<label>Address</label>
						</div>
                    </div>
				</td>
				</div>
				<div className="contact-form">
				<td>
                    <div className="wrap">
						<div className="input-data">
                        	<input type="text" required />
							<div className="underline"></div>
							<label>Country</label>
						</div>
                    </div>
				</td>
				</div>
				</div>
					
                </div>

				<div className="two-factor">
						<div className="content-two-factor">
					<h4>Two Factor Authentication</h4>
					<div className="d-flex flex-row">
					<tr>
					<td>
					<p>Add additional security to your account using two factor authentication.</p>
					</td>
						<td>
						<p className="p-two"><b>You have not enabled two factor authentication.</b> When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application.</p>
						</td>
						<td ><a href="#" class="btn-download">
							<span class="text">Enable</span>
						</a>
						</td>
						</tr>
						</div>
						</div>
					</div>

					<div className="brow-ses">
						<div className="content-brow">
					<h4>Browser Sessions</h4>
					<div className="d-flex flex-row">
					<tr>
					<td>
					<p>Manage and log out your active sessions on other browsers and devices.</p>
					</td>
						<td>
						<p className="p-browser">If necessary, you may log out of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password.</p>
						</td>
						<td><a href="#" class="btn-download">
							<span class="text">Logout</span>
						</a>
						</td>
						</tr>
						</div>
						</div>
					</div>

					<div className="del-acc">
						<div className="content-del">
					<h4>Delete Account</h4>
					<div className="d-flex flex-row">
					<tr>
					<td>
					<p>Permanently delete your account.</p>
					</td>
						<td>
						<p className="p-delete">Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain.</p>
						</td>
						<td><a href="#" class="btn-download">
							<span class="text">Delete</span>
						</a>
						</td>
						</tr>
						</div>
						</div>
					</div>
            </div>
			
			</div> */}
            </main>
            {/* -- MAIN --> */}
          </section>
          {/*-- CONTENT --> */}

          {/*	<script src={Script}></script> */}
        </body>
      </section>
    </>
  );
};

export default Setting;
