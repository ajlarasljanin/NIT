<template>
  <div>
    <div class="dashboard">
      <nav :class="[barView ? 'navbarLight' : 'navbarDark']">
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
      </nav>
      <div class="content">
        <div class="sidebarLight">
          <div class="user sidebar-item">
            <img :src="user[0]" alt="user's Image" :class="[barView ? 'normalWidth' : 'lowerWidth']" ><br>
            <b style="align:center" v-if="barView">{{user[1]}}</b>bb
          </div>
          <div class="sidebar-item">
              <a href="#"><i class="fas fa-thumbtack"> <b v-if="barView" class="leftSpaces">Vesti</b></i></a>
          </div>
          <div class="sidebar-item">
              <a href="#"><i class="fas fa-graduation-cap"> <b v-if="barView" class="leftSpaces">Kursevi</b></i></a>
          </div>
          <div class="sidebar-item">
              <a href="#"><i class="far fa-clipboard"><b v-if="barView" class="leftSpaces">Evidencija</b></i></a>
          </div>
        </div>
        <div class="rightbar"> 
          
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TheButton from '../components/base/TheButton.vue';
export default {
  components: { 
    TheButton,
   },
  data() {
    return {
      barView : false,
      adminView : false,
      logOut:"Log Out",
      user: [
       require("../assets/team-images/dzemil_dupljak.png"),
       "Dzemil Dupljak"
      ]
    }
  },
  methods: {
    changeClassBarView(){
      // if (window.innerWidth>800)
      this.barView=!this.barView;
    },
    changeClassAdminView(){
      this.adminView=!this.adminView;
    }
  },
};
</script>
<style scoped>

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

.left-nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left-nav-content-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
  margin-top: 2%;
}    



.left-nav-content-item .fas{
  font-size: 20px;
}

.right-nav-content {
  display: flex;
  align-items: center;
}



.logo {
  height: 30px;
}

.content {
  display: flex;
  height: 90vh;
}

.sidebarLight {
  /* background-color: #333; */
  background-color: white;
  color: black;
  height: 100%;
  padding: 1rem  1.5rem;
  display: flex;
  flex-direction: column;
}

/* .sidebarDark {

} */

.sidebar-item {
  color: black;
  margin-bottom: 1rem;
  font-size: 20px;
  
}

.rightbar {
  width: 88%;
}

.normalWidth {
  width: 120px;
}

.lowerWidth  {
  width: 40px;
}
.leftSpaces {
margin-left: 1rem;
margin-right: 2rem;

}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  right: 0;
  background-color: #4366ac;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a:hover {background-color: #f1f1f1;}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}

.smaller {
  height: 150px;
  display: inline-block;
  width: 200px;
}
</style>