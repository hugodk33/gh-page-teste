import React from "react";
import "./App.css"; // Crie estilos CSS conforme necessário

function App() {
  return (
    <div className="App">
      <header>
        <h1>Peter Parker</h1>
        <p>Fotógrafo | Super-Herói | Estudante</p>
        <p>Nova York, NY | peter.parker@dailybugle.com | (212) 555-0143</p>
      </header>

      <section className="summary">
        <h2>Resumo</h2>
        <p>
          Fotógrafo profissional e estudante de ciências com habilidades
          extraordinárias em combate e agilidade. Conhecido por capturar fotos
          exclusivas do Homem-Aranha para o jornal <em>Daily Bugle</em>.
        </p>
      </section>

      <section className="experience">
        <h2>Experiência Profissional</h2>
        <div>
          <h3>Fotógrafo Freelance</h3>
          <p><strong>Daily Bugle</strong>, Nova York, NY</p>
          <p><em>2015 - Presente</em></p>
          <ul>
            <li>
              Captura de imagens exclusivas e de alta qualidade de eventos e
              aparições do Homem-Aranha, mesmo em locais difíceis de alcançar.
            </li>
            <li>
              Colaboração com a equipe de redação para reportagens de destaque
              sobre criminalidade e segurança pública.
            </li>
          </ul>
        </div>
        <div>
          <h3>Estagiário de Pesquisa</h3>
          <p><strong>OsCorp Industries</strong>, Nova York, NY</p>
          <p><em>2014 - 2015</em></p>
          <ul>
            <li>Auxiliou em pesquisas científicas no laboratório de biotecnologia.</li>
            <li>
              Participou de estudos experimentais relacionados a modificações
              genéticas e tecnologias avançadas.
            </li>
          </ul>
        </div>
      </section>

      <section className="education">
        <h2>Educação</h2>
        <div>
          <p><strong>Universidade Empire State</strong></p>
          <p><em>Bacharel em Ciências, Biotecnologia</em></p>
          <p>2014 - 2018</p>
        </div>
      </section>

      <section className="skills">
        <h2>Habilidades</h2>
        <ul>
          <li>Fotografia e edição de imagens</li>
          <li>Ciências e pesquisa biotecnológica</li>
          <li>Força sobre-humana, agilidade e reflexos avançados</li>
          <li>Sentido aranha para detectar perigos</li>
          <li>Combate corpo a corpo e acrobacias aéreas</li>
        </ul>
      </section>

      <section className="certifications">
        <h2>Certificações</h2>
        <ul>
          <li>Primeiros Socorros e Suporte Básico de Vida (2019)</li>
          <li>Curso Avançado de Fotografia (2017)</li>
        </ul>
      </section>

      <section className="volunteer">
        <h2>Voluntariado</h2>
        <div>
          <h3>Ajuda Comunitária</h3>
          <p><strong>Centro Comunitário de Queens</strong></p>
          <p>Atividades de apoio a jovens e idosos, segurança local e resolução de conflitos.</p>
        </div>
      </section>

      <footer>
        <p>
          Esta é uma página fictícia baseada no personagem Homem-Aranha. Direitos
          autorais pertencem à Marvel Comics.
        </p>
      </footer>
    </div>
  );
}

export default App;