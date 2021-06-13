<template>
    <div class="leftNav">
        <div class="leftNavUser" @mouseover="(() => state=!state)()" @mouseout="(() => state=!state)()">
            <img :src="user.img"><br>
            <b>{{user.name}}</b>
        </div>
        <div class="lists">
            <panel-menu :model="menuItems" />
        </div>
    </div>
</template>
<script>
import PanelMenu from 'primevue/panelmenu';
export default {
    components: {
        PanelMenu
    },
    data() {
        return {
            user: {
                img: require("../../../assets/team-images/images.jpg"),
                name: "M T",
            },
            menuItems: [
                {
                    label: 'News',
                    items: [
                        {
                            label: 'New',
                            icon:'pi pi-fw pi-plus',
                        },
                        {
                            label: 'Edit',
                            icon: "pi pi-fw pi-user-edit"
                            ,
                        },
                        {
                            label: 'Search',
                            icon: "pi pi-fw pi-search"
                        }
                    ]
                },
                {
                    label: 'Courses',
                    items: [
                        {
                            label: 'All Courses',
                            icon: "fad fa-graduation-cap",
                        },
                        {
                            label: "Add new course",
                            icon: "pi pi-fw pi-plus"
                        }
                    ],
                },
                {
                    label: 'Blogs',
                    items: [
                        {
                            label: 'New',
                            icon:'pi pi-fw pi-plus',
                            adminPanelState: "newBlog"
                        },
                        {
                            label: 'Search',
                            icon: "pi pi-fw pi-search"
                        },
                    ]
                }
            ]
        }
    },
}
</script>
<style>
    .leftNav {
        height: 100%;
        width: 180px;
        min-height: 1000px;
        background-color: white;
        border-right: 1px solid rgb(178, 198, 209);
        padding-top: 30px;
        text-align: center;
    }

    .leftNav .leftNavUser img {
        width:100px;
    }

    .leftNavUser {
        height: 110px;
        width: 100%;
        border: 1px solid rgb(194, 197, 201);
        padding-top: 10px;
    }

    .leftNavUser img{
        border-radius: 100%;
        width: 70px;
    }
</style>