import React from 'react';
import Time from './Time/Time';

type HeaderProps = {
  name: string;
};

const Header = ({ name }: HeaderProps) => (
  <div id="header">
    <div className="my_name">
      <a href="#">{name}</a>
      <Time />
    </div>
  </div>
);

export default Header;
