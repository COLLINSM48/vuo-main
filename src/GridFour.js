import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './GridTwo.css'; 



function GridFour() {
 
  return (
    <Grid container spacing={2}>
          {/* First Row */}
      <Grid item xs={12} sm={6} md={4}>
        <Card className="custom-card" elevation={0}>
          <CardContent>
          <center>
          <img src='./sectors.png' alt='didnt work kid' style={{width:'500px', height:'400px'}}/>
          </center>
          <div>
              <p style={{ fontSize: '20px', lineHeight: '1.5em', fontWeight:'bold'}}>Sectors</p>
              
            </div>
           
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card className="custom-card" elevation={0}>
          <CardContent>
          <center>
          <img src='./planning.png' alt='didnt work kid' style={{width:'500px', height:'400px'}}/>
          </center>
          <div>
              <p style={{ fontSize: '20px', lineHeight: '1.5em', fontWeight:'bold'}}>Strategic Planning</p>
              
            </div>
         
            
          </CardContent>
        </Card>
      </Grid>
      <Grid xs={12} sm={6} md={4} style={{marginTop:'0.8em'}}>
        <Card className="custom-card" elevation={0}>
          <CardContent>
          <center>
          <img src='./programs.png' alt='didnt work kid' style={{width:'500px', height:'400px'}}/>
          </center>
           
          <p style={{ fontSize: '20px', lineHeight: '1.5em', fontWeight:'bold'}}>Programs</p>
         
        
          </CardContent>
        </Card>
      </Grid>

      {/* Second Row */}
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' , height:'auto'}}>
      <Grid item xs={12} sm={6} md={4} style={{marginTop:'0.5em'}}>
        <Card className="custom-card" elevation={0}>
          <CardContent>
          <center>
          <img src='./projects.png' alt='didnt work kid' style={{width:'500px', height:'400px'}}/>
          </center>
          <p style={{ fontSize: '20px', lineHeight: '1.5em', fontWeight:'bold'}}>Projects</p>
         
          
           
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} style={{marginTop:'0.5em'}}>
        <Card className="custom-card" elevation={0}>
          <CardContent>
          <center>
          <img src='./contributions.png' alt='didnt work kid' style={{width:'500px', height:'400px'}}/>
          </center>
          <p style={{ fontSize: '20px', lineHeight: '1.5em', fontWeight:'bold'}}>Contribution to the SDSs</p>
      
        
          </CardContent>
        </Card>
        </Grid>
       </div>
    </Grid>
  );
}

export default GridFour;
