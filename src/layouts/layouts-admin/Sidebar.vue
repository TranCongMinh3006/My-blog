<template>
    <el-aside id="sidebar">
        <el-menu :router="true"
                 :default-active="activeLink"
                 class="wrap-menu"
                 :default-openeds="arrayIndexDefaultOpenMenu"
        >
            <el-menu-item
                    class="menu-item-home"
                    index="home"
                    @click="checkShowSidebar"
                    key="home">HOME
            </el-menu-item>
            <el-submenu index="1">
                <template slot="title">
                    <div class="menu-title" @click="rotateIcon(1)">
                        お薬手帳メニュー
                        <em class="icon-up-down">
                            <i :style="{transform: isOpen1 ? 'rotate(180deg)' : 'rotate(0deg)'}" class="glyphicon glyphicon-chevron-up"></i>
                        </em>
                    </div>
                </template>
                <el-menu-item-group>
                    <el-menu-item
                            @click="checkShowSidebar"
                            index="health-records"
                            key="health-records">お薬手帳
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu v-has-any-role="[SYSTEM_ADMIN, COMPANY_ADMIN]" index="2">
                <template slot="title">
                    <div class="menu-title" @click="rotateIcon(2)">
                        管理メニュー
                        <em class="icon-up-down">
                            <i :style="{transform: isOpen2 ? 'rotate(180deg)' : 'rotate(0deg)'}" class="glyphicon glyphicon-chevron-up"></i>
                        </em>
                    </div>
                </template>
                <el-menu-item-group>

                    <el-menu-item
                        @click="checkShowSidebar"
                        index="company-admin"
                        key="company-admin"
                        v-has-any-role="[SYSTEM_ADMIN, COMPANY_ADMIN]">管理者アカウント
                    </el-menu-item>

                </el-menu-item-group>
            </el-submenu>
            <el-submenu v-has-any-role="[SYSTEM_ADMIN]" index="3">
                <template slot="title">
                    <div class="menu-title" @click="rotateIcon(3)">
                        システム管理メニュー
                        <em class="icon-up-down">
                            <i :style="{transform: isOpen3 ? 'rotate(180deg)' : 'rotate(0deg)'}" class="glyphicon glyphicon-chevron-up"></i>
                        </em>
                    </div>
                </template>
                <el-menu-item-group>
                    <el-menu-item
                        @click="checkShowSidebar"
                        index="company"
                        key="company" v-has-any-role="[SYSTEM_ADMIN]">
                        会社設定
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </el-aside>
</template>
<script>
    export default {
        name: "Sidebar",
        components: {},
    }
</script>

<style lang="scss" scoped>
    $main-color: #666666;

    #sidebar {
        width: 250px !important;
        min-height: 900px;
        background-color: white;
        border: 1px solid #e6e6e6;

        @media screen and (max-width: $breakpoints-sm) {

            width: 100% !important;
        }
        .wrap-menu{
            margin-top: 32px !important;
        }
        .menu-item-home{
            margin-bottom: 16px;
            font-size: 24px;
            font-weight: bold;
            letter-spacing: 0px;
        }
        .el-submenu {
            margin-bottom: 22px;
        }

        .el-submenu__icon-arrow{
            right: 14px;
        }
        .el-menu-item.is-active{
            color: #55595C;
            background-color: #f0f0f0;
            border-right: 4px solid rgb(242, 97, 97);
        }
        .menu-title{
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            padding: 0 12px;
        }
        /deep/ .el-icon-arrow-down{
            display: none !important;
        }

        .glyphicon-chevron-up{
            transition: transform 0.2s linear;
        }

    }

</style>
