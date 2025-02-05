const app = Vue.createApp({
    data() {
        return {
            BoxASelected: false,
            BoxBSelected: false,
            BoxCSelected: false,
        }
    },
    computed: {
        boxAClasses() {
            return {active: this.BoxASelected};
        },
        boxBClasses() {
            return {active: this.BoxBSelected};
        },
        boxCClasses() {
            return {active: this.BoxCSelected};
        }
    },
    methods: {
        selectBox(box) {
            if(box === 'A') {
                this.BoxASelected = !this.BoxASelected;
            }
            if(box === 'B') {
                this.BoxBSelected = !this.BoxBSelected;
            }
            if(box === 'C') {
                this.BoxCSelected = !this.BoxCSelected;
            }

        }
    }
})

app.mount('#styling');