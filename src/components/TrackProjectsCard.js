import React from "react";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    page: {
        background: '#f9f9f9',
        width: '100%',
    },
    aRemain: {
        background: 'red',
        color: 'white',
        margin: '8px',
        padding: '3px',
        borderRadius: '14px',
        fontSize: "18px"
    },
    aDonate: {
        border: '2px solid red',
        margin: '8px',
        padding: '3px',
        borderRadius: '14px',
        fontSize: "18px"
        
    },
    rootDiv:{
        background:'gray'
    }
}));

export default function TrackProjectsCard({ project }) {
    const classes = useStyles();
    
    return (
        <div style={{}}>
            
            <Card>
                <CardMedia
                    component="img"
                    alt="Project Image"
                    height="180"
                    image={project.projectImage} 
                    
                    
                /> 
                <CardContent>
                    <div style={{ display: 'flex',justifyContent: 'center', alignItems: 'center', color: 'black' }}>
                        <Typography variant="body2" className={classes.aDonate}>
                            K{project.amountDonated} Raised
                        </Typography>
                        <Typography variant="body2" color="textSecondary" className={classes.aRemain}>
                            K{project.amountRemaining} Remaining
                        </Typography>
                    </div>
                    <Typography variant="h6">
                        {project.projectName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {project.projectLocation}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
