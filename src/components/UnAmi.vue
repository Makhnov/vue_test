<template>
	<div class="card border-dark mb-3">
        <h2 class="list-group-item">{{leNom}} {{premium ? '(Ami premium)' : '(Ami nul)'}}</h2>
            <div class="card-body text-dark">
			<button @click="toggleDetails" type="button" class="btn btn-dark m-1">{{detailsVisibles ? 'Masquer':'Voir'}}</button>
            <button @click="togglePremium" class="btn btn-success m-1">{{premium ? 'Downgrade' : 'Upgrade'}}</button>
            <button @click="$emit('delete-ami', this.id)" type="button" class="btn btn-danger m-1">Supprimer</button>
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
                //premiumData: this.premium,
            }
        },
        props: {
            id: {
                type: String,
                required: true,
            },
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
                this.$emit('toggle_premium', this.id);
                this.premiumData = !this.premiumData;
            },

        },
	}
</script>
