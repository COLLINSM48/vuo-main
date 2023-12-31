import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './GridTwo.css'; 



function GridTwo() {
 
  return (
    <Grid container spacing={2}>
      {/* First Row */}
      <Grid item xs={12} sm={6} md={4}>
        <Card className="custom-card" elevation={0}>
          <CardContent>
          <center>
          <img src='./vision.png' alt='didnt work kid'/>
          
          <div>
              <p style={{ fontSize: '20px', lineHeight: '1.5em', fontWeight:'bold'}}>Our Vision</p>
              <p style={{ fontSize: '15px', lineHeight: '1.5em' }}>
              To create community that has prosperous and sustainable village with resilient infrastructure,
               where poverty is eradicated, and residents live with dignity and security.
              </p>
            </div>
            </center>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card className="custom-card" elevation={0}>
          <CardContent>
          <center>
          <img src='./mission.png' alt='didnt work kid'/>
          <div>
              <p style={{ fontSize: '20px', lineHeight: '1.5em', fontWeight:'bold'}}>Our Mission</p>
              <p style={{ fontSize: '15px', lineHeight: '1.5em' }}>
              To recognize the pivotal role of housing and infrastructure in enhancing quality of life 
              and reducing poverty.  Providing essential services is our belief.
              </p>
            </div>
          </center>
            
          </CardContent>
        </Card>
      </Grid>
      <Grid xs={12} sm={6} md={4} style={{marginTop:'0.5em'}}>
        <Card className="custom-card" elevation={0}>
          <CardContent>
          <center>
          <img src='./values.png' alt='didnt work kid'/>
          <p style={{ fontSize: '20px', lineHeight: '1.5em', fontWeight:'bold'}}>Our Values</p>
          <p style={{ fontSize: '15px', lineHeight: '1.5em' }}>
          To fight inequality, advance gender equality, and empowering the most vulnerable.
           Prioritizing transparency, efficiency, and sustainability in all our efforts.</p>
          </center>
           
          </CardContent>
        </Card>
      </Grid>

      {/* Second Row */}
  
      <Grid item xs={12} sm={6} md={4} style={{marginTop:'2.8em'}}>
        <Card className="custom-card" elevation={0}>
          <CardContent>
          <center>
          <img src='./goals.png' alt='didnt work kid'/>
          <p style={{ fontSize: '20px', lineHeight: '1.5em', fontWeight:'bold'}}>Our Goals</p>
          <p style={{ fontSize: '15px', lineHeight: '1.5em' }}>
          To deliver sustainable, resilient built environments that uplift communities.</p>
          </center>
           
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} style={{marginTop:'2.5em'}}>
        <Card className="custom-card" elevation={0}>
          <CardContent>
          <center>
          <img src='./objectives.png' alt='didnt work kid'/>
          <p style={{ fontSize: '20px', lineHeight: '1.5em', fontWeight:'bold'}}>Our Objectives</p>
          <p style={{ fontSize: '15px', lineHeight: '1.5em' }}>
          To  not only minimize environmental harm but to construct buildings that 
          contribute positively to the environment while being financially viable
          </p>
          </center>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} style={{marginTop:'2.5em'}}>
        <Card className="custom-card" elevation={0}>
          <CardContent>
          <center>
          <img src='./solutions.png' alt='didnt work kid'/>
          <p style={{ fontSize: '20px', lineHeight: '1.5em', fontWeight:'bold'}}>Our Solutions</p>
          <p style={{ fontSize: '15px', lineHeight: '1.5em' }}>
          To introduce innovative sustainable building technology and renewable energy projects. 
          With long-term goal of creating affordable infrastructure and improving lives.
          </p>
          </center>
          </CardContent>
        </Card>
      </Grid>
     
    </Grid>
  );
}

export default GridTwo;
