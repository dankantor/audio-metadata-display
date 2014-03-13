(function(){

// constructor
function AudioMetadataDisplay(opts){
    this.playQueue = null;
    if(opts.playQueue){
        this.playQueue = opts.playQueue;
    }
    this.songMap = {
        'coverart': 'coverart',
        'title': 'title',
        'artist': 'artist',
        'album': 'album'
    }
    this.cacheElements(opts);
    this.addListeners();
    this.setInitital = opts.setInitial || true;
    if(this.setInitital === true){
        if(this.playQueue !== null){
            var song = this.playQueue.getSong();
            this.set(song);   
        }
    }
}

AudioMetadataDisplay.prototype.cacheElements = function(opts){
    if(opts.coverart){
        this.coverartEl = $(opts.coverart);
    }
    if(opts.title){
        this.titleEl = $(opts.title);
    }
    if(opts.artist){
        this.artistEl = $(opts.artist);
    }
    if(opts.album){
        this.albumEl = $(opts.album);
    }
}

AudioMetadataDisplay.prototype.addListeners = function(){
    if(this.playQueue !== null){
        this.playQueue.addEventListener(
            'playing',
            this.onPlaying.bind(this),
            false
        );
    }
}

AudioMetadataDisplay.prototype.onPlaying = function(e){
     var song = e.target.song;
     this.set(song);
}

AudioMetadataDisplay.prototype.set = function(song){
    if(song){
        this.setCoverart(song);
        this.setTitle(song);
        this.setArtist(song);
        this.setAlbum(song);
    }
}

AudioMetadataDisplay.prototype.setCoverart = function(song){
     if(this.coverartEl){
        if(song[this.songMap.coverart]){
            var url = song[this.songMap.coverart];
            this.coverartEl.css('background-image', 'url(' + url + ')');
        }
     }
}

AudioMetadataDisplay.prototype.setTitle = function(song){
     if(this.titleEl){
        if(song[this.songMap.title]){
            var title = song[this.songMap.title];
            this.titleEl.html(title);
        }
     }
}

AudioMetadataDisplay.prototype.setArtist = function(song){
     if(this.artistEl){
        if(song[this.songMap.artist]){
            var artist = song[this.songMap.artist];
            this.artistEl.html(artist);
        }
     }
}

AudioMetadataDisplay.prototype.setAlbum = function(song){
     if(this.albumEl){
        if(song[this.songMap.album]){
            var album = song[this.songMap.album];
            this.albumEl.html(album);
        }
     }
}


// check if we've got require
if(typeof module !== "undefined"){
    module.exports = AudioMetadataDisplay;
}
else{
    window.ListSelector = AudioMetadataDisplay;
}

}()); // end wrapper