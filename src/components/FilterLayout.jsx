// FilterLayout.jsx
import React from "react";
import { TextField, Checkbox, FormControlLabel, Button } from "@mui/material";

function FilterLayout({ filters, onChange }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <TextField
        label="Min Experience"
        value={filters.minExp}
        onChange={(e) => onChange("minExp", e.target.value)}
      />
      <TextField
        label="Company Name"
        value={filters.companyName}
        onChange={(e) => onChange("companyName", e.target.value)}
      />
      <TextField
        label="Location"
        value={filters.location}
        onChange={(e) => onChange("location", e.target.value)}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={filters.isRemote}
            onChange={(e) => onChange("isRemote", e.target.checked)}
          />
        }
        label="Remote"
      />
      <TextField
        label="Tech Stack"
        value={filters.techStack}
        onChange={(e) => onChange("techStack", e.target.value)}
      />
      <TextField
        label="Role"
        value={filters.role}
        onChange={(e) => onChange("role", e.target.value)}
      />
      <TextField
        label="Min Base Pay"
        value={filters.minBasePay}
        onChange={(e) => onChange("minBasePay", e.target.value)}
      />
      <Button variant="contained" onClick={() => console.log("Filter Applied")}>
        Apply
      </Button>
    </div>
  );
}

export default FilterLayout;
