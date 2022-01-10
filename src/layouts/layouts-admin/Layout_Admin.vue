<template>
    <el-container direction="vertical" v-loading="isLoading">
      <!-- <Header @toggle-sidebar="toggleSidebar" :textToggleSidebar="textToggleSidebar"></Header> -->

      <el-container >
            <!-- <Sidebar @check-show-sidebar="checkShowSidebar" v-if="showSideBar"></Sidebar> -->
            <el-main >
                <!-- customize content here -->
                <transition name="fade" mode="out-in">
                    hello
                    <router-view>
                        <!--Content goes here-->
                    </router-view>
                </transition>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import Header from "./Header.vue";
    // import Sidebar from "./Sidebar.vue";


    export default {
        name: "Layout",
        data() {
            return {
                showSideBar: screen.width >= 768,
                isLoading: false,
                textToggleSidebar: screen.width >= 768 ? "メニューを閉じる" : "メニューを表示",
            }
        },
        components: {
            Header,
            // Sidebar
        },
        mounted() {
            this.checkShowSidebar();
        },
        methods: {
            checkShowSidebar() {
                this.showSideBar = screen.width >= 768;
            },
            toggleSidebar() {
                this.showSideBar = !this.showSideBar;
                this.textToggleSidebar = this.showSideBar ? "メニューを閉じる" : "メニューを表示";
            },
        }
    };
</script>

<style scoped lang="scss">
</style>
