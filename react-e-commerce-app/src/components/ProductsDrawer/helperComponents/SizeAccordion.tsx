import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

const SizeAccordion = () => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
          SIZE
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {sizes.map((size, index) => (
          <Box
            key={size}
            sx={{
              border: "1px solid #D4D4D4",
              borderRight: `${index + 1 !== sizes.length && "0px"}`,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "42px",
              width: "42px",
            }}
          >
            <Typography sx={{ fontSize: "13px" }}>{size}</Typography>
          </Box>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default SizeAccordion;
