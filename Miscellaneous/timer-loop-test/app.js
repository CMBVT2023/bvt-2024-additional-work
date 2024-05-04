class Time {
    constructor() {
        this._gameStartTime = Date.now();

        this._timerDisplay = document.getElementById('timer-display');
        this._timerBtn = document.getElementById('timer-btn')


        this._startTimer();
    }
    _updateDisplayTime() {
        this._timerDisplay.innerText = `${this.displayTime(this.totalTime())}`
        console.log(this.totalTime())
    }

    _stopTimer() {
        clearInterval(this._timerCounter);

        console.log('timer off')
    }

    _startTimer() {
        this._timerCounter = setInterval(this._updateDisplayTime.bind(this), 1000);

        this._timerBtn.addEventListener('click', this._stopTimer.bind(this), {once: true});
    }

    totalTime() {
        return Math.floor((Date.now() - this._gameStartTime) / 1000);
    }

    timerReset() {
        this._gameStartTime = Date.now();
    }

    displayTime(time) {
        let seconds = time % 60;
        let minutes = Math.floor(time / 60);
        let secondsDisplay;
        let minutesDisplay;
        
        if (minutes >= 10) {
            minutesDisplay = `${minutes}`
        } else {
            minutesDisplay = `0${minutes}`;
        }

        if (seconds >= 10) {
            secondsDisplay =  `${seconds}`
        } else {
            secondsDisplay =  `0${seconds}`;
        }

        return `${minutesDisplay}:${secondsDisplay}`
    }
}

const timerTest = new Time();