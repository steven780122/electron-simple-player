// 為了避免一直寫document.getElementById
exports.$ = (id) => {
    return document.getElementById(id);
}

exports.convertDuration = (time) => {
    const minutes = "0" + Math.floor(time / 60)     // Ex, 單數> '01', 2位數> '010' 
    const seconds = "0" + Math.floor(time - minutes * 60)
    return minutes.substr(-2) + ":" + seconds.substr(-2)
}

exports.getSupportVideoTypes = () => {
    return ['mp4']
}

exports.getSupportAudioTypes = () => {
    return ['mp3']
}

exports.getSupportImageTypes = () => {
    return ['jpg', 'png', 'gif']
}