/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { Paper, Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
const Tabledata=({data})=>{
    return(
        <div>
        <TableContainer component={Paper} >
      <Table  sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>TrackingId</StyledTableCell>
            {/* <StyledTableCell align="right">senderLocation</StyledTableCell>
            <StyledTableCell align="right">RecieverLocation</StyledTableCell> */}
            <StyledTableCell align="right">currentlocation</StyledTableCell>
            {/* <StyledTableCell align="right">deliverystatus</StyledTableCell>
            <StyledTableCell align="right">createdby</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
           {
             [data].map((item)=>{
                 return(
                  <StyledTableRow >
                  <StyledTableCell component="th" scope="row">
                    {item.id}
                  </StyledTableCell>
                  {/* <StyledTableCell align="right">{item.senderLocation}</StyledTableCell>
                  <StyledTableCell align="right">{item.receiverLocation}</StyledTableCell> */}
                  <StyledTableCell align="right">{item.currentLocation}</StyledTableCell>
                  {/* <StyledTableCell align="right">{item.deliveryStatus}</StyledTableCell>
                  <StyledTableCell align="right">{item.createdBy}</StyledTableCell> */}
                </StyledTableRow>
                 );
              })}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    );
};
export default Tabledata;