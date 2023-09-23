const api ={
    urlbase: "https://viacep.com.br/ws",
    async get(Cep){
            const fetchdata = await fetch(`${this.urlbase}/${Cep}/json`);
            const response = await fetchdata.json();
            console.log(response)
            return response
    }
}


export default api
