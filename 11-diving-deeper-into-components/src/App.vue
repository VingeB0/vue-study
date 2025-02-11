<template>
  <div>
    <TheHeader/>
    <div>
      <button @click="setActiveComponent('active-goals')">active goals</button>
      <button @click="setActiveComponent('manage-goals')">manage goals</button>
    </div>
<!--    <ActiveGoals v-if="selectedComponent === 'active-goals'"/>-->
<!--    <ManageGoals v-if="selectedComponent === 'manage-goals'"/>-->
    <keep-alive>
      <component :is="selectedComponent" />
    </keep-alive>
    <BadgeList/>
    <UserInfo
        :full-name="activeUser.name"
        :info-text="activeUser.description"
        :role="activeUser.role"
    ></UserInfo>
    <CourseGoal #default="slotProps">
<!--      <template #default="{ item }">-->
<!--      <template #default="slotProps">-->
        <h2>{{ slotProps.item }}</h2>
        <p>{{ slotProps.anotherprop }}</p>
<!--      </template>-->
    </CourseGoal>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import BadgeList from './components/BadgeList.vue'
import UserInfo from './components/UserInfo.vue'
import CourseGoal from './components/CourseGoal.vue'
import ActiveGoals from './components/ActiveGoals.vue'
import ManageGoals from './components/ManageGoals.vue'

export default {
  components: {
    BadgeList,
    UserInfo,
    TheHeader,
    CourseGoal,
    ManageGoals,
    ActiveGoals,
  },
  data() {
    return {
      selectedComponent: 'active-goals',
      activeUser: {
        name: 'Alex Don',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setActiveComponent(component) {
      this.selectedComponent = component;
    },
  }
};
</script>

<style scoped>
h2 {
  color: red;
}
p{
  color: brown;
}
</style>