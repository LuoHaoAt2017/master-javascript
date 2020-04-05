function vue() {
    new Vue({
        el: '#app',
        data() {
            return {
                message: 'Hello Vue'
            }
        },
        methods: {
            handleClick() {
                // 为什么通过this就可以访问到message?
                console.log(this.message);
            }
        }
    });
}