import React from 'react';

import { Menuitem } from '../Menu-Item/menu-item.component';
import sections from './directory.data';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: sections,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <Menuitem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
