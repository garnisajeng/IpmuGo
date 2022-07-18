import React from "react";
import CrudDataJournalcss from '../../Assets/CSS/CrudDataJournal.css';
import Profile from '../../Assets/images/people.png';
import Porto1 from '../../Assets/images/logo-blue.png';


const CrudDataJournal = () => {
    return(
        <>
            <section className="dj">
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	{/* <!-- Boxicons --> */}
	<link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet' />
	{/* <!-- My CSS --> */}
	<link rel='stylesheet' type="text/css" href={CrudDataJournalcss}></link>
    <link href='https://fonts.googleaois.com/icon?family=Material+Icons+Sharp' rel='stylesheet'></link>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

    <body className="dj">


	{/* <!-- SIDEBAR --> */}
	<section id="sidebar-dj">
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
	<section id="content-dj">
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
				<span class="num">9</span>
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
					<h1>List Journals</h1>
					<ul class="breadcrumb">
						<li>
							<a href="#">Dashboard</a>
						</li>
						<li><i class='bx bx-chevron-right' ></i></li>
						<li>
							<a class="active" href="#">List Journals</a>
						</li>
					</ul>
				</div>
                <a href="#" class="btn-download">
                <span class="material-symbols-outlined">add</span>
					<span class="text">Add New Journals</span>
				</a>
			</div>


			<div class="table-data">
				<div class="order">
					<div class="head">
						<h3>List Journals</h3>
						<i class='bx bx-search' ></i>
						<i class='bx bx-filter' ></i>
					</div>
					<table style={{width:'100%'}}>
						<thead>
							<tr>
                                <th>Author</th>
								<th>Title</th>
								<th>Year</th>
                                <th>Publish In</th>
                                <th>Action</th>
							</tr>
						</thead>
						<tbody>
							<tr>
                                <td style={{width:'20%'}}>Vahid Aryai, Mahsa Kharazi, Farid Ariai</td>
								<td style={{width:'40%'}}>Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</td>
                                <td style={{width:'10%'}}>01-10-2021</td>
                                <td style={{width:'20%'}}>Lorem ipmsum, Neque porro quisquam est.</td>
								<td style={{width:'20%'}}>
                                <button type="button" className="menu-btn-update">
                                    <span>Update  </span>
                                    <span class="material-symbols-outlined">edit</span>
                                </button>
                                <button type="button" className="menu-btn-del">
                                    <span>Delete  </span>
                                    <span class="material-symbols-outlined">delete</span>
                                </button>
                                </td>
							</tr>
                            <tr>
                                <td style={{width:'20%'}}>Lorde, Bastian, and Dawin</td>
								<td style={{width:'40%'}}>Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</td>
                                <td style={{width:'10%'}}>01-10-2021</td>
                                <td style={{width:'20%'}}>Lorem ipmsum, Neque porro quisquam est.</td>
								<td style={{width:'20%'}}>
                                <button type="button" className="menu-btn-update">
                                    <span>Update  </span>
                                    <span class="material-symbols-outlined">edit</span>
                                </button>
                                <button type="button" className="menu-btn-del">
                                    <span>Delete  </span>
                                    <span class="material-symbols-outlined">delete</span>
                                </button>
                                </td>
							</tr>
                            <tr>
                                <td style={{width:'20%'}}>Lorde, Bastian, and Dawin</td>
								<td style={{width:'40%'}}>Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</td>
                                <td style={{width:'10%'}}>01-10-2021</td>
                                <td style={{width:'20%'}}>Lorem ipmsum, Neque porro quisquam est.</td>
								<td style={{width:'20%'}}>
                                <button type="button" className="menu-btn-update">
                                    <span>Update  </span>
                                    <span class="material-symbols-outlined">edit</span>
                                </button>
                                <button type="button" className="menu-btn-del">
                                    <span>Delete  </span>
                                    <span class="material-symbols-outlined">delete</span>
                                </button>
                                </td>
							</tr>
                            <tr>
                                <td style={{width:'20%'}}>Lorde, Bastian, and Dawin</td>
								<td style={{width:'40%'}}>Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</td>
                                <td style={{width:'10%'}}>01-10-2021</td>
                                <td style={{width:'20%'}}>Lorem ipmsum, Neque porro quisquam est.</td>
								<td style={{width:'20%'}}>
                                <button type="button" className="menu-btn-update">
                                    <span>Update  </span>
                                    <span class="material-symbols-outlined">edit</span>
                                </button>
                                <button type="button" className="menu-btn-del">
                                    <span>Delete  </span>
                                    <span class="material-symbols-outlined">delete</span>
                                </button>
                                </td>
							</tr>
                            <tr>
                                <td style={{width:'20%'}}>Lorde, Bastian, and Dawin</td>
								<td style={{width:'40%'}}>Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</td>
                                <td style={{width:'10%'}}>01-10-2021</td>
                                <td style={{width:'20%'}}>Lorem ipmsum, Neque porro quisquam est.</td>
								<td style={{width:'20%'}}>
                                <button type="button" className="menu-btn-update">
                                    <span>Update  </span>
                                    <span class="material-symbols-outlined">edit</span>
                                </button>
                                <button type="button" className="menu-btn-del">
                                    <span>Delete  </span>
                                    <span class="material-symbols-outlined">delete</span>
                                </button>
                                </td>
							</tr>
                            <tr>
                                <td style={{width:'20%'}}>Lorde, Bastian, and Dawin</td>
								<td style={{width:'40%'}}>Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</td>
                                <td style={{width:'10%'}}>01-10-2021</td>
                                <td style={{width:'20%'}}>Lorem ipmsum, Neque porro quisquam est.</td>
								<td style={{width:'20%'}}>
                                <button type="button" className="menu-btn-update">
                                    <span>Update  </span>
                                    <span class="material-symbols-outlined">edit</span>
                                </button>
                                <button type="button" className="menu-btn-del">
                                    <span>Delete  </span>
                                    <span class="material-symbols-outlined">delete</span>
                                </button>
                                </td>
							</tr>
						</tbody>
					</table>
                    
				</div>
			</div>
			<td>
			<button type="button" className="menu-btn">
                <span>1</span>
            </button>
			<button type="button" className="menu-btn">
                <span>2</span>
            </button>
			<button type="button" className="menu-btn">
                <span>3</span>
            </button>
			<button type="button" className="menu-btn">
                <span>4</span>
            </button>
			</td>
		</main>
		{/* -- MAIN --> */}
	</section>
	{/*-- CONTENT --> */}
	
</body>
</section>  
        </>
    )
}

export default CrudDataJournal;