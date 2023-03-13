<template>
    <!-- <div class="container"> -->
      <h1 class="text-center">Les Amis</h1>
      <ul class="list-group">
        <un-ami v-for="ami in lesAmis" :key="ami.id" :leNom="ami.name" :lePhone="ami.phone" :leMail="ami.email"></un-ami>
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