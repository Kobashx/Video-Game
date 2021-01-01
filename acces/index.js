
import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector('video');
const play_pause = document.getElementById('play_pause');
const mute_unMute = document.getElementById('muted_unMute');

const player = new MediaPlayer(
  {
    el: video,
    plugins: [new AutoPlay()]
  })

play_pause.onclick = () =>  player.togglePlay()
mute_unMute.onclick = () =>  player.escuchar()
