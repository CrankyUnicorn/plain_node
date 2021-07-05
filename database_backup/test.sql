-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:33063
-- Generation Time: Jul 06, 2021 at 12:52 AM
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
(4, 1, 'TITLE 4', 'SUBTITLE 4', 'CONTENT 4', 'not_the_droids.jpg', '2021-06-11 16:45:14'),
(5, 1, 'star trek', 'picard', 'is the capitain', 'not_the_droids.jpg', '2021-06-14 20:39:42'),
(6, 1, 'cenascenas', 'asdf', 'dasfa', 'not_the_droids.jpg', '2021-06-14 23:28:32'),
(7, 1, 'Flying Cockadoos', 'Yeahhhhh', 'black mambas attack', 'not_the_droids.jpg', '2021-06-14 23:29:46'),
(8, 1, 'dashu', 'duhias', 'haih', 'not_the_droids.jpg', '2021-06-14 23:30:17'),
(9, 1, 'cock', 'seisure', 'hail', 'not_the_droids.jpg', '2021-06-15 00:52:38'),
(12, 1, '123', '123', '123', 'not_the_droids.jpg', '2021-06-17 02:18:36'),
(14, 1, 'abc', 'sda', 'asd', 'not_the_droids.jpg', '2021-06-18 14:36:14');

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
(1, 'header_bg_04.jpg', 'Home', 'Welcome home.', 'home content'),
(2, 'header_bg_06.jpg', 'About', 'What\'s up!', '<a style=\'color:green;\' href=\'#\'>about content</a>'),
(3, 'header_bg_08.jpg', 'Contact', 'Hello...', 'contact content'),
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
(1, 'Home', 'frontpage?page=home'),
(2, 'About', 'frontpage?page=about'),
(3, 'Contact', 'frontpage?page=contact'),
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
(8, 2, '2021-07-02 18:53:29');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

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
