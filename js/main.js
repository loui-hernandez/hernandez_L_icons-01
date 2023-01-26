console.log('Javascript is online')

const facebook = document.querySelector ('#facebook');
const twitter = document.querySelector ('#twitter');
const youtube = document.querySelector ('#youtube');
const tiktok = document.querySelector ('#tiktok');
const instagram = document.querySelector ('#instagram');
const flickr = document.querySelector ('#flickr');
const dribble = document.querySelector ('#dribble');
const behance = document.querySelector ('#behance');
const linkedin = document.querySelector ('#linkedin');
const pinterest = document.querySelector ('#pinterest');
const line = document.querySelector ('#line');
const whatsapp = document.querySelector ('#whatsapp');
const kakao = document.querySelector ('#kakao');
const fmessenger = document.querySelector ('#fmessenger');
const skype = document.querySelector ('#skype');
const apple = document.querySelector ('#apple');
const windows = document.querySelector ('#windows');
const yahoo = document.querySelector ('#yahoo');
const googleplus = document.querySelector ('#googleplus');
const dropbox = document.querySelector ('#dropbox');
const xbox = document.querySelector ('#xbox');
const steam = document.querySelector ('#steam');
const android = document.querySelector ('#android');
const trip_advisor = document.querySelector ('#trip_advisor');
const amazon = document.querySelector ('#amazon');
const html5 = document.querySelector ('#html5');

function logID2() {
    console.log('clicked on this SVG Icon Social Media:',this.id);
}

function logID() {
    console.log('clicked on this SVG Icon:',this.id);
}

facebook.addEventListener('click', logID2);
twitter.addEventListener('click', logID2);
youtube.addEventListener('click', logID2);
tiktok.addEventListener('click', logID2);
instagram.addEventListener('click', logID2);
flickr.addEventListener('click', logID2);
dribble.addEventListener('click', logID2);
behance.addEventListener('click', logID2);
linkedin.addEventListener('click', logID2);
pinterest.addEventListener('click', logID2);
line.addEventListener('click', logID);
whatsapp.addEventListener('click', logID);
kakao.addEventListener('click', logID);
fmessenger.addEventListener('click', logID);
skype.addEventListener('click', logID);
apple.addEventListener('click', logID);
windows.addEventListener('click', logID);
yahoo.addEventListener('click', logID);
googleplus.addEventListener('click', logID);
dropbox.addEventListener('click', logID);
xbox.addEventListener('click', logID);
steam.addEventListener('click', logID);
android.addEventListener('click', logID);
trip_advisor.addEventListener('click', logID);
amazon.addEventListener('click', logID);
html5.addEventListener('click', logID);