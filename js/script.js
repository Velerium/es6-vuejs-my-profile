function newPost() {
    let post = {
        text: document.querySelector('.post-input').value,
        date: dayjs().format('DD/MM/YYYY')
    }
    data.myProfile.posts.unshift(post)
    update();
    document.querySelector('.post-input').value = '';
};

function deletePost(index) {
    console.log(Array.from(document.querySelectorAll('.post')))
    Array.from(document.querySelectorAll('.post')).splice(index, 1);
    console.log(Array.from(document.querySelectorAll('.post')))
    update();
};

const data = {
    myProfile: {
        details: {
            name: 'Pierfilippo',
            surname: 'Baudo',
            pic: 'https://www.focus.it/site_stored/imgs/0003/042/nerd2.1020x680.jpg',
        },
        posts: [
               
            {
                text: 'Vi presento il mio amico Mimmo.',
                mediaPath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Supernerd_%283262512306%29.jpg/1024px-Supernerd_%283262512306%29.jpg',
                date: '17-06-2021'
            },

            {
                text: "Mi sono iscritto in palestra!",
                date: '16-06-2021'
            },

            {
                text: "Vi ricordate di Windows XP? Che ricordi, non ce la faccio...",
                mediaPath: 'https://upload.wikimedia.org/wikipedia/it/d/d3/Colline_%28immagine%29.jpg',
                date: '01-06-2021'
            },

            {
                text: "C'è nessuno?",
                mediaPath: 'https://acqualete.it/wp-content/uploads/2015/09/La-Particella-di-Sodio-1.jpg',
                date: '26-05-2021'
            },
        ]
    }
};

var userDetailHtml = document.querySelector(".user-details")

const {name, surname, pic} = data.myProfile.details; // Added destructuring

userDetailHtml.innerHTML = `
    <div class="user-pic"><img src="${pic}" alt="user pic"></div>
    <div class="user-name">${name} ${surname} </div>
`;

var postListHtml = document.querySelector(".post-list");

function update () {

    postListHtml.innerHTML = '';

    data.myProfile.posts.forEach((post) => {
        
        postHtml = `
        <i class="far fa-trash-alt"></i>
        <div class="post-details">
            <div class="user-pic">
                <img src="${pic}" alt="user pic">
            </div>
            <div class="details">
                <div class="user-name">${name} ${surname}</div>
                <div class="post-date">${post.date}</div>
            </div>
        </div> 
        <div class="post-text">
            ${post.text}
        </div>
        ` ;

        if (Object.keys(post).includes('mediaPath')) {
            postHtml += ` <div class="post-media">
            <img src="${post.mediaPath}" alt="media" />
            </div>`
        };

        postListHtml.innerHTML += `<div class="post"> ${postHtml} </div>`;
    })
};
update();

document.querySelector('.send').addEventListener('click', newPost)
document.querySelectorAll('.fa-trash-alt').forEach((icon, index) => {
    icon.addEventListener('click', deletePost(index));
})
