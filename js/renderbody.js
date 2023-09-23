const info = document.getElementById('info')
const spinner = document.getElementById('spinner')
const render ={
    
    message :{
        notfound: "CEP não encontrado.",
        badrequest: "erro na requisição.",
    },

    CreateMessage(){
        const msg = document.createElement('div')
    },

    ShowInfo(icon,text){
        const label = document.createElement('label')
                label.classList.add('d-flex')
                label.classList.add('mb-2')
        const i = document.createElement('i')
                i.classList.add('bi')
                i.classList.add(icon)
                i.classList.add('pe-3')
        const p = document.createElement('p')
                p.innerText = text
        label.appendChild(i)
        
        label.appendChild(p)

        return label
    }
    ,

    InfoArea(value){
        // info.classList.toggle('showbodyinfo')
        // spinner.classList.toggle('spinner-border')

        
    }
}

export default render

{/* <label for="" class="d-flex">
                    <i class="bi bi-geo-alt-fill"></i>
                    <p>Jardim alegria</p>
                </label> */}