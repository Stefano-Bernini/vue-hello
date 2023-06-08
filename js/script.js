const {createApp} = Vue;

createApp({
    data(){
        return{
            message: 'Hello world',
            image: './img/grano.jpg'
        }
    }
}).mount('#app');