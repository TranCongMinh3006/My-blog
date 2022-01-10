<template>
    <div class="header clearfix">
        <el-row :gutter="10" class="header-row">
            <el-col :md="5" :sm="6" :xs="24" class="icon-fold-desktop">
                <div style="display: flex; align-items: center; height: 36px">
                    <a class="toggle-sidebar" @click="toggleSidebar">{{ textToggleSidebar }}</a>
                </div>
            </el-col>
            <el-col :md="19" :sm="18" :xs="24" class="info-wrapper">
                <div style="display: flex; align-items: center; justify-content: flex-end">
                    <div class="user-info">
                        <span>{{name}}</span>
                        <span>でログイン中</span>
                    </div>
                    <div class="wrap-btn">
                        <el-button class="btn-change-password" @click="showChangePassword">パスワード変更</el-button>
                        <el-button class="btn-logout" @click="confirmLogout">ログアウト</el-button>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Header",
    };
</script>

<style scoped lang="scss">

    .header {
        color: white;
        background-color: rgb(54, 71, 79);;
        padding: 10px 20px;

        .toggle-sidebar {
            text-decoration: underline;
            font-weight: 500;
            cursor: pointer;
        }

        .user-info {
            margin-right: 24px;
            font-size: 1.2rem;
            font-weight: bold;
            display: flex;
            align-items: center;
            @media screen and (max-width: 992px) {
                font-size: 14px;
                margin-right: 16px;
            }
        }
        .user-info span:first-child {
            margin-right: 24px;
            @media screen and (max-width: 992px) {
                margin-right: 16px;
            }
        }
        .wrap-btn {
            display: flex;
            align-items: center;
        }

        .el-button {
            color: white;
            float: right;
            padding: 8px 30px;
            border-radius: 10px;
            font-weight: bold;
            margin-left: 15px;
        }

        .btn-logout , .btn-change-password{
            background-color: #1FA9D8;
            border-radius: 5px;
            border: solid 1px #1FA9D8;
            margin: 2px !important;
        }

        @media screen and (max-width: 767px) {
            .header-row {
                display: flex;
                align-items: center;
            }
            .info-wrapper {
                display: flex;
                flex-flow: column-reverse;
                align-items: center;

                button, div {
                    margin: 0 0 10px 0;
                }
            }
        }
    }
</style>
