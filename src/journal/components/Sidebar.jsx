import { TurnedInNot } from '@mui/icons-material'
import { Box, Divider, Drawer, List, ListItem, ListItemButton, Toolbar, Typography, ListItemIcon, Grid, ListItemText } from '@mui/material'
import React from 'react'

export const Sidebar = ({drawerWidth}) => {
  return (
    <Box component='nav' sx={{width: {sm: {drawerWidth}, flexShrink: {sm:0}}}}>
      <Drawer variant='permanent' open sx={{display:{xs: 'block'}, '& .MuiDrawer-paper' : { boxSizing: 'border-box', width: drawerWidth}}}>
        <Toolbar>
          <Typography variant='h6' noWrap>
            Fabricio Bencomo
          </Typography>
        </Toolbar>
        <Divider></Divider>
        <List>
          {
            ['Enero', 'Febrero', 'Marzo'].map((mes, id) => (
              <ListItem key={id} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot></TurnedInNot>
                  </ListItemIcon>
                  <Grid container>
                    <ListItemText primary={mes}></ListItemText>
                    <ListItemText secondary='dfdfdf fdfdfd'></ListItemText>
                  </Grid>
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
      </Drawer>
    </Box>
  )
}
