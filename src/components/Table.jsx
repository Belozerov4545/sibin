import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Star, StarBorderOutlined } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { allData, updateData } from '../redux/slices/tableSlice';

let cellsNames = ['Валюта', 'Единиц', 'Буквенный код', 'Курс']

export default function BasicTable() {
  const data = useSelector((store) => store.data);
  const select = useSelector((store) => store.select);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(allData());
  }, [])
  
  React.useEffect(() => {
    if (select) {
      dispatch(updateData(select, data));
    }
  }, [select]);
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {<TableCell style={{fontWeight: 'bold'}} align='center'>{'Избранное'}</TableCell>}
            {cellsNames?.map((name, index) => { return (<TableCell key={index} style={{fontWeight: 'bold'}} component="th" scope="row">{name}</TableCell>)})}
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((valute) => {
            return (
              <TableRow key={valute[1]?.ID}sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="center">
                  {valute[1].favorite ? 
                    <Star /> : 
                    <StarBorderOutlined />
                  }
                </TableCell>
                <TableCell component="th" scope="row">{valute[1].Name}</TableCell>
                <TableCell>{valute[1].NumCode}</TableCell>
                <TableCell>{valute[1].CharCode}</TableCell>
                <TableCell>{valute[1].newValue ?? valute[1].Value}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
