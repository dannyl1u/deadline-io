import React, { useState } from "react";
import "./sidebar.scss";
import logo from "../../assets/images/sap.png";
import logo1 from "../../assets/images/electronicarts.png";
import logo2 from "../../assets/images/lululemon.png";
import logo3 from "../../assets/images/mastercard.png";
import logo4 from "../../assets/images/bcit.png";

function Sidebar() {
  const [filterText, setFilterText] = useState("");
  const [companies, setCompanies] = useState([
    {
      id: "sap",
      label: "SAP",
      value: false,
      image: "sap.png",
    },
    { id: "mastercard", label: "Mastercard", value: false, image: "meta.png" },
    { id: "lululemon", label: "Lululemon", value: false, image: "apple.png" },
    { id: "electronicarts", label: "Electronic Arts", value: false, image: "google.png" },
  ]);

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setCompanies((prevState) =>
      prevState.map((company) =>
        company.id === id ? { ...company, value: checked } : company
      )
    );
  };

  const filteredCompanies = companies.filter((company) =>
    company.label.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div id="sidebar" className="sidebar">
      <div className="sidebar-box">
        <div className="text-center">
          <h3 className="mt-3">Sponsors</h3>
        </div>
        <div className="sidebar-img">
          <div className="sidebar-row">
            <div className="sidebar-img">
              <img src={logo} alt="company-logo"  className="sidebar-img__image"/>
            </div>
            <div className="sidebar-img">
              <img src={logo1} alt="company-logo" className="sidebar-img__image"/>
            </div>
            <div className="sidebar-img">
              <img src={logo2} alt="company-logo" className="sidebar-img__image" />
            </div>
            <div className="sidebar-img">
              <img src={logo3} alt="company-logo" className="sidebar-img__image"/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7 mx-auto">
            <div className="form-group">
              <label htmlFor="form-company">Seach Companies *</label>
              <input
                type="text"
                placeholder="Search companies"
                value={filterText}
                onChange={handleFilterChange}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-md-12">
            <ul id="company-list" className="row-md-1 sidebar-list">
              {filteredCompanies.map((company) => (
                <li key={company.id}className='sidebar-list__item'>
                  <input
                    type="checkbox"
                    id={company.id}
                    value={company.value}
                    image={company.image}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor={company.id}>{company.label}</label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;