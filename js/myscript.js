const { createApp } = Vue;

createApp ({
    data() {
        return {
            message: 'Hello Vue!',
            image: 'img/vue.gif',
            containerClasses: 'text-center p-5',
            titleClasses: 'text-success fw-bold'
        }
    }
}) .mount('#app');