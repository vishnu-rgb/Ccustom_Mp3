let previous=document.querySelector('#pre');
let play=document.querySelector('#play');
let next=document.querySelector('#next');
let title=document.querySelector('#title');
let recent_volume=document.querySelector('#volume');
let volume_show =document.getElementById('#volume_show');
let slider=document.querySelector('#duration_slider');
let show_duration=document.querySelector('#show_duration');
let track_image=document.querySelector('#track_image');
let auto_play=document.querySelector('#auto');
let present=document.querySelector('#present');
let total=document.querySelector('#total');
let artist=document.querySelector('#artist');

 
let timer;
let autoplay=0;


let index_no=0;
let playing_song= false;


let track= document.createElement('audio');


let All_song=[
        {
            name:" Never lie to me",
            path: "Media/song1.mp3",
            img:"Media/img1.jpg",
            singer:"Rauf & Faik"
        },
        {
            name:"In the end",
            path: "Media/song2.mp3",
            img:"Media/img2.jpg",
            singer:"Linkin park"
        },
        {
            name:"я люблю тебя",
            path: "Media/song3.mp3",
            img:"Media/img3.jpg",
            singer:"Rauf Faik "
        },
        {
            name:"Warriyo - Mortals",
            path: "Media/song4.mp3",
            img:"Media/img4.jpg",
            singer:"NCS Release"
        },
        {
            name:" Wicked Game",
            path: "Media/song5.mp3",
            img:"Media/img5.jpg",
            singer:"Tom Ellis"
        }
    
    
    

    ];

// all function 
function load_track(index_no){

    clearInterval(timer);
    track.src= All_song[index_no].path;
    title.innerHTML= All_song[index_no].name;
    track_image.src= All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

    total.innerHTML=All_song.length;
    present.innerHTML=index_no + 1;
    time = setInterval(range_slider , 1000);

}

load_track(index_no);

function mute_sound(){
    track.value=0;
    volume.value=0;
    volume_show.innerHTML=0;
} 

function reset_slider(){
    slider.value = 0;
}



function just_play(){
    if (playing_song==false){
        playsong();
    }else{
        pausesong();
    }
}


function playsong(){
    track.play();
    playing_song=true;
    play.innerHTML='<i  class="fa fa-pause"></i>';
}


function pausesong(){
    track.pause();
    playing_song=false;
    play.innerHTML='<i  class="fa fa-play"></i>';
}

function next_song(){
    if(index_no< All_song.length - 1){
        index_no+=1;
        load_track(index_no);
        reset_slider();
        playsong();
    }else{
        index_no=0;
        load_track(index_no);
        playsong();
        reset_slider();
    }
}
function previous_song(){
    if(index_no>0){
        index_no-= 1;
        load_track(index_no);
        playsong();
        reset_slider();
    }else{
        index_no=All_song.length;
        load_track(index_no);
        playsong();
        reset_slider();
    }
}

function volume_change(){
    var volume_show = recent_volume.value;
     volume_show.volume = volume_slid / 100;
     

}


function chnage_duration(){
    slider_position = track.duration *(slider.value /100);
    track.currentTime = slider_position;
}


function autoplay_switch(){
  if(auto_play==1){
      auto_play=0;
      auto_play.style.background= "rgb(255,255,255,0.2)";

  }else{
      auto_play=1;
      auto_play.style.background="#ff8a65"
  }
}
function range_slider(){
    let position =0;

    if(isNaN(track.duration)){
        position=track.currentTime *(100/ track.duration)
        slider.value=position;
    }

    if(track.ended){
        play.innerHTML = '<i class="fa fa-play"></i>';
        if(auto_play==0){
            index_no+=1;
            load_track(index_no);
            playsong();
        }
    }

}