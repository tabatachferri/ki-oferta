import {mapaderotas} from './rotas/rotas.js'
import {navbar} from './navbar/navbar.js'

const app = document.getElementById("app")
navbar(mapaderotas)

function renderizarRotaAtual() {
  const hash = location.hash || "#home"
  const rota = mapaderotas.find(item => item.url === hash)

  if (rota) {
    rota.pagina(app)
  } else {
    // Hash desconhecido: cai para a página inicial
    mapaderotas[0].pagina(app)
  }
}

// Renderiza a página certa assim que a aplicação carrega
renderizarRotaAtual()

// E a cada troca de hash (clique em um link do menu, por exemplo)
window.addEventListener("hashchange", renderizarRotaAtual)
