import React, { useState } from 'react';
import MenuItem from '../menu-item/menu-item.component';
import SECTIONS_DATA from "./sections.data";
import './directory.styles.scss';

const Directory = () => {
  const [sections, setSections] = useState(SECTIONS_DATA);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};
export default Directory;
