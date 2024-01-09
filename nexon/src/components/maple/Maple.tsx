import React from 'react';
import { MapleConatiner } from '../../style/mapleContainer';


const Maple = () => {
  return (
    <MapleConatiner>
      <img src={`${process.env.PREACT_APP_ASSETS_DIR}/orange_mushroom.gif`} />
    </MapleConatiner>
  )
};

export default Maple;

