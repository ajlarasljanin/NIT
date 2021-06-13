<template>
  <div class="columns w3-container w3-row-padding">
    <div class="w3-quarter w3-container firstCol">
      <the-image
        :url1="source"
        :height="20"
        :width="30"
        id="logo-footer"
        style="margin-left:[window.width>1100 ? 700px : 30px]"
      >
      </the-image>
    </div>
    <div class="w3-quarter icons2">
      <b>Posetite nas i na društvenim mrežama!</b>
      <ul>
        <li>
            <a href="http://twitter.com/CenterNit">
                <i class="fab fa-twitter icon twitter" 
                data-toggle="popover"
                title="Twitter/CenterNit"
                >
                
            </i>
        </a>
        </li>
        <li>
            <a href="https://www.facebook.com/centar.nit/">
                <i class="fab  fa-facebook-square icon facebook" 
                data-toggle="popover"
                title="Facebook/CenterNit"
                >                
            </i>
        </a>
        </li>
        <li>
            <a href="https://www.instagram.com/nit.center/">
                <i class="fab fa-instagram icon instagram" 
                data-toggle="popover"
                title="Instagram/CenterNit"
                >                
            </i>
        </a>
        </li>
        <li>
            <a href="https://www.linkedin.com/company/center-nit/">
                <i class="fab  fa-linkedin icon linkedin" 
                data-toggle="popover"
                title="Linkedin/CenterNit"
                >                
            </i>
        </a>
        </li>
      </ul>

    </div>
    <div class="w3-quarter firstCol">
      <i><b>Eksterni linkovi</b></i><br/>
      <p><ul>
        <li popover="Regionalni inovacioni Start-up centar Novi Pazar"><a href="https://riscnovipazar.rs/">RISC Novi Pazar</a></li>
        <li><a href="http://seda.org.rs/">SEDA - Regionalna Razvojna Agencija Sandžaka</a></li>
        
      </ul>
      </p>
    </div>
    <div class="w3-quarter fourth">
      <h1>
        <b>Budite u toku, pratite nas!</b>
      </h1>
      <div class="subscribe">
        <input type="email" v-model="subscriber"/>
        <the-button :text="text" :width="170" :height="35" @click.prevent="addNewSubscriber"></the-button>
      </div>
    </div>
  </div>
  <div class="bottom">
    <p class="text-center text-white" style="margin-top:10px;">
      ©<b> Centar NIT </b>All Rights Reserved
    </p>
  </div>
</template>
<script>
import TheButton from "./TheButton.vue";
import TheImage from "./TheImage.vue";

export default {
  components: {
    TheButton,
    TheImage,
  },
  data() {
    return {
      text: "Prijavite se",
      color: "#4f46e5",
      source: require("../../assets/klaster-logo-final-1.png"),
      subscriber : '',
    };
  },
  methods: {
    addNewSubscriber(){
      alert("Uspesno ste se prijavili za naš newsletter");
    }
  },
  mounted() {},
};
</script>
<style scoped>
.columns {
  background-color: #f4f7fa;
}
.w3-quarter {
  display: block;
  margin: auto;
  padding-top: 70px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 13px;
}

.firstCol {
  width: 20%;
}

.icons2 ul  {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: auto;
  list-style-type: none;
}

.firstCol i b{
  line-height: 2;
}

.firstCol ul  {
  display:flex;
  flex-direction: column;
  gap: 1rem;
  margin: auto;
  list-style-type: none;
  line-height: 0.5;
}
.icon {
    color: black;
    border-radius: 15%;
    transition: 0.3S ease-out;
    font-size: 40px;

}

.instagram:hover {
    background-image: linear-gradient(to bottom right, #515BD4, #8134AF, #DD2A7B, #FEDA77, #F58529);
    transition: 0.3S ease-in;
    color: white;
}

.twitter:hover {
    color: white;
    transition: 0.3S ease-in;
    background-color:  #1DA1F2;
}

.facebook:hover {
    color:#4267B2;
    background-color:white;
    transition: 0.3s ease-in;
}

.linkedin:hover {
    background-color: white;
    transition: 0.3S ease-in;
    color:  #2867B2;
}




h1 {
  font-size: 17px;
}

.bottom {
  width: 100%;
  position: absolute;
  left: 0;
  background-color: #064F98;
  box-shadow: 0px 2px 15px rgb(0 0 0 / 10%);
  padding: 8px;
}

.bottom p {
  color: white;
  text-align: center;
  padding: 0.5%;
}

.fourth {
  width: 30%;
}
.fourth input {
  border-radius: 5px;
  border: 1px solid;
  outline: none;
  width: 80%;
  height: 35px;
  margin-right: 30px;
}

.subscribe {
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
}

@media screen and (max-width: 1440px) {
  .subscribe {
    flex-direction: column;
  }
  
}

@media screen and (max-width: 1100px) {
  .w3-quarter {
    width: 50%;
  }
  .firstCol {
    width: 45%;
  }
  h1 {
    font-size: 15px;
  }

  .instagram {
    background-image: linear-gradient(to bottom right, #515BD4, #8134AF, #DD2A7B, #FEDA77, #F58529);
    color: white;
}

.twitter {
    color: white;
    background-color:  #1DA1F2;
}

.facebook {
    color:#4267B2;
    background-color:white;
}

.linkedin {
    background-color: white;
    color:  #2867B2;
}
  .subscribe {
    display: flex;
    flex-direction: column;
  }
}

@media screen and (max-width: 601px) {
  #logo-footer {
    padding-left: 25%;
  }
  .fourth {
    width: 100%;
  }

  input {
    width: 100%;
    max-width: 570px;
  }

  .w3-quarter {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    width: 100%;
    padding: auto;
    min-width: 296px;
  }
  .subscribe {
    width: 100%;
    padding: auto 20%;
  }
}
</style>
