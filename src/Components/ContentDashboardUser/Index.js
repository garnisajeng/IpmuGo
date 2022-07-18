import React from "react";
import { Link } from "react-router-dom";
import Dashcss from '../../Assets/CSS/DU.css';
import Porto1 from '../../Assets/images/logo-blue.png';
import Profile from '../../Assets/images/people.png';
{/* import Script from '../../Assets/CSS/IndexDU.js'; */}
const ContentDashboardUser = () => {
    return(
        <>
        
            {/* <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, intial-scale=1.0" />
            <link href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css' rel='stylesheet'></link>
            <link rel='stylesheet' type="text/css" href={Dashcss}></link>
            <body className="body-du">
                <input type="checkbox" id="check-du"></input>
                <div className="sidebar-du">
                <div className="sidebar-brand">
                        <h2><span className="lab la-accusoft"></span> IpmuGo</h2>
                    </div>
                    <center>
                    <img class="img-du" src={Porto1} alt="..." />
                    <h4>Willy Wonka</h4>
                    </center>
                    <a href="#"><i className="fas fa-desktop"></i><span>   Dashboard</span></a>
                    <a href="#"><i className="fas fa-cogs"></i><span>   Component</span></a>
                    <a href="#"><i className="fas fa-table"></i><span>   Tables</span></a>
                    <a href="#"><i className="fas fa-th"></i><span>   Forms</span></a>
                    <a href="#"><i className="fas fa-info-circle"></i><span>   About</span></a>
                    <a href="#"><i className="fas fa-sliders-h"></i><span>   Settings</span></a>
                    
                </div>
                <div className="main-content-du">
                <header className="header-du">
                    <h1>
                    <label className="label-du" for="check-du">
                        <span className="fas fa-bars"></span>
                    </label>
                       Dashboard
                    </h1>
                   
                    <div className="search-du">
                        <span className="fas fa-search"></span>
                        <input type="search" placeholder="Search here"></input>
                    </div>
                    <div className="user-wrapper-du">
                        <img src={Porto1} width="30px" height="30px" />
                        <div>
                            <h4>Willy Wonka</h4>
                            <small> Super Admin</small>
                        </div>
                    </div>
                </header>
                
                <div className="content-du">
                    <div className="cards-du">
                        <div>
                            <h1>54</h1>
                            <span>Customer</span>
                        </div>
                        <div>
                            <span className="fas fa-users"></span>
                        </div>
                    </div>
                    <div className="cards-du">
                        <div>
                            <h1>79</h1>
                            <span>Projects</span>
                        </div>
                        <div>
                            <span className="fas fa-clipboard-list"></span>
                        </div>
                    </div>
                    <div className="cards-du">
                        <div>
                            <h1>124</h1>
                            <span>Orders</span>
                        </div>
                        <div>
                            <span className="fas fa-shopping-bag"></span>
                        </div>
                    </div>
                    <div className="cards-du">
                        <div>
                            <h1>124</h1>
                            <span>Income</span>
                        </div>
                        <div>
                            <span className="fas fa-wallet"></span>
                        </div>
                    </div>
                </div>
                </div>
    </body> */}

{/*
    <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, intial-scale=1.0" />
        <link href='https://fonts.googleaois.com/icon?family=Material+Icons+Sharp' rel='stylesheet'></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel='stylesheet' type="text/css" href={Dashcss}></link>
            
    </head>
    <body className="body-du">
        <div className="container-du">
        <aside className="aside-du">
            <div className="top-du">
            <div className="logo-du">
                <img class="img-du" src={Porto1} alt="..." />
                <h2>Ipmu<span className="danger-du">Go</span></h2>
            </div>
            <div className="close-du" id="close-btn-du">
                <span class="material-symbols-outlined">close</span>
            </div>
            </div>
            <div className="sidebar-du">
                <a href="#">
                    <span class="material-symbols-outlined">grid_view</span>
                <h3>Dashboard</h3>
                </a>
                <a href="#" className="active-du">
                    <span class="material-symbols-outlined">person_outline</span>
                <h3>Customer</h3>
                </a>
                <a href="#">
                    <span class="material-symbols-outlined">receipt_long</span>
                <h3>Orders</h3>
                </a>
                <a href="#">
                    <span class="material-symbols-outlined">insights</span>
                <h3>Analytics</h3>
                </a>
                <a href="#">
                    <span class="material-symbols-outlined">mail_outline</span>
                <h3>Messages</h3>
                <span className="message-count">26</span>
                </a>
                <a href="#">
                    <span class="material-symbols-outlined">inventory</span>
                <h3>Products</h3>
                </a>
                <a href="#">
                    <span class="material-symbols-outlined">report</span>
                <h3>Reports</h3>
                </a>
                <a href="#">
                    <span class="material-symbols-outlined">settings</span>
                <h3>Settings</h3>
                </a>
                <a href="#">
                    <span class="material-symbols-outlined">add</span>
                <h3>Add Product</h3>
                </a>
                <a href="#">
                    <span class="material-symbols-outlined">logout</span>
                <h3>Logout</h3>
                </a>
            </div>
        </aside>
        <main className="main-du">
            <h1>Dashboard</h1>
            <div  className="date-du">
                <input type="date"></input>
            </div>
            <div className="insights-du">
                <div className="sales-du">
                <span class="material-symbols-outlined">analytics</span>
                <div className="middle-du">
                    <div className="left-du">
                        <h3>Total sales</h3>
                        <h1>$25,024</h1>
                    </div>
                <div className="progress-du">
                    <svg>
                        <circle cx='38' cy='38' r='36'></circle>
                    </svg>
                    <div className="number-du">
                        <p className="p-du">81%</p>
                    </div>
                    </div>
                </div>
                <small className="text-muted-du">Last 24 Hours</small>
                </div>
                <!------------ END OF SALES ------------!> 
                <div className="expenses-du">
                <span class="material-symbols-outlined">bar_chart</span>
                <div className="middle-du">
                    <div className="left-du">
                        <h3>Total Expenses</h3>
                        <h1>$26,900</h1>
                    </div>
                <div className="progress-du">
                    <svg>
                        <circle cx='38' cy='38' r='36'></circle>
                    </svg>
                    <div className="number-du">
                        <p className="p-du">86%</p>
                    </div>
                    </div>
                </div>
                <small className="text-muted-du">Last 24 Hours</small>
                </div>
                 <!------------ END OF EXPENSES ------------!> 
                <div className="income-du">
                <span class="material-symbols-outlined">stacked_line_chart</span>
                <div className="middle-du">
                    <div className="left-du">
                        <h3>Total income</h3>
                        <h1>$11,024</h1>
                    </div>
                <div className="progress-du">
                    <svg>
                        <circle cx='38' cy='38' r='36'></circle>
                    </svg>
                    <div className="number-du">
                        <p className="p-du">65%</p>
                    </div>
                    </div>
                </div>
                <small className="text-muted-du">Last 24 Hours</small>
                </div>
               <!------------ END OF INCOME ------------!> 
            </div>
            <!------------ END OF INCOME ------------!> 

            <div className="recent-order-du">
                <h2>Recent Orders</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Number</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Foldable Mini Drone</td>
                            <td>84756</td>
                            <td>Due</td>
                            <td className="warning-du">Pending</td>
                            <td className="primary-du">Pending</td>
                        </tr>
                        <tr>
                            <td>Foldable Mini Drone</td>
                            <td>84756</td>
                            <td>Due</td>
                            <td className="warning-du">Pending</td>
                            <td className="primary-du">Pending</td>
                        </tr>
                        <tr>
                            <td>Foldable Mini Drone</td>
                            <td>84756</td>
                            <td>Due</td>
                            <td className="warning-du">Pending</td>
                            <td className="primary-du">Pending</td>
                        </tr>
                        <tr>
                            <td>Foldable Mini Drone</td>
                            <td>84756</td>
                            <td>Due</td>
                            <td className="warning-du">Pending</td>
                            <td className="primary-du">Pending</td>
                        </tr>
                        <tr>
                            <td>Foldable Mini Drone</td>
                            <td>84756</td>
                            <td>Due</td>
                            <td className="warning-du">Pending</td>
                            <td className="primary-du">Pending</td>
                        </tr>
                    </tbody>
                </table>
                <a href="#">Show All</a>
            </div>
        </main>
         <!------------ END OF INCOME ------------!> 

        <div className="right-du">
            <div className="top-du">
                <button id="menu-btn">
                <span class="material-symbols-outlined">menu</span>
                </button>
                <div className="theme-toggler">
                <span class="material-symbols-outlined active">light_mode</span>
                <span class="material-symbols-outlined">dark_mode</span>
                </div>
                <div className="profile">
                    <div className="info">
                        <p>Hey, <b>Daniel</b></p>
                        <small className="text-muted-du">Admin</small>
                    </div>
                    <div className="profile-photo-du">
                        <img class="img-du" src={Profile} alt="..." />
                    </div>
                </div>
            </div>
             <!------------ END OF TOP ------------!> 
            <div className="recent-updates-du">
                <h2>Recent updates</h2>
                <div className="updates">
                    <div className="update">
                        <div className="profile-photo-du">
                        <img class="img-du" src={Profile} alt="..." />
                        </div>
                        <div className="message">
                            <p><b>Mike Tyson</b> received his order of night lion tech GPS drone</p>
                            <small className="text-muted-du">2 Minutes Ago</small>
                        </div>
                    </div>
                    <div className="update">
                        <div className="profile-photo-du">
                        <img class="img-du" src={Profile} alt="..." />
                        </div>
                        <div className="message">
                            <p><b>Mike Tyson</b> received his order of night lion tech GPS drone</p>
                            <small className="text-muted-du">2 Minutes Ago</small>
                        </div>
                    </div>
                    <div className="update">
                        <div className="profile-photo-du">
                        <img class="img-du" src={Profile} alt="..." />
                        </div>
                        <div className="message">
                            <p><b>Mike Tyson</b> received his order of night lion tech GPS drone</p>
                            <small className="text-muted-du">2 Minutes Ago</small>
                        </div>
                    </div>
            </div>
        </div>
         <!------------ END OF UPDATES ------------!> 
        <div className="sales-analytics">
            <h2>Sales  Analytics</h2>
            <div className="item online">
                <div className="icon">
                <span class="material-symbols-outlined">shopping_cart</span>
                </div>
                <div className="right2-du">
                    <div className="info">
                        <h3>Online Orders</h3>
                        <small className="text-muted-du">Last 24 Hours</small>
                    </div>
                    <h5 className="success-du">+39%</h5>
                    <h3>3567</h3>
                </div>
            </div>
            <div className="item offline">
                <div className="icon">
                <span class="material-symbols-outlined">local_mall</span>
                </div>
                <div className="right2-du">
                    <div className="info">
                        <h3>Offline Orders</h3>
                        <small className="text-muted-du">Last 24 Hours</small>
                    </div>
                    <h5 className="danger-du">-17%</h5>
                    <h3>9865</h3>
                </div>
            </div>
            <div className="item customer">
                <div className="icon">
                <span class="material-symbols-outlined">person</span>
                </div>
                <div className="right2-du">
                    <div className="info">
                        <h3>New Customers</h3>
                        <small className="text-muted-du">Last 24 Hours</small>
                    </div>
                    <h5 className="success-du">+25%</h5>
                    <h3>987</h3>
                </div>
            </div>
            <div className="item add-product">
                <div>
                <span class="material-symbols-outlined">add</span>
                    <h3>Add Product</h3>
                </div>
            </div>
        </div>
        </div>
        </div>
        <script src={Script} ></script> 
    </body>
*/}


<section>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

	{/* <!-- Boxicons --> */}
	<link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet' />
	{/* <!-- My CSS --> */}
	<link rel='stylesheet' type="text/css" href={Dashcss}></link>
    
	<title>AdminHub</title>

<body>


	{/* <!-- SIDEBAR --> */}
	<section id="sidebar">
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
	<section id="content">
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
							<a class="active" href="#">Home</a>
						</li>
					</ul>
				</div>
				<a href="#" class="btn-download">
					<i class='bx bxs-cloud-download' ></i>
					<span class="text">Download PDF</span>
				</a>
			</div>

			<ul class="box-info">
				<li>
					<i class='bx bxs-calendar-check' ></i>
					<span class="text">
						<h3>1020</h3>
						<p>New Order</p>
					</span>
				</li>
				<li>
					<i class='bx bxs-group' ></i>
					<span class="text">
						<h3>2834</h3>
						<p>Visitors</p>
					</span>
				</li>
				<li>
					<i class='bx bxs-dollar-circle' ></i>
					<span class="text">
						<h3>$2543</h3>
						<p>Total Sales</p>
					</span>
				</li>
                <li>
					<i class='bx bxs-calendar-check' ></i>
					<span class="text">
						<h3>1020</h3>
						<p>New Order</p>
					</span>
				</li>
			</ul>


            <div className="b-skills">
                <div className="container">
                    <h2>Graph</h2>
                    <div className="d-flex flex-row">
                        <div className="col-md-3">
                        <div className="skill">
                            <div className="outer">
                                <div className="inner">
                                    <div id="number">
                                        65%
                                    </div>
                                </div>
                            </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width={160} height={160}>
                            <defs>
                                <linearGradient id="GradientColor">
                                    <stop offset={0} stopColor="#e91e63"/>
                                    <stop offset={100} stopColor="#673ab7"/>
                                </linearGradient>
                            </defs>
                            <circle className="circle1" cx={80} cy={80} r={70} strokeLinecap="round" />
                        </svg><br></br>
                        <p>HTML</p>
                        </div> 
                        </div>
                        
                        <div className="col-md-3">
                        <div className="skill">
                            <div className="outer">
                                <div className="inner">
                                    <div id="number">
                                        65%
                                    </div>
                                </div>
                            </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width={160} height={160}>
                            <defs>
                                <linearGradient id="GradientColor">
                                    <stop offset={0} stopColor="#e91e63"/>
                                    <stop offset={100} stopColor="#673ab7"/>
                                </linearGradient>
                            </defs>
                            <circle className="circle2" cx={80} cy={80} r={70} strokeLinecap="round" />
                        </svg>
                        <br></br>
                        <p>HTML</p>
                        </div> 
                        </div>

                        <div className="col-md-3">
                        <div className="skill">
                            <div className="outer">
                                <div className="inner">
                                    <div id="number">
                                        65%
                                    </div>
                                </div>
                            </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width={160} height={160}>
                            <defs>
                                <linearGradient id="GradientColor">
                                    <stop offset={0} stopColor="#e91e63"/>
                                    <stop offset={100} stopColor="#673ab7"/>
                                </linearGradient>
                            </defs>
                            <circle className="circle3" cx={80} cy={80} r={70} strokeLinecap="round" />
                        </svg>
                        <br></br>
                        <p>HTML</p>
                        </div> 
                        </div>

                        <div className="col-md-3">
                        <div className="skill">
                            <div className="outer">
                                <div className="inner">
                                    <div id="number">
                                        65%
                                    </div>
                                </div>
                            </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width={160} height={160}>
                            <defs>
                                <linearGradient id="GradientColor">
                                    <stop offset={0} stopColor="#e91e63"/>
                                    <stop offset={100} stopColor="#673ab7"/>
                                </linearGradient>
                            </defs>
                            <circle className="circle4" cx={80} cy={80} r={70} strokeLinecap="round" />
                        </svg>
                        <br></br>
                        <p>HTML</p>
                        </div> 
                        </div>

                        <div className="col-md-3">
                        <div className="skill">
                            <div className="outer">
                                <div className="inner">
                                    <div id="number">
                                        65%
                                    </div>
                                </div>
                            </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width={160} height={160}>
                            <defs>
                                <linearGradient id="GradientColor">
                                    <stop offset={0} stopColor="#e91e63"/>
                                    <stop offset={100} stopColor="#673ab7"/>
                                </linearGradient>
                            </defs>
                            <circle className="circle5" cx={80} cy={80} r={70} strokeLinecap="round" />
                        </svg>
                        <br></br>
                        <p>HTML</p>
                        </div> 
                        </div>

                    </div>
                </div>
            </div>


			<div class="table-data">
				<div class="order">
					<div class="head">
						<h3>Recent Orders</h3>
						<i class='bx bx-search' ></i>
						<i class='bx bx-filter' ></i>
					</div>
					<table>
						<thead>
							<tr>
								<th>User</th>
								<th>Date Order</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
                                    <img class="img-du" src={Profile} alt="..." />
									<p>John Doe</p>
								</td>
								<td>01-10-2021</td>
								<td><span class="status completed">Completed</span></td>
							</tr>
							<tr>
								<td>
                                    <img class="img-du" src={Profile} alt="..." />
									<p>John Doe</p>
								</td>
								<td>01-10-2021</td>
								<td><span class="status pending">Pending</span></td>
							</tr>
							<tr>
								<td>
                                    <img class="img-du" src={Profile} alt="..." />
									<p>John Doe</p>
								</td>
								<td>01-10-2021</td>
								<td><span class="status process">Process</span></td>
							</tr>
							<tr>
								<td>
                                    <img class="img-du" src={Profile} alt="..." />
									<p>John Doe</p>
								</td>
								<td>01-10-2021</td>
								<td><span class="status pending">Pending</span></td>
							</tr>
							<tr>
								<td>
                                    <img class="img-du" src={Profile} alt="..." />
									<p>John Doe</p>
								</td>
								<td>01-10-2021</td>
								<td><span class="status completed">Completed</span></td>
							</tr>
						</tbody>
					</table>
                    
                    <button type="button" className="menu-btn">
                        <span>Show More</span>
                    </button>
                    
				</div>
				<div class="todo">
					<div class="head">
						<h3>Todos</h3>
						<i class='bx bx-plus' ></i>
						<i class='bx bx-filter' ></i>
					</div>
					<ul class="todo-list">
						<li class="completed">
							<p>Todo List</p>
							<i class='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li class="completed">
							<p>Todo List</p>
							<i class='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li class="not-completed">
							<p>Todo List</p>
							<i class='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li class="completed">
							<p>Todo List</p>
							<i class='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li class="not-completed">
							<p>Todo List</p>
							<i class='bx bx-dots-vertical-rounded' ></i>
						</li>
					</ul>
                    <button type="button" className="menu-btn">
                        <span>Show More</span>
                    </button>
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

export default ContentDashboardUser;