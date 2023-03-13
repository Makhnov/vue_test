<template>
	<div class="card border-dark mb-3">
        <h2 class="list-group-item">{{leNom}} {{premiumData ? '(Ami premium)' : '(Ami nul)'}}</h2>
            <div class="card-body text-dark">
			<button @click="toggleDetails" type="button" class="btn btn-dark mb-1">{{detailsVisibles ? 'Masquer':'Voir'}}</button>
            <button @click="togglePremium" class="btn btn-danger">Premium</button>
            <ul v-if="detailsVisibles" class="list-group list-group-flush">
			<li class="list-group-item">{{leMail}}</li>
			<li class="list-group-item">{{lePhone}}</li>                          
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
        data(){
            return{
                detailsVisibles: false,
                premiumData: this.premium,
            }
        },
        props: {
            leNom: {
                type: String,
                required: true,
            },
            lePhone: {
                type: String,
                required: true,
            },
            leMail: {
                type: String,
                required: true,
            },
            premium: {
                type: Boolean,
                required: false,
                default: false,
            }
        },
        methods:{
            toggleDetails() {
                this.detailsVisibles = !this.detailsVisibles;
            },
            togglePremium() {
                this.premiumData = !this.premiumData;
            },

        },
	}
</script>
