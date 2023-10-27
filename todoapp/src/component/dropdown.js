import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectStatus({ handleChange, value = "all" }) {
  const [filtervalue, setfiltervalue] = React.useState(value);
  const handleChangeValue = (event) => {
    handleChange(event.target.value);
    setfiltervalue(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ mx: 1, minWidth: 120 }}>
        <Select
          value={filtervalue}
          onChange={handleChangeValue}
          displayEmpty
          sx={{ ".MuiOutlinedInput-input": { padding: "9px 14px" } }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"all"}>All</MenuItem>
          <MenuItem value={"completed"}>Completed</MenuItem>
          <MenuItem value={"pending"}>Pending</MenuItem>
          <MenuItem value={"wip"}>Work in progress</MenuItem>

        </Select>
      </FormControl>
    </div>
  );
}
