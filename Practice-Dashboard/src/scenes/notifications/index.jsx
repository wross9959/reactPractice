import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";


function Notifications () {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);



    return(
        <Box m='20px'>
            <Header title='FAQ' subtitle='Frequently Asked Questions'/>

            {/* Question 1  */}
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsam commodi excepturi, ut doloribus officiis vero eligendi facere. Voluptatem iure maiores reprehenderit animi laborum quod nemo vitae asperiores, tempora tenetur.
                </AccordionDetails>
            </Accordion>

            {/* Question 2 */}
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsam commodi excepturi, ut doloribus officiis vero eligendi facere. Voluptatem iure maiores reprehenderit animi laborum quod nemo vitae asperiores, tempora tenetur.
                </AccordionDetails>
            </Accordion>

            {/* Question 3  */}
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsam commodi excepturi, ut doloribus officiis vero eligendi facere. Voluptatem iure maiores reprehenderit animi laborum quod nemo vitae asperiores, tempora tenetur.
                </AccordionDetails>
            </Accordion>

            {/* Question 4 */}
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsam commodi excepturi, ut doloribus officiis vero eligendi facere. Voluptatem iure maiores reprehenderit animi laborum quod nemo vitae asperiores, tempora tenetur.
                </AccordionDetails>
            </Accordion>

            {/* Question 5  */}
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsam commodi excepturi, ut doloribus officiis vero eligendi facere. Voluptatem iure maiores reprehenderit animi laborum quod nemo vitae asperiores, tempora tenetur.
                </AccordionDetails>
            </Accordion>

            {/* Question 6 */}
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsam commodi excepturi, ut doloribus officiis vero eligendi facere. Voluptatem iure maiores reprehenderit animi laborum quod nemo vitae asperiores, tempora tenetur.
                </AccordionDetails>
            </Accordion>

        </Box>
    );
}

export default Notifications;