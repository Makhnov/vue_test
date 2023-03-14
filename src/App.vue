<template>
    <!-- <div class="container"> -->
      <h1 class="text-center">Les Amis</h1>
      <ul class="list-group">
        <new-ami @add-ami="ajouterAmi"></new-ami>
        <un-ami v-for="ami in lesAmis" 
            :key="ami.id"
            :id="ami.id" 
            :leNom="ami.name" 
            :lePhone="ami.phone" 
            :leMail="ami.email" 
            :premium="ami.premium"
            @toggle_premium="togglePremium"
            @delete-ami="supprimerAmi"
        ></un-ami>
        </ul>
    <!-- </div> -->
  </template>
  
<script>
export default{
    data(){
        return {
            lesAmis: [
                {
                    id: 'lasticot',
                    name: 'COCO L ASTICOT',
                    phone: '01234 5678 991',
                    email: 'coco@lasticot.com',
                },
                {
                    id: 'janine',
                    name: 'Janine DeLavega',
                    phone: '09876 543 221',
                    email: 'janine@delavega.com',
                },
                {
                    id:'jojo',
                    name:"jojoLeBarjo",
                    phone:'123 12346 24',
                    email:'jojo@barjo.com',
                },
                {
                    id:'kimonoSurUnFrigo',
                    name:"Steven Seagal",
                    phone:'+338765477',
                    email:'steven@seagal.com',
                },
            ],
        }
    },
    methods:{
    togglePremium(str){
        const amis = this.lesAmis;
        const ami = amis.find(ami => ami.id === str);
        console.log(ami);
        if (ami) ami.premium = !ami.premium;
    },
    ajouterAmi(name,phone,email){
      const newAmiContact = {
        id:new Date().toISOString(),
        name:name,
        phone:phone,
        email:email,
        premium:false,
      };
      console.log(this.lesAmis);
      this.lesAmis.push(newAmiContact);
    },
    supprimerAmi(str) {
        const amis = this.lesAmis;
        const vraisAmis = amis.filter(
            (amigo) => amigo.id !== str
        )
        console.log(vraisAmis);
        this.lesAmis = vraisAmis;
    }
  }
}
</script>
  
<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>