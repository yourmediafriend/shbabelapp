import React from 'react'

import OneColumnCenter from '../../Layout/1ColumnCenter';
import { Controls } from '../../MusicPlayer';

const FooterMusicPlayer = props => {
  return (
    <div>
      <OneColumnCenter contentMain={ <Controls />} />
    </div>
  )
}

export default FooterMusicPlayer;
