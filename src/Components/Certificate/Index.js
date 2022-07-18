import React from "react";
import Reviewpapercss from '../../Assets/CSS/Certificate.css';
import Profile from '../../Assets/images/people.png';
import Porto1 from '../../Assets/images/logo-blue.png';

const Certificate = () => {
    return(
        <>
           <section className="certificate">
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	{/* <!-- Boxicons --> */}
	<link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet' />
	{/* <!-- My CSS --> */}
	<link rel='stylesheet' type="text/css" href={Reviewpapercss}></link>
    <link href='https://fonts.googleaois.com/icon?family=Material+Icons+Sharp' rel='stylesheet'></link>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

    <body className="certificate">


	{/* <!-- SIDEBAR --> */}
	<section id="sidebar-c">
		<a href="#" class="brand">
			<i><img class="img-c" src={Porto1} alt="..." /></i>
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
	<section id="content-c">
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
					<h1>Certificate</h1>
					<ul class="breadcrumb">
						<li>
							<a href="#">Dashboard</a>
						</li>
						<li><i class='bx bx-chevron-right' ></i></li>
						<li>
							<a class="active" href="#">Certificate</a>
						</li>
					</ul>
				</div>
			</div>


			<div class="table-data">
				<div class="order">
					<div class="head">
						<h3>Certificate</h3>
						<i class='bx bx-search' ></i>
						<i class='bx bx-filter' ></i>
					</div>
					<table>
						<thead>
							<tr>
								<th>User</th>
                                <th>Tittle</th>
								<th>Date</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
                                    <img class="img-du" src={Profile} alt="..." />
									<p>John Doe</p>
								</td>
                                <td>Lorem ipmsum</td>
								<td>01-10-2021</td>
								<td><span class="material-symbols-outlined">file_download</span></td>
							</tr>
							<tr>
								<td>
                                    <img class="img-du" src={Profile} alt="..." />
									<p>John Doe</p>
								</td>
                                <td>Lorem ipmsum</td>
								<td>01-10-2021</td>
								<td><span class="material-symbols-outlined">file_download</span></td>
							</tr>
							<tr>
								<td>
                                    <img class="img-du" src={Profile} alt="..." />
									<p>John Doe</p>
								</td>
                                <td>Lorem ipmsum</td>
								<td>01-10-2021</td>
								<td><span class="material-symbols-outlined">file_download</span></td>
							</tr>
							<tr>
								<td>
                                    <img class="img-du" src={Profile} alt="..." />
									<p>John Doe</p>
								</td>
                                <td>Lorem ipmsum</td>
								<td>01-10-2021</td>
								<td><span class="material-symbols-outlined">file_download</span></td>
							</tr>
							<tr>
								<td>
                                    <img class="img-du" src={Profile} alt="..." />
									<p>John Doe</p>
								</td>
                                <td>Lorem ipmsum</td>
								<td>01-10-2021</td>
								<td><span class="material-symbols-outlined">file_download</span></td>
							</tr>
                            <tr>
								<td>
                                    <img class="img-du" src={Profile} alt="..." />
									<p>John Doe</p>
								</td>
                                <td>Lorem ipmsum</td>
								<td>01-10-2021</td>
								<td><span class="material-symbols-outlined">file_download</span></td>
							</tr>
                            <tr>
								<td>
                                    <img class="img-du" src={Profile} alt="..." />
									<p>John Doe</p>
								</td>
                                <td>Lorem ipmsum</td>
								<td>01-10-2021</td>
								<td><span class="material-symbols-outlined">file_download</span></td>
							</tr>
							<tr>
								<td>
                                    <img class="img-du" src={Profile} alt="..." />
									<p>John Doe</p>
								</td>
                                <td>Lorem ipmsum</td>
								<td>01-10-2021</td>
								<td><span class="material-symbols-outlined">file_download</span></td>
							</tr>
							<tr>
								<td>
                                    <img class="img-du" src={Profile} alt="..." />
									<p>John Doe</p>
								</td>
                                <td>Lorem ipmsum</td>
								<td>01-10-2021</td>
								<td><span class="material-symbols-outlined">file_download</span></td>
							</tr>
							<tr>
								<td>
                                    <img class="img-du" src={Profile} alt="..." />
									<p>John Doe</p>
								</td>
                                <td>Lorem ipmsum</td>
								<td>01-10-2021</td>
								<td><span class="material-symbols-outlined">file_download</span></td>
							</tr>
						</tbody>
					</table>
                    
				</div>
			</div>
			<button type="button" className="menu-btn">
                <span>Next</span>
            </button>
		</main>
		{/* -- MAIN --> */}
	</section>
	{/*-- CONTENT --> */}
	
</body>
</section>  
        </>
    )
}

export default Certificate;