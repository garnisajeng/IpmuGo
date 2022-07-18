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

              <div>
                <div className="md:grid md:grid-cols-3 md:gap-6">
                  <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                      <h3 className="text-lg font-medium leading-6 text-gray-900">
                        Profile
                      </h3>
                      <p className="mt-1 text-sm text-gray-600">
                        This information will be displayed publicly so be
                        careful what you share.
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 md:mt-0 md:col-span-2">
                    <form action="#" method="POST">
                      <div className="shadow sm:rounded-md sm:overflow-hidden">
                        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                          <div className="grid grid-cols-3 gap-6">
                            <div className="col-span-3 sm:col-span-2">
                              <label
                                htmlFor="company-website"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Website
                              </label>
                              <div className="mt-1 flex rounded-md shadow-sm">
                                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                  http://
                                </span>
                                <input
                                  type="text"
                                  name="company-website"
                                  id="company-website"
                                  className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                  placeholder="www.example.com"
                                />
                              </div>
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor="about"
                              className="block text-sm font-medium text-gray-700"
                            >
                              About
                            </label>
                            <div className="mt-1">
                              <textarea
                                id="about"
                                name="about"
                                rows={3}
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                placeholder="you@example.com"
                                defaultValue={""}
                              />
                            </div>
                            <p className="mt-2 text-sm text-gray-500">
                              Brief description for your profile. URLs are
                              hyperlinked.
                            </p>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700">
                              Photo
                            </label>
                            <div className="mt-1 flex items-center">
                              <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                <svg
                                  className="h-full w-full text-gray-300"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                              </span>
                              <button
                                type="button"
                                className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              >
                                Change
                              </button>
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700">
                              Cover photo
                            </label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                              <div className="space-y-1 text-center">
                                <svg
                                  className="mx-auto h-12 w-12 text-gray-400"
                                  stroke="currentColor"
                                  fill="none"
                                  viewBox="0 0 48 48"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <div className="flex text-sm text-gray-600">
                                  <label
                                    htmlFor="file-upload"
                                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                  >
                                    <span>Upload a file</span>
                                    <input
                                      id="file-upload"
                                      name="file-upload"
                                      type="file"
                                      className="sr-only"
                                    />
                                  </label>
                                  <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs text-gray-500">
                                  PNG, JPG, GIF up to 10MB
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                          <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
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
