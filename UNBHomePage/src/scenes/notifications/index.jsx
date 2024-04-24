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
            <Header title='Notifications' subtitle='Missed Notifications'/>

            {/* OutLook Emails  */}

            <Accordion defaultExpanded>

                {/* Notification Title  */}
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>

                    <Typography color={colors.tertiary[500]} variant="h5">
                        OutLook
                    </Typography>

                </AccordionSummary>

                <AccordionDetails>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>

                            {/* Name of Email  */}
                            <Typography color={colors.accentTwo[500]} variant="h5">
                                Re: Emailing back
                            </Typography>

                        </AccordionSummary>

                        {/* Email Contents with link to Outlook email  */}
                        <AccordionDetails>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsam commodi excepturi, ut doloribus officiis vero eligendi facere. Voluptatem iure maiores reprehenderit animi laborum quod nemo vitae asperiores, tempora tenetur.
                        </AccordionDetails>

                    </Accordion>
                </AccordionDetails>

            </Accordion>

            {/* Gmail Emails  */}

            <Accordion defaultExpanded>

                {/* Notification Title  */}
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>

                    <Typography color={colors.tertiary[500]} variant="h5">
                        Gmail
                    </Typography>

                </AccordionSummary>

                <AccordionDetails>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>

                            {/* Name of Email  */}
                            <Typography color={colors.accentTwo[500]} variant="h5">
                                Re: Emailing back
                            </Typography>

                        </AccordionSummary>

                        {/* Email Contents with link to Outlook email  */}
                        <AccordionDetails>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsam commodi excepturi, ut doloribus officiis vero eligendi facere. Voluptatem iure maiores reprehenderit animi laborum quod nemo vitae asperiores, tempora tenetur.
                        </AccordionDetails>

                    </Accordion>
                </AccordionDetails>

            </Accordion>

            {/* Teams  */}
            <Accordion defaultExpanded>

                {/* Notification Title  */}
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>

                    <Typography color={colors.tertiary[500]} variant="h5">
                        Teams
                    </Typography>

                </AccordionSummary>

                <AccordionDetails>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>

                            {/* Breif message  */}
                            <Typography color={colors.accentTwo[500]} variant="h5">
                                Sarah: What is the progress on project #102516
                            </Typography>

                        </AccordionSummary>

                        {/* Reply button and read more  */}
                        <AccordionDetails>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsam commodi excepturi, ut doloribus officiis vero eligendi facere. Voluptatem iure maiores reprehenderit animi laborum quod nemo vitae asperiores, tempora tenetur.
                        </AccordionDetails>

                    </Accordion>
                </AccordionDetails>

            </Accordion>

            {/* Question 4 */}
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.tertiary[500]} variant="h5">
                        D2L
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsam commodi excepturi, ut doloribus officiis vero eligendi facere. Voluptatem iure maiores reprehenderit animi laborum quod nemo vitae asperiores, tempora tenetur.
                </AccordionDetails>
            </Accordion>


            {/* Question 6 */}
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.tertiary[500]} variant="h5">
                        Other
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