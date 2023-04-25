const {createApp} = Vue
let testoTodo = ''

createApp({
    data(){
        return{
            todos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                }
            ]
    
        }
       
    },
    methods: {


        creaTodo(){
            this.todos.push(
                {
                    text: this.testoTodo,
                    done: false
                }
            )
        },
        funzioneClick(elem, i){
            this.todos.splice(i, 1)
        }

    }
}).mount('#app')