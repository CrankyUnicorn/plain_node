-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:33063
-- Generation Time: Jul 08, 2021 at 02:56 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `article_section`
--

CREATE TABLE `article_section` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `title` varchar(128) DEFAULT NULL,
  `subtitle` varchar(256) DEFAULT NULL,
  `content` varchar(60000) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `date_reg` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `article_section`
--

INSERT INTO `article_section` (`id`, `user_id`, `title`, `subtitle`, `content`, `image`, `date_reg`) VALUES
(1, 1, 'Desenvolvimento em Node.js', 'Desenvolvimento desta página - Parte 1 Proposta', '<p lang=\"pt-PT\" class=\"cun_blog_text_header\">\r\n    1) Modelagem de Negócios\r\n</p>\r\n<p lang=\"pt-PT\">\r\n    A finalidade do projecto consiste numa plataforma online para associar,\r\n    catalogar e explicar o funcionamento de outras páginas que serão alojadas\r\n    no mesmo servidor.\r\n</p>\r\n<p lang=\"pt-PT\">\r\n    O site deverá:\r\n</p>\r\n<ul>\r\n    <li>\r\n        <p>\r\n            Ter um <em>frontend </em>responsivo e<em> </em>dinâmico.\r\n        </p>\r\n    </li>\r\n    <li>\r\n        <p>\r\nTer um            <em>backoffice a fim de publicar artigos, exemplos, links</em>.\r\n        </p>\r\n    </li>\r\n    <li>\r\n        <p>\r\n            Englobar também exemplos em forma de <em>snippets </em>de código.\r\n        </p>\r\n    </li>\r\n    <li>\r\n        <p lang=\"pt-PT\">\r\n            Ter informação para demonstra o conhecimento adquirido em forma de\r\n            pequenos artigos.\r\n        </p>\r\n    </li>\r\n    <li>\r\n        <p>\r\nImplementar Verificação e Validação por email para o            <em>backoffice</em>.\r\n        </p>\r\n    </li>\r\n    <li>\r\n        <p>\r\n            Permitir que os clientes do site possam entrar em contacto através\r\n            de uma <em>form.</em>\r\n        </p>\r\n    </li>\r\n</ul>\r\n    <p lang=\"pt-PT\" class=\"cun_blog_text_header\">\r\n        2) Requisitos.\r\n    </p>\r\n<p lang=\"pt-PT\">\r\n    O sites deverá:\r\n</p>\r\n<ul>\r\n    <li>\r\n        <p lang=\"pt-PT\">\r\n            Implementar linguagens HTML5, CSS3, JS/ES6, SQL(MySql)\r\n        </p>\r\n    </li>\r\n    <li>\r\n        <p lang=\"pt-PT\">\r\n            Plataformas a aplicar no server: Node Js e PHP\r\n        </p>\r\n    </li>\r\n    <li>\r\n        <p lang=\"pt-PT\">\r\n            Livrarias passiveis de serem implementadas em paralelo: P5\r\n        </p>\r\n    </li>\r\n    <li>\r\n        <p lang=\"pt-PT\">\r\n            Disciplinas a implementar: AJAX\r\n        </p>\r\n    </li>\r\n    <li>\r\n        <p lang=\"pt-PT\">\r\n            Frameworks passiveis de serem implementadas em paralelo: VUE e\r\n            Express\r\n        </p>\r\n    </li>\r\n    <li>\r\n        <p lang=\"pt-PT\">\r\n            Deverá ser alojada num domínio online.\r\n\r\n        </p>\r\n    </li>\r\n</ul>\r\n    <p lang=\"pt-PT\" class=\"cun_blog_text_header\">\r\n        3) Análise e Design.\r\n    </p>\r\n    <p lang=\"pt-PT\">\r\n        Tópicos:\r\n    </p>\r\n<ul>\r\n    <li>\r\n        <p lang=\"pt-PT\">\r\n            Viabilidade do uso de tecnologias Node JS ao invés de PHP e a sua\r\n            correcta implementação.\r\n        </p>\r\n    </li>\r\n    <li>\r\n        <p lang=\"pt-PT\">\r\n            Uso de ES6 ao invés de estrutura rígidas e estáticas de HTML.\r\n        </p>\r\n    </li>\r\n    <li>\r\n        <p>\r\nDesenvolvimento de um <em>layout </em>fácil com um            <em>interface </em>intuitivo com o uso de VUE.\r\n        </p>\r\n    </li>\r\n    <li>\r\n        <p lang=\"pt-PT\">\r\n            Criação de uma página com interactividade acrescida.\r\n        </p>\r\n    </li>\r\n</ul>\r\n    <p lang=\"pt-PT\" class=\"cun_blog_text_header\">\r\n        4) Funcionalidades\r\n    </p>\r\n<p lang=\"pt-PT\">\r\n    O site deverá ter um demonstrar capacidade de:\r\n</p>\r\n<ul>\r\n    <ul>\r\n        <li>\r\n            <p lang=\"pt-PT\">\r\n                Ter registo e validação\r\n            </p>\r\n        </li>\r\n        <li>\r\n            <p lang=\"pt-PT\">\r\n                Usar metodologia AJAX para actualização de dados em client side\r\n            </p>\r\n        </li>\r\n        <li>\r\n            <p lang=\"pt-PT\">\r\n                Ter um sistema de sessão de cliente\r\n            </p>\r\n        </li>\r\n        <li>\r\n            <p lang=\"pt-PT\">\r\n                Acesso a uma base de dados\r\n            </p>\r\n        </li>\r\n        <li>\r\n            <p lang=\"pt-PT\">\r\n                Ter um backoffice para publicações\r\n            </p>\r\n        </li>\r\n    </ul>\r\n</ul>\r\n<p lang=\"pt-PT\">\r\n    Outras funcionalidades possíveis\r\n</p>\r\n<ul>\r\n    <ul>\r\n        <li>\r\n            <p lang=\"pt-PT\">\r\n                Fazer uso de persistência fora de sessões (cookies ou json)\r\n            </p>\r\n        </li>\r\n        <li>\r\n            <p lang=\"pt-PT\">\r\n                Usar sockets ao invés de http\r\n            </p>\r\n        </li>\r\n    </ul>\r\n</ul>', 'header_bg_05.jpg', '2021-06-11 16:02:14'),
(2, 1, 'O que é Node.js?', 'O que diferencia Node.js de outras linguagens de servidor similares.', '<p lang=\"pt-PT\" class=\"cun_blog_text_header\">\r\n    <strong>O que é Node.js?</strong>\r\n</p>\r\n<p lang=\"pt-PT\" class=\"cun_blog_text\">\r\n    Node.js é uma linguagem de programação que corre no lado do servidor.\r\n    Similar a linguagens como Java, Ruby, Pearl, PHP e Python a tarefa desta\r\n    linguagem é permitir processamento da informação no lado do utilizador.\r\n    Especialmente útil quando é necessário criar permissões a utilizadores\r\n    individualmente. Este acesso em norma é feito por <em>logins</em> que\r\n    requerem a designação do utilizador e a sua chave correspondente. Este tipo\r\n    de tecnologia também permite por conseguinte criar as ferramentas\r\nnecessárias para lojas online como o dos respetivos pagamentos    <em>online</em>.\r\n</p>\r\n<p lang=\"pt-PT\" class=\"cun_blog_text_header\">\r\n    <strong>Mas que é Node.js mesmo?</strong>\r\n</p>\r\n<p lang=\"pt-PT\" class=\"cun_blog_text\">\r\n    Node.js é um ambiente de execução de código em tempo real baseado no motor\r\n    de browser Chrome’s JavaScript Engine(V8). Node.js corre Javascript no\r\n    servidor com permissões e restrições ligeiramente diferentes do que\r\n    acontece nos browser. Este característica é uma benesse pois eliminamos a\r\n    necessidade de aprender ou utilizar uma linguagem extra para programar no\r\n    servidor.\r\n</p>\r\n<p lang=\"pt-PT\" class=\"cun_blog_text_header\">\r\n    <strong>Para que serve?</strong>\r\n</p>\r\n<p lang=\"pt-PT\" class=\"cun_blog_text\">\r\n    Node.js é usado para construir aplicações fáceis de serem estendidas e que\r\n    necessitam de muita interação, sendo que se baseia fortemente em\r\n    metodologia de eventos.\r\n</p>\r\n<p lang=\"pt-PT\" class=\"cun_blog_text_header\">\r\n    <strong>\r\n        Mas o que é a metodologia de eventos e como estes são processados?\r\n    </strong>\r\n</p>\r\n<p lang=\"pt-PT\" class=\"cun_blog_text\">\r\n    Eventos são divididos em categorias como por exemplo, carregar uma página\r\n    ou carregar num botão entre outros, a quando do evento o programa deverá\r\n    correr uma serie de linhas de códigos que são predefinidas para este\r\n    evento.\r\n</p>\r\n<p lang=\"pt-PT\" class=\"cun_blog_text_header\">\r\n    <strong>\r\n        Sim mas como é que funciona na realidade e qual é a diferença para\r\n        outras linguagens como PHP?\r\n    </strong>\r\n</p>\r\n<p lang=\"pt-PT\" class=\"cun_blog_text\">\r\n    Os tipos de eventos correm numa sequencia predefinida e em <em>loop</em>\r\n    enquanto o programa estiver a correr. Sempre que o programa entra num tipo\r\n    de evento vai procurar na lista de funções subscritas as funções que estão\r\n    subscritas a esse evento e corre uma a uma. Em linguagens como PHP isso não\r\n    acontece pelo menos no lado do servidor. Todos os pedidos são executados\r\n    pela máquina do cliente e preprocessados de forma que o PHP só tem de\r\n    executar os pedidos que lhe são feitos.\r\n</p>\r\n<p lang=\"pt-PT\" class=\"cun_blog_text_header\">\r\n    <strong>Mas qual é a vantagem do Node.js?</strong>\r\n</p>\r\n<p lang=\"pt-PT\" class=\"cun_blog_text\">\r\n    O Node.js tem um funcionamento bidirecional e assíncrono. Não quer dizer\r\n    que não possa ser limitado para ser unidirecional e síncrono mas é\r\n    importante vincar estas diferenças.\r\n</p>\r\n<p lang=\"pt-PT\" class=\"cun_blog_text_header\">\r\n    <strong>O que é bidirecionalidade?</strong>\r\n</p>\r\n<p lang=\"pt-PT\" class=\"cun_blog_text\">\r\n    A capacidade de ser bidirecional ao usar uma socket faz que o servidor e o\r\n    cliente comuniquem como se estivessem na mesma máquina mas claro com um\r\n    nível de restrição maior do que na máquina nativa. Este facto permite que\r\n    eventos sejam disputados no servidor como se fosse na máquina do cliente.\r\n    Este tipo de protocolo permite por exemplo <em>chatrooms</em> em tempo\r\n    real, jogos <em>multiplayer</em> ou qualquer outra aplicação que necessite\r\n    de comunicar com a máquina do cliente sem pedido prévio.\r\n</p>\r\n<p lang=\"pt-PT\" class=\"cun_blog_text_header\">\r\n    <strong>\r\n        Como se conjuga a comunicação bidirecional, eventos e assincrónidade?\r\n    </strong>\r\n</p>\r\n<p lang=\"pt-PT\" class=\"cun_blog_text\">\r\nA assincrónidade é extremamente útil porque as ligações de    <em>internet</em> tem em norma um atraso ou <em>ping</em>. Além de que o\r\n    processamento dos dados dos vários utilizadores não pode ser executado\r\n    instantaneamente ou simultaneamente pelo servidor. Por esse motivo o uso de\r\n    processamento assíncrona é uma mais valia. Enquanto o servidor espera pelo\r\n    processamento de informação de um cliente ou por outra máquina como por\r\n    exemplo uma base de dados este pode processar outros pedidos e processos.\r\n    Ao que quando estes estão prontos para serem devolvidos são devolvidos a\r\n    primeira oportunidade criando uma resposta e um consumo de recursos\r\n    computacionais mais eficaz.\r\n</p>\r\n<p lang=\"pt-PT\" class=\"cun_blog_text_header\">\r\n    <strong>Quais as diferenças mais notáveis entre Node.js e PHP?</strong>\r\n</p>\r\n<p lang=\"pt-PT\" class=\"cun_blog_text\">\r\n    Ao contrario de outras linguagens como o PHP, o Node.js tem\r\n    responsabilidades mais extensivas e um poder sobre o fluxo entre cliente e\r\n    servidor maior. Devido a sua natureza poderia dizer que Node.js comportasse\r\n    como um serviço enquanto PHP comportasse mais como um script. Claro que PHP\r\n    também é compilado mas só quando este é requerido.\r\n</p>\r\n<p lang=\"pt-PT\" class=\"cun_blog_text_header\">\r\n    <strong>Quais são os desvantagens do Node.js?</strong>\r\n</p>\r\n<p lang=\"pt-PT\" class=\"cun_blog_text\">\r\n    Ao contrario do PHP, Node.js é bastante complexo na sua configuração,\r\n    programação e funcionamento. Node.js tem um estrutura bastante rígida de\r\n    projecto sendo necessário a utilização de ficheiros de configuração.\r\n    Consequentemente necessita de descarregar módulos montados em cada servidor\r\n    antes de se poder compilar e executar a aplicação. Somando aos factos\r\n    anteriores, a metodologia de programação assíncrona torna a aprendizagem de\r\n    Node.js bastante mais difícil do que a maior parte das linguagens de\r\n    programação mais comuns.\r\n</p>\r\n<p lang=\"pt-PT\" class=\"cun_blog_text_header\">\r\n    <strong>\r\n        O que é um <em>Package Manger</em> e qual a sua relação com Node.js?\r\n    </strong>\r\n</p>\r\n<p lang=\"pt-PT\" class=\"cun_blog_text\">\r\n    <em>Package Manager</em>\r\n    , em especifico NPM, não é algo inerente somente ao Node.js, outras\r\n    linguagens para a web tem serviços similares. Mas em Node.js o seu uso é\r\n    mais prevalente já que por motivos de optimização ou de versatilidade o\r\n    Node.js vem despido de quase todos as funcionalidades. NPM é uma aplicação\r\n    de linha de comandos primariamente para gerir módulos.\r\n</p>\r\n<p lang=\"pt-PT\" class=\"cun_blog_text_header\">\r\n    <strong>O que são módulos no contexto do Node.js?</strong>\r\n</p>\r\n<p lang=\"pt-PT\" class=\"cun_blog_text\">\r\n    Módulos são ficheiros muito similares a livrarias que permitem estender as\r\n    funcionalidades do Node.js. Em norma o Node.js já vem com alguns módulos\r\n    básicos como por exemplo HTTP, DNS e <em>File System</em>.\r\n</p>\r\n<p lang=\"pt-PT\" class=\"cun_blog_text_header\">\r\n    <strong>O que são <em>frameworks</em>?</strong>\r\n</p>\r\n<p lang=\"pt-PT\" class=\"cun_blog_text\">\r\n    <em>Frameworks</em>\r\n    são ferramentas que possibilitam ajudar na criação de um projecto os quais\r\n    podem incluir um <em>superset</em> ou conjunto de métodos que facilitam a\r\n    criação de processos mais comuns e/ou rotineiros. No caso do Node.js temos\r\n    Express, Meteor e Derby.\r\n</p>\r\n<p lang=\"pt-PT\" class=\"cun_blog_text_header\">\r\n    <strong>Resumo.</strong>\r\n</p>\r\n<p lang=\"pt-PT\" class=\"cun_blog_text\">\r\n    Node.js deve a escolha preferencial para aplicações que necessitem de uma\r\n    comunicação constante entre cliente e servidor, mas poderá não ser a melhor\r\n    escolha caso a finalidade da aplicações seja simplista.\r\n</p>', 'header_bg_03.jpg', '2021-06-11 16:44:41'),
(3, 1, 'Desenvolvimento em Node.js', 'Desenvolvimento desta página - Parte 2 Iniciação', '<p lang=\"pt-PT\" class=\"cun_blog_text_header\">\r\n    1) Resumo / Introdução.\r\n</p>\r\n<p lang=\"pt-PT\" class=\"cun_blog_text\">\r\n    Pretendo desenvolver um site que servirá como portfólio para os projectos\r\nque vim a desenvolver no curso e que irei realizar no futuro. Será um site    <em>alojado online </em>num servidor de serviço partilhado sobre um domínio\r\n    próprio. Este terá de ter uma armazenamento de dados persistente ao que\r\n    utilizara varias base de dados para guardar as varias bases de dados\r\n    referentes as páginas que pretendo associar a esta mesma. O site deverá ter\r\n    uma apresentação intuitiva, dinâmica e cuidada dentro das necessidades. A\r\n    meta será tanto demonstrar as capacidades de criação, lançamento e\r\n    administração de uma página online como de demonstrar as capacidades\r\n    adquiridas noutras UFCD do curso. Para isso há que disponibilizar e\r\n    demonstrar cada projecto ao disponibilizar <em>snippets, </em>algoritmos,\r\n    binário, código fonte e exemplos gráficos.\r\n</p>\r\n\r\n        <p lang=\"pt-PT\" class=\"cun_blog_text_header\">\r\n           2)  Apresentação do tema.\r\n        </p>\r\n\r\n<p lang=\"pt-PT\" class=\"cun_blog_text\">\r\n    O tema é simplesmente a apresentação dos conhecimentos adquiridos no curso\r\n    e a sua demonstração através de uma página pessoal.\r\n    \r\n    \r\n</p>\r\n\r\n        <p lang=\"pt-PT\" class=\"cun_blog_text_header\">\r\n           3) Apresentação de metodologias e fases.\r\n        </p>\r\n        <p class=\"cun_blog_text\">\r\nA <em>metodologia</em> que irei aplicar neste projecto será            <em>RUP (Rational Unified Process)</em>. E uma metodologia não\r\n            cíclica mas flexível como as metodologias AGILE e suas derivadas.\r\n            Baseia-se numa estrutura paralela faseada em que se separa cada uma\r\ndas fases de desenvolvimento            <em>(Iniciação, Elaboração, Construção, Transição) </em>em várias\r\n            disciplinas <em>(Modelagem de Negócios</em>\r\n            <em>\r\n                , Requisitos, Analise e design, Implementação, Teste,\r\n                Implantação, Configuração e Mudança\r\n            </em>\r\n            <em>)</em>\r\n            . Passo a demonstrar no Cronograma o funcionamento desta mesma.\r\n        </p>\r\n\r\n        <p lang=\"pt-PT\" class=\"cun_blog_text\">\r\n            O <em>paradigma</em> que pretendo usar neste projecto será\r\n            fortemente influenciada pela linguagem Commun JS e ES6 em si é\r\n            multi-paradigma dentro de OOP <em>.</em>\r\n        </p>\r\n    </li>\r\n\r\n        <p lang=\"pt-PT\" class=\"cun_blog_text_header\">\r\n            4) Cronograma.\r\n        </p>\r\n        <p lang=\"pt-PT\" class=\"cun_blog_text\">\r\nO projecto começa na sua <em>Iniciação</em> partindo da            <em>Modelagem de negócios</em> e <em>Requisitos</em>. Ambos tem em\r\n            mente as necessidades do projecto e a sua viabilidade. Em seguida\r\n            será necessário fazer a <em>Análise</em> dos recursos a despender\r\n            em cada uma das seguintes <em>fases</em> em especial em questão de\r\n            tempo e fundos. Aproveitarei também para nesta fase estudar as\r\n            tecnologias necessárias para a elaboração do projecto. Se o\r\n            projecto não tiver viabilidade deverá ser cancelado e outro\r\n            iniciado em vez deste antes de passar a fase seguinte.\r\n            \r\n            Na fase de <em>Elaboração</em> deverá ser tomado em conta a\r\ndesenvolvimento de um plano concreto para o desenvolvimento da            <em>Construção</em> do projecto, como também o estudo de modelos e\r\n            arquitectura a aplicar. Nesta fase devesse definir os elementos\r\n            essenciais e não essenciais a implementar com também a sua ordem de\r\n            implementação.\r\n            \r\n            Na Construção do site, que deverá ser a fase proeminente do\r\n            projecto será aplicado o modelo pretendido e implementado de forma\r\n            faseada todas as funções delineadas.\r\n            \r\n            Finalmente por ultimo na <em>Transição </em>o site deverá ser\r\nimplantado online e as suas <em>funcionalidade</em> e            <em>interface</em> deveram ser testado a fim de se averiguar\r\n            correcções implementações que sejam necessárias.\r\n        </p>\r\n<img class=\"cun_blog_text_image\" src=\"/resources/images/graph_001.png\"></img>\r\n<p lang=\"pt-PT\" class=\"cun_blog_text\">\r\n    Dei preferência a este modelo por permitir o desenvolvimento em paralelo de\r\n    várias disciplinas e pelo facto de não implicar ciclos de entrega e divisão\r\n    de tarefas por membros diferentes.\r\n</p>\r\n<p lang=\"pt-PT\" class=\"cun_blog_text_header\">\r\n    5) Aspectos relevantes no pós-implementação.\r\n</p>\r\n<p lang=\"pt-PT\" class=\"cun_blog_text\">\r\n    Um dos aspectos importantes pós-implementação, para além da correcção de\r\n    possíveis bugs será implementar ao longo dos tempos de mais conteúdos.\r\n    \r\n    \r\n</p>', 'header_bg_07.jpg', '2021-06-11 16:45:01'),
(4, 1, 'Desenvolvimento em Node.js', 'Desenvolvimento desta página – Parte 3 Configuração', '<p lang=\"pt-PT\" class=\"cun_blog_text_header\">\r\n    Configuração\r\n</p>\r\n<p lang=\"pt-PT\" >\r\n    Antes de entrar a fundo na elaboração é necessário referir que no momento\r\n    da proposta uma das metas que me submeti foi aprender Node.js e\r\n    consequentemente criar uma página com o referida tecnologia. Umas das\r\n    minhas primeiras dificuldades foi compreender o funcionamento desta mesma.\r\n    Comparativamente com outras linguagem de servidor, como PHP e JAVA, o grau\r\n    de granularidade é bastante mais elevado obrigando a configuração de\r\n    sistemas em norma abstraídos.\r\n</p>\r\n<p lang=\"pt-PT\" >\r\n    Devido a complexidade e funcionalidades do Node.js os projectos criados\r\n    neste ambiente tem um estrutura predefinida. Como o Node.js corre em linha\r\n    de comandos tudo está a distancia de meia dúzia de linhas de código.\r\n</p>\r\n<p lang=\"pt-PT\" >\r\n    Para se iniciar um projeto bastas inserir:\r\n</p>\r\n<p lang=\"pt-PT\" >\r\n    <code>npm init</code>\r\n</p>\r\n<p lang=\"pt-PT\" >\r\n    Esta linha de comando irá criar um ficheiro de configuração package.json\r\n    que para alem de ser o ponto de arranque na aplicação é também necessário\r\n    para armazenar as definições do projecto e dependências que devem ser\r\n    carregadas.\r\n</p>\r\n<p lang=\"pt-PT\" >\r\n    Para além do ficheiro package.json também é criado, quando instalamos\r\n    outros módulos, o ficheiro package-lock.json. Este ficheiro é responsável\r\n    por armazenar todas as modificações executadas sobre a estrutura de\r\n    ficheiros dos módulos a fim de recriar sempre que necessário esta\r\n    estrutura.\r\n</p>\r\n<p lang=\"pt-PT\" >\r\n    De seguida devido a utilizar <em>source control</em> no meu caso Git e\r\n    devido ao volume dos módulos que podem ser implementados no Node.js convém\r\n    criar um ficheiro .gitignore. O ficheiro .gitignore serve para ignorar os\r\n    ficheiros que possam tanto ser redundante ou não compatíveis com outras\r\n    versões de Node.js.\r\n</p>\r\n<p lang=\"pt-PT\" >\r\n    Para se gerar um ficheiro .gitignore temos de instalar uma ferramenta\r\n    chamada <em>generate</em> com a seguinte linha de comandos:\r\n</p>\r\n<p lang=\"pt-PT\" >\r\n    <code>npm install –global generate</code>\r\n</p>\r\n<p lang=\"pt-PT\" >\r\n    De seguida temos de instalar o modulo .gitignore para o <em>generate:</em>\r\n</p>\r\n<p lang=\"pt-PT\" >\r\n    <code>npm install –global generate-gitignore</code>\r\n</p>\r\n<p lang=\"pt-PT\" >\r\n    E finalmente podemos criar o ficheiro em si inserindo:\r\n</p>\r\n<p lang=\"pt-PT\" >\r\n    <code>gen gitignore</code>\r\n</p>\r\n<p lang=\"pt-PT\" >\r\n    ou se desejar um template já pronto para Node.js\r\n</p>\r\n<p lang=\"pt-PT\" >\r\n    <code>gen gitignore:node</code>\r\n</p>\r\n<p lang=\"pt-PT\" >\r\n    Em seguida convém instalar outra ferramenta chamada nodemon que permite\r\n    reiniciar o servidor virtual automaticamente sempre que salvamos alguma\r\n    modificações no projecto.\r\n</p>\r\n<p lang=\"pt-PT\" >\r\n    <code>npm install -g nodemon</code>\r\n</p>\r\n<p lang=\"pt-PT\" >\r\n    Em seguida é necessário listar a dependências no nosso ficheiro\r\n    package.json a fim de podermos utilizar esta ferramenta de forma\r\n    automática.\r\n</p>\r\n<p lang=\"pt-PT\" >\r\n    <code>npm install --save-dev nodemon</code>\r\n</p>\r\n<p lang=\"pt-PT\" >\r\n    Para iniciar o servidor em modo nodemon bastas inserir ao invés de\r\n</p>\r\n<p lang=\"pt-PT\" >\r\n    <code>node [nome_da _app.js]</code> o seguinte\r\n    <code>nodemon node [nome_da _app.js]</code>\r\n</p>\r\n<p lang=\"pt-PT\" >\r\n    Para mais a utilização de Node.js não faz sentido se não se der uso\r\n    extensivo de JavaScript no lado do Cliente. O uso de componentes, blocos e\r\n    módulos no desenho do <em>client side</em> em conjunto com a metodologia\r\n    AJAX é uma mais valia para criar código consistente, fácil de ser lido, não\r\n    repetitivo, reutilizável e sem dependências.\r\n</p>\r\n<p lang=\"pt-PT\" >\r\n    Agora que a base do projecto esta criada é necessário estudar tanto a\r\n    arquitectura como a consequente organização deste mesmo. Primordialmente\r\n    dividimos um projecto Fullstack em dois grupos Front End e Back End.\r\n</p>\r\n<p lang=\"pt-PT\" class=\"cun_blog_text_header\">\r\nFront End\r\n</p>\r\n<p lang=\"pt-PT\" >\r\nNo Front End existem vários grupos de ficheiros; <em>Route</em> em norma um<em>HTML</em> para definir a página e para chamar dependências como    <em>CSS</em> e <em>JavaScript</em>; View que consistem de blocos de\r\n    JavaScript os quais constroem os vários componentes da página\r\ndinamicamente; Controllers que seja por modo de <em>eventos </em>ou    <em>callbacks</em> esperam pela iteração do utilizador ou do servidor para\r\npassar dados ou chamar funções; <em>Services Factory</em> serve para criar    <em>request</em> e receber <em>response </em>a fim de comunicar com o\r\n    servidor. No meu caso usei XHR como modo de comunicação mas existe outras\r\n    alternativas como Fetch API.\r\n</p>\r\n<img class=\"cun_blog_text_image\" src=\"/resources/images/graph_002.png\"></img>\r\n<p lang=\"pt-PT\" class=\"cun_blog_text_header\">\r\nBack End\r\n</p>\r\n<p lang=\"pt-PT\" >\r\n    No <em>Back End</em> existem outros grupos de ficheiros; Route que consiste\r\n    num ficheiro JavaScript o qual é o principal ficheiro da aplicação já que\r\n    se trata da porta de entrada e saída do servidor; <em>Controllers</em> os\r\n    quais são ficheiros dedicados a interpretar os parâmetros submetidos no URL\r\n    e a diferir que acções devem ser tomadas perante os pedidos; <em>Model</em>\r\n    são ficheiros que consistem em grupos de funções para comunicação e/ou\r\n    processamento de dados.\r\n</p>\r\n<p lang=\"pt-PT\" >\r\n    No caso desta página também existe uma base de dados relacional em MySQL a\r\n    qual é acedida através dos ficheiros Model.\r\n</p>', 'header_bg_02.jpg', '2021-06-11 16:45:14'),
(5, 1, 'Desenvolvimento em Node.js', 'Desenvolvimento desta página – Parte 4 Estrutura', '<p lang=\"pt-PT\" class=\"cun_blog_text_header\">\r\n    Estrutura\r\n</p>\r\n<p lang=\"pt-PT\" >\r\n    Antes demais gostaria de vincar que mudanças substanciais foram realizadas\r\n    ao longo da elaboração deste projecto. Algumas mudanças foram consequência\r\n    de realizar este projecto utilizando apenas as ferramentas mais básicas do\r\n    Node.js sem auxilio de Frameworks. Esta opção fez me apreender por\r\n    tentativa e erro e realizar o porquê da arquitectura latente noutros\r\n    projectos similares. Outras mudanças foram fruto da limitação no meu\r\n    conhecimento ou de oportunidade.\r\n</p>\r\n<p lang=\"pt-PT\" >\r\n    Pontos a ter em conta ao analisar este projecto na actual instância:\r\n</p>\r\n<ul>\r\n    <li>\r\n        <p lang=\"pt-PT\" >\r\n            A documentação é posterior a realização do grosso do projecto.\r\n        </p>\r\n    </li>\r\n    <li>\r\n        <p lang=\"pt-PT\" >\r\nA aplicação é composta de uma <em>Frontpage</em> e de um            <em>Backoffice</em> sendo que a estrutura e arquitectura de ambos é\r\n            similar.\r\n        </p>\r\n    </li>\r\n    <li>\r\n        <p lang=\"pt-PT\" >\r\n            A estrutura do projecto não segue cegamente a arquitectura\r\n            demonstrada no blog anterior, seja por praticabilidade ou\r\n            simplicidade.\r\n        </p>\r\n    </li>\r\n    <li>\r\n        <p lang=\"pt-PT\" >\r\n            Segundo o conhecimento actualmente reestruturaria o projecto com as\r\n            normas aplicada em Frameworks dedicadas ao Node.js.\r\n        </p>\r\n    </li>\r\n</ul>\r\n<p lang=\"pt-PT\" >\r\n    Tendo em mente a ideia geral da arquitectura da aplicação convém analisar a\r\n    realização deste projecto. Começo por analisar o fluxo de informação entre\r\n    o cliente e o servidor.\r\n</p>\r\n<p lang=\"pt-PT\" class=\"cun_blog_text_header\">\r\n    Comunicação\r\n</p>\r\n<ul>\r\n    <li>\r\n        <p lang=\"pt-PT\" >\r\n            A comunicação entre o cliente e o servidor é realizada através de\r\n            pedidos XHR (<em>XML HTTP Requests</em>). Estes pedidos são feitos\r\natravés da internet sendo recebidos e avaliados pelo<em>Route/Server Interface</em>, no caso deste projecto chamasse <em>server.js</em>.\r\n        </p>\r\n    </li>\r\n    <li>\r\n        <p lang=\"pt-PT\" >\r\n            A comunicação entre o servidor e a base de dados é realizada\r\n            através de pedidos SQL. Estes pedidos são comunicados a uma base de\r\n            dados MySQL e devolvidos de retorno a mesma função a qual a\r\n            encaminha através de uma função de <em>callback</em> ao seu devido\r\n            processamento.\r\n        </p>\r\n    </li>\r\n</ul>\r\n\r\n<img class=\"cun_blog_text_image\" src=\"/resources/images/graph_003.png\"></img>\r\n<p lang=\"pt-PT\" class=\"cun_blog_text_header\">\r\n    Responsabilidade\r\n</p>\r\n<p lang=\"pt-PT\" >\r\n    Seguidamente analiso a estrutura e responsabilidade de cada grupo de\r\n    ficheiros da aplicação.\r\n</p>\r\n<p lang=\"pt-PT\" >\r\n    <strong>Views</strong>\r\n    (Client)\r\n</p>\r\n<p lang=\"pt-PT\" class=\"cun_blog_text\">\r\n    Ficheiros responsáveis por definir os recursos\r\n    da página como o seu layout. Neste caso\r\n    particular serve apenas como uma estrutura\r\n    para carregar os blocos de elementos\r\n    necessários para constituir a página em si.\r\n    Em cada HTML com nomenclaturade layout\r\n    existe apenas referencia a funções de\r\n    JavaScript que devem ser executadas e que\r\n    dispultam todo o processo gerador da página.\r\n</p>\r\n<p lang=\"pt-PT\" >\r\n    <strong>Controllers/Service Factory</strong> (Client)\r\n</p>\r\n<p lang=\"pt-PT\" class=\"cun_blog_text\">\r\n    Ficheiros responsáveis por executar funções\r\n    relativas a eventos como o consequente\r\n    processamento de dados e formulação de\r\n    pedidos e receção de comunicação com o\r\n    servidor.\r\n</p>\r\n<p lang=\"pt-PT\" >\r\n    <strong>Packages</strong>\r\n    (Server)\r\n</p>\r\n<p lang=\"pt-PT\" class=\"cun_blog_text\">\r\n    Ficheiros de configuração e definição da\r\n    aplicação. Server para iniciar a nossa\r\n    aplicação no ambiente Node.js do servidor.\r\n</p>\r\n<p lang=\"pt-PT\" >\r\n    <strong>Route/Server Interface</strong>\r\n    (Server)\r\n</p>\r\n<p lang=\"pt-PT\" class=\"cun_blog_text\">\r\n    Ficheiros responsável pelo reencaminhamento\r\n    e acesso a aplicação.\r\n</p>\r\n<p lang=\"pt-PT\" >\r\n    <strong>Controllers</strong>\r\n    (Server)\r\n</p>\r\n<p lang=\"pt-PT\" class=\"cun_blog_text\">\r\n    Ficheiros responsáveis por <em>request</em> e\r\n    <em>\r\n        response\r\n        </em>\r\n    no lado do servidor. Servem para interpretar\r\n    os pedidos enviados no URL e devolver os\r\n    resultados das operações executadas no\r\n    servidor.\r\n</p>\r\n<p lang=\"pt-PT\" >\r\n    <strong>Modules</strong>\r\n    (Server)\r\n</p>\r\n<p lang=\"pt-PT\" class=\"cun_blog_text\">\r\n    Ficheiros responsáveis por executar funções\r\n    de processamento de dados ou formular pedido\r\n    de comunicação com serviços externos ou base\r\n    de dados.\r\n</p>\r\n\r\n<img style=\"margin:30px auto\" class=\"cun_blog_text_image\" src=\"/resources/images/graph_005.png\"></img>', 'header_bg_11.jpg', '2021-06-14 20:39:42'),
(6, 1, 'Desenvolvimento em Node.js', 'Desenvolvimento desta página – Parte 5 Análise do Back End', '<p lang=\"pt-PT\">\r\n    Devido ao similaridades entre a <em>Frontpage</em> e o <em>Backoffice</em>\r\n    irei focar apenas a análise no <em>Back End</em> do <em>Frontpage</em>.\r\n</p>\r\n<p lang=\"pt-PT\">\r\n    Como já antes referido no <em>blog</em> anterior o <em>Back End</em>\r\n    dividisse em:\r\n</p>\r\n<ul>\r\n    <li>\r\n        <p lang=\"pt-PT\">\r\n            <em>Route</em>\r\n            ou Interface com o Servidor, o qual encaminha os pedidos de URL,\r\n            nomeado de <em>server.js</em>\r\n        </p>\r\n    </li>\r\n    <li>\r\n        <p lang=\"pt-PT\">\r\n            Controller, o qual verifica o URL queries e chama funções\r\nnecessárias segundo os parâmetros recebidos, nomeado de            <em>frontpage_controller.js</em>\r\n        </p>\r\n    </li>\r\n    <li>\r\n        <p lang=\"pt-PT\">\r\n            Module de elaboração, envio e distribuição de pedidos SQL nomeado\r\n            de <em>frontpage_module.js</em>\r\n        </p>\r\n    </li>\r\n    <li>\r\n        <p lang=\"pt-PT\">\r\n            <em>Module</em>\r\ne <em>Class</em> de acesso e distribuição de ficheiros nomeado            <em>file_access.js</em>\r\n        </p>\r\n    </li>\r\n    <li>\r\n        <p lang=\"pt-PT\">\r\n            <em>Module </em>\r\n            de ligação a base de dados nomeado de <em>connect_mysql_db.js</em>\r\n        </p>\r\n    </li>\r\n    <li>\r\n        <p lang=\"pt-PT\">\r\n            <em>Module</em>\r\ne <em>Class</em> de gestão de sessão de cliente            <em>Session_Manager.js</em>\r\n        </p>\r\n    </li>\r\n</ul>\r\n\r\n<img class=\"cun_blog_text_image\" src=\"/resources/images/graph_004.png\"></img>\r\n\r\n<p lang=\"pt-PT\">\r\n    O código demonstrado abaixo é a projeção do código que está neste momento a\r\n    ser executado no servidor. Neste é possível identificar muito dos processos\r\n    que decorrem nos bastidores. Estes processos encarregam-se de identificar,\r\n    recolher e entregar informação necessária para a construção e actualização\r\n    desta mesma página.\r\n</p>\r\n<p lang=\"pt-PT\">\r\n    Antes de prosseguir com a análise do codigo há que referir algumas\r\n    diferenças entre JavaScript utilizado no browser com o do Node.js:\r\n</p>\r\n<ul>\r\n    <li>\r\n        <p lang=\"pt-PT\">\r\n            Ao contrario do ambiente de browser não existe DOM.\r\nConsequentemente não existe muitas das sua características como a            <em>window</em> ou <em>document</em>. Isso advém do facto de não\r\n            existir necessidade de ter livrarias de ambiente gráfico no lado do\r\n            servidor.\r\n        </p>\r\n    </li>\r\n    <li>\r\n        <p lang=\"pt-PT\">\r\n            Como noutras linguagens de servidor temos de requerer os módulos\r\n            que vamos usar como de exportar os que queremos ligar. Para isso\r\n            usamos usamos as funções request e export nomeadamente para\r\n            requerer e partilhar funções ou classes entre ficheiros.\r\n        </p>\r\n    </li>\r\n    <li>\r\n        <p lang=\"pt-PT\">\r\n            Acesso de utilizador com o modulo fs (file_system) e exec/spawn\r\n            (child_process) que permitem manipular ficheiros ou executar\r\n            processos e executáveis nos servido.\r\n        </p>\r\n    </li>\r\n    <li>\r\n        <p lang=\"pt-PT\">\r\n            Processamento Asynch que permite processar em paralelo, código\r\n            dependente de resposta externas, sem ter de esperar\r\n            obrigatoriamente o retorno.\r\n        </p>\r\n    </li>\r\n</ul>\r\n\r\n<p lang=\"pt-PT\" class=\"cun_blog_text_header\">server.js</p>\r\n<p lang=\"pt-PT\"><p>\r\n<div id=\"code_1\" class=\"cun_blog_code_block\"></div>\r\n\r\n\r\n<p lang=\"pt-PT\">\r\n    O método <em>createServer()</em> da <em>Class http</em> é responsável por\r\n    indicar a camada de <em>network</em> do servidor que queremos abrir a porta\r\n    (a designar como argumento) a fim de recolher <em>http request</em> de\r\n    possíveis http requests de clientes<em>. </em>Este método também e\r\nresponsável de passar uma função como argumento para ser inserida no    <em>update loop </em>do servidor. A função anónima neste código dita o\r\nreencaminhar dos pedidos, processo conhecido como <em>Route</em> ou    <em>Routing.</em>\r\n</p>\r\n<div id=\"code_1\" class=\"cun_blog_code_block\">\r\n    <code>http.createServer(function (request, response) { ...\r\n    }).listen(PORT);</code></div>\r\n\r\n\r\n<p lang=\"pt-PT\" class=\"cun_blog_text_header\">frontpage_controller.js</p>\r\n<p lang=\"pt-PT\"><p>\r\n<div id=\"code_2\" class=\"cun_blog_code_block\"></div>\r\n\r\n\r\n\r\n<p lang=\"pt-PT\">\r\n    A função <em>backoffice_controller()</em> dedicasse antes de mais servir\r\n    como intermediária entre o emissor e receptor sendo que os seus argumentos\r\n    são o <em>request</em> do cliente e a <em>response</em> para ao cliente.\r\n    Isto é possível devido a peculiaridade do empregarmos esta mesma função\r\n    como argumento noutras funções e se necessário essas outras recursivamente\r\n    noutras funções.\r\n</p>\r\n<div id=\"code_1\" class=\"cun_blog_code_block\">\r\n    <code>function frontpage_controller(request, response) { ...\r\n    }</code></div>\r\n\r\n<p lang=\"pt-PT\">\r\n    Outra responsabilidade desta função é criar uma resposta legível para a\r\n    máquina do cliente atraves de uma resposta em <em>http</em>. Abaixo a\r\n    sinalização de o código 200 indica que a recepção e reposta por parte do\r\n    servidor foram executadas com sucesso e que este passa a responder segundo\r\n    o <em>content-type</em>.\r\n</p>\r\n<div id=\"code_1\" class=\"cun_blog_code_block\">\r\n    <code>response.writeHead(200, { \'Content-Type\': \'text/html\' });\r\n    </code></div>\r\n\r\n<p lang=\"pt-PT\">\r\nEsta resposta funciona muito como a escrita de ficheiros num    <em>file system</em> a onde é necessário iniciar e fechar o processo de\r\n    escrita.\r\n</p>\r\n<div id=\"code_1\" class=\"cun_blog_code_block\">\r\n    <code>response.write(http_page);\r\n    response.end(); </code></div>\r\n</p>\r\n<p lang=\"pt-PT\">\r\nA sequência seguinte verifica e chama as funções necessárias no<em>frontpage_module.js</em> com os parâmetros passados pelo URL    <em>query.</em> Também passa como argumento a função anónimas a qual têm\r\n    executar depois da recepção do pedido certas linhas de código.\r\n</p>\r\n<div id=\"code_1\" class=\"cun_blog_code_block\">\r\n    <code>if (true_url.searchParams.get(\'navbar_anchor\')) { //then\r\n    comunicate with the server via a module method\r\n    navbar_anchors((content_array)=&gt;{ console.log(content_array);\r\n    response.write(JSON.stringify(content_array)); response.end();}); }\r\n    </code></div>\r\n\r\n<p lang=\"pt-PT\">\r\n    Outra função mais elaborada permite a criação de páginas compostas. Esta\r\n    define a junção de blocos de <em>html</em> na máquina do cliente ou através\r\n    do fornecimento de código <em>JavaScript </em>que deverá ser corrido pela\r\n    função <em>eval() </em>igualmente na maquina do cliente. O segundo passo\r\n    trata de criar um array de <em>promisses,</em> que não são nada mais que\r\n    uma abstação mais conveniente de <em>callback,</em> a fim de carregar todos\r\n    os conteúdos necessário a devolver ao cliente num só <em>html</em>. Depois\r\n    dos conteúdos carregados assincronamente a função resume a sua escrita para\r\n    a <em>http response. </em>\r\n</p>\r\n<div id=\"code_1\" class=\"cun_blog_code_block\">\r\n    <code>else { let target = true_url.searchParams.get(\'page\');\r\n    console.log(\"target:\",target); if ( target ) {\r\n    get_frontoffice_files(target); }else{ get_frontoffice_files(\'index\'); } }\r\n    </code></div>\r\n\r\n<p lang=\"pt-PT\">\r\n    Na sequência da anterior.\r\n</p>\r\n<div id=\"code_1\" class=\"cun_blog_code_block\">\r\n    <code>function get_frontoffice_files(page_name) { promisses_array =\r\n    new Array(); results = new Array();\r\n    promisses_array.push(get_file(\'./views/html/frontpage/html_start.html\'));\r\n    promisses_array.push(get_file(\'./views/html/frontpage/html_home_layout.html\'));\r\n    promisses_array.push(get_file(\'./views/html/frontpage/html_about_layout.html\'));\r\n    promisses_array.push(get_file(\'./views/html/frontpage/html_contact_layout.html\'));\r\n    promisses_array.push(get_file(\'./views/html/frontpage/html_blog_layout.html\'));\r\n    promisses_array.push(get_file(\'./views/html/frontpage/html_end.html\'));\r\n    Promise.all(promisses_array).then(function ([start, home_layout,\r\n    about_layout, contact_layout, blog_layout, end]) { results.push(start); if\r\n    (page_name === \'index\' || page_name === \'home\' ) {\r\n    results.push(home_layout); } else if (page_name === \'about\') {\r\n    results.push(about_layout); } else if (page_name === \'contact\') {\r\n    results.push(contact_layout); } else if (page_name === \'blog\') {\r\n    results.push(blog_layout); } results.push(end); build_page(results)\r\n    //console.log(results); }); } </code></div>\r\n\r\n<p lang=\"pt-PT\">\r\n    Na sequência da anterior.\r\n</p>\r\n<div id=\"code_1\" class=\"cun_blog_code_block\">\r\n    <code>function build_page(result_data) { return new Promise((resolve,\r\n    reject) =&gt; { http_page = \'\' result_data.forEach(element =&gt; {\r\n    http_page += element; }); response.write(http_page); response.end(); }); }\r\n    </code></div>\r\n\r\n\r\n<p lang=\"pt-PT\" class=\"cun_blog_text_header\">frontpage_module.js</p>\r\n<p lang=\"pt-PT\"><p>\r\n<div id=\"code_3\" class=\"cun_blog_code_block\"></div>\r\n\r\n<p lang=\"pt-PT\">\r\n    Este ficheiro tem funções bastante distintas mas todas elas destinadas em\r\n    comunicar com a base de dados. Passo a analisar a seguinte função que está\r\n    encarregue de gerar um SQL <em>query</em> e processar o resultado passando\r\n    depois este resultados para uma função passada como argumento.\r\n</p>\r\n<div id=\"code_1\" class=\"cun_blog_code_block\">\r\n    <code>function header_contents(callback) { const sql = `SELECT * FROM\r\n    header_content`; //could also have several parametersfunction(err, rows,\r\n    fields) query_database(sql, function (results) { if (Object.keys(results))\r\n    { var results_array = new Array(); for (var i = 0; i &lt; results.length;\r\n    i++) { results_array.push([results[i].id, results[i].title,\r\n    results[i].subtitle, results[i].content, results[i].image_src]); }\r\n    //console.log(results_array); callback(results_array); } else {\r\n    console.log(\'err: frontpage_module_header\'); } }); } </code></div>\r\n\r\n<!--end_text-->\r\n<script type=\"text/javascript\">\r\n//script\r\n		const op = \'\';\r\n		send_xmlhttprequest(\'server.js\',\'GET\',op, (response)=>{\r\n			//console.log(\"blog live code call sucessfull\");\r\n			//console.log(response);\r\n			let content_code = response;\r\n		  \r\n			const content = document.createElement(\'code\');\r\n			content.textContent = \'\'.concat(content_code); \r\n			\r\n			const code = document.getElementById(\'code_1\');\r\n			\r\n			code.appendChild(content);\r\n		});\r\n		\r\n		send_xmlhttprequest(\'/controllers/frontpage_controller.js\',\'GET\',op, (response)=>{\r\n			//console.log(\"blog live code call sucessfull\");\r\n			//console.log(response);\r\n			let content_code = response;\r\n		  \r\n			const content = document.createElement(\'code\');\r\n			content.textContent = \'\'.concat(content_code); \r\n			\r\n			const code = document.getElementById(\'code_2\');\r\n			\r\n			code.appendChild(content);\r\n		});\r\n		\r\n		send_xmlhttprequest(\'/modules/frontpage_module.js\',\'GET\',op, (response)=>{\r\n			//console.log(\"blog live code call sucessfull\");\r\n			//console.log(response);\r\n			let content_code = response;\r\n		  \r\n			const content = document.createElement(\'code\');\r\n			content.textContent = \'\'.concat(content_code); \r\n			\r\n			const code = document.getElementById(\'code_3\');\r\n			\r\n			code.appendChild(content);\r\n		});\r\n		\r\n    \r\n//end_script\r\n</script>', 'header_bg_12.jpg', '2021-06-14 23:28:32');
INSERT INTO `article_section` (`id`, `user_id`, `title`, `subtitle`, `content`, `image`, `date_reg`) VALUES
(7, 1, 'Desenvolvimento em Node.js', 'Desenvolvimento desta página – Parte 6 Análise do Front End', '<p lang=\"pt-PT\">\r\n    Vou apenas falar brevemente da estrutura do <em>Front End da Frontpage</em>devido a sua\r\n    escala e complexidade. Este apresentasse de momento menos coerente e\r\n    organizado comparado com o <em>Back End. </em>Sem dúvida que para mim foi a\r\n    parte mais desafiante do projecto ao que há de se ter em conta vários\r\n    factores.\r\n</p>\r\n<ul>\r\n    <li>\r\n        <p lang=\"pt-PT\">\r\n            O UI deve ser intuitivo e responsivo.\r\n        </p>\r\n    </li>\r\n    <li>\r\n        <p lang=\"pt-PT\">\r\n            O código deve ser dinâmico, expansível e reutilizável.\r\n        </p>\r\n    </li>\r\n    <li>\r\n        <p lang=\"pt-PT\">\r\n            O aspecto gráfico deve ser cuidado.\r\n        </p>\r\n    </li>\r\n    <li>\r\n        <p lang=\"pt-PT\">\r\n            A comunicação com o <em>Back End </em>tem de ser eficaz, rápida e\r\n            segura.\r\n        </p>\r\n    </li>\r\n    <li>\r\n        <p lang=\"pt-PT\">\r\n            Os vários sistemas e <em>features</em> utilizados tem de funcionar\r\n            em harmonia sem causarem conflitos ou criar dependências.\r\n        </p>\r\n    </li>\r\n</ul>\r\n<p lang=\"pt-PT\">\r\n    Tenho de explicitar desde já que em Node.js convém seguir uma metodologia\r\n    diferente na estruturação do <em>Front End</em> o que dificulta a primeira\r\n    vista programadores que já estejam habituados as outras metodologias\r\n    derivadas de outras linguagens. Uma das coisas que mudaria neste ponto\r\n    seria a geração das páginas. De momento a lógica por detrás destas não é\r\n    coerente e depende de algumas exepções definidas rigidamente em código. A\r\n    solução chave seria de usar as base de dados para guardar toda a informação\r\n    de configuração das páginas de maneira dinâmica e coerente.\r\n</p>\r\n<p lang=\"pt-PT\">\r\n    Passo em seguida a análise do código começando por explicar a sequência de\r\n    eventos a quando o pedido da máquina cliente.\r\n</p>\r\n<ol>\r\n    <li>\r\n        <p lang=\"pt-PT\">\r\n            Ao ser inserido o URL da página por via comunica através de\r\n            protocolo HTTP como o servidor se este URL for identificado\r\n            positivamente por um DNS.\r\n        </p>\r\n    </li>\r\n    <li>\r\n        <p lang=\"pt-PT\">\r\n            O servidor dirige todos os pedidos para a porta definida pelo\r\n            pedido do cliente. Este pedido pode ou não ser deferido caso a\r\n            porta ou o pedido sejam identificados positivamente.\r\n        </p>\r\n    </li>\r\n    <li>\r\n        <p lang=\"pt-PT\">\r\n            Em seguida a aplicação <em>Node.js </em>produz como resultado o\r\n            conteúdo pedido, como foi demonstrado no <em>post</em> anterior.\r\n        </p>\r\n    </li>\r\n    <li>\r\n        <p lang=\"pt-PT\">\r\nAo receber o conteúdo, o qual é composto por uma página<em>html</em>, o browser segue as varias indicações dadas no <em>head</em> e <em>body</em> do <em>html</em>. Sendo elas carregar\r\n            folhas de estilo e <em>scripts</em>, montar uma estrutura primitiva\r\n            em <em>html </em>para receber elementos dinamicamente e finalmente\r\n            correr funções do <em>JavaScript.</em>\r\n        </p>\r\n    </li>\r\n    <li>\r\n        <p lang=\"pt-PT\">\r\n            Ao iniciar geração dos elementos da página, pedidos de informação\r\n            são realizados a fim de obter da base de dados informações\r\n            suplementares. Estes pedidos são feitos através do servidor ao que\r\n            esta informação é recolhida e fornecida de forma silenciosa.\r\n        </p>\r\n    </li>\r\n    <li>\r\n        <p lang=\"pt-PT\">\r\n            A informação é depois armazenada na memória volátil da máquina\r\n            cliente a fim de fornecer indicações e conteúdos para finalizar a\r\n            geração de cada elemento. Estes dois passos são realizados\r\n            múltiplas vezes até toda a informação necessária ser carregada e\r\n            todos os elementos gerados.\r\n        </p>\r\n    </li>\r\n    <li>\r\n        <p lang=\"pt-PT\">\r\n            Caso o cliente ao interagir com a página execute algum pedido\r\n            complementar de informação ou mudança nos conteúdos da bases de\r\n            dados este podem ser executados sem necessidade de recriar toda a\r\n            página mas somente das partes que interessam. Este habilidade\r\n            permite que informação pertinente não sejam perdida ou que outras\r\n            sejam adicionadas sem custos adicionais ou inconvenientes para o\r\n            Utilizador.\r\n        </p>\r\n    </li>\r\n</ol>\r\n<p lang=\"pt-PT\">\r\n    Passo agora a análise do código em concreto. Por uma questão de\r\n    praticabilidade utilizarei uma amostra do <em>HTML </em>já agregada ao\r\n    invés da sua forma primária a qual reside no servidor. Irei ignorar também\r\n    elementos e funções mais elementares de comuns num documento <em>HTML.</em>\r\n</p>\r\n\r\n\r\n\r\n\r\n<p lang=\"pt-PT\" lang=\"pt-PT\" class=\"cun_blog_text_header\">frontpage.html (forma agregada)</p>\r\n<p lang=\"pt-PT\" lang=\"pt-PT\"><p lang=\"pt-PT\">\r\n<div id=\"code_1\" class=\"cun_blog_code_block\"></div>\r\n\r\n\r\n<p lang=\"pt-PT\">Esta amostra é o ponto inicial da página sendo que todo o conteúdo é gerado a partir deste ponto. É perceptível que este documento é apenas um body vazio com algumas linhas de JavaScript. O script tem a tarefa de armazenar alguns arrays para conteúdos os quais irão ser descarregados brevemente. Para além de armazenar variáveis este script chama varias funções as quais tem o papel de criar os vários elementos que compõe a página.</p>\r\n\r\n<div id=\"code_1\" class=\"cun_blog_code_block\">\r\n<code>&lt;body id=\'body\'&gt;\r\n&lt;script&gt;\r\n  /*COSTANTs AND VARIABLES--------------------------------------------------------*/\r\n  const body_tag = document.getElementById(\"body\");\r\n  var navbar_anchors = new Array();\r\n  var header_contents = new Array();\r\n  var article_sections = new Array();\r\n\r\n\r\n  \r\n  /*FUNCTION CALL------------------------------------------------------------*/\r\n  \r\n    create_frontpage_content();\r\n    create_frontpage_top_nav();\r\n    create_frontpage_header();\r\n    call_frontpage_main();\r\n    create_frontpage_footer();\r\n\r\n    navbar_scroll_event(\'top_navbar\');\r\n    \r\n&lt;/script&gt;\r\n&lt;/body&gt;\r\n</code>\r\n</div>\r\n\r\n<p lang=\"pt-PT\" lang=\"pt-PT\" class=\"cun_blog_text_header\">frontpage_script.js</p>\r\n<p lang=\"pt-PT\" lang=\"pt-PT\"><p lang=\"pt-PT\">\r\n<div id=\"code_2\" class=\"cun_blog_code_block\"></div>\r\n\r\n\r\n<p lang=\"pt-PT\">Pelo facto do ficheiro anterior ser bastante extenso vou analisar apenas alguns pontos relevantes deste. O código abaixo descreve funcionalidades de pedido e carregamento de informação através de uma função externa a qual usa metodologia AJAX. Esse método recebe como argumento um URL e seus parâmetros de forma segmentada como uma função anónima. Essa qual descreve o as ações a executar a receção da informação como a sua descodificação e armazenamento.</p> \r\n\r\n<div id=\"code_1\" class=\"cun_blog_code_block\">\r\n<code>function create_frontpage_top_nav() {\r\n    this.addEventListener(\'load\', () => {\r\n    \r\n      send_xmlhttprequest(\'frontpage\',\'get\',\'navbar_anchor=all\', (response)=>{\r\n        //console.log(JSON.parse(response));\r\n        navbar_anchors = JSON.parse(response);\r\n        create_frontpage_top_nav();\r\n        show_menu();\r\n      })\r\n\r\n      show_menu();\r\n    },false);\r\n\r\n    window.addEventListener(\'resize\', () => {\r\n    \r\n      show_menu();\r\n      \r\n    },false);\r\n…\r\n}</code></div>\r\n\r\n<p lang=\"pt-PT\">Em seguida e ainda na mesma função verificamos a existencia de certos elementos no DOM. Caso estes estejam criado apagamos todos os seus herdeiros e recreamos todos os elementos que herdam deste.</p> \r\n\r\n<div id=\"code_1\" class=\"cun_blog_code_block\">\r\n<code>function create_frontpage_top_nav() {\r\n...\r\n//TOP FIXED - NAV BAR\r\n    var top_navbar;\r\n    \r\n    let element_navbar = document.getElementById(\'top_navbar\');\r\n\r\n    if (element_navbar) {\r\n      while (element_navbar.firstChild) {\r\n        element_navbar.removeChild(element_navbar.firstChild);\r\n      }\r\n      top_navbar = element_navbar;\r\n      \r\n    }else{\r\n\r\n      top_navbar = document.createElement(\"div\");\r\n      top_navbar.className = \"cun_top_navbar cun_navbar\";\r\n      top_navbar.style = \"\";\r\n      top_navbar.id = \"top_navbar\";\r\n      body_tag.appendChild(top_navbar);\r\n    }\r\n\r\n    const top_navbar_under = document.createElement(\"div\");\r\n    top_navbar_under.className = \"cun_top_navbar_under\";\r\n    top_navbar_under.style = \"\";\r\n    top_navbar_under.id = \"top_navbar_under\";\r\n    body_tag.appendChild(top_navbar_under);\r\n...\r\n}\r\n</code></div>\r\n\r\n<p lang=\"pt-PT\">Ainda na mesma função demonstro como a informação, que foi recolhida e armazenada no primeiro ponto, é utilizada. O passo seguinte e correr simplesmente todo o array com informação sobre os botões da barra de navegação e criar cada um dos botões com as respectivas características e link.</p>\r\n\r\n<div id=\"code_1\" class=\"cun_blog_code_block\">\r\n<code>function create_frontpage_top_nav() {\r\n...\r\nvar navbar_container_button = new Array();\r\n    var navbar_container_button_anchor = new Array();\r\n\r\n    var count_i = -1;\r\n\r\n    for (let i = 0; i < navbar_anchors.length; i++) {\r\n\r\n      navbar_container_button[i] = document.createElement(\"div\");\r\n      navbar_container_button[i].className = \"cun_cursor_pointer\";\r\n      navbar_container_button[i].style = \"display:inline-block\";\r\n      navbar_container_button[i].id = `navbar_container_button_${[i]}`;\r\n      navbar_buttons_container.appendChild(navbar_container_button[i]);\r\n\r\n      navbar_container_button_anchor[i] = document.createElement(\"a\");\r\n      navbar_container_button_anchor[i].className = \"cun_navbar_container_button_anchor\";\r\n      navbar_container_button_anchor[i].style = \"\";\r\n      navbar_container_button_anchor[i].id = `navbar_container_button_anchor${[i]}`;\r\n      navbar_container_button_anchor[i].textContent = navbar_anchors[i][0];\r\n      navbar_container_button_anchor[i].href = navbar_anchors[i][1];\r\n      navbar_container_button[i].appendChild(navbar_container_button_anchor[i]);\r\n    \r\n      count_i = i;\r\n    }\r\n...\r\n}\r\n</code></div>\r\n\r\n<p lang=\"pt-PT\" lang=\"pt-PT\" class=\"cun_blog_text_header\">xmlhttprequest_functions.js</p>\r\n<p lang=\"pt-PT\" lang=\"pt-PT\"><p lang=\"pt-PT\">\r\n<div id=\"code_3\" class=\"cun_blog_code_block\"></div>\r\n\r\n\r\n<p lang=\"pt-PT\">De seguida passo a dissecar uma estrutura bastante conhecida por os programadores de AJAX. O cabeçalho desta função passa todos os argumentos que discutimos acima antemão. Começa por designar uma instância da class XMLHttpRequest() e posteriormente utilizar a método open() da mesma para designar o URL e os parâmetros que devem ser passados para o servidor. O ultimo argumento define se o processo é executado de modo síncrono ou assíncrono. Sendo que neste caso opto por ser assíncrono a fim de tornar mais rápido todo o processo. O passo seguinte é designar que tipo de codificação estamos a passar ao HTTP request.</p>\r\n\r\n<div id=\"code_1\" class=\"cun_blog_code_block\">\r\n<code>function send_xmlhttprequest(path, method, url_query, callback) {\r\n\r\n    // get the URL\r\n    const http = new XMLHttpRequest();\r\n    const url = path;\r\n    const params = url_query;\r\n\r\n//normally method is GET or POST\r\n    http.open(method, url + \'?\' + params, true);\r\n\r\n//Send the proper header information along with the request\r\n    http.setRequestHeader(\'Content-type\', \'application/x-www-form-urlencoded\');\r\n…\r\n}\r\n</code></div>\r\n\r\n\r\n<p lang=\"pt-PT\">Na amostra seguinte passamos uma função um campo da instância http. Esta função dita que ação devem ser executadas se certas condições acontecerem. Testamos se o nosso http.status foi recebido e produziu resultados. Se sim passamos para o passo seguinte a onde usamos a função passada no inicio da função como argumento para processar a informação que vai ser recebida. Se por acaso uma função não for definida como argumento o resultados diretamente ao DOM a fim de recriar os conteúdos actuais presente no separador do browser.</p> \r\n\r\n\r\n<div id=\"code_1\" class=\"cun_blog_code_block\">\r\n<code>http.onreadystatechange = function () {//Call a function when the state changes.\r\n      if (http.readyState == 4 && http.status == 200) {\r\n\r\n        if (callback) {\r\n          callback(http.responseText);\r\n       \r\n        }else if (http.responseText) {\r\n          //alert(http.responseText);\r\n\r\n          document.open();\r\n          document.write(http.responseText);\r\n          document.close();\r\n\r\n        }\r\n\r\n      }\r\n</code></div>\r\n\r\n<p lang=\"pt-PT\">Finalmente no ultimo passo. Verificamos possíveis erros de HTTP request ao ser enviado para o servidor. Como também enviamos todo o conteúdo preparado através do método send() da instância http. Por ultimo especificamos se queremos permitir que o conteúdo browser seja ou não automaticamente recriado depois da execução destas linhas de código.</p>\r\n\r\n<div id=\"code_1\" class=\"cun_blog_code_block\">\r\n<code>http.onerror = function () {\r\n      alert(\"Request failed\");\r\n    };\r\n\r\n    http.send(null);\r\n\r\n    //false prevent form from submitting\r\n    return false;\r\n\r\n  }\r\n</code></div>\r\n\r\n<!--end_text-->\r\n<script type=\"text/javascript\">\r\n//script\r\n		const op = \'\';\r\n		send_xmlhttprequest(\'frontpage\',\'GET\',op, (response)=>{\r\n			//console.log(\"blog live code call sucessfull\");\r\n			//console.log(response);\r\n			let content_code = response;\r\n		  \r\n			const content = document.createElement(\'code\');\r\n			content.textContent = \'\'.concat(content_code); \r\n			\r\n			const code = document.getElementById(\'code_1\');\r\n			\r\n			code.appendChild(content);\r\n		});\r\n		\r\n		send_xmlhttprequest(\'/scripts/frontpage_script.js\',\'GET\',op, (response)=>{\r\n			//console.log(\"blog live code call sucessfull\");\r\n			//console.log(response);\r\n			let content_code = response;\r\n		  \r\n			const content = document.createElement(\'code\');\r\n			content.textContent = \'\'.concat(content_code); \r\n			\r\n			const code = document.getElementById(\'code_2\');\r\n			\r\n			code.appendChild(content);\r\n		});\r\n		\r\n		send_xmlhttprequest(\'/scripts/xmlhttprequest_functions.js\',\'GET\',op, (response)=>{\r\n			//console.log(\"blog live code call sucessfull\");\r\n			//console.log(response);\r\n			let content_code = response;\r\n		  \r\n			const content = document.createElement(\'code\');\r\n			content.textContent = \'\'.concat(content_code); \r\n			\r\n			const code = document.getElementById(\'code_3\');\r\n			\r\n			code.appendChild(content);\r\n		});\r\n		\r\n    \r\n//end_script\r\n</script>', 'header_bg_10.jpg', '2021-06-14 23:29:46'),
(8, 1, 'teste', 'teste', 'teste', 'not_the_droids.jpg', '2021-06-14 23:30:17'),
(9, 1, 'teste', 'teste', 'teste', 'not_the_droids.jpg', '2021-06-15 00:52:38'),
(12, 1, 'teste', 'teste', 'teste', 'not_the_droids.jpg', '2021-06-17 02:18:36'),
(14, 1, 'teste', 'teste', 'teste', 'not_the_droids.jpg', '2021-06-18 14:36:14');

-- --------------------------------------------------------

--
-- Table structure for table `contact_message`
--

CREATE TABLE `contact_message` (
  `id` int(11) NOT NULL,
  `name` varchar(90) NOT NULL,
  `email` varchar(90) NOT NULL,
  `message` varchar(2048) NOT NULL,
  `checked` tinyint(1) NOT NULL,
  `date_reg` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contact_message`
--

INSERT INTO `contact_message` (`id`, `name`, `email`, `message`, `checked`, `date_reg`) VALUES
(1, 'albert', 'dragon@gmail.com', 'the dragon', 0, '2021-07-01 00:54:04'),
(2, 'peter', 'bear@gmail.com', 'the bear', 0, '2021-07-01 00:58:56'),
(3, ',,', 'undefined', 'undefined', 0, '2021-07-01 00:59:21'),
(4, 'undefine', 'undefined', 'undefined', 0, '2021-07-01 21:11:26'),
(5, 'das', 'undefined', 'undefined', 0, '2021-07-01 21:11:34'),
(6, 'fafw', 'fafw', 'fafwafwaf', 0, '2021-07-01 01:03:42'),
(7, 'jhk', 'jhk', 'dassafsa', 0, '2021-07-01 01:06:00'),
(8, 'fa', 'fa', 'fas', 0, '2021-07-01 01:07:03'),
(9, 'sda', 'sda', 'das', 0, '2021-07-01 01:09:05'),
(10, 'fassa', 'fassa', 'fasfas', 0, '2021-07-01 01:10:36'),
(11, 'fa', 'fa', 'dasa', 0, '2021-07-01 01:12:36'),
(12, 'dasa', 'dasa', 'fasas', 0, '2021-07-01 01:13:13'),
(13, 'fsada', 'fsada', 'asa', 0, '2021-07-01 01:13:58'),
(14, 'jhasdk', 'jhasdk', 'asdjkksa', 0, '2021-07-01 01:15:05'),
(15, 'hkl', 'hkl', 'kjh', 0, '2021-07-01 01:15:18'),
(16, 'kjhkahs', 'kjhkahs', 'kjhksa', 0, '2021-07-01 01:15:40'),
(17, 'asda', 'asda', 'dsa', 0, '2021-07-01 01:17:56'),
(18, 'das', 'das', 'asda', 0, '2021-07-01 13:28:38'),
(19, 'adsda', 'adsda', 'fas', 0, '2021-07-01 13:28:57'),
(20, 'asd', 'asd', 'zsa', 0, '2021-07-01 13:30:37'),
(21, 'as', 'as', 'sad', 0, '2021-07-01 13:31:19'),
(22, 'ads', 'ads', 'das', 0, '2021-07-01 15:35:46');

-- --------------------------------------------------------

--
-- Table structure for table `header_content`
--

CREATE TABLE `header_content` (
  `id` int(11) NOT NULL,
  `image_src` varchar(512) DEFAULT NULL,
  `title` varchar(128) DEFAULT NULL,
  `subtitle` varchar(256) DEFAULT NULL,
  `content` varchar(2048) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `header_content`
--

INSERT INTO `header_content` (`id`, `image_src`, `title`, `subtitle`, `content`) VALUES
(1, 'header_bg_04.jpg', 'Início', 'Bem-vindo.', 'home content'),
(2, 'header_bg_06.jpg', 'Sobre', 'Tudo que precisa de saber.', '</br><p>\r\n    <strong>Sobre esta página</strong>\r\n</p>\r\n<p>Está página foi criada com a finalidade de ser um repositório de conhecimento. Porque a memória não é de ferro e a escala e complexidade de muitos dos projetos pode avassaladora. Decidi criar está página para reter alguns dos pormenores importantes de cada projecto. Além disso serve como uma prática fonte de código para futuros projetos, sejam ele meus ou de outros que se possam interessar.\r\n</p></br>\r\n<p>\r\n    <strong>Sobre o autor</strong>\r\n</p>\r\n<p>O meu nome é Pedro Costa ou CrankyUnicorn e tenho uma fixação comcomputadores e seu funcionamento. Tenho formação em artes mas apreendi a programar como hobbie e deste então nunca mais parei. O gosto de apreender levou a que estudasse ciências computacionais, algoritmia e consequentemente matemática e física. Gosto muito de criar simulações e visualizações com auxilio sistemas gráfico. Não tenho uma linguagens preferidas acho todas elas podem ser divertidas e desafiantes a sua maneira. Tenho um carinho especial por C# por ter sido uma linguagem solida e poderosa que me iniciou realmente no mundo dá programação.\r\n</p></br>'),
(3, 'header_bg_08.jpg', 'Contactos', 'Olá!', '</br><p lang=\"pt-PT\" class=\"cun_blog_text_header\">Links</p>\r\n<a class=\"cun_blog_text\" style=\"color:var(--royal_blue); display:block;\" href=\"https://github.com/CrankyUnicorn/\"><i class=\"fab fa-github-square fa-1x\" style=\"font-family:Font Awesome\\ 5 Brands; font-weight: 100;\"></i> GitHub - CrankyUnicorn </a>\r\n<a class=\"cun_blog_text\" style=\"color:var(--royal_blue); display:block;\" href=\"https://www.linkedin.com/in/pedro-costa-298755178/\"><i class=\"fab fa-linkedin fa-1x\" style=\"font-family:Font Awesome\\ 5 Brands; font-weight: 100;\"></i> Linkedin - Pedro Costa</a></br><hr>\r\n<p lang=\"pt-PT\" class=\"cun_blog_text_header\" style=\"margin:20px 0 18px 0\">Formulário de Contacto</p>\r\n<p lang=\"pt-PT\" class=\"cun_blog_text\">Para questões, queixas ou correções por favor contactar através do questionário abaixo.</p>'),
(4, 'header_bg_05.jpg', 'Blog', 'Hey come in please.', 'blog content');

-- --------------------------------------------------------

--
-- Table structure for table `navbar_anchor`
--

CREATE TABLE `navbar_anchor` (
  `id` int(11) NOT NULL,
  `anchor_text` varchar(64) DEFAULT NULL,
  `anchor_href` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `navbar_anchor`
--

INSERT INTO `navbar_anchor` (`id`, `anchor_text`, `anchor_href`) VALUES
(1, 'Início', 'frontpage?page=home'),
(2, 'Sobre', 'frontpage?page=about'),
(3, 'Contactos', 'frontpage?page=contact'),
(4, 'Blog', 'frontpage?page=blog');

-- --------------------------------------------------------

--
-- Table structure for table `navbar_header`
--

CREATE TABLE `navbar_header` (
  `id` int(11) NOT NULL,
  `navbar_id` int(11) DEFAULT NULL,
  `header_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `navbar_header`
--

INSERT INTO `navbar_header` (`id`, `navbar_id`, `header_id`) VALUES
(1, 1, 1),
(2, 2, 2),
(3, 3, 3),
(4, 4, 4);

-- --------------------------------------------------------

--
-- Table structure for table `section_statistic_like`
--

CREATE TABLE `section_statistic_like` (
  `id` int(11) NOT NULL,
  `section_id` int(11) NOT NULL,
  `date_reg` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section_statistic_like`
--

INSERT INTO `section_statistic_like` (`id`, `section_id`, `date_reg`) VALUES
(1, 12, '2021-07-02 21:45:02'),
(2, 1, '2021-07-02 21:45:02'),
(3, 3, '2021-07-02 21:45:02'),
(4, 7, '2021-07-02 21:45:02'),
(5, 4, '2021-07-02 21:45:02'),
(6, 3, '2021-07-02 21:45:02'),
(7, 1, '2021-07-02 21:45:02'),
(8, 7, '2021-07-02 21:45:02'),
(9, 3, '2021-07-02 21:45:02'),
(10, 2, '2021-07-02 21:45:02'),
(11, 6, '2021-07-02 21:45:02'),
(12, 4, '2021-07-02 21:45:02');

-- --------------------------------------------------------

--
-- Table structure for table `section_statistic_visit`
--

CREATE TABLE `section_statistic_visit` (
  `id` int(11) NOT NULL,
  `section_id` int(11) NOT NULL,
  `date_reg` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section_statistic_visit`
--

INSERT INTO `section_statistic_visit` (`id`, `section_id`, `date_reg`) VALUES
(1, 1, '2021-07-02 15:32:08'),
(2, 2, '2021-07-02 18:52:33'),
(3, 1, '2021-07-02 18:52:42'),
(4, 1, '2021-07-02 18:52:42'),
(5, 1, '2021-07-02 18:52:53'),
(6, 7, '2021-07-02 18:52:53'),
(7, 9, '2021-07-02 18:53:29'),
(8, 2, '2021-07-02 18:53:29'),
(9, 7, '2021-07-08 00:54:00'),
(10, 6, '2021-07-08 00:54:55');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(80) NOT NULL,
  `email` varchar(80) NOT NULL,
  `password` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`) VALUES
(1, 'Abc', 'abc@gmail.com', '123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `article_section`
--
ALTER TABLE `article_section`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `contact_message`
--
ALTER TABLE `contact_message`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `header_content`
--
ALTER TABLE `header_content`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `navbar_anchor`
--
ALTER TABLE `navbar_anchor`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `navbar_header`
--
ALTER TABLE `navbar_header`
  ADD PRIMARY KEY (`id`),
  ADD KEY `navbar_id` (`navbar_id`),
  ADD KEY `header_id` (`header_id`);

--
-- Indexes for table `section_statistic_like`
--
ALTER TABLE `section_statistic_like`
  ADD PRIMARY KEY (`id`),
  ADD KEY `section_id` (`section_id`);

--
-- Indexes for table `section_statistic_visit`
--
ALTER TABLE `section_statistic_visit`
  ADD PRIMARY KEY (`id`),
  ADD KEY `section_id` (`section_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `article_section`
--
ALTER TABLE `article_section`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `contact_message`
--
ALTER TABLE `contact_message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `header_content`
--
ALTER TABLE `header_content`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `navbar_anchor`
--
ALTER TABLE `navbar_anchor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `navbar_header`
--
ALTER TABLE `navbar_header`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `section_statistic_like`
--
ALTER TABLE `section_statistic_like`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `section_statistic_visit`
--
ALTER TABLE `section_statistic_visit`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `article_section`
--
ALTER TABLE `article_section`
  ADD CONSTRAINT `article_section_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `navbar_header`
--
ALTER TABLE `navbar_header`
  ADD CONSTRAINT `navbar_header_ibfk_1` FOREIGN KEY (`header_id`) REFERENCES `header_content` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `navbar_header_ibfk_2` FOREIGN KEY (`navbar_id`) REFERENCES `navbar_anchor` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `section_statistic_like`
--
ALTER TABLE `section_statistic_like`
  ADD CONSTRAINT `section_statistic_like_ibfk_1` FOREIGN KEY (`section_id`) REFERENCES `article_section` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `section_statistic_visit`
--
ALTER TABLE `section_statistic_visit`
  ADD CONSTRAINT `section_statistic_visit_ibfk_1` FOREIGN KEY (`section_id`) REFERENCES `article_section` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
