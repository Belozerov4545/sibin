import { createSlice } from '@reduxjs/toolkit';

export const tableSlice = createSlice({
    name: 'data',
    initialState: [],
    reducers: {
      setData: (state, action) => state = action.payload,
      updateValues: (state, action) => state = action.payload,
    },
  });

export const { setData, updateValues } = tableSlice.actions;

const allData = () => (dispatch) => {
    fetch(`https://www.cbr-xml-daily.ru/daily_json.js`)
      .then((response) => response.json())
      .then((response) => dispatch(setData(Object.entries(response?.Valute).map((valute) => [valute[0], {...valute[1], favorite: false}]))))
      .catch((err) => {
        console.log(err);
        alert("Не удалось получить данные! :(");
      });

  };

const updateData = (valueOfValute, arrOfValutes) => (dispatch) => {
  if (valueOfValute !== 0 ?? arrOfValutes.length > 0) {
    let arrOfResults = arrOfValutes?.map((value)=>[value[0], {...value[1], newValue: (Number(valueOfValute)/Number(value[1].Value)).toFixed(4)}]);
    return dispatch(updateValues(arrOfResults))
    }
  };

export default tableSlice.reducer;
export { allData, updateData };