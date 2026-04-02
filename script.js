// Troca de Abas
function mudarAba(id) {
    document.querySelectorAll('.aba').forEach(a => a.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

// Lógica do Fórum (Simulação de tempo real)
function postarNoForum() {
    const msg = document.getElementById('msg-forum').value;
    if (msg.trim() === "") return;

    const lista = document.getElementById('lista-mensagens');
    const novoPost = document.createElement('div');
    novoPost.className = 'post';
    novoPost.innerHTML = `<strong>@Você:</strong> ${msg}`;
    
    lista.appendChild(novoPost);
    document.getElementById('msg-forum').value = "";
    lista.scrollTop = lista.scrollHeight;
}

// Mural de Ideias com Votação
function postarIdeia() {
    const texto = document.getElementById('nova-ideia').value;
    const lista = document.getElementById('lista-ideias');
    
    const card = document.createElement('div');
    card.className = 'post glass';
    card.style.marginBottom = "15px";
    card.innerHTML = `
        <p>${texto}</p>
        <button onclick="this.innerText = 'Votado! ✅'" style="margin-top:10px; background:#7c3aed; border-radius:8px; padding:5px 10px; border:none; color:white; cursor:pointer;">Apoiar esta ideia</button>
    `;
    lista.appendChild(card);
    document.getElementById('nova-ideia').value = "";
}

// Contador de Emoções
let votosEmojis = { feliz: 0, triste: 0, bravo: 0, ansioso: 0 };

function contarEmoji(tipo) {
    votosEmojis[tipo]++;
    document.getElementById(`count-${tipo}`).innerText = votosEmojis[tipo];
    
    // Calcula o maior
    let maior = Object.keys(votosEmojis).reduce((a, b) => votosEmojis[a] > votosEmojis[b] ? a : b);
    document.getElementById('humor-dominante').innerText = `Destaque: A maioria dos alunos está se sentindo ${maior}!`;
}

function enviarFeedback() {
    alert("Obrigado! Sua opinião sobre a escola foi enviada para a coordenação.");
    document.getElementById('feedback-texto').value = "";
}
