import React from 'react'

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { Typography } from '@mui/material';

const ListSide = () => {
  const bgcolor = { '&:hover': { backgroundColor: '#222222', boxShadow: 'none' } }
  const [sale, setSale] = React.useState(false);
  const [cashBank, setCashBank] = React.useState(false);
  const [purchase, setPurchase] = React.useState(false);



  return (
    <>
      <List
        sx={{ width: '100%', maxWidth: 360, color: "#fafafa" , mt:4}}
        component="nav"
        aria-labelledby="nested-list-subheader"

      >
        <ListItemButton sx={{ bgcolor }}>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>

        <ListItemButton sx={{ bgcolor }}>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Parties" />
        </ListItemButton>
        {/*  */}
        <ListItemButton onClick={() => setSale(!sale)} sx={{ bgcolor }}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Sale" />
          {sale ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={sale} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ bgcolor, pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="sale" />
            </ListItemButton>
          </List>
        </Collapse>
        {/*  */}
        <ListItemButton onClick={() => setPurchase(!purchase)} sx={{ bgcolor }}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Purchase" />
          {purchase ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={purchase} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ bgcolor, pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Purchase" />
            </ListItemButton>
          </List>
        </Collapse>
        {/*  */}
        <ListItemButton sx={{ bgcolor }}>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Expenses" />
        </ListItemButton>

        {/*  */}
        <ListItemButton onClick={() => setCashBank(!cashBank)} sx={{ bgcolor }}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Cash & Bank" />
          {cashBank ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={cashBank} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>

            <ListItemButton sx={{ bgcolor, pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Bank Account" />
            </ListItemButton>

            <ListItemButton sx={{ bgcolor, pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Cash in Hand" />
            </ListItemButton>

            <ListItemButton sx={{ bgcolor, pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Cheques" />
            </ListItemButton>

            <ListItemButton sx={{ bgcolor, pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Loan Accounts" />
            </ListItemButton>

          </List>
        </Collapse>
        {/*  */}


        <ListItemButton sx={{ bgcolor }}>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="My Online Store" />
        </ListItemButton>

        <ListItemButton sx={{ bgcolor }}>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItemButton>

      </List>
      <Typography variant='h6'sx={{mt:2,p:2 , color: "#fafafa" }}>
        Apply for Loan
      </Typography>
    </>
  )
}

export default ListSide;
