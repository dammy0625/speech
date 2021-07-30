const text = document.querySelector("#area")
const convert = document.querySelector("#convert")
const pause = document.querySelector("#pause")
const resume = document.querySelector("#resume")
const cancle = document.querySelector("#cancle")
const esh = document.querySelector('#info')
const blck = document.querySelector('.blck')

convert.addEventListener("click",show)
pause.addEventListener("click",pauseNow)
resume.addEventListener("click",resumeNow)
cancle.addEventListener("click",cancleNow)
esh.addEventListener('click' , reveal)

function reveal(){
blck.classList.toggle('blik')
}

function show(){
    const speech = new SpeechSynthesisUtterance();
speech.volume = 1
speech.rate = 0.6
speech.pitch = 9
speech.text = text.value

window.speechSynthesis.speak(speech)
speechSynthesis.onvoiceschanged = () => {speech.voice = speechSynthesis.getVoices()[2]}
}
function pauseNow(){
    
window.speechSynthesis.pause()

}
function resumeNow(){
window.speechSynthesis.resume()

}
function cancleNow(){
window.speechSynthesis.cancel()

}
