// Chat Component
const chatComponent = {
    template: ` <div class="chat-box">

                </div>`,
    props: ['content']
}

// Users Component
const usersComponent = {
    template: ` <div class="user-list">

                </div>`,
    props: ['users']
}


const app = new Vue({
    el: '#chat-app',
    data: {
        loggedIn: false,
        userName: '',
        users: [],
        message: '',
        messages: []
    },
    methods: {
        joinUser: function () {

        },
        sendMessage: function () {

        }
    },
    components: {
        'users-component': usersComponent,
        'chat-component': chatComponent
    }
})


// Client Side Socket Events