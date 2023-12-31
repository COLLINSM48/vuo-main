import { useState, useEffect } from "react";
import LoggedNav from "./LoggedNav";
import TrackProjectsCard from "../components/TrackProjectsCard";
import { Container, Grid } from "@mui/material";
import { Typography } from "@material-ui/core";
import Footer from "../Footer";
import "../TrackProject.css";

const TrackProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/projects')
          .then(res => res.json())
          .then(data => setProjects(data))
    }, []);
      
    return (  
        <div>
            <div style={{backgroundColor: 'gray', margin: 'auto'}}>
           <LoggedNav />
            <div style={{marginTop: '50px'}}>

            </div>
        
            <div className="body" style={{background:'white',display: 'inline-block', borderRadius: '6PX'}}>    
                <p style={{fontSize: '24px', backgroundColor: 'red', color:"white", display: 'inline-block', margin: '20px', padding: '8px', borderRadius: '6px' }}>TRACK PROJECTS</p>
                <Container >
                    <Grid container spacing={3}>
                        {projects.map(project => (
                                <Grid item key={project.id} xs={12}  md={6} lg={4}>
                                   
                                        <TrackProjectsCard project={project}/>
                                    
                                </Grid>
                            ))} 
                        </Grid>
                </Container>   
            </div>
        </div>
       

            <div style={{margin: '20px'}}>
                <Footer />
            </div>
        </div>
    );
}

export default TrackProjects;
