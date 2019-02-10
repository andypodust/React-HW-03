import React from 'react';

import s from './ButtonClear.module.css';

const BtnClear = ({ handleClearBtn, value }) => (
  <>
    <button className={s.Button} type="button" onClick={handleClearBtn}>
      Clear filter
    </button>
    <p className={s.Filter}>Filter type: {value}</p>
  </>
);

export default BtnClear;
