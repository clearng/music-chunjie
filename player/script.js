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
        path:"./songs/阿鲁阿卓-美丽中国.mp3",
        // 你的音乐的名字，下面两个xxx处同理
        songName:"阿鲁阿卓-美丽中国",
    },
    {
        // 你的音乐的路径,下面两个xxx处同理
        path:"./songs/刘德华-恭喜发财.mp3",
        // 你的音乐的名字，下面两个xxx处同理
        songName:"刘德华-恭喜发财",
    },
    {
        // 你的音乐的路径,下面两个xxx处同理
        path:"./songs/刘珺儿&陈志忠-新春颂献.mp3",
        // 你的音乐的名字，下面两个xxx处同理
        songName:"刘珺儿&陈志忠-新春颂献",
    },
    {
        // 你的音乐的路径,下面两个xxx处同理
        path:"./songs/刘珺儿&夜听-富贵花开万年红.mp3",
        // 你的音乐的名字，下面两个xxx处同理
        songName:"刘珺儿&夜听-富贵花开万年红",
    },
    {
        // 你的音乐的路径,下面两个xxx处同理
        path:"./songs/刘珺儿&夜听-鲜花送玉人.mp3",
        // 你的音乐的名字，下面两个xxx处同理
        songName:"刘珺儿&夜听-鲜花送玉人",
    },
    {
        // 你的音乐的路径,下面两个xxx处同理
        path:"./songs/刘珺儿-财神福星照住你.mp3",
        // 你的音乐的名字，下面两个xxx处同理
        songName:"刘珺儿-财神福星照住你",
    },
    {
        // 你的音乐的路径,下面两个xxx处同理
        path:"./songs/刘珺儿-春风报喜.mp3",
        // 你的音乐的名字，下面两个xxx处同理
        songName:"刘珺儿-春风报喜",
    },
    {
        // 你的音乐的路径,下面两个xxx处同理
        path:"./songs/刘珺儿-大地回春.mp3",
        // 你的音乐的名字，下面两个xxx处同理
        songName:"刘珺儿-大地回春",
    },
    {
        // 你的音乐的路径,下面两个xxx处同理
        path:"./songs/刘珺儿-风生水起乐千遍.mp3",
        // 你的音乐的名字，下面两个xxx处同理
        songName:"刘珺儿-风生水起乐千遍",
    },
    {
        // 你的音乐的路径,下面两个xxx处同理
        path:"./songs/刘珺儿-高歌太平年.mp3",
        // 你的音乐的名字，下面两个xxx处同理
        songName:"刘珺儿-高歌太平年",
    },
    {
        // 你的音乐的路径,下面两个xxx处同理
        path:"./songs/刘珺儿-恭贺你.mp3",
        // 你的音乐的名字，下面两个xxx处同理
        songName:"刘珺儿-恭贺你",
    },
    {
        // 你的音乐的路径,下面两个xxx处同理
        path:"./songs/刘珺儿-恭喜过新年.mp3",
        // 你的音乐的名字，下面两个xxx处同理
        songName:"刘珺儿-恭喜过新年",
    },
    {
        // 你的音乐的路径,下面两个xxx处同理
        path:"./songs/刘珺儿-恭喜你.mp3",
        // 你的音乐的名字，下面两个xxx处同理
        songName:"刘珺儿-恭喜你",
    },
    {
        // 你的音乐的路径,下面两个xxx处同理
        path:"./songs/刘珺儿-共度快乐年.mp3",
        // 你的音乐的名字，下面两个xxx处同理
        songName:"刘珺儿-共度快乐年",
    },
    {
        // 你的音乐的路径,下面两个xxx处同理
        path:"./songs/刘珺儿-欢乐满人间.mp3",
        // 你的音乐的名字，下面两个xxx处同理
        songName:"刘珺儿-欢乐满人间",
    },
    {
        // 你的音乐的路径,下面两个xxx处同理
        path:"./songs/刘珺儿-寄语贺年卡.mp3",
        // 你的音乐的名字，下面两个xxx处同理
        songName:"刘珺儿-寄语贺年卡",
    },
    {
        // 你的音乐的路径,下面两个xxx处同理
        path:"./songs/刘珺儿-家家富贵接财神.mp3",
        // 你的音乐的名字，下面两个xxx处同理
        songName:"刘珺儿-家家富贵接财神",
    },
    {
        // 你的音乐的路径,下面两个xxx处同理
        path:"./songs/刘珺儿-今年更好更欢喜.mp3",
        // 你的音乐的名字，下面两个xxx处同理
        songName:"刘珺儿-今年更好更欢喜",
    },
    {
        // 你的音乐的路径,下面两个xxx处同理
        path:"./songs/刘珺儿-年三十晚大团圆.mp3",
        // 你的音乐的名字，下面两个xxx处同理
        songName:"刘珺儿-年三十晚大团圆",
    },
    {
        // 你的音乐的路径,下面两个xxx处同理
        path:"./songs/刘珺儿-全家福.mp3",
        // 你的音乐的名字，下面两个xxx处同理
        songName:"刘珺儿-全家福",
    },
    {
        // 你的音乐的路径,下面两个xxx处同理
        path:"./songs/刘珺儿-如意吉祥.mp3",
        // 你的音乐的名字，下面两个xxx处同理
        songName:"刘珺儿-如意吉祥",
    },
    {
        // 你的音乐的路径,下面两个xxx处同理
        path:"./songs/刘珺儿-新春又到好运来.mp3",
        // 你的音乐的名字，下面两个xxx处同理
        songName:"刘珺儿-新春又到好运来",
    },
    {
        // 你的音乐的路径,下面两个xxx处同理
        path:"./songs/刘珺儿-一年笑到晚.mp3",
        // 你的音乐的名字，下面两个xxx处同理
        songName:"刘珺儿-一年笑到晚",
    },
    {
        // 你的音乐的路径,下面两个xxx处同理
        path:"./songs/刘珺儿-迎接春天.mp3",
        // 你的音乐的名字，下面两个xxx处同理
        songName:"刘珺儿-迎接春天",
    },
    {
        // 你的音乐的路径,下面两个xxx处同理
        path:"./songs/刘珺儿-招财进宝.mp3",
        // 你的音乐的名字，下面两个xxx处同理
        songName:"刘珺儿-招财进宝",
    },
    {
        // 你的音乐的路径,下面两个xxx处同理
        path:"./songs/刘珺儿-祝君快乐.mp3",
        // 你的音乐的名字，下面两个xxx处同理
        songName:"刘珺儿-祝君快乐",
    },
    {
        // 你的音乐的路径,下面两个xxx处同理
        path:"./songs/许冠杰-财神到.mp3",
        // 你的音乐的名字，下面两个xxx处同理
        songName:"许冠杰-财神到",
    },
    {
        // 你的音乐的路径,下面两个xxx处同理
        path:"./songs/中国广播民族乐团-步步高.mp3",
        // 你的音乐的名字，下面两个xxx处同理
        songName:"中国广播民族乐团-步步高",
    },
    {
        // 你的音乐的路径,下面两个xxx处同理
        path:"./songs/中国娃娃-发财发福中国年.mp3",
        // 你的音乐的名字，下面两个xxx处同理
        songName:"中国娃娃-发财发福中国年",
    },
    {
        // 你的音乐的路径,下面两个xxx处同理
        path:"./songs/卓依婷-迎春花.mp3",
        // 你的音乐的名字，下面两个xxx处同理
        songName:"卓依婷-迎春花",
    },
    {
        // 你的音乐的路径,下面两个xxx处同理
        path:"./songs/祖海-好运来.mp3",
        // 你的音乐的名字，下面两个xxx处同理
        songName:"祖海-好运来",
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