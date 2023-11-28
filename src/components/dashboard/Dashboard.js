import React from "react"
import { useDashboardState } from "./state/useDashboardState"
import Pagination from '@mui/material/Pagination';
import ModalDialog from "../modal/Modal.js";
import CardDigimon from "../Card/Card.js";
import { Grid } from "@mui/material";
import { Box } from "@mui/material"
import { ToggleButton } from '@aws-amplify/ui-react';
import {logout} from "../../store/thunks/api.js"


const Dashboard = () => {

    const { digimons, nextPage, page, handleChange, modalDialogProperties, handleopenModal } = useDashboardState();


    return (
        <Box sx={{ width: '100%' }}>
           <div>
           <ToggleButton onClick={logout}>
                Sign Out
            </ToggleButton>
           </div>
           
            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                {
                    digimons && digimons.map((digimon, index) => {
                        return (
                            <Grid md={3} xs={12} item key={index} onClick={() => handleopenModal(digimon.id, digimon.image)}>
                                <CardDigimon {...digimon} ></CardDigimon>
                            </Grid>
                        )
                    })
                }
            </Grid>
            <Grid container >
                <Pagination count={10} page={page} onChange={handleChange} />
            </Grid>
            <ModalDialog {...modalDialogProperties} ></ModalDialog>

        </Box>
    )
}
export default Dashboard