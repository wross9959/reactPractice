import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { courseData } from "../../data/courseData";
import AddIcon from '@mui/icons-material/Add';


const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [

    { 
      field: "courseID", 
      headerName: "Course Code", 
      flex: 0.5,
      editable: true
    },
    { 
      field: "course",   
      headerName: "Course",
      flex: 1.3,
      editable: true
    },
    { 
      field: "credits",  
      headerName: "Credits", 
      flex: 0.3, 
      editable: true,
      type: "number",
      
    },
    { 
      field: "preconditions",      
      headerName: "Preconditions", 
      headerAlign: "left", 
      align: "left", 
      flex: 0.5,
      editable: true

    },
    { 
      field: "term",    
      headerName: "Term", 
      flex: 0.5,
      editable: true
    },
    { 
      field: "year",    
      headerName: "Year", 
      flex: 0.55,
      editable: true
    },
    { 
      field: "complete",  
      headerName: "Complete", 
      flex: 0.55,
      editable: true
    },
    { 
      field: "notes",    
      headerName: "Other Notes", 
      flex: 1.25,
      align: "left",
      editable: true
    },
    { 
      field: "allowed",  
      headerName: "Allowed to take", 
      flex: 0.5 ,
      editable: true
    },
  ];



  // function EditToolbar(props) {
  //   const { setRows, setRowModesModel } = props;
  
  //   const handleClick = () => {
  //     const id = randomId();
  //     setRows((oldRows) => [...oldRows, { id, name: '', age: '', isNew: true }]);
  //     setRowModesModel((oldModel) => ({
  //       ...oldModel,
  //       [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
  //     }));
  //   };
  
  //   return (
  //     <GridToolbarContainer>
  //       <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
  //         Add record
  //       </Button>
  //     </GridToolbarContainer>
  //   );
  // }

  return (
    <Box m="20px">
      <Header
        title="Courses"
        subtitle="All courses in SWE degree"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.tertiary[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.accentTwo[700],
            borderBottom: "",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.accentTwo[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.tertiary[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.secondary[100]} !important`,
          },
        }}
      >
        
        <DataGrid
          rows={courseData}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;