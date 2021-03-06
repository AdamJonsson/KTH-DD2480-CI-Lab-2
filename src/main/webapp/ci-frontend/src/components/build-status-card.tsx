import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { BuildStatusItem } from '../model/build-status-item';

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

type BuildStatusCardProps = {
    buildStatus: BuildStatusItem,
    isURLTarget: boolean,
}
  

export const BuildStatusCard: FunctionComponent<BuildStatusCardProps> = ({ buildStatus, isURLTarget = false }) =>  {
  const classes = useStyles();

  return (
    <Card elevation={3} style={{backgroundColor: isURLTarget ? "#ffffaa" : "ffffff"}} className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
            Commit: <a href={"https://github.com/KTH-DD2480-Group-2/KTH-DD2480-CI-Lab-2/commit/" + buildStatus.commitSHA}>{buildStatus.commitSHA}</a> 
        </Typography>
        <Typography variant="h6" component="h5">
          {
              buildStatus.success ? "Build Succeeded" : "Build Failed"
          }
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Took {buildStatus.duration}
        </Typography>
        <Typography variant="h6" component="h6">
          Test Passed: <b style={{color: "#00aa00"}}>{buildStatus.numberOfTestsPassed}</b> --- Test Failed: <b style={{color: "#ff0000"}}>{buildStatus.numberOfTestsFailed}</b>
        </Typography>
      </CardContent>
    </Card>
  );
}
