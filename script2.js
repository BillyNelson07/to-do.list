document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('form').addEventListener('submit', function(impedirSairSemEnviar){
        impedirSairSemEnviar.preventDefault();
       
        adicionarTarefa();
        this.reset();

        function adicionarTarefa(){

            const titulo = document.getElementById("titulo").value.trim();
            const descricao = document.getElementById("descricao").value.trim();
            if (titulo === "" || descricao === "") {
                alert("Por favor, preencha todos os campos.");
                return;
            }
            const tarefaEmSi = document.createElement("div");
            tarefaEmSi.className = "tarefaEmSi";
            tarefaEmSi.innerHTML = `
            <div class="tarefaEmSi">
                <p class="tituloDaTarefa">${titulo}</p>
                <textarea name="descricao" id="descricaoDaTarefa" rows="6" cols="25" readonly>${descricao}</textarea>
                <div class="botoesDeAcao">
                    <button class="botaoConcluir">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                        </svg>
                        Concluir</button>
                        <select name="selecaoStatus" id="menuSelecaoStatus">
                            <option value="pendente">Pendente</option>
                            <option value="em_andamento">Em Andamento</option>                       
                </div>
            </div>
            `;
            document.getElementById('areaTarefas').appendChild(tarefaEmSi);
            
            const botaoConcluir = tarefaEmSi.querySelector('.botaoConcluir');
            botaoConcluir.addEventListener('click', function() {
                document.getElementById('areaTarefas').removeChild(tarefaEmSi);
            })

         

        }

        
    });    
    
});