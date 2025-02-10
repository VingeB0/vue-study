const app = Vue.createApp({
  data() {
    return {
      goals: [],
      goal: '',
    };
  },
  // computed: {
  //   goalCount() {
  //     return this.goals.length;
  //   }
  // },
  methods: {
    removeGoal(index) {
        this.goals.splice(index, 1);
      console.log(this.goals)
    },
    addGoal() {
      if(this.goal) {
        this.goals.push(this.goal);
        this.goal = '';
      }
      console.log(this.goals)
    }
  }
});

app.mount('#user-goals');
