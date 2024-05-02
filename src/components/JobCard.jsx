// JobCard.jsx
import React from "react";
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";

function JobCard({ job }) {
  return (
    <Card variant="outlined" style={{ marginBottom: "20px" }}>
      <CardContent>
        <Typography variant="h5">{job.title}</Typography>
        <Typography variant="subtitle1">{job.company}</Typography>
        <Typography variant="subtitle2">{job.location}</Typography>
        <Typography variant="body1">{job.description}</Typography>
        <Typography variant="body2">Experience: {job.experience}</Typography>
        <Button variant="contained" color="primary">
          Apply
        </Button>
      </CardContent>
    </Card>
  );
}

export default JobCard;
