// 欢迎关注Sophia-webdev的B站频道:https://space.bilibili.com/1468907420
const title= document.querySelector('.title');
const prev= document.querySelector('.prev');
const playPause= document.querySelector('.playPause');
const next= document.querySelector('.next');
const audio= document.querySelector('audio');

// song list
const songList =[
    {
        // 你的音乐的路径,下面两个xxx处同理
        path:"全家福.mp3",
        // 你的音乐的名字，下面两个xxx处同理
        songName:"全家福",
    },
    {
        path:"大地回春.mp3",
        songName:"大地回春",
    },

    {
        path:"好运来.mp3",
        songName:"好运来",
    },
    {
        path:"如意吉祥.mp3",
        songName:"如意吉祥",
    },
    {
        path:"家家福贵接财神.mp3",
        songName:"家家福贵接财神",
    },
    {
        path:"寄语贺年卡.mp3",
        songName:"寄语贺年卡",
    },
    {
        path:"恭喜你.mp3",
        songName:"恭喜你",
    },
    {
        path:"恭喜发财.mp3",
        songName:"恭喜发财",
    },
    {
        path:"恭喜恭喜.mp3",
        songName:"恭喜恭喜",
    },
    {
        path:"新春又到好运来.mp3",
        songName:"新春又到好运来",
    },
    {
        path:"新春颂献.mp3",
        songName:"新春颂献",
    },
    {
        path:"春风报喜.mp3",
        songName:"春风报喜",
    },
    {
        path:"欢乐满人间.mp3",
        songName:"欢乐满人间",
    },
    {
        path:"歌颂新春.mp3",
        songName:"歌颂新春",
    },
    {
        path:"祝新岁.mp3",
        songName:"祝新岁",
    },
    {
        path:"财神到 (2).mp3",
        songName:"财神到-许冠杰",
    },
    {
        path:"财神到.mp3",
        songName:"财神到-刘珺儿",
    },
    {
        path:"财神福星照住你.mp3",
        songName:"财神福星照住你",
    },
    {
        path:"迎春花.mp3",
        songName:"迎春花",
    },
    {
        path:"鲜花送玉人.mp3",
        songName:"鲜花送玉人",
    },
    {
        path:"齐贺吓你.mp3",
        songName:"齐贺吓你",
    },
    
];

let songPlaying = false;

//play song
 const playSong = ()=>{
    songPlaying = true;
    audio.play();
    playPause.classList.add('active');
    playPause.innerHTML = '<span class="material-icons">pause</span>';
}

//pause song
const pauseSong = () => {
    songPlaying = false;
    audio.pause();
    playPause.classList.remove('active');
    playPause.innerHTML = ' <span class="material-icons">play_arrow</span>';

}
//play/pause song
playPause.addEventListener("click",() => (songPlaying? pauseSong() : playSong()));

//load song
const loadSong = (songList) => {
    title.textContent = songList.songName;
    audio.src = songList.path;//

}
let i = 0;
loadSong (songList[i]);

//previous song
const prevSong = () => {
    i--;
    if (i < 0){
        i = songList.length -1;
    }
    loadSong(songList[i]);
    playSong();
}

prev.addEventListener("click", prevSong);

//next song
const nextSong = () => {
    i++;
    if (i > (songList.length - 1)){
        i = 0;
    }
    loadSong(songList[i]);
    playSong();
}

next.addEventListener("click", nextSong); 