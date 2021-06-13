<template>
    <div class="dashboard">
        <left-nav />
        <!-- <div class="leftNav">
            <div class="leftNavUser" @mouseover="(() => state=!state)()" @mouseout="(() => state=!state)()">
                <img :src="user.img"><br>
                <b>{{user.name}}</b>
           </div>
           <div class="lists">
               <panel-menu :model="menuItems" />
           </div>
       </div> -->
        <!-- <nav :class="[barView ? 'navbarLight' : 'navbarDark']">
        <div class="left-nav-content">
          <div class="left-nav-content-item">
            <router-link to="/"><i class="fas fa-home" style="margin-left:0rem"><b v-if="barView" class="leftSpaces">Visit Site</b></i></router-link>
            <i class="fas fa-bars" style="margin-left:2.5rem; cursor:pointer;" @click="changeClassBarView" ></i>
          </div>
        </div>
        <div class="right-nav-content dropdown" style="float:right;">
            <i class="fas fa-user" style="margin-right:2.5rem; border: none; cursor: pointer;">
              <b class="leftSpaces" v-if="innerWidth>600">Admin</b> </i>
            <div class="dropdown-content" style="margin-right : 2rem;">
              <div class="smaller" style="margin-right:25% ">
                <img src="../assets/userimages.png" style="border-radius: 100%; height:80px; width:80px; margin-left: 30%">
              </div>
              <div>
                <b> Ime i Prezime</b>
                <div style="display:flex;flex-direction:column">
                      <the-button :text="logOut" :color="54653"></the-button>
                      <the-button :width="250"  :text="sascd"></the-button>
                    </div>
              </div>
            </div>
         
          </div>
      </nav> -->
        <nav :class="[barViewLight ? 'navbarLight' : 'navbarDark']">
            <router-link to="/"><i class="fas fa-home" style="margin-left:0rem"><b v-if="barView" class="leftSpaces">Visit Site</b></i></router-link>
        </nav>f
    </div>
</template>
<script>
// import PanelMenu from 'primevue/panelmenu';
import LeftNav from '../components/sections/adminPanel/leftNav.vue';
export default {
    components: {
        // PanelMenu,
        LeftNav 
    },
  
         data() {
        return { 
            barViewLight: "true",
            user: {
                img: require("../assets/team-images/images.jpg"),
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
<style scoped>
    .dashboard {
        width: 100%;
        height: 100%;
        min-height: 1010px;
        background: linear-gradient(to bottom right, rgb(252, 252, 252), rgb(211, 238, 252));
    }


    
    .navbarLight {
        display: flex;
        justify-content: space-between;
        /* background-color: #4366ac; */
        background: linear-gradient(to  right, rgb(65, 82, 100),   #81a2e4) ;
        height: 4rem;
        padding: 20px 0px;
        color: white;
    }
    .navbarDark {
        display: flex;
        justify-content: space-between;
        background: linear-gradient(to  right,   #81a2e4, rgb(65, 82, 100));
        height: 4rem;
        padding: 20px 0px;
        color: white;
    }
</style>