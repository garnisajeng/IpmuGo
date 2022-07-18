import React from "react";
import { Link } from "react-router-dom";
import Setting2css from '../../Assets/CSS/Setting2.css';
import Porto1 from '../../Assets/images/logo-blue.png';
import Profile from '../../Assets/images/people.png';

const Setting2 = () => {
    return(
        <>
		<section>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

	{/* <!-- Boxicons --> */}
	<link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet' />
	{/* <!-- My CSS --> */}
	<link rel='stylesheet' type="text/css" href={Setting2css}></link>
    
	<title>AdminHub</title>

<body className="body-setting2">


	{/* <!-- SIDEBAR --> */}
	<section id="sidebar-set2">
		<a href="#" class="brand">
			<i class='bx bxs-smile'></i>
			<h2>Ipmu<span class="text">Go</span></h2>
		</a>
		<ul class="side-menu top">
			<li class="active">
				<a href="#">
					<i class='bx bxs-dashboard' ></i>
					<span class="text">Dashboard</span>
				</a>
			</li>
			<li>
				<a href="#">
					<i class='bx bxs-shopping-bag-alt' ></i>
					<span class="text">My Store</span>
				</a>
			</li>
			<li>
				<a href="#">
					<i class='bx bxs-doughnut-chart' ></i>
					<span class="text">Analytics</span>
				</a>
			</li>
			<li>
				<a href="#">
					<i class='bx bxs-message-dots' ></i>
					<span class="text">Message</span>
				</a>
			</li>
			<li>
				<a href="#">
					<i class='bx bxs-group' ></i>
					<span class="text">Team</span>
				</a>
			</li>
		</ul>
		<ul class="side-menu">
			<li>
				<a href="#">
					<i class='bx bxs-cog' ></i>
					<span class="text">Settings</span>
				</a>
			</li>
			<li>
				<a href="#" class="logout">
					<i class='bx bxs-log-out-circle' ></i>
					<span class="text">Logout</span>
				</a>
			</li>
		</ul>
	</section>
	{/* <!-- SIDEBAR --> */}



	{/* <!-- CONTENT --> */}
	<section id="content-set2">
		{/* <!-- NAVBAR --> */}
		<nav>
			<i class='bx bx-menu' ></i>
			<a href="#" class="nav-link">Categories</a>
			<form action="#">
				<div class="form-input">
					<input type="search" placeholder="Search..." />
					<button type="submit" class="search-btn"><i class='bx bx-search' ></i></button>
				</div>
			</form>
			<input type="checkbox" id="switch-mode" hidden />
			<label for="switch-mode" class="switch-mode"></label>
			<a href="#" class="notification">
				<i class='bx bxs-bell' ></i>
				<span class="num">8</span>
			</a>
            <div className="info-du">
                <p>Hey, <b>Daniel</b></p>
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
						<li><i class='bx bx-chevron-right' ></i></li>
						<li>
							<a class="active" href="#">Setting</a>
						</li>
					</ul>
				</div>
			</div>

			<div className="page-set">
			<div className="content-form">
                <div className="wrapper">
					<h4>Change Password</h4>
				
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
				</div>
					
                </div>

                <div className="wrapper">
					<h4>Change Email</h4>
				
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
				</div>
					
                </div>

				<div className="two-factor">
						<div className="content-two-factor">
					<h4>Metadata</h4>
					<div className="d-flex flex-row">
					<tr>
						<td>
						<p className="p-two"><b>You have not enabled two factor authentication.</b> When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application.</p>
						</td>
						<td >
                        <input type="checkbox" id="switch-mode" hidden />
                        <label for="switch-mode" class="switch-mode2"></label>
						</td>
						</tr>
						</div>
						</div>
					</div>

					<div className="brow-ses">
						<div className="content-brow">
					<div className="d-flex flex-row">
					<tr>
						<td>
						<p className="p-browser">If necessary, you may log out of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password.</p>
						</td>
						<td><a href="#" class="btn-download">
							<span class="text">Download</span>
						</a>
						</td>
						</tr>
						</div>
						</div>
					</div>
            </div>
			
			</div>

			
		</main>
		{/* -- MAIN --> */}
	</section>
	{/*-- CONTENT --> */}
	

{/*	<script src={Script}></script> */}
</body>
</section>
        </>
    )
}

export default Setting2;