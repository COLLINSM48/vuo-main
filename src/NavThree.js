import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

function NavThree() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" elevation={0} style={{ backgroundColor: '#F3F3F3', color: '#000000', width:'100%'}}>
          <Toolbar>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <center>
                <p style={{  backgroundColor:'#ffffff',fontSize: '20px', fontWeight: 'bold', padding:'10px 200px' }}>
                 Our Business
                </p>
              </center>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default NavThree;
