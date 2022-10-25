import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";

export default function Details() {
  const [value, setValue] = useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
      >
        <Tab value="one" label="Details" />
        <Tab value="two" label="More Details" />
      </Tabs>
      { value === 'one' &&
          <Box component='ul'>
            <Box component='li'>one</Box>
            <Box component='li'>two</Box>
            <Box component='li'>three</Box>
          </Box>
      }
      { value === 'two' &&
          <Box component='ul'>
            <Box component='li'>four</Box>
            <Box component='li'>five</Box>
            <Box component='li'>six</Box>
          </Box>

      }
    </Box>
  );
}
