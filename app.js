const listVideo = document.querySelectorAll('.video-list .vid');
const mainVideo = document.querySelector('.main-video video');
const title = document.querySelector('.main-video .title');

listVideo.forEach(video => {
    video.onclick = () => {
        listVideo.forEach((vid) => {
            vid.classList.remove('active');
        });
        video.classList.add('active');
        if (video.classList.contains('active')) {
            let src = video.children[0].getAttribute('src');
            mainVideo.src = src;
            let text = video.children[1].innerHTML;
            title.innerHTML = text;
        };
    };
});


// recode1
// const videoLists = document.querySelectorAll('.video-list .vid');
// const videoMain = document.querySelector('.main-video video');
// const videoMainTitle = document.querySelector('.main-video .title');

// videoLists.forEach((video) => {
//     video.onclick = () => {
//         videoLists.forEach((vid) => {
//             vid.classList.remove('active');
//         });

//         video.classList.add('active');

//         if (video.classList.contains('active')) {
//             let src = video.children[0].getAttribute('src');
//             videoMain.src = src;

//             let text = video.children[1].innerHTML;
//             videoMainTitle.innerHTML = text;
//         }

//     };
// });


// recode2
// const videoLists = document.querySelectorAll('.video-list .vid');
// const videoMain = document.querySelector('.main-video video');
// const videoMainTitle = document.querySelector('.main-video .title');

// videoLists.forEach((video) => {
//     video.onclick = () => {
//         // 1
//         videoLists.forEach((vid) => {
//             vid.classList.remove('active');
//         });

//         // 2
//         video.classList.add('active');

//         // 3
//         if (video.classList.contains('active')) {
//             let src = video.children[0].getAttribute('src');
//             videoMain.src = src;

//             let text = video.children[1].innerHTML;
//             videoMainTitle.innerHTML = text;
//         }

//     };
// });


// recode3
// const videoLists = document.querySelectorAll('.video-list .vid');
// const videoMain = document.querySelector('.main-video video');
// const videoMainTitle = document.querySelector('.main-video .title');

// videoLists.forEach((video) => {
//     video.onclick = () => {
//         // 1
//         videoLists.forEach((vid) => {
//             vid.classList.remove('active');
//         });

//         // 2
//         video.classList.add('active');

//         // 3
//         if (video.classList.contains('active')) {
//             let src = video.children[0].getAttribute('src');
//             videoMain.src = src;

//             let text = video.children[1].innerHTML;
//             videoMainTitle.innerHTML = text;
//         }

//     };
// });



// recode4
// const videoItems = document.querySelectorAll('.video-list .vid');
// const videoMainVideo = document.querySelector('.main-video video');
// const videoMainTitle = document.querySelector('.main-video .title');

// videoItems.forEach((video) => {
//     video.onclick = () => {
//         // 1
//         videoItems.forEach((vid) => {
//             vid.classlist.remove('active');
//         });

//         // 2
//         video.classList.add('active');

//         // 3
//         if (video.classList.contains('active')) {
//             let src = video.children[0].getAttribute('src');
//             videoMainVideo.src = src;

//             let text = video.children[1].innerHTML;
//             videoMainTitle.innerHTML = text;
//         }
//     };
// });



// recode5
// const videoItems = document.querySelectorAll('.video-list .vid');
// const videoMainVideo = document.querySelector('.main-video video');
// const videoMainTitle = document.querySelector('.main-video .title');

// videoItems.forEach((item) => {
//     item.onclick = () => {
//         // 1
//         videoItems.forEach((item) => {
//             item.classlist.remove('active')
//         });

//         // 2
//         item.classList.add('active');

//         // 3
//         if (item.classList.contains('active')) {
//             let src = item.children[0].getAttribute('src');
//             videoMainVideo.src = src;

//             let title = item.children[1].innerHTML;
//             videoMainTitle.innerHTML = title;
//         }
//     };
// });