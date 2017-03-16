var playlist = {}
playlist['Jethro Tull'] = 'Back Door Angels'

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
}
