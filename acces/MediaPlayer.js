class MediaPlayer  {

  constructor(config) { 
    this.media = config.el
    this.plugins = config.plugins || [] 
    
    this._initPlugins_()
  }

  // PROTOTYPES
  _initPlugins_ () {
    this.plugins.forEach(plugin => {
      plugin.run(this)
    })
  }

  play(){
    this.media.play()
  }
  
  pause(){
    this.media.pause()
  }

  togglePlay(){
    if(this.media.paused){
      this.play()
    } else {
      this.pause()
    }
  }

  mute(){
    this.media.muted = true
  }

  unMute(){
    this.media.muted = false
  }

  escuchar () {
    if(this.media.muted === true){
      this.unMute()
    } else { this.mute() }
  }
}



export default MediaPlayer;