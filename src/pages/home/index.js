import React, { useState, useEffect } from "react";
import AppNav from "../../components/nav";
import Footer from "../../components/footer";
import MedtechLogo from "../../assets/images/MedTech_Logo_complete.png";
import CareboxLogo from "../../assets/images/CareBox_logo.png";
import db from "../../config/firebase";
import { onSnapshot, collection, addDoc } from "@firebase/firestore";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import trainingBannerImg from "../../assets/training-redesigned.jpeg";
import currentTrainingImg from "../../assets/dec-training.jpg"
// import {FiChevronsRight} from

const Home = () => {
  const history = useHistory();
  const [articles, setArticles] = useState([]);

  console.log(history);

  const trainingBanner = {
    backgroundImage: `url(${trainingBannerImg})`,
  };

  const currentTrainingBanner = {
    backgroundImage: `url(${currentTrainingImg})`,
  };

  useEffect(() => {
    onSnapshot(collection(db, "articles"), (snapshot) =>
      setArticles(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
  }, []);

  const onReadMore = (title) => {
    console.log(title);
    title = title.replace(/ /g, "_");
    history.push(`/article/${title}`);
  };

  return (
    <div>
      <AppNav />
      {/* Header section */}
      <header className="header-banner">
        <div className="layer"></div>
        <div className="container">
          <div className="header-logo-container">
            <img src={MedtechLogo} alt="medtech_logo" className="" />
            <i className="motto ms-md-2 text-light">
              ... transforming your business
            </i>
          </div>
          <div className="hero-text" data-aos="fade-right">
            <h3 className="mb-3">
              LET’S <span>TRANSFORM</span> YOUR <span>BUSINESS</span> WITH
              CUTTING-EDGE:
            </h3>
            <ul className="list-group ms-4">
              <li className="list-group-item bg-transparent border-0 ps-0 py-1">
                Strategy
              </li>
              <li className="list-group-item bg-transparent border-0 ps-0 py-1">
                Automation
              </li>
              <li className="list-group-item bg-transparent border-0 ps-0 py-1">
                Advisory
              </li>
              <li className="list-group-item bg-transparent border-0 ps-0 py-1">
                Assurance
              </li>
              <li className="list-group-item bg-transparent border-0 ps-0 py-1">
                Training...
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* About section  */}
      <section id="about" className="bg-light">
        <div className="container py-5 px-4" data-aos="fade-up">
          <h3 className="section-title">
            About <span className="fw-700">Us</span>
          </h3>
          <div className="section-details">
            <p className="">
              MedTech is an integrated professional services firm borne out of
              the desire to support entrepreneurs and transform African
              businesses by providing customised technology, strategic advisory
              and management services to scale performance, institutionalise
              governance systems and sustain operations.
              <br />
              <br /> We deploy appropriate technology and sound management
              systems to ensure transparent reporting, efficient operations,
              improved performance, and adequate compliance systems.
              <br />
              <br /> We have extensive experience managing and creating value
              for businesses by enhancing their ability to provide efficient and
              technology driven services with adequate financial management and
              governance systems.
              <br />
              <br /> Our team has gained deep insights managing and advising
              businesses around the world, with a wealth of experience in
              business strategy, finance, operations, IT, risk management,
              investment, and corporate advisory expertise. We have built and
              demonstrated core competencies in Management Strategy, Financial
              Performance Management, IT Solutions, Organisational Leadership,
              Corporate Governance, Restructuring, Business Process Improvement,
              Succession Planning, Coaching and Mentoring, Fundraising, Private
              Equity Investment, Corporate Accounting, Due Diligence, Audit,
              Internal Control and Compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Vision section  */}
      <section className="bg-light pb-5 px-4">
        <div className="container" data-aos="fade-up">
          <h3 className="section-title fw-700 text_pink">Vision</h3>
          <div className="section-details">
            <p className="">
              To be the foremost organisation providing professional services to
              healthcare providers and African businesses, ensuring
              transparency, improved financial performance, efficient service
              delivery, effective governance and compliance systems.
            </p>
          </div>
        </div>
      </section>

      {/* Mission section  */}
      <section className="bg-light pb-5 px-4">
        <div className="container" data-aos="fade-up">
          <h3 className="section-title fw-700 text_green">Mission</h3>
          <div className="section-details">
            <p className="">
              To support African entrepreneurs and transform businesses using
              best in class management strategy and cutting-edge technology that
              delivers outstanding performance, accelerated growth, and
              sustainable businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Values section  */}
      <section id="values" className="">
        <div className="container py-5 px-4" data-aos="fade-up">
          <h3 className="section-title">
            Our <span className="fw-700">Values </span>
          </h3>
          <div className="row">
            <div
              className="col-xl-3 col-lg-4 col-md-6 mb-3 mb-lg-0"
              data-aos="fade-right"
            >
              <div className="card p-3 value-card">
                <i className="far fa-lightbulb icon-1 i-size"></i>
                {/* <i className="icon-1" data-feather="loader"></i>  */}
                <div className="mt-4">
                  <h5 className="text_green">Innovation</h5>
                  <p className="mb-1 text_green">We are innovative</p>
                  <p className="mb-0 text-dark">
                    <i>
                      We deploy technological and entrepreneurial innovation to
                      deliver sustainable value
                    </i>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 mb-3 mb-lg-0"
              data-aos="fade-right"
            >
              <div className="card p-3 value-card">
                {/* <i className="icon-2" data-feather="check-circle"></i>  */}
                <i className="fas fa-users icon-2 i-size"></i>
                <div className="mt-4">
                  <h5 className="text_orange">Partnership</h5>
                  <p className="mb-1 text_orange">We build partnership</p>
                  <p className="mb-0 text-dark">
                    <i>
                      We collaborate and build impactful relationship with our
                      customers
                    </i>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 mb-3 mb-lg-0"
              data-aos="fade-left"
            >
              <div className="card p-3 value-card">
                <i className="fas fa-shield-alt icon-3 i-size"></i>
                {/* <i className="icon-3" data-feather="shield"></i> */}
                <div className="mt-4">
                  <h5 className="text_purple">Integrity </h5>
                  <p className="mb-1 text_purple">We act with integrity</p>
                  <p className="mb-0 text-dark">
                    <i>
                      We build and maintain our credibility through high
                      standards of integrity
                    </i>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 mb-3 mb-lg-0"
              data-aos="fade-left"
            >
              <div className="card p-3 value-card">
                <i className="fas fa-award icon-4 i-size"></i>
                {/* <i className="icon-4" data-feather="award"></i> */}
                <div className="mt-4">
                  <h5 className="text_pink">Excellence </h5>
                  <p className="mb-1 text_pink">We strive for excellence</p>
                  <p className="mb-0 text-dark">
                    <i>
                      We deliver the highest quality in all our products and
                      services
                    </i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services section  */}
      <section id="services" className="bg-light" data-aos="fade-up">
        <div className="container py-5">
          <h3 className="section-title">
            Our <span className="fw-700">Services</span>
          </h3>
          <div className="mt-3">
            <div className="ms-auto d-block d-md-none ">
              <i class="fas fa-chevron-right fs-5"></i>
              <i class="fas fa-chevron-right fs-5"></i>
            </div>
            <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button
                  className="nav-link active"
                  id="nav-strategy-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-strategy"
                  type="button"
                  role="tab"
                  aria-controls="nav-strategy"
                  aria-selected="true"
                >
                  Strategy
                </button>
                <button
                  className="nav-link"
                  id="nav-automation-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-automation"
                  type="button"
                  role="tab"
                  aria-controls="nav-automation"
                  aria-selected="false"
                >
                  Automation
                </button>
                <button
                  className="nav-link"
                  id="nav-advisory-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-advisory"
                  type="button"
                  role="tab"
                  aria-controls="nav-advisory"
                  aria-selected="false"
                >
                  Advisory
                </button>
                <button
                  className="nav-link"
                  id="nav-assurance-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-assurance"
                  type="button"
                  role="tab"
                  aria-controls="nav-assurance"
                  aria-selected="false"
                >
                  Assurance
                </button>
                <button
                  className="nav-link"
                  id="nav-training-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-training"
                  type="button"
                  role="tab"
                  aria-controls="nav-training"
                  aria-selected="false"
                >
                  Training
                </button>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-strategy"
                role="tabpanel"
                aria-labelledby="nav-strategy-tab"
              >
                <div
                  className="tab-content-holder p-0 p-md-3"
                  data-aos="fade-down"
                >
                  <p className="mb-3">
                    We design and implement
                    <span className="text_blue fw-600"> strategies </span> to
                    support entrepreneurs and organisations to create and
                    sustain value for their business. We collaborate with
                    business owners and managers, drawing on our diverse
                    experiences and industry knowledge to develop winning
                    strategies and create market shaping solutions. Our
                    management strategy services help businesses to develop
                    business plan, expand operations, catalyse new markets,
                    develop and launch new products, implement governance
                    systems and succession plans.
                  </p>
                  <p className="mb-0">
                    Our strategy and management services offerings include:
                  </p>
                  <ul className="list-group strategy-list">
                    <li className="list-group-item border-0 bg-transparent ps-0 py-1">
                      <i className="me-2 text_blue fas fa-check"></i>
                      Business Development Strategy
                    </li>
                    <li className="list-group-item border-0 bg-transparent ps-0 py-1">
                      <i className="me-2 text_blue fas fa-check"></i>
                      Corporate Restructuring
                    </li>
                    <li className="list-group-item border-0 bg-transparent ps-0 py-1">
                      <i className="me-2 text_blue fas fa-check"></i>
                      Value Creation Strategy
                    </li>
                    <li className="list-group-item border-0 bg-transparent ps-0 py-1">
                      <i className="me-2 text_blue fas fa-check"></i>
                      Expansion Plan and Growth Strategies
                    </li>
                    <li className="list-group-item border-0 bg-transparent ps-0 py-1">
                      <i className="me-2 text_blue fas fa-check"></i>
                      Product Development and Marketing
                    </li>
                    <li className="list-group-item border-0 bg-transparent ps-0 py-1">
                      <i className="me-2 text_blue fas fa-check"></i>
                      Board and Governance Systems
                    </li>
                    <li className="list-group-item border-0 bg-transparent ps-0 py-1">
                      <i className="me-2 text_blue fas fa-check"></i>
                      Succession Planning
                    </li>
                    <li className="list-group-item border-0 bg-transparent ps-0 py-1">
                      <i className="me-2 text_blue fas fa-check"></i>
                      Incentive Schemes
                    </li>
                    <li className="list-group-item border-0 bg-transparent ps-0 py-1">
                      <i className="me-2 text_blue fas fa-check"></i>
                      Pricing Strategy
                    </li>
                    <li className="list-group-item border-0 bg-transparent ps-0 py-1">
                      <i className="me-2 text_blue fas fa-check"></i>
                      Branding & Business Planning
                    </li>
                    <li className="list-group-item border-0 bg-transparent ps-0 py-1">
                      <i className="me-2 text_blue fas fa-check"></i>
                      Performance Management and Appraisal Systems
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-automation"
                role="tabpanel"
                aria-labelledby="nav-automation-tab"
              >
                <div
                  className="tab-content-holder p-0 p-md-3"
                  data-aos="fade-down"
                >
                  <p className="mb-3">
                    MedTech develops and deploys innovative solutions and
                    bespoke technologies that
                    <span className="text_pink fw-600"> automates </span>
                    business operations, financial reporting, procurement, stock
                    management, payment systems, customer relations, human
                    resources and payroll administration.
                  </p>
                  <p className="mb-0">
                    We have helped organisations to identify and deploy suitable
                    Enterprise Resource Planning Solutions (ERP), Financial
                    Reporting Applications, Bookkeeping and Accounting Packages,
                    Electronic Medical Records System (EMR), Hospital Management
                    Systems (HMS), Fixed Asset Management Systems, Procurement
                    and Supply Chain Management Systems etc.
                  </p>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-advisory"
                role="tabpanel"
                aria-labelledby="nav-advisory-tab"
              >
                <div
                  className="tab-content-holder p-0 p-md-3"
                  data-aos="fade-down"
                >
                  <p className="mb-3">
                    MedTech offers a range of
                    <span className="text_green fw-600"> Advisory </span>
                    Services aimed at providing deep insight, detailed analysis
                    of business operations and processes, and administrative
                    support. We support businesses to raise capital, consummate
                    mergers and acquisitions, set-up accounting services, manage
                    receivables and provide oversight for finance, procurement,
                    internal control and administrative roles.
                  </p>
                  <p className="mb-0">We provide advisory on:</p>
                  <ul className="list-group strategy-list">
                    <li className="list-group-item border-0 bg-transparent ps-0 py-1">
                      <i className="me-2 text_green fas fa-check"></i>
                      Fundraising and Corporate Finance
                    </li>
                    <li className="list-group-item border-0 bg-transparent ps-0 py-1">
                      <i className="me-2 text_green fas fa-check"></i>
                      Mergers and Acquisition
                    </li>
                    <li className="list-group-item border-0 bg-transparent ps-0 py-1">
                      <i className="me-2 text_green fas fa-check"></i>
                      Financial reporting and accounting services
                    </li>
                    <li className="list-group-item border-0 bg-transparent ps-0 py-1">
                      <i className="me-2 text_green fas fa-check"></i>
                      Credit control and receivables management
                    </li>
                    <li className="list-group-item border-0 bg-transparent ps-0 py-1">
                      <i className="me-2 text_green fas fa-check"></i>
                      Supply chain and procurement management
                    </li>
                    <li className="list-group-item border-0 bg-transparent ps-0 py-1">
                      <i className="me-2 text_green fas fa-check"></i>
                      Recruitment and outsourcing
                    </li>
                    <li className="list-group-item border-0 bg-transparent ps-0 py-1">
                      <i className="me-2 text_green fas fa-check"></i>
                      Business Administration
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-assurance"
                role="tabpanel"
                aria-labelledby="nav-assurance-tab"
              >
                <div
                  className="tab-content-holder p-0 p-md-3"
                  data-aos="fade-down"
                >
                  <p className="mb-3">
                    Our suite of
                    <span className="text_purple fw-600"> Assurance </span> and
                    Compliance Services focus on the use of evidence, diligence,
                    and rigor to independently assess financial and operational
                    matters, mitigate risks and enhance the degree of
                    confidence. For an organisation to remain profitable with
                    sustainable business model, it must keep risks under
                    control, maintain compliance with ongoing regulations and
                    exercise effective governance.
                  </p>
                  <ul className="list-group strategy-list">
                    <li className="list-group-item border-0 bg-transparent ps-0 py-2">
                      <i className="me-1 text_purple fas fa-check"></i>
                      <span className="fw-600">
                        {" "}
                        Financial statement audits
                      </span>
                      <span>
                        give assurance over the completeness and accuracy of
                        financial reports and information relied upon by
                        investors, bankers, creditors, regulators and the
                        general public.
                      </span>
                    </li>
                    <li className="list-group-item border-0 bg-transparent ps-0 py-2">
                      <i className="me-1 text_purple fas fa-check"></i>
                      <span className="fw-600"> Internal Audit </span>
                      <span>
                        provides assurance over the effectiveness of internal
                        control instituted by management and helps to implement
                        adequate controls that better safeguard the business
                        assets, prevent, and detect frauds.
                      </span>
                    </li>
                    <li className="list-group-item border-0 bg-transparent ps-0 py-2">
                      <i className="me-1 text_purple fas fa-check"></i>
                      <span className="fw-600"> Risk management services</span>
                      <span>
                        help companies stay on track and mitigate risks that
                        could derange their business survival.
                      </span>
                    </li>
                    <li className="list-group-item border-0 bg-transparent ps-0 py-2">
                      <i className="me-1 text_purple fas fa-check"></i>
                      <span className="fw-600"> Compliance services</span>
                      <span>
                        ensures business adherence to ongoing regulations, tax
                        provisions and statutory returns.
                      </span>
                    </li>
                    <li className="list-group-item border-0 bg-transparent ps-0 py-2">
                      <i className="me-1 text_purple fas fa-check"></i>
                      <span className="fw-600"> Due diligence</span>
                      <span>
                        helps investors and third parties to mitigate risks,
                        identify contingent liabilities and problematic areas in
                        order to make sound investment decisions.
                      </span>
                    </li>
                    <li className="list-group-item border-0 bg-transparent ps-0 py-2">
                      <i className="me-1 text_purple fas fa-check"></i>
                      <span className="fw-600"> Revenue Assurance</span>
                      <span>
                        provides confidence on the completeness and accuracy of
                        a business revenue and sales figures.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-training"
                role="tabpanel"
                aria-labelledby="nav-training-tab"
              >
                <div
                  className="tab-content-holder p-0 p-md-3"
                  data-aos="fade-down"
                >
                  <p className="mb-3">
                    At MedTech we are passionate about
                    <span className="text_orange fw-600"> training </span> and
                    capacity development. We develop and facilitate several
                    trainings aimed at providing practical insights and
                    developing technical and leadership skills in key business
                    functional areas. Our team comprises Subject Matter Experts
                    who facilitate training sessions in operational excellence,
                    financial management, service delivery, governance,
                    succession planning, among others.
                  </p>
                  <p className="mb-0">
                    We currently deliver trainings in broad topic areas such as:
                  </p>
                  <ul className="list-group strategy-list">
                    <li className="list-group-item border-0 bg-transparent ps-0 py-1">
                      <i className="me-2 text_blue fas fa-check"></i>
                      Strategy and business development
                    </li>
                    <li className="list-group-item border-0 bg-transparent ps-0 py-1">
                      <i className="me-2 text_blue fas fa-check"></i>
                      Financial management
                    </li>
                    <li className="list-group-item border-0 bg-transparent ps-0 py-1">
                      <i className="me-2 text_blue fas fa-check"></i>
                      Entrepreneurship and business management
                    </li>
                    <li className="list-group-item border-0 bg-transparent ps-0 py-1">
                      <i className="me-2 text_blue fas fa-check"></i>
                      Governance and succession planning
                    </li>
                    <li className="list-group-item border-0 bg-transparent ps-0 py-1">
                      <i className="me-2 text_blue fas fa-check"></i>
                      Bookkeeping and accounting
                    </li>
                    <li className="list-group-item border-0 bg-transparent ps-0 py-1">
                      <i className="me-2 text_blue fas fa-check"></i>
                      Customer service excellence
                    </li>
                    <li className="list-group-item border-0 bg-transparent ps-0 py-1">
                      <i className="me-2 text_blue fas fa-check"></i>
                      Marketing campaign strategies
                    </li>
                    <li className="list-group-item border-0 bg-transparent ps-0 py-1">
                      <i className="me-2 text_blue fas fa-check"></i>
                      Human Resources Fundamentals
                    </li>
                    <li className="list-group-item border-0 bg-transparent ps-0 py-1">
                      <i className="me-2 text_blue fas fa-check"></i>
                      Startups and sustainable businesses
                    </li>
                    <li className="list-group-item border-0 bg-transparent ps-0 py-1">
                      <i className="me-2 text_blue fas fa-check"></i>
                      Business financing and accounting
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carebox section  */}
      <section id="carebox" className="">
        <div className="container py-5 px-4" data-aos="fade-down">
          <img className="section-img" src={CareboxLogo} alt="carebox_logo" />
          <div className="section-details">
            <div className="opacity-layer"></div>
            <div className="position-relative my-4">
              <p className="">
                <span className="d-inline text_blue fw-600">
                  Care<span className="text_pink">box </span>
                </span>
                is our subscription based comprehensive service offering that
                supports hospitals and healthcare service providers. The
                <span className="d-inline text_blue fw-600">
                  {" "}
                  care<span className="text_pink">box </span>
                </span>
                subscription gives the hospital free access to select Medtech
                services including management strategy, financial audit and
                assurance services, medtech trainings; support for financial
                reporting and accounting service, HMO administration, credit
                control and receivables management, provision of oversight for
                finance, procurement, internal audit and other administrative
                roles. The
                <span className="d-inline text_blue fw-600">
                  {" "}
                  care<span className="text_pink">box </span>
                </span>
                service package also includes process automation and IT
                solutions for hospitals with an easy-to-use Hospital Management
                System which includes an Electronic Medical Record (EMR) system,
                a Financial Reporting Application and Stock Management Solution.
              </p>
              <p className="">
                <span className="d-inline text_blue fw-600">
                  {" "}
                  care<span className="text_pink">box </span>
                </span>
                takes care of all management, reporting, compliance,
                administration and supervision functions of the hospital and
                support the Medical Director with strategic analysis and
                recommendations, allowing the clinicians to face the core
                practice of rendering quality medical services with good
                clinical outcomes.
              </p>
              <p className="">
                {" "}
                <span className="d-inline text_blue fw-600">
                  care<span className="text_pink">box </span>
                </span>
                takes care of all management, reporting, compliance,
                administration and supervision functions of the hospital and
                support the Medical Director with strategic analysis and
                recommendations, allowing the clinicians to face the core
                practice of rendering quality medical services with good
                clinical outcomes. An organization’s ability to survive and
                achieve its goals ultimately depends on its capacity to remain
                profitable, retain competent teams, produce transparent
                financial records, implement adequate control and compliance
                systems. The
                <span className="d-inline text_blue fw-600">
                  {" "}
                  care<span className="text_pink">box </span>
                </span>
                partnership will enable you to mine every bit of meaning from
                the financial reports of your hospital, employ financial
                techniques that will transform your performance, and foresee
                business opportunities that remain invisible to others.
              </p>
              <p className="">
                We have a team of professionals with extensive experience in the
                healthcare sector in Nigeria and across Africa, including
                healthcare business management, healthcare portfolio
                investments, clinical quality, and health systems strengthening
                . Our professionals provide needed support to
                <span className="d-inline text_blue fw-600">
                  {" "}
                  care<span className="text_pink">box </span>
                </span>
                subscribers helping to scale operations, produce transparent
                financial reports, implement strong control systems and
                effective governance. We also provide training and capacity
                building for hospital management and staff.
              </p>

              {/* Carebox subscription details  */}
              <div className="mt-4">
                <p className="fw-700 fs-5">
                  {" "}
                  <span className="d-inline text_blue fw-600">
                    {" "}
                    Care<span className="text_pink">box </span>
                  </span>
                  subscription details
                </p>

                <div
                  className="position-relative table-responsive"
                  data-aos="zoom-in-up"
                >
                  <table className="table table-hover shadow">
                    <thead>
                      <tr>
                        <th scope="col">Subscription/Services</th>
                        <th scope="col">
                          <span className="d-inline text_blue fw-600">
                            {" "}
                            care
                            <span className="text_pink">box </span>
                          </span>
                          Basic
                        </th>
                        <th scope="col">
                          <span className="d-inline text_blue fw-600">
                            {" "}
                            care
                            <span className="text_pink">box </span>
                          </span>
                          Premium
                        </th>
                        <th scope="col">
                          <span className="d-inline text_blue fw-600">
                            {" "}
                            care
                            <span className="text_pink">box </span>
                          </span>
                          Partner
                        </th>
                      </tr>
                    </thead>

                    <h6 className="my-2 fw-700 text_blue">Strategy</h6>
                    <tbody className="tbody1">
                      <tr>
                        <th scope="row">- Business development strategy</th>
                        <td></td>
                        <td></td>
                        <td>
                          <h6 className="fw-700 text-center text-dark mb-0">
                            X
                          </h6>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">- Corporate restructuring</th>
                        <td></td>
                        <td></td>
                        <td>
                          <h6 className="fw-700 text-center text-dark mb-0">
                            X
                          </h6>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          - Expansion plan and growth strategies
                        </th>
                        <td></td>
                        <td></td>
                        <td>
                          <h6 className="fw-700 text-center text-dark mb-0">
                            X
                          </h6>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">- Board and governance systems</th>
                        <td></td>
                        <td></td>
                        <td>
                          <h6 className="fw-700 text-center text-dark mb-0">
                            X
                          </h6>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">- Succession planning</th>
                        <td></td>
                        <td></td>
                        <td>
                          <h6 className="fw-700 text-center text-dark mb-0">
                            X
                          </h6>
                        </td>
                      </tr>
                    </tbody>

                    <h6 className="my-2 fw-700 text_pink">Automation</h6>
                    <tbody className="tbody2">
                      <tr>
                        <th scope="row">- Electronic medical record system</th>
                        <td>
                          <h6 className="fw-700 text-center text-dark mb-0">
                            X
                          </h6>
                        </td>
                        <td>
                          <h6 className="fw-700 text-center text-dark mb-0">
                            X
                          </h6>
                        </td>
                        <td>
                          <h6 className="fw-700 text-center text-dark mb-0">
                            X
                          </h6>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">- Financial reporting application</th>
                        <td>
                          <h6 className="fw-700 text-center text-dark mb-0">
                            X
                          </h6>
                        </td>
                        <td>
                          <h6 className="fw-700 text-center text-dark mb-0">
                            X
                          </h6>
                        </td>
                        <td>
                          <h6 className="fw-700 text-center text-dark mb-0">
                            X
                          </h6>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">- Stock management system</th>
                        <td>
                          <h6 className="fw-700 text-center text-dark mb-0">
                            X
                          </h6>
                        </td>
                        <td>
                          <h6 className="fw-700 text-center text-dark mb-0">
                            X
                          </h6>
                        </td>
                        <td>
                          <h6 className="fw-700 text-center text-dark mb-0">
                            X
                          </h6>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">- Fixed asset management system</th>
                        <td>
                          <h6 className="fw-700 text-center text-dark mb-0">
                            X
                          </h6>
                        </td>
                        <td>
                          <h6 className="fw-700 text-center text-dark mb-0">
                            X
                          </h6>
                        </td>
                        <td>
                          <h6 className="fw-700 text-center text-dark mb-0">
                            X
                          </h6>
                        </td>
                      </tr>
                    </tbody>

                    <h6 className="my-2 fw-700 text_green">Advisory</h6>
                    <tbody className="tbody3">
                      <tr>
                        <th scope="row">
                          - Bookkeeping and accounting support
                        </th>
                        <td> </td>
                        <td>
                          <h6 className="fw-700 text-center text-dark mb-0">
                            X
                          </h6>
                        </td>
                        <td>
                          <h6 className="fw-700 text-center text-dark mb-0">
                            X
                          </h6>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">- Support for management reporting</th>
                        <td> </td>
                        <td>
                          <h6 className="fw-700 text-center text-dark mb-0">
                            X
                          </h6>
                        </td>
                        <td>
                          <h6 className="fw-700 text-center text-dark mb-0">
                            X
                          </h6>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          - Support for credit control and receivables mgt
                        </th>
                        <td> </td>
                        <td>
                          <h6 className="fw-700 text-center text-dark mb-0">
                            X
                          </h6>
                        </td>
                        <td>
                          <h6 className="fw-700 text-center text-dark mb-0">
                            X
                          </h6>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">- HMO management set-up</th>
                        <td> </td>
                        <td> </td>
                        <td>
                          <h6 className="fw-700 text-center text-dark mb-0">
                            X
                          </h6>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">- Recruitment support</th>
                        <td> </td>
                        <td> </td>
                        <td>
                          <h6 className="fw-700 text-center text-dark mb-0">
                            X
                          </h6>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          - Supply chain and procurement advisory
                        </th>
                        <td> </td>
                        <td> </td>
                        <td>
                          <h6 className="fw-700 text-center text-dark mb-0">
                            X
                          </h6>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          - Fundraising and corporate finance advisory
                        </th>
                        <td> </td>
                        <td> </td>
                        <td>
                          <h6 className="fw-700 text-center text-dark mb-0">
                            X
                          </h6>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">- Mergers and acquisition advisory</th>
                        <td> </td>
                        <td> </td>
                        <td>
                          <h6 className="fw-700 text-center text-dark mb-0">
                            X
                          </h6>
                        </td>
                      </tr>
                    </tbody>

                    <h6 className="my-2 fw-700 text_purple">Assurance</h6>
                    <tbody className="tbody4">
                      <tr>
                        <th scope="row">- Financial statement audits</th>
                        <td>
                          <h6 className="fw-700 text-center text-dark mb-0">
                            X
                          </h6>
                        </td>
                        <td>
                          <h6 className="fw-700 text-center text-dark mb-0">
                            X
                          </h6>
                        </td>
                        <td>
                          <h6 className="fw-700 text-center text-dark mb-0">
                            X
                          </h6>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">- Internal audit services</th>
                        <td> </td>
                        <td>
                          <h6 className="fw-700 text-center text-dark mb-0">
                            X
                          </h6>
                        </td>
                        <td>
                          <h6 className="fw-700 text-center text-dark mb-0">
                            X
                          </h6>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">- Support for statutory returns</th>
                        <td> </td>
                        <td>
                          <h6 className="fw-700 text-center text-dark mb-0">
                            X
                          </h6>
                        </td>
                        <td>
                          <h6 className="fw-700 text-center text-dark mb-0">
                            X
                          </h6>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">- Investment due diligence</th>
                        <td> </td>
                        <td> </td>
                        <td>
                          <h6 className="fw-700 text-center text-dark mb-0">
                            X
                          </h6>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">- Revenue assurance</th>
                        <td> </td>
                        <td> </td>
                        <td>
                          <h6 className="fw-700 text-center text-dark mb-0">
                            X
                          </h6>
                        </td>
                      </tr>
                    </tbody>

                    <h6 className="my-2 fw-700 text_orange">Training</h6>
                    <tbody className="tbody5">
                      <tr>
                        <th scope="row">
                          - Hospital finance and management bootcamp
                        </th>
                        <td> </td>
                        <td></td>
                        <td>
                          <h6 className="fw-700 text-center text-dark mb-0">
                            X
                          </h6>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          - Governance and hospital succession planning
                        </th>
                        <td> </td>
                        <td> </td>
                        <td>
                          <h6 className="fw-700 text-center text-dark mb-0">
                            X
                          </h6>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">- Customer service excellence </th>
                        <td> </td>
                        <td>
                          <h6 className="fw-700 text-center text-dark mb-0">
                            X
                          </h6>
                        </td>
                        <td>
                          <h6 className="fw-700 text-center text-dark mb-0">
                            X
                          </h6>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          - Hospital bookkeeping and accounting
                        </th>
                        <td> </td>
                        <td>
                          <h6 className="fw-700 text-center text-dark mb-0">
                            X
                          </h6>
                        </td>
                        <td>
                          <h6 className="fw-700 text-center text-dark mb-0">
                            X
                          </h6>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">- Human Resources Fundamentals</th>
                        <td> </td>
                        <td>
                          <h6 className="fw-700 text-center text-dark mb-0">
                            X
                          </h6>
                        </td>
                        <td>
                          <h6 className="fw-700 text-center text-dark mb-0">
                            X
                          </h6>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">- Personal financial management </th>
                        <td> </td>
                        <td>
                          <h6 className="fw-700 text-center text-dark mb-0">
                            X
                          </h6>
                        </td>
                        <td>
                          <h6 className="fw-700 text-center text-dark mb-0">
                            X
                          </h6>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training section  */}
      <section id="trainings" className="bg-light" data-aos="fade-up">
        <div className="container py-5 px-4 mb-4=3">
          <h3 className="section-title fw-700 text_blue">Training</h3>
          <div className="row">
            <div className="col-12 mb-4">
              <div className=" bg-transparent">
                <div className="training-banner" style={trainingBanner}></div>
              </div>
              <p className="fw-600 fs-6 fw-600 text-muted my-4">
              Training registration slots filled 
              </p>
            </div>

            <div className="col-12 mb-4">
              <div className=" bg-transparent">
                <div className="training-banner" style={currentTrainingBanner}></div>
              </div>
              <p className="fw-600 fs-6 text-dark my-4">
                Click <Link to="/training-registeration">here</Link> to register
                for the training
              </p>
            </div>
            
            
            {/* <div className="col-lg-4 col-md-5">
              <div className="card video-card mb-3">
                <video className="w-100 h-100 vid" controls>
                  <source
                    src="https://www.bigbuckbunny.org/"
                    type="video/mp4"
                  />
                  <source
                    src="https://www.bigbuckbunny.org/"
                    type="video/ogg"
                  />
                  Your browser does not support HTML video.
                </video>
              </div>
              <div className="card video-card">
                <video className="w-100 h-100 vid" controls>
                  <source
                    src="https://www.bigbuckbunny.org/"
                    type="video/mp4"
                  />
                  <source
                    src="https://www.bigbuckbunny.org/"
                    type="video/ogg"
                  />
                  Your browser does not support HTML video.
                </video>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Article section  */}
      <section id="articles" className="" data-aos="fade-up">
        <div className="container py-5 px-4">
          <h3 className="section-title">
            News <span className="fw-700">Articles</span>
          </h3>
          <div className="row">
            {articles.map((article) => {
              return (
                <div className="col-xl-3 col-lg-4 col-md-6" key={article.id}>
                  <div className="card article-card mb-4 shadow-sm">
                    <img
                      src={article?.img}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title fw-600"> {article.title}</h5>
                      <p className="card-text">{article.preview}</p>
                      <a className="" onClick={() => onReadMore(article.title)}>
                        Read more
                        <i
                          className="ms-2 text_blue"
                          data-feather="arrow-right"
                        ></i>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="card article-card mb-4 shadow-sm">
                <img
                  src="https://knect365.imgix.net/article/images/cacheable/ad15ed69-08a5-4eeb-acf1-2908edba8502-featured-b1a67bc22f99af86f9758518eb2eaa2a.jpg?auto=compress&fit=max&w=808&dpr=1"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title fw-600"> 
                    How To best maintain your medical facility
                  </h5>
                  <p className="card-text">
                    At vero eos et accusamus et iusto odio dignissimos
                  </p>
                  <a href="view-article.html" className="">
                    Read more
                    <i
                      className="ms-2 text_blue"
                      data-feather="arrow-right"
                    ></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="card article-card mb-4 shadow-sm">
                <img
                  src="https://knect365.imgix.net/article/images/cacheable/ad15ed69-08a5-4eeb-acf1-2908edba8502-featured-b1a67bc22f99af86f9758518eb2eaa2a.jpg?auto=compress&fit=max&w=808&dpr=1"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title fw-600"> 
                    How To best maintain your medical facility
                  </h5>
                  <p className="card-text">
                    At vero eos et accusamus et iusto odio dignissimos
                  </p>
                  <a href="view-article.html" className="">
                    Read more
                    <i
                      className="ms-2 text_blue"
                      data-feather="arrow-right"
                    ></i>
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default Home;
