import React, { useState } from "react";
import Chip from '@mui/joy/Chip';
import "./search.scss";
import Box from '@mui/joy/Box';
import Avatar from '@mui/joy/Avatar';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';


function Sidebar() {
    const [filterText, setFilterText] = useState("");
    const [companies, setCompanies] = useState([
      {
        id: "sap",
        label: "SAP",
        value: false,
        image: "../assets/images/amazon.png",
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
    <div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:"30px", fontSize: "larger"}}>
        Showing application deadlines for:
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding:"10px"}}>
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <Chip label="Chip Filled" endDecorator={<LockOpenIcon fontSize="md"/>}>BCIT</Chip>
                <Chip label="Chip Outlined" endDecorator={<LockIcon fontSize="md"/>} style={{ opacity: "50%" }} >Mastercard</Chip>
                <Chip label="Chip Outlined" endDecorator={<LockIcon fontSize="md"/>} style={{ opacity: "50%" }} >Lululemon</Chip>
                <Chip label="Chip Outlined" endDecorator={<LockIcon fontSize="md"/>} style={{ opacity: "50%" }} >Electronic Arts</Chip>
                <Chip label="Chip Outlined" endDecorator={<LockIcon fontSize="md"/>} style={{ opacity: "50%" }} >SAP</Chip>
            </Box>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:"10px"}}>
            <LockIcon style={{color: "blue"}}></LockIcon>Unlock with PRO
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:"40px", 'font-weight':'bold'}}>
            ❗️ Application deadline ❗
        </div>
      </div>
    );
  }
  
  export default Sidebar;