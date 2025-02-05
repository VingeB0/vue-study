const app = Vue.createApp({
    data() {
        return {
            courseGoalC: '<h1>Finish the course and learn React!</h1>',
            courseGoalA: 'Finish the course and learn Vue!',
            courseGoalB: 'Master Vue and build amazing apps!',
            vueLink: 'https://vuejs.org/'
        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA
            }
            return this.courseGoalB
        }
    }
})

app.mount('#user-goal')