import React from "react";
import "./home.scss";
import home from "../../assets/images/deadline.png";

function Home(props) {
  return (
    <section className="home">
      <div className="container">
        <h2 className="home-title">
          Deadline The Ultimate Tool for Job Application Deadlines
        </h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 col-xs-12 home-intro">
            <div className="home-inner">
              <div className="about-ct">
                <img
                  src={home}
                  alt="avatar"
                  className="rounded home-img img-fluid shadow-2-strong"
                />
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-6 home-info">
            <p className="home-text">
              Welcome to Deadline, the ultimate tool for keeping track of all
              your job application deadlines. We understand that job searching
              can be overwhelming and stressful, but with Deadline, you can take
              control of your job search and stay on top of all your deadlines.
            </p>
            <p className="home-text">
              Our web application is easy to use and allows you to keep all your
              job applications in one place. Deadline.io will keep track of all
              job postings from your faviourite companies into an intutitve easy
              to read calendar format. You'll never miss an application deadline
              again. 
            </p>
            <p className="home-text">
              With Deadline, you can prioritize your applications and ensure
              that you're staying on track with your job search.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
