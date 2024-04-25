import { Box, Divider, Drawer, Grid, List, Toolbar, Typography } from "@mui/material"
import {  useSelector } from "react-redux"
import { SideBarItem } from "./SideBarItem"


export const SideBar = ({ drawerWidth = 240 }) => {

    const { displayName } = useSelector( state => state.auth )
    const { notes } = useSelector( state => state.journal )

  return (
    <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
        <Drawer
            variant="permanent" // temporary si tenemos la intencion de ocultarlo en alguna vista o tamaño
            open={ true }
            sx={{
                display: { xs: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } // Revisar sintaxis de ('& .MuiDrawer-paper') en docu de material ui
            }}
        >
            <Toolbar>
                <Typography variant="h6" noWrap component='div'>
                    {displayName}
                </Typography>
            </Toolbar>

            <Divider/>

            <List>
                {
                    notes.map( note =>(
                        <SideBarItem key={ note.id } {...note}/>
                    ))
                }
            </List>

        </Drawer>

    </Box>
  )
}
