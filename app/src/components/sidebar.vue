<template>
    <div class="sidebar">
        <p id="home">
            My Vue Project
        </p>
        <div id="sidebar-items">
            <router-link id="to-do-list-link" to="/todo">
            To Do List
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class sidebar extends Vue {

};
</script>

<style>

#to-do-list-link {
    text-decoration: none !important;

}
.sidebar {
    margin: 0;
    padding: 0;
    width: 200px;
    background-color: #f1f1f1;
    position: fixed;
    height: 100%;
    overflow: auto;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}

.sidebar #home {
    display: block;
    color: black;
    padding-bottom: 16px;
    text-decoration: none;
    font-size: 18px;
    text-align: center;

}

.sidebar #sidebar-items {
    display: block;
    color: black;
    text-decoration:none;
    padding-left: 16px;

}
div.content {
  margin-left: 200px;
  padding: 1px 16px;
  height: 1000px;
}

</style>