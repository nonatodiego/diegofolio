const AboutPage = () => {
  return (
    <>
      <h3>Sobre mim</h3>
      <br/><br/>
      <p>
      Meu nome é Diego Nonato, tenho 26 anos e sou natural do Rio de Janeiro. Atualmente, sou estudante do segundo período do curso de Sistemas para Internet na PUC Minas EAD, onde estou aprendendo a criar soluções inovadoras para a internet. Meu objetivo é ser desenvolvedor frontend para poder trabalhar em projetos que tenham impacto na vida das pessoas e que possam mudar o mundo para melhor
A área de desenvolvimento frontend tem me fascinado desde que comecei a estudar programação. A possibilidade de criar interfaces amigáveis e intuitivas que facilitem a vida das pessoas é o que mais me motiva nessa área. Além disso, acredito que o desenvolvimento frontend é uma das áreas mais dinâmicas e desafiadoras da programação, o que me impulsiona a sempre buscar novas soluções e aprimorar minhas habilidades
      </p> <br/>
      <p>A área de desenvolvimento frontend tem me fascinado desde que comecei a estudar programação. A possibilidade de criar interfaces amigáveis e intuitivas que facilitem a vida das pessoas é o que mais me motiva nessa área. Além disso, acredito que o desenvolvimento frontend é uma das áreas mais dinâmicas e desafiadoras da programação, o que me impulsiona a sempre buscar novas soluções e aprimorar minhas habilidades

</p>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
