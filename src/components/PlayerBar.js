import React, { Component } from 'react';

class PlayerBar extends Component {
    render() {
        return (
            <section className="player-bar">
                <section id="buttons">
                    <section id="volume-control">
                        <div className="icon ion-volume-low"></div>
                        <input type="range" 
                        className="seek-bar" 
                        value={this.props.songVolume} 
                        max="1"
                        min="0"
                        step="0.01"
                        onChange={this.props.handleVolumeChange}
                        label={this.props.songVolume}
                        />
                        <div className="icon ion-volume-high"></div>
                        <div className="volumePercent">{Math.round((this.props.songVolume)*100)}%</div>
                    </section>
                    <button id="previous" onClick={this.props.handlePrevClick}>
                        <span className="ion-skip-backward"></span>
                    </button>
                    <button id="play-pause" onClick={this.props.handleSongClick}>
                        <span className={this.props.isPlaying ? 'ion-pause' : 'ion-play'}></span>
                    </button>
                    <button id="next" onClick={this.props.handleNextClick}>
                        <span className="ion-skip-forward"></span>
                    </button>
                    <section id="time-control">
                        <div className="current-time">{this.props.convertTime}</div>
                        <input 
                            type="range" 
                            className="seek-bar" 
                            value={(this.props.currentTime / this.props.duration) || 0 } 
                            max="1"
                            min="0"
                            step="0.01"
                            onChange={this.props.handleTimeChange}
                            />
                        <div className="total-time">{this.props.convertDuration}</div>
                    </section>
                </section>
            </section>
        );
    }
}

export default PlayerBar;