function home(app) {
  app.innerHTML = `
  <div class="tela tela-inicio">

    <header class="app-header">
      <span class="icone-placeholder" aria-hidden="true"></span>
      <span class="app-header__titulo">Radar de Promoções</span>
    </header>

    <main class="inicio-conteudo">
      <h1 class="inicio-pergunta">O que você quer comprar mais barato?</h1>

      <form class="busca-form" role="search">
        <span class="icone-placeholder icone-placeholder--sm" aria-hidden="true"></span>
        <input
          type="search"
          class="busca-input"
          placeholder="Produto ou marca"
          aria-label="Produto ou marca"
        />
        <button type="submit" class="busca-botao" aria-label="Buscar">
          <span class="icone-placeholder icone-placeholder--sm icone-placeholder--claro" aria-hidden="true"></span>
        </button>
      </form>

      <p class="busca-legenda">
        Preços da semana de 10 a 16 de agosto, enviados por quem está no mercado.
      </p>

      <section class="categorias">
        <h2 class="categorias-titulo">Categorias</h2>
        <div class="categorias-grade">
          <button type="button" class="categoria-item">Mercearia</button>
          <button type="button" class="categoria-item">Carnes</button>
          <button type="button" class="categoria-item">Hortifrúti</button>
          <button type="button" class="categoria-item">Bebidas</button>
          <button type="button" class="categoria-item">Limpeza</button>
          <button type="button" class="categoria-item">Higiene</button>
        </div>
      </section>
    </main>

    <footer class="inicio-rodape">
      <span class="inicio-rodape__texto">Viu uma promoção no mercado?</span>
      <button type="button" class="botao botao--secundario">Entrar</button>
    </footer>

    <nav class="tab-bar" aria-label="Navegação principal">
      <a href="#home" class="tab-bar__item tab-bar__item--ativo">
        <span class="icone-placeholder icone-placeholder--sm" aria-hidden="true"></span>
        <span class="tab-bar__rotulo">Buscar</span>
      </a>
      <a href="#mapa" class="tab-bar__item">
        <span class="icone-placeholder icone-placeholder--sm" aria-hidden="true"></span>
        <span class="tab-bar__rotulo">Mapa</span>
      </a>
      <a href="#enviar" class="tab-bar__item">
        <span class="icone-placeholder icone-placeholder--sm" aria-hidden="true"></span>
        <span class="tab-bar__rotulo">Enviar</span>
      </a>
      <a href="#favoritos" class="tab-bar__item">
        <span class="icone-placeholder icone-placeholder--sm" aria-hidden="true"></span>
        <span class="tab-bar__rotulo">Favoritos</span>
      </a>
      <a href="#conta" class="tab-bar__item">
        <span class="icone-placeholder icone-placeholder--sm" aria-hidden="true"></span>
        <span class="tab-bar__rotulo">Conta</span>
      </a>
    </nav>

  </div>
  `;
}

export default {
  url: "#home",
  label: "Início",
  pagina: home,
};
