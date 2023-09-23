import regexcep from './regex.js'
import render from './renderbody.js'
import api from './buscacep.js'

const info = document.getElementById('content')
const spinner = document.getElementById('spinner')
const contentbody = document.getElementById('content')

const Search = {
    inputcep: document.getElementById('input'),
    ValidateCep(){
        this.inputcep.value = input.value.replace(/\D/g, "");
        return regexcep.test(this.inputcep.value)
    },
    setEvents(){
        this.inputcep.addEventListener('keyup',async (e)=>{
            const {value} = e.target
            if(value == '' && contentbody.classList.contains('showbodyinfo')){
                contentbody.innerHTML = ''
                contentbody.classList.remove('showbodyinfo')
            }else{
                const validate = this.ValidateCep()
                if(validate ){
                    const {bairro,cep,logradouro,localidade} = await api.get(this.inputcep.value)
                    contentbody.innerHTML = ''
                    if(bairro){
                        contentbody.classList.add('showbodyinfo')
                        const cepInfo = render.ShowInfo('bi-mailbox2-flag',cep)
                        const labelElement = render.ShowInfo('bi-geo-alt-fill',`${logradouro}, ${bairro}` ) 
                        const localidadeInfo = render.ShowInfo('bi-buildings', localidade)
                        contentbody.appendChild(labelElement)
                        contentbody.appendChild(cepInfo)
                        contentbody.appendChild(localidadeInfo)
                    }else{
                        contentbody.innerHTML = 'Cep nao encontrado'
                    }
                    
                }
            }
        })
    }

}

export default Search