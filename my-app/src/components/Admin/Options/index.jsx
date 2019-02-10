// import React from 'react';

// import s from './Options.module.css';

// const Options = ({ categories, handleOptionChange, value }) => (
//   <div>
//     <label className={s.Options} htmlFor="categories">
//       Categories:{' '}
//     </label>
//     <select
//       name="categories"
//       value={value}
//       onChange={e => handleOptionChange(e.target.value)}
//     >
//       {categories.map(option => (
//         <option key={option.name} value={option.name}>
//           {option.name}
//         </option>
//       ))}
//     </select>
//   </div>
// );

// export default Options;

import React from 'react';

import s from './Options.module.css';

const Options = ({ categories, handleOptionChange, value }) => (
  <div>
    <label className={s.Options} htmlFor="categories">
      Categories:
    </label>
    <select
      name="categories"
      value={value}
      onChange={e => handleOptionChange(e.target.value)}
    >
      <option value=" " disabled>
        ...
      </option>
      {categories.map(option => (
        <option key={option.name} value={option.name}>
          {option.name}
        </option>
      ))}
    </select>
  </div>
);

export default Options;
