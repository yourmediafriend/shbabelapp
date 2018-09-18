import React from 'react'

import OneColumnCenter from '../../Layout/1ColumnCenter';
import MusicPlayer from '../../MusicPlayer';

const FooterMusicPlayer = props => {
  return (
    <div>
      <OneColumnCenter contentMain={ <MusicPlayer />} />
    </div>
  )
}

export default FooterMusicPlayer;
