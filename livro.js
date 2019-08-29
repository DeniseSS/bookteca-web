window.onload= () =>{
 /*   let elementoBotao = document.querySelector('#cadastrar')
elementoBotao.addEventListener('click', (event)=>{
    event.preventDefault()
    console.log('Clicou no botão')
    let ladda=Ladda.create(elementoBotao)
    ladda.start()
    ladda.setProgress(0.2)
    let progressoAtual=0
    let interval=
    setInterval(()=>{
        ladda.setProgress(progressoAtual += 0.1)
        if(progressoAtual>=1){
            clearInterval(interval)
            ladda.stop()
        }
    }, 500)
})*/
let formularioLivro=$('#formLivro')
formularioLivro.validate({
    /*regras*/
    rules:{
        titulo:{
            required:true,
            minlength:3
        },
        subtitulo:{
            
            minlength:3
        },
        descricao:{
            required:true,
            minlength:3
        }
    },
    /*para cada parametro uma resposta referente a ele*/ 
    messages:{
        titulo:{
            required:'O titulo é obrigatório!',
            minlength:'O titulo é muito curto!'
        },

        subtitulo:{
            required:'O subtitulo é obrigatório!',
          minlength:'subtitulo muito curto!'
        },
        descricao:{
            required:'A descrição é obrigatória!',
            minlength:'descrição muito curta!'
        }
    },
    errorPlacement:function(error, element){
         element.parent().parent().find('.error').append(error).addClass('animated shake')//navegando para buscar a class

    }, 
    errorClass:'cor-do-erro',
    submitHandler: function(form){
        console.log(form)
        let formSerializado=$(form).serialize()
        console.log(formSerializado)
       /* fetch("http://localhost:8080/bookteca-api/src/teste.php").then(function(retorno){
            return retorno.json()
        }).then(function(json){
            alert(json)
        })*/
        fetch("http://localhost:8080/bookteca-api/src/inserirlivro.php",{
            method: "POST",
            body: formSerializado,
            headers:{
                'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'

            }
        })
    }
})

}