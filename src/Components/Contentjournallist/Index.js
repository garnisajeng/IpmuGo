import React from "react";
import poster from "../../Assets/images/cover.jpg";
import Dropdown from "react-bootstrap/Dropdown";

const Contentjournallist = () => {
  return (
    <>
      <section class="jurnal">
        <link
          rel="preconncet"
          href="https://fonts.gstatic.com"
          crossOrigin=".."
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Montserrat:wght@700;800;900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleaois.com/icon?family=Material+Icons+Sharp"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </section>
      <section style={{ background: "grey" }}>
        <div className="container" style={{ marginTop: "150px" }}>
          <div className="row">
            <div className="col-12">
              <div
                className="container"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  medium: 4,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                    width: "full",
                  }}
                >
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                    for="latest_articles"
                  >
                    <div class="relative">
                      <input
                        itemType="checkbox"
                        itemID="latest_articles"
                        class="sr-only"
                      />
                      <div
                        style={{
                          display: "block",
                          background: "#a6a6a6 200",
                          width: "12px",
                          height: "5px",
                          rounded: "full",
                        }}
                      ></div>
                    </div>
                  </label>
                </div>

                <Dropdown>
                  <Dropdown.Toggle
                    id="dropdown-button-dark-example1"
                    variant="secondary"
                  >
                    Sort By: Relevance
                  </Dropdown.Toggle>

                  <Dropdown.Menu variant="dark">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-4">
                      Separated link
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <div class="flex items-center justify-start w-full">
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                    for="popular"
                  >
                    <div class="relative">
                      <input type="checkbox" id="popular" class="sr-only" />
                      <div class="block bg-gray-200 w-12 h-5 rounded-full"></div>
                      <div class="dot absolute left-1 top-0 bg-blue-300 w-5 h-5 rounded-full transition"></div>
                    </div>
                    <div class="ml-3 text-gray-700 font-medium">
                      <input
                        type="search"
                        placeholder="Search..."
                        style={{
                          flexGrow: 1,
                          padding: "0 16px",
                          height: "40px",
                          border: "none",
                          background: "#fff",
                          borderRadius: "10px 10px 10px 10px",
                          outline: "none",
                          width: "870px",
                          boxShadow: "1px 2px 9px #b1b1b1",
                        }}
                      />
                    </div>
                  </label>
                </div>
                <select
                  class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-md"
                  style={{
                    padding: "0 16px",
                    height: "40px",
                    border: "none",
                    background: "#fff",
                    borderRadius: "10px 10px 10px 10px",
                    width: "100px",
                    boxShadow: "1px 2px 9px #b1b1b1",
                  }}
                >
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                  <option>100</option>
                </select>
              </div>
              <div className="container">
                <div
                  className="d-flex flex-row d-flex flex-row  justify-content-between"
                  style={{
                    borderBottom: "2px solid",
                    color: "#e9e9e9",
                    boxShadow: "none",
                    marginBottom: "10px",
                    padding: "20px",
                    marginTop: "20px",
                  }}
                >
                  <div>
                    <img
                      src={poster}
                      style={{
                        width: "10vw",
                        height: "260px",
                        boxShadow: "1px 2px 9px #b1b1b1",
                      }}
                    />
                  </div>

                  <div style={{ marginLeft: "20px" }}>
                    <h1
                      style={{ fontSize: "15px" }}
                      className="font-semibold text-xl py-1"
                    >
                      <a href="https://ipmugo.com/journal/EEI">
                        Bulletin of Electrical Engineering and Informatics
                      </a>
                    </h1>
                    <p class="italic text-gray-500 text-xs">
                      1024 Total Article Records
                    </p>
                    <p
                      class="line-clamp-3 text-sm pt-2"
                      style={{ textAlign: "justify" }}
                    >
                      Bulletin of Electrical Engineering and Informatics (BEEI)
                      ISSN: 2089-3191, e-ISSN: 2302-9285 is open to submission
                      from scholars and experts in the wide areas of electrical,
                      electronics, instrumentation, control, robotics,
                      telecommunication, computer engineering, computer science,
                      information system, information technology and informatics
                      from the global world. The BEEI is an open access
                      peer-reviewed journal published by Institute of Advanced
                      Engineering and Science (IAES) in collaboration with
                      Intelektual Pustaka Media Utama (IPMU). This journal is
                      indexed by Scopus (Elsevier)/ScimagoJR, SNIP 2020: 0.954,
                      CiteScore 2020: 1.7, SJR 2020: 0.251; and ACCREDITED
                      (recognised) by the Ministry of Research and
                      Technology/National Agency for Research and Innovation,
                      Republic of Indonesia (Decree No: 60/E/KPT/2016).
                      Beginning with issue 1 of volume 9 (2020), BEEI is
                      published as a bimonthly journal (6 issues/year).
                    </p>
                  </div>
                </div>
                <div
                  className=" d-flex flex-row"
                  style={{
                    borderBottom: "2px solid",
                    color: "#e9e9e9",
                    boxShadow: "none",
                    marginBottom: "10px",
                    padding: "20px",
                  }}
                >
                  <img
                    src={poster}
                    style={{
                      width: "600px",
                      height: "260px",
                      boxShadow: "1px 2px 9px #b1b1b1",
                    }}
                  />

                  <div style={{ marginLeft: "20px" }}>
                    <h1
                      style={{ fontSize: "15px" }}
                      className="font-semibold text-xl py-1"
                    >
                      <a href="https://ipmugo.com/journal/csit">
                        Computer Science and Information Technologies
                      </a>
                    </h1>
                    <p class="italic text-gray-500 text-xs">
                      {" "}
                      Dessalegn Nigatu Rundasa, Zerihun Bayabil, Tarekegn
                      Fekede,
                    </p>
                    <p class="text-sm py-1">
                      International Journal of Public Health Science (IJPHS),
                      Vol 11, No 3: September 2022
                    </p>
                    <p
                      class="line-clamp-3 text-sm pt-2"
                      style={{ textAlign: "justify" }}
                    >
                      Decision-making power of women is one of the essential
                      factors which influence maternal health service
                      utilization. Women's lack of decision over reproductive
                      health service utilization affects their protection from
                      unwanted childbearing, unsafe sex, and their consequences.
                      To assess decision-making power on Reproductive Health
                      service utilization and its associated factors among
                      married women in South West Ethiopia, 2020.
                    </p>
                  </div>
                </div>
                <div
                  className=" d-flex flex-row"
                  style={{
                    borderBottom: "2px solid",
                    color: "#e9e9e9",
                    boxShadow: "none",
                    marginBottom: "10px",
                    padding: "20px",
                  }}
                >
                  <img
                    src={poster}
                    style={{
                      width: "600px",
                      height: "260px",
                      boxShadow: "1px 2px 9px #b1b1b1",
                    }}
                  />

                  <div style={{ marginLeft: "20px" }}>
                    <h1 style={{ fontSize: "15px" }}>
                      <a href="https://ipmugo.com/IJPHS/article/id/12863">
                        Decision making power over reproductive health service
                        utilization among married Ethiopian women: cross
                        sectional study
                      </a>
                    </h1>
                    <p class="italic text-gray-500 text-xs">
                      {" "}
                      Dessalegn Nigatu Rundasa, Zerihun Bayabil, Tarekegn
                      Fekede,
                    </p>
                    <p class="text-sm py-1">
                      International Journal of Public Health Science (IJPHS),
                      Vol 11, No 3: September 2022
                    </p>
                    <p
                      class="line-clamp-3 text-sm pt-2"
                      style={{ textAlign: "justify" }}
                    >
                      Decision-making power of women is one of the essential
                      factors which influence maternal health service
                      utilization. Women's lack of decision over reproductive
                      health service utilization affects their protection from
                      unwanted childbearing, unsafe sex, and their consequences.
                      To assess decision-making power on Reproductive Health
                      service utilization and its associated factors among
                      married women in South West Ethiopia, 2020.
                    </p>
                  </div>
                </div>
                <div
                  className="d-flex flex-row"
                  style={{
                    borderBottom: "2px solid",
                    color: "#e9e9e9",
                    boxShadow: "none",
                    marginBottom: "10px",
                    padding: "20px",
                  }}
                >
                  <img
                    src={poster}
                    style={{
                      width: "600px",
                      height: "260px",
                      boxShadow: "1px 2px 9px #b1b1b1",
                    }}
                  />

                  <div style={{ marginLeft: "20px" }}>
                    <h1 style={{ fontSize: "15px" }}>
                      <a href="https://ipmugo.com/IJPHS/article/id/12863">
                        Decision making power over reproductive health service
                        utilization among married Ethiopian women: cross
                        sectional study
                      </a>
                    </h1>
                    <p class="italic text-gray-500 text-xs">
                      {" "}
                      Dessalegn Nigatu Rundasa, Zerihun Bayabil, Tarekegn
                      Fekede,
                    </p>
                    <p class="text-sm py-1">
                      International Journal of Public Health Science (IJPHS),
                      Vol 11, No 3: September 2022
                    </p>
                    <p
                      class="line-clamp-3 text-sm pt-2"
                      style={{ textAlign: "justify" }}
                    >
                      Decision-making power of women is one of the essential
                      factors which influence maternal health service
                      utilization. Women's lack of decision over reproductive
                      health service utilization affects their protection from
                      unwanted childbearing, unsafe sex, and their consequences.
                      To assess decision-making power on Reproductive Health
                      service utilization and its associated factors among
                      married women in South West Ethiopia, 2020.
                    </p>
                  </div>
                </div>
                <div
                  className="d-flex flex-row"
                  style={{
                    borderBottom: "2px solid",
                    color: "#e9e9e9",
                    boxShadow: "none",
                    marginBottom: "10px",
                    padding: "20px",
                  }}
                >
                  <img
                    src={poster}
                    style={{
                      width: "600px",
                      height: "260px",
                      boxShadow: "1px 2px 9px #b1b1b1",
                    }}
                  />

                  <div style={{ marginLeft: "20px" }}>
                    <h1 style={{ fontSize: "15px" }}>
                      <a href="https://ipmugo.com/IJPHS/article/id/12863">
                        Decision making power over reproductive health service
                        utilization among married Ethiopian women: cross
                        sectional study
                      </a>
                    </h1>
                    <p class="italic text-gray-500 text-xs">
                      {" "}
                      Dessalegn Nigatu Rundasa, Zerihun Bayabil, Tarekegn
                      Fekede,
                    </p>
                    <p class="text-sm py-1">
                      International Journal of Public Health Science (IJPHS),
                      Vol 11, No 3: September 2022
                    </p>
                    <p
                      class="line-clamp-3 text-sm pt-2"
                      style={{ textAlign: "justify" }}
                    >
                      Decision-making power of women is one of the essential
                      factors which influence maternal health service
                      utilization. Women's lack of decision over reproductive
                      health service utilization affects their protection from
                      unwanted childbearing, unsafe sex, and their consequences.
                      To assess decision-making power on Reproductive Health
                      service utilization and its associated factors among
                      married women in South West Ethiopia, 2020.
                    </p>
                  </div>
                </div>
                <div
                  className="d-flex flex-row"
                  style={{
                    borderBottom: "2px solid",
                    color: "#e9e9e9",
                    boxShadow: "none",
                    marginBottom: "10px",
                    padding: "20px",
                  }}
                >
                  <img
                    src={poster}
                    style={{
                      width: "600px",
                      height: "260px",
                      boxShadow: "1px 2px 9px #b1b1b1",
                    }}
                  />

                  <div style={{ marginLeft: "20px" }}>
                    <h1 style={{ fontSize: "15px" }}>
                      <a href="https://ipmugo.com/IJPHS/article/id/12863">
                        Decision making power over reproductive health service
                        utilization among married Ethiopian women: cross
                        sectional study
                      </a>
                    </h1>
                    <p class="italic text-gray-500 text-xs">
                      {" "}
                      Dessalegn Nigatu Rundasa, Zerihun Bayabil, Tarekegn
                      Fekede,
                    </p>
                    <p class="text-sm py-1">
                      International Journal of Public Health Science (IJPHS),
                      Vol 11, No 3: September 2022
                    </p>
                    <p
                      class="line-clamp-3 text-sm pt-2"
                      style={{ textAlign: "justify" }}
                    >
                      Decision-making power of women is one of the essential
                      factors which influence maternal health service
                      utilization. Women's lack of decision over reproductive
                      health service utilization affects their protection from
                      unwanted childbearing, unsafe sex, and their consequences.
                      To assess decision-making power on Reproductive Health
                      service utilization and its associated factors among
                      married women in South West Ethiopia, 2020.
                    </p>
                  </div>
                </div>
                <div
                  className="d-flex flex-row"
                  style={{
                    borderBottom: "2px solid",
                    color: "#e9e9e9",
                    boxShadow: "none",
                    marginBottom: "10px",
                    padding: "20px",
                  }}
                >
                  <img
                    src={poster}
                    style={{
                      width: "600px",
                      height: "260px",
                      boxShadow: "1px 2px 9px #b1b1b1",
                    }}
                  />

                  <div style={{ marginLeft: "20px" }}>
                    <h1 style={{ fontSize: "15px" }}>
                      <a href="https://ipmugo.com/IJPHS/article/id/12863">
                        Decision making power over reproductive health service
                        utilization among married Ethiopian women: cross
                        sectional study
                      </a>
                    </h1>
                    <p class="italic text-gray-500 text-xs">
                      {" "}
                      Dessalegn Nigatu Rundasa, Zerihun Bayabil, Tarekegn
                      Fekede,
                    </p>
                    <p class="text-sm py-1">
                      International Journal of Public Health Science (IJPHS),
                      Vol 11, No 3: September 2022
                    </p>
                    <p
                      class="line-clamp-3 text-sm pt-2"
                      style={{ textAlign: "justify" }}
                    >
                      Decision-making power of women is one of the essential
                      factors which influence maternal health service
                      utilization. Women's lack of decision over reproductive
                      health service utilization affects their protection from
                      unwanted childbearing, unsafe sex, and their consequences.
                      To assess decision-making power on Reproductive Health
                      service utilization and its associated factors among
                      married women in South West Ethiopia, 2020.
                    </p>
                  </div>
                </div>
                <div
                  className=" d-flex flex-row"
                  style={{
                    borderBottom: "2px solid",
                    color: "#e9e9e9",
                    boxShadow: "none",
                    marginBottom: "10px",
                    padding: "20px",
                  }}
                >
                  <img
                    src={poster}
                    style={{
                      width: "600px",
                      height: "260px",
                      boxShadow: "1px 2px 9px #b1b1b1",
                    }}
                  />

                  <div style={{ marginLeft: "20px" }}>
                    <h1 style={{ fontSize: "15px" }}>
                      <a href="https://ipmugo.com/IJPHS/article/id/12863">
                        Decision making power over reproductive health service
                        utilization among married Ethiopian women: cross
                        sectional study
                      </a>
                    </h1>
                    <p class="italic text-gray-500 text-xs">
                      {" "}
                      Dessalegn Nigatu Rundasa, Zerihun Bayabil, Tarekegn
                      Fekede,
                    </p>
                    <p class="text-sm py-1">
                      International Journal of Public Health Science (IJPHS),
                      Vol 11, No 3: September 2022
                    </p>
                    <p
                      class="line-clamp-3 text-sm pt-2"
                      style={{ textAlign: "justify" }}
                    >
                      Decision-making power of women is one of the essential
                      factors which influence maternal health service
                      utilization. Women's lack of decision over reproductive
                      health service utilization affects their protection from
                      unwanted childbearing, unsafe sex, and their consequences.
                      To assess decision-making power on Reproductive Health
                      service utilization and its associated factors among
                      married women in South West Ethiopia, 2020.
                    </p>
                  </div>
                </div>
                <div
                  className=" d-flex flex-row"
                  style={{
                    borderBottom: "2px solid",
                    color: "#e9e9e9",
                    boxShadow: "none",
                    marginBottom: "10px",
                    padding: "20px",
                  }}
                >
                  <img
                    src={poster}
                    style={{
                      width: "600px",
                      height: "260px",
                      boxShadow: "1px 2px 9px #b1b1b1",
                    }}
                  />

                  <div style={{ marginLeft: "20px" }}>
                    <h1 style={{ fontSize: "15px" }}>
                      <a href="https://ipmugo.com/IJPHS/article/id/12863">
                        Decision making power over reproductive health service
                        utilization among married Ethiopian women: cross
                        sectional study
                      </a>
                    </h1>
                    <p class="italic text-gray-500 text-xs">
                      {" "}
                      Dessalegn Nigatu Rundasa, Zerihun Bayabil, Tarekegn
                      Fekede,
                    </p>
                    <p class="text-sm py-1">
                      International Journal of Public Health Science (IJPHS),
                      Vol 11, No 3: September 2022
                    </p>
                    <p
                      class="line-clamp-3 text-sm pt-2"
                      style={{ textAlign: "justify" }}
                    >
                      Decision-making power of women is one of the essential
                      factors which influence maternal health service
                      utilization. Women's lack of decision over reproductive
                      health service utilization affects their protection from
                      unwanted childbearing, unsafe sex, and their consequences.
                      To assess decision-making power on Reproductive Health
                      service utilization and its associated factors among
                      married women in South West Ethiopia, 2020.
                    </p>
                  </div>
                </div>
                <div
                  className="d-flex flex-row"
                  style={{
                    borderBottom: "2px solid",
                    color: "#e9e9e9",
                    boxShadow: "none",
                    marginBottom: "10px",
                    padding: "20px",
                  }}
                >
                  <img
                    src={poster}
                    style={{
                      width: "600px",
                      height: "260px",
                      boxShadow: "1px 2px 9px #b1b1b1",
                    }}
                  />

                  <div style={{ marginLeft: "20px" }}>
                    <h1 style={{ fontSize: "15px" }}>
                      <a href="https://ipmugo.com/IJPHS/article/id/12863">
                        Decision making power over reproductive health service
                        utilization among married Ethiopian women: cross
                        sectional study
                      </a>
                    </h1>
                    <p class="italic text-gray-500 text-xs">
                      {" "}
                      Dessalegn Nigatu Rundasa, Zerihun Bayabil, Tarekegn
                      Fekede,
                    </p>
                    <p class="text-sm py-1">
                      International Journal of Public Health Science (IJPHS),
                      Vol 11, No 3: September 2022
                    </p>
                    <p
                      class="line-clamp-3 text-sm pt-2"
                      style={{ textAlign: "justify" }}
                    >
                      Decision-making power of women is one of the essential
                      factors which influence maternal health service
                      utilization. Women's lack of decision over reproductive
                      health service utilization affects their protection from
                      unwanted childbearing, unsafe sex, and their consequences.
                      To assess decision-making power on Reproductive Health
                      service utilization and its associated factors among
                      married women in South West Ethiopia, 2020.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contentjournallist;
