Audio Metadata Display
======================

Uses PlayQueue to display coverart, title, artist and album html

## Install

    npm install audio-metadata-display


## Usage

    var AudioMetadataDisplay = require('audio-metadata-display');
    var audioMetadataDisplay = new AudioMetadataDisplay(
        {
            'playQueue': this.playQueue,
            'coverart': '#song-coverart',
            'title': '#song-title',
            'artist': '#song-artist'
        }
    );
    
## Example HTML

    <div class="song-metadata">
        <div class="song-coverart" id="song-coverart"></div>
        <div class="song-title" id="song-title"></div>
        <div class="song-artist" id="song-artist"></div>
        <div class="song-album" id="song-album"></div>
    </div>
    
## Example CSS

    .song-metadata {
        position: absolute;
        top: 30px;
        left: 110px;
        right: 0;
        height: 40px;
    }
    .song-coverart {
        position: absolute;
        top: 10px;
        left: 10px;
        height: 50px;
        width: 50px;
        background-repeat: no-repeat;
        background-size: cover;
        background-color: #F3F3F3;
        background-size: contain;
    }
    .song-title {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        text-align: center;
        font-size: 14px;
        .ellipsis();
    }
    .song-artist {
        position: absolute;
        top: 18px;
        left: 0;
        right: 0;
        text-align: center;
        font-size: 12px;
        .ellipsis();
    }
    .song-album {
        position: absolute;
        top: 28px;
        left: 0;
        right: 0;
        text-align: center;
        font-size: 12px;
        .ellipsis();
    }


