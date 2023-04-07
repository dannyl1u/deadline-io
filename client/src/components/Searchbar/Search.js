import React, { useState } from "react";
import Chip from '@mui/joy/Chip';
import "./search.scss";
import Box from '@mui/joy/Box';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Typography from '@mui/joy/Typography';

function Search() {
    const [selected, setSelected] = React.useState('');

    return (
    <div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:"30px", fontSize: "larger", 'font-weight':'bold'}}>
        Showing job application deadlines for:
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding:"10px"}}>
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <Chip label="Chip Filled" endDecorator={<LockOpenIcon fontSize="md"/>}>BCIT</Chip>
                <Chip label="Chip Outlined" endDecorator={<LockIcon fontSize="md"/>} style={{ opacity: "50%" }} >Mastercard</Chip>
                <Chip label="Chip Outlined" endDecorator={<LockIcon fontSize="md"/>} style={{ opacity: "50%" }} >Lululemon</Chip>
                <Chip label="Chip Outlined" endDecorator={<LockIcon fontSize="md"/>} style={{ opacity: "50%" }} >Electronic Arts</Chip>
                <Chip label="Chip Outlined" endDecorator={<LockIcon fontSize="md"/>} style={{ opacity: "50%" }} >SAP</Chip>
                and more coming soon...
            </Box>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:"10px",'font-weight':'bold'}}>
            <LockIcon style={{color: "blue"}}></LockIcon>Unlock with PRO (coming soon)
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:"50px"}}>
            Legend:
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:"5px", 'font-weight':'bold'}}>
            ❗️ Application deadline
        </div>
      </div>
    );
  }
  
  export default Search;