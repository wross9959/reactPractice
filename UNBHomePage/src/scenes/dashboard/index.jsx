import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

function Dashboard(){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    return(
        <Box m='20px'>
            {/* Header  */}
            <Box 
                display='flex' 
                justifyContent='space-between' 
                alignItems='center'>
                <Header title="Dashboard" subtitle='Welcome'/>

                <Box>
                    <Button
                        sx={{
                            backgroundColor: colors.accentTwo[700],
                            color: colors.secondary[100],
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "10px 20px",
                            borderRadius: '25px',
                            }} 
                        >
                            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
                                Download Reports
                    </Button>
                </Box>
            </Box>

            {/* Grid and Charts  */}

            <Box
                display='grid'
                gridTemplateColumns='repeat(12,1fr)'
                gridAutoRows='140px'
                gap='20px'
                
            >
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius='10px'
                    boxShadow='5px 5px 5px hsla(0, 0%, 0%, 0.125)'
                >
                    <StatBox
                        title="12,361"
                        subtitle="Emails Sent"
                        progress="0.75"
                        increase="+14%"
                        icon={
                          <EmailIcon
                            sx={{ color: colors.tertiary[600], fontSize: "26px" }}
                          />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius='10px'
                    boxShadow='5px 5px 5px hsla(0, 0%, 0%, 0.125)'
                >
                    <StatBox
                        title="431,225"
                        subtitle="Sales Obtained"
                        progress="0.50"
                        increase="+21%"
                        icon={
                        <PointOfSaleIcon
                            sx={{ color: colors.tertiary[600], fontSize: "26px" }}
                        />
                        }
                    />
                </Box>

                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius='10px'
                    boxShadow='5px 5px 5px hsla(0, 0%, 0%, 0.125)'
                >
                    <StatBox
                        title="32,441"
                        subtitle="New Clients"
                        progress="0.30"
                        increase="+5%"
                        icon={
                        <PersonAddIcon
                            sx={{ color: colors.tertiary[600], fontSize: "26px" }}
                        />
                        }
                    />
                </Box>
                <Box
                     gridColumn="span 3"
                     backgroundColor={colors.primary[400]}
                     display="flex"
                     alignItems="center"
                     justifyContent="center"
                     borderRadius='10px'
                     boxShadow='5px 5px 5px hsla(0, 0%, 0%, 0.125)'
                >
                    <StatBox
                        title="1,325,134"
                        subtitle="Traffic Received"
                        progress="0.80"
                        increase="+43%"
                        icon={
                        <TrafficIcon
                            sx={{ color: colors.tertiary[600], fontSize: "26px" }}
                        />
                        }
                    />
                </Box>
                {/* ROW 2 */}
                <Box
                    gridColumn="span 8"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    borderRadius='5px'
                    boxShadow='2.5px 2.5px 2.5px hsla(0, 0%, 0%, 0.125)'
                >
                    <Box
                        mt="25px"
                        p="0 30px"
                        display="flex "
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Box>
                            <Typography
                                variant="h5"
                                fontWeight="600"
                                color={colors.secondary[100]}
                            >
                            Revenue Generated
                            </Typography>

                            <Typography
                                variant="h3"
                                fontWeight="bold"
                                color={colors.tertiary[500]}
                            >
                            $59,342.32
                            </Typography>
                        </Box>
                        <Box>
                            <IconButton>
                                <DownloadOutlinedIcon
                                    sx={{ fontSize: "26px", color: colors.tertiary[500] }}
                                />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box height="250px" m="-20px 0 0 0">
                        <LineChart isDashboard={true} />
                    </Box>
                </Box>
                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    overflow="auto"
                    borderRadius='5px'
                    boxShadow='2.5px 2.5px 2.5px hsla(0, 0%, 0%, 0.125)'
                >
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`3px solid ${colors.secondary[600]}`}
                        colors={colors.secondary[100]}
                        p="15px"
                    >
                        <Typography color={colors.secondary[100]} variant="h5" fontWeight="600">
                        Recent Transactions
                        </Typography>
                    </Box>
                    {mockTransactions.map((transaction, i) => (
                        <Box
                            key={`${transaction.txId}-${i}`}
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            borderBottom={`2px solid ${colors.secondary[600]}`}
                            p="15px"
                        >
                            <Box>
                                <Typography
                                    color={colors.tertiary[500]}
                                    variant="h5"
                                    fontWeight="600"
                                >
                                    {transaction.txId}
                                </Typography>

                                <Typography color={colors.secondary[100]}>
                                    {transaction.user}
                                </Typography>
                            </Box>

                            <Box color={colors.secondary[100]}>{transaction.date}</Box>
                            <Box
                                backgroundColor={colors.tertiary[500]}
                                p="5px 10px"
                                borderRadius="4px"
                            >
                                ${transaction.cost}
                            </Box>
                        </Box>
                    ))}
                </Box>

                {/* ROW 3 */}
                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    p="30px"
                    borderRadius='10px'
                    boxShadow='5px 5px 5px hsla(0, 0%, 0%, 0.125)'
                >
                    <Typography variant="h5" fontWeight="600">
                        Campaign
                    </Typography>

                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        mt="25px"
                    >

                        <ProgressCircle size="125" />
                        
                        <Typography
                            variant="h5"
                            color={colors.tertiary[500]}
                            sx={{ mt: "15px" }}
                        >
                            $48,352 revenue generated
                        </Typography>
                        
                        <Typography>Includes extra misc expenditures and costs</Typography>
                    </Box>
                </Box>
                
                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    borderRadius='10px'
                    boxShadow='5px 5px 5px hsla(0, 0%, 0%, 0.125)'
                >
                    <Typography
                        variant="h5"
                        fontWeight="600"
                        sx={{ padding: "30px 30px 0 30px" }}
                    >
                    Sales Quantity
                    </Typography>

                    <Box height="250px" mt="-20px">
                        {/* <BarChart isDashboard={true} /> */}
                    </Box>
                </Box>

                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    padding="30px"
                    borderRadius='10px'
                    boxShadow='5px 5px 5px hsla(0, 0%, 0%, 0.125)'
                >
                    <Typography
                        variant="h5"
                        fontWeight="600"
                        sx={{ marginBottom: "15px" }}
                    >
                    Geography Based Traffic
                    </Typography>
                    
                    <Box height="200px">
                        {/* <GeographyChart isDashboard={true} /> */}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Dashboard;