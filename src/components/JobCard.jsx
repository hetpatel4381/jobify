// JobCard.jsx
import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

function JobCard({ job }) {
  return (
    <Card className="rounded-lg shadow-md">
      <CardContent>
        <Typography variant="h5" className="text-xl font-semibold mb-2">
          {job.jobTitle}
        </Typography>
        <Typography variant="subtitle1" className="text-lg text-gray-600 mb-2">
          {job.companyName}
        </Typography>
        <Typography variant="body1" className="mb-4">
          <span className="font-semibold">Location:</span> {job.location}
        </Typography>
        <Typography variant="body1" className="mb-4">
          <span className="font-semibold">Description:</span>{" "}
          {job.jobDescription}
        </Typography>
        <Typography variant="body1" className="mb-4">
          <span className="font-semibold">Experience:</span> {job.experience}
        </Typography>
        <Button variant="contained" color="primary" className="text-white">
          Apply
        </Button>
      </CardContent>
    </Card>
  );
}

export default JobCard;
