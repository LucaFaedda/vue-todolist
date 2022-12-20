const {
    createApp
} = Vue

createApp({
    data(){
        return{

            daGuardare: [
                {
                    text: 'Mob 100',
                    done: false
                },
                {
                    text: 'Stranger Thinks',
                    done: false
                },
                {
                    text: 'No Time To Die',
                    done: false
                },
                {
                    text: 'Jurassic World: Domination',
                    done: false
                },
                {
                    text: 'Avatar 2',
                    done: false
                },
                {
                    text: 'Willow',
                    done: false
                },
            ]

        }
    },
    methods: {
        visto(index)
        {
            let fatto = this.daGuardare[index]
            if(fatto.done == true){
                fatto.done = false
            }
            else{
                fatto.done = true
            } 
            }
    },

}).mount('#app')