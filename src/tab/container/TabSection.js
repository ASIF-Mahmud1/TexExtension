import React, { useState, useEffect } from 'react'
import { Box, Tab, Tabs, Typography } from '@material-ui/core'
import PropTypes from 'prop-types';
import Home from '../component/Home'
import TryOut from '../component/TryOut'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabSection() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} 
         textColor="secondary"
         indicatorColor="secondary"
          aria-label="secondary tabs example"
         >
          <Tab label={"Home"} {...a11yProps(0)} />
          <Tab label={"Try Out !"} {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
       <Home/>
      </TabPanel>
      <TabPanel value={value} index={1}>    
          <TryOut/>
      </TabPanel>
    </Box>
  );
}


