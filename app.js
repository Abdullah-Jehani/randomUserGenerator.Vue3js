const app = Vue.createApp({
    data() {
        return {
            firstName: 'Abdullah' , 
            lastName: 'Jehani', 
            gender: 'male' , 
            email: 'JohnDoe@gmail.com' , 
            picture: 'https://randomuser.me/api/portraits/men/94.jpg' , 
        }
    },
    methods: {
        async getData() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()
            console.log(results)
            this.firstName = results[0].name.first , 
            this.lastName = results[0].name.last , 
            this.email = results[0].email , 
            this.gender = results[0].gender , 
            this.picture = results[0].picture.large
           
            // this.firstName = data[0].name.first
        }
    }
})
app.mount('#app');