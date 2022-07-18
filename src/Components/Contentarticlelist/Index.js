import React from "react";

const Contentarticlelist = () => {
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
      <section>
        <div className="container" style={{ marginTop: "150px" }}>
          <div className="row">
            <div className="col-3">
              <div>14147 Article Records</div>
              <input
                type="search"
                placeholder="Search..."
                style={{
                  flexGrow: 1,
                  padding: "0 16px",
                  height: "40px",
                  border: "none",
                  background: "#fff",
                  boxShadow: "1px 2px 9px #b1b1b1",
                  borderRadius: "15px 15px 15px 15px",
                  outline: "none",
                  width: "335px",
                  marginBottom: "10px",
                }}
              />
              <div
                className="card"
                style={{
                  boxShadow: "1px 2px 9px #b1b1b1",
                  marginBottom: "10px",
                  width: "335px",
                  borderRadius: "15px",
                  padding: "15px",
                }}
              >
                <h1 style={{ fontSize: "15px" }}>Years</h1>
                <div style={{ display: "flex", justifyItems: "between" }}>
                  <label for="years">2004</label>
                  <label for="years">2022</label>
                </div>

                <input
                  style={{
                    overflow: "hidden",
                    appearance: "none",
                    background: "#eee",
                    height: 3,
                    minWidth: "full",
                    outline: "none",
                  }}
                  type="range"
                  min="2004"
                  max="2022"
                  step="1"
                  value="2004"
                />
                <label
                  className="block font-medium text-sm text-gray-700"
                  for="year"
                >
                  Year
                </label>
                <input
                  class="border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-md w-full mt-1"
                  type="text"
                  model="years"
                ></input>
              </div>
              <div
                className="card"
                style={{
                  boxShadow: "1px 2px 9px #b1b1b1",
                  marginBottom: "10px",
                  width: "335px",
                  borderRadius: "15px",
                  padding: "15px",
                }}
              >
                <h1 style={{ fontSize: "15px" }}>Journals</h1>
                <div className="d-flex flex-row items-center">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                  <label
                    for="push-everything"
                    className="ml-5 block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Everything{" "}
                  </label>
                </div>
                <div className="d-flex flex-row items-center">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                  <label
                    style={{ fontSize: "12px" }}
                    for="push-everything"
                    className="ml-5 block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    International Journal of Power Electronics and Drive Systems
                    (IJPEDS) (1654){" "}
                  </label>
                </div>
                <div className="d-flex flex-row items-center">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                  <label
                    style={{ fontSize: "12px" }}
                    for="push-everything"
                    className="ml-5 block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    International Journal of Power Electronics and Drive Systems
                    (IJPEDS) (1654){" "}
                  </label>
                </div>
              </div>
            </div>
            <div className="col-9">
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
                    <div>Latest</div>
                  </label>
                </div>
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
                    <div class="ml-3 text-gray-700 font-medium">A-Z</div>
                  </label>
                </div>
                <select class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-md">
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                  <option>100</option>
                </select>
              </div>
              <div>
                <div className="container">
                  <div
                    className="card"
                    style={{
                      boxShadow: "1px 2px 9px #b1b1b1",
                      marginBottom: "10px",
                      borderRadius: "15px",
                      padding: "20px",
                    }}
                  >
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
                    <p class="line-clamp-3 text-sm pt-2">
                      Decision-making power of women is one of the essential
                      factors which influence maternal health service
                      utilization. Women's lack of decision over reproductive
                      health service utilization affects their protection from
                      unwanted childbearing, unsafe sex, and their consequences.
                      To assess decision-making power on Reproductive Health
                      service utilization and its associated factors among
                      married women in South West Ethiopia, 2020.
                      Cross-sectional study was conducted from May to July 2020
                      among 584 married women of the reproductive age. A total
                      of 288 in urban and 288 in rural married women were
                      interviewed and these yields a response rate of 98.6% both
                      in urban and rural. Decision-making power over
                      reproductive health service utilization in urban and rural
                      was 55.2% [95% CI (52.7-64.6)] and 40.3% [95% CI
                      (39.9-52.5)] respectively. In urban, being wives of
                      government-employed spouses [AOR 2.102 95% CI (1.16,
                      3.81)], knowledge on RH [AOR 3.33, 95% CI (1.20, 12.49)],
                      above five years in marriage [AOR 1.91, 95% CI
                      (1.19,7.70)], were found to be predictors of women’s
                      decision-making power over reproductive health use. The
                      study revealed that in urban settings those women who had
                      marriage duration five and more than five years, being
                      wives of government-employed spouses had more likely
                      decision-making power on reproductive health utilization
                      but not in rural settings. Hence, reproductive health
                      interventions in the area should be promoted by
                      considering empowering married women on reproductive
                      health service utilization.
                    </p>
                  </div>
                  <div
                    className="card"
                    style={{
                      boxShadow: "1px 2px 9px #b1b1b1",
                      marginBottom: "10px",
                      borderRadius: "15px",
                      padding: "20px",
                    }}
                  >
                    <h1 style={{ fontSize: "15px" }}>
                      <a href="https://ipmugo.com/IJPHS/article/id/1699">
                        Maternal risk factors in stunting of children aged 24-59
                        months
                      </a>
                    </h1>
                    <p class="italic text-gray-500 text-xs">
                      {" "}
                      Keke Susilowati Sholehah, Endang Sutedja, Hadyana
                      Sukandar,
                    </p>
                    <p class="text-sm py-1">
                      International Journal of Public Health Science (IJPHS),
                      Vol 11, No 3: September 2022
                    </p>
                    <p class="line-clamp-3 text-sm pt-2">
                      Stunting is a height that is not appropriate with the age,
                      it is characterized by delayed growth of the child who
                      results in failure to reach normal height. The high
                      prevalence of stunting in the world, 14-17% of child
                      mortality is caused by stunting. Pandeglang Regency,
                      Indonesia is an area with the highest prevalence of
                      stunting in Banten Province and the prevalence is 39.5%.
                      The purpose of this study was to analyze the maternal risk
                      factors that the most influence prevalence of stunting in
                      children with aged 24-59 months in Pandeglang Regency,
                      Banten Province, Indonesia. This research is an analytic
                      observational study with a case control study design and
                      using 200 respondents. The case group were mothers who had
                      stunted children and the control group were mothers who
                      had children with normal stature. Data obtained from
                      filling out the mother's questionnaire include maternal
                      and child health books. The results of multivariable
                      analysis with multiple logistic regression found that
                      close birth spacing ORadj (95% CI): 9.61 (1.16-79.56),
                      nutritional status of pregnant women (KEK) ORadj: 4.37
                      (1.79-10.64), short mother's height was ORadj L: 2.38
                      (1.21-4.67) and preterm gestational age was ORadj: 1.98
                      (1.06-3.72) and Fe minimum consumption ORadj: 1.75
                      (0.94-3.26). Birth spacing are the most influential
                      maternal risk factors for the prevalence of stunting in
                      children aged 24-59 months. Long-term contraceptive
                      methods such as IUDs and implants need to be held to
                      increase long-term family planning acceptors so they can
                      be more optimal in spacing pregnancies at least two years.
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

export default Contentarticlelist;
