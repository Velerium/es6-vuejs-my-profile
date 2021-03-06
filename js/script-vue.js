Vue.config.devtools = true;

new Vue(
    {
        el: '#profile-page',
        data: {
            myProfile: {
                details: {
                    name: 'Pierfilippo',
                    surname: 'Baudo',
                    pic: 'https://www.focus.it/site_stored/imgs/0003/042/nerd2.1020x680.jpg',
                },
                posts: [
               
                {
                    text: 'Vi presento il mio amico Mimmo',
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
            },

            postInput: '',
        },

        methods: {   // User can post by pushing the "Enter" key as well.
            newPost: function() {

                if (this.postInput === '') {
                    return;
                }

                let post = {
                    text: this.postInput,
                    date: dayjs().format('DD/MM/YYYY'),
                }
                this.myProfile.posts.unshift(post);
                this.postInput = '';
            },

            newLine: function() {
                this.postInput = `${this.postInput}\r\n`;
            },

            deletePost: function(index) {
                this.myProfile.posts.splice(index, 1);
            }
        }
    }
);