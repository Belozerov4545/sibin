import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { getOption } from '../redux/slices/selectSlice';
import { InputLabel } from '@mui/material';

export default function SelectLabels() {
  const data = useSelector((store) => store.data);
  const [selectValue, setSelectValue] = React.useState('');
  
  const dispatch = useDispatch();
  
  const handleChange = (event) => {
    setSelectValue(event.target?.value);
  };

  React.useEffect(() => {
    dispatch(getOption(selectValue));
  }, [selectValue])

  return (
    <FormControl id='valute-selector' sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label" htmlFor="demo-simple-select-helper">Базовая валюта</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          name="demo-simple-select"
          defaultValue={''}
          value={selectValue}
          label="Valute"
          onChange={handleChange}
        >
           {data?.map((valute) => {
            return (<MenuItem key={valute[1]?.ID} value={valute[1]?.Value}>{valute[1]?.Name}</MenuItem>)
          })}
        </Select>
        <FormHelperText>Выберите базовую валюту</FormHelperText>
      </FormControl>
  );
}
