## Documentação do Projeto

### Introdução

Este documento descreve o projeto de desenvolvimento de um sistema de gerenciamento de estoque para uma faculdade. O objetivo deste projeto é criar um sistema que permita à faculdade gerenciar seu estoque de forma eficiente e eficaz.

### Escopo

O sistema de gerenciamento de estoque será desenvolvido para a faculdade de XYΖ. O sistema permitirá que a faculdade gerencie seu estoque de produtos, incluindo a adição de novos produtos, a atualização de informações de produtos existentes e a remoção de produtos do estoque. O sistema também permitirá que a instituição gere relatórios sobre o estoque de produtos.

### Requisitos Funcionais

* O sistema deve permitir que a faculdade adicione novos produtos ao estoque.
* O sistema deve permitir que a faculdade atualize informações de produtos existentes no estoque.
* O sistema deve permitir que a faculdade remova produtos do estoque.
* O sistema deve permitir que a faculdade gere relatórios sobre o estoque de produtos.

### Requisitos Não Funcionais

* O sistema deve ser fácil de usar e intuitivo.
* O sistema deve ser seguro e protegido contra acesso não autorizado.
* O sistema deve ser escalável e capaz de lidar com grandes volumes de dados.


### Definição de Personas
**Administradores Escolares:** Podem usar o software para gerenciar a escola de forma eficiente. Isso pode incluir tarefas como agendar aulas, gerenciar o calendário escolar, acompanhar o desempenho dos alunos e professores, gerenciar a admissão e matrícula de alunos, e comunicar-se com os pais. Eles também podem usar o software para analisar dados e gerar relatórios que ajudem na tomada de decisões.
- Pontos de Contato: Login no software, painel de controle, funcionalidades de gerenciamento.
- Etapas: Autenticação, visualização do painel de controle, seleção e execução de tarefas.
- Emoções: Sentimento de controle e eficiência.
- Objetivos: Gerenciar a escola de forma eficiente.
- Necessidades: Interface intuitiva, acesso rápido às funcionalidades.
- Pontos de Dor: Dificuldade em encontrar funcionalidades, lentidão do software.

**Professores:** Os professores podem usar o software para planejar suas aulas, atribuir tarefas, avaliar o desempenho dos alunos, e se comunicar com os alunos e pais. Eles também podem usar o software para acessar recursos de ensino e participar de programas de desenvolvimento profissional.
- Pontos de Contato: Acesso aos recursos de ensino, planejamento de aulas, comunicação com alunos e pais.
- Etapas: Acesso aos recursos, criação de planos de aula, atribuição de tarefas, avaliação do desempenho dos alunos, comunicação com alunos e pais.
- Emoções: Sentimento de preparação e organização.
- Objetivos: Preparar aulas eficazes, avaliar o desempenho dos alunos, se comunicar efetivamente.
- Necessidades: Acesso fácil a recursos, ferramentas de planejamento intuitivas, ferramentas de comunicação eficazes.
- Pontos de Dor: Falta de recursos adequados, interface complicada, dificuldade na comunicação.


**Equipes Responsáveis pela Logística:** Essas equipes podem usar o software para gerenciar a infraestrutura da escola, como salas de aula, laboratórios, bibliotecas etc. Eles também podem usar o software para gerenciar o transporte escolar, a cantina, e outros serviços auxiliares. Além disso, eles podem usar o software para acompanhar o uso de recursos e planejar a manutenção e reparos necessários.

- Pontos de Contato: Gerenciamento de infraestrutura, planejamento de manutenção, gerenciamento de serviços auxiliares.
- Etapas: Verificação do status da infraestrutura, planejamento de manutenção, gerenciamento de serviços auxiliares.
- Emoções: Sentimento de responsabilidade e eficácia.
- Objetivos: Manter a infraestrutura da escola em bom estado, planejar e executar manutenção eficaz, gerenciar serviços auxiliares eficientemente.
- Necessidades: Atualizações de status em tempo real, ferramentas de planejamento eficazes, informações precisas sobre os serviços auxiliares.
- Pontos de Dor: Falta de informações atualizadas, dificuldade em planejar manutenção, falta de controle sobre os serviços auxiliares.
Descrição sobre o uso de serviços de terceiros



### Tecnologias Utilizadas

As seguintes tecnologias serão utilizadas no desenvolvimento do sistema:
#### Linguagem de programação JavaScript

A escolha de JavaScript como linguagem principal para o desenvolvimento de um sistema de software traz diversas vantagens, como:

* **Versatilidade e Ampla Adoção:** Uso em Frontend e Backend: JavaScript é a única linguagem que pode ser executada nativamente tanto no frontend (navegadores) quanto no backend (Node.js). Isso permite uma maior uniformidade e consistência no desenvolvimento.
* **Ecossistema Rico:** A vasta quantidade de bibliotecas e frameworks disponíveis (como React para frontend e Express para backend) facilita o desenvolvimento rápido e eficiente de aplicações web.
* **Node.js:** O uso do Node.js no backend proporciona alta performance graças ao seu modelo de execução baseado em eventos e não bloqueante, ideal para aplicações de alta concorrência.
* **Ferramentas de Desenvolvimento:** O NPM é o maior repositório de pacotes do mundo, permitindo a fácil integração de pacotes de terceiros e o gerenciamento eficiente de dependências.
* **Desenvolvimento Rápido:** Ferramentas e frameworks como Express.js permitem a criação rápida de APIs RESTful e outras funcionalidades de backend.

##### Principais Frameworks
* **Sequelize ORM:** A utilização do Sequelize para modelagem e interação com o banco de dados SQL mostra a capacidade de JavaScript de se integrar com bases de dados de maneira eficiente e estruturada.
* **Express.js:** A configuração de rotas e controladores utilizando Express.js demonstra como o desenvolvimento de servidores web e APIs RESTful pode ser direto e intuitivo.
* **Nodemailer:** A integração com serviços de email utilizando Nodemailer destaca a facilidade de JavaScript em interagir com serviços externos e realizar tarefas assíncronas.


<br>
<br>
<br>
<br>


####  Banco de dados SQLite;

Para permitir maior flexibilidade, optamos pelo uso do SQLite como tecnologia de banco de dados.
O banco de dados ficou com a seguinte definição de tabelas e atributos

##### Produtos

<table><thead><tr><th>Nome do Atributo</th><th>Tipo de Dado</th><th>Descrição</th><th>Tipo de Chave</th></tr></thead><tbody><tr><td><code>PROD_ID</code></td><td><code>INTEGER</code></td><td>Identificador único do produto</td><td>Chave Primária</td></tr><tr><td><code>PROD_NOME</code></td><td><code>STRING</code></td><td>Nome do produto</td><td>Nenhuma</td></tr><tr><td><code>PROD_DESC</code></td><td><code>STRING</code></td><td>Descrição do produto</td><td>Nenhuma</td></tr><tr><td><code>PROD_VALOR</code></td><td><code>DECIMAL</code></td><td>Valor do produto</td><td>Nenhuma</td></tr><tr><td><code>PROD_UMED_ID</code></td><td><code>INTEGER</code></td><td>Identificador da unidade de medida</td><td>Chave Estrangeira</td></tr><tr><td><code>PROD_GRUPO_ID</code></td><td><code>INTEGER</code></td><td>Identificador do grupo do produto</td><td>Chave Estrangeira</td></tr><tr><td><code>PROD_FABRICANTE_ID</code></td><td><code>INTEGER</code></td><td>Identificador do fabricante do produto</td><td>Chave Estrangeira</td></tr></tbody></table>

##### Grupo de Produtos

<table><thead><tr><th>Nome do Atributo</th><th>Tipo de Dado</th><th>Descrição</th><th>Tipo de Chave</th></tr></thead><tbody><tr><td><code>GRUPO_ID</code></td><td><code>INTEGER</code></td><td>Identificador único do grupo</td><td>Chave Primária</td></tr><tr><td><code>GRUPO_NOME</code></td><td><code>STRING</code></td><td>Nome do grupo</td><td>Nenhuma</td></tr><tr><td><code>GRUPO_DESC</code></td><td><code>STRING</code></td><td>Descrição do grupo</td><td>Nenhuma</td></tr><tr><td><code>GRUPO_CATEGORIA_ID</code></td><td><code>INTEGER</code></td><td>Identificador da categoria do grupo</td><td>Nenhuma</td></tr></tbody></table>

##### Fabricante
<table><thead><tr><th>Nome do Atributo</th><th>Tipo de Dado</th><th>Descrição</th><th>Tipo de Chave</th></tr></thead><tbody><tr><td><code>FABRICANTE_ID</code></td><td><code>INTEGER</code></td><td>Identificador único do fabricante</td><td>Chave Primária</td></tr><tr><td><code>FABRICANTE_NOME</code></td><td><code>STRING</code></td><td>Nome do fabricante</td><td>Nenhuma</td></tr><tr><td><code>FABRICANTE_CNPJ</code></td><td><code>STRING</code></td><td>CNPJ do fabricante</td><td>Nenhuma</td></tr></tbody></table>

##### Unidades de Medida
<table><thead><tr><th>Nome do Atributo</th><th>Tipo de Dado</th><th>Descrição</th><th>Tipo de Chave</th></tr></thead><tbody><tr><td><code>UMED_ID</code></td><td><code>INTEGER</code></td><td>Identificador único da unidade de medida</td><td>Chave Primária</td></tr><tr><td><code>UMED_NOME</code></td><td><code>STRING</code></td><td>Nome da unidade de medida</td><td>Nenhuma</td></tr><tr><td><code>UMED_DESC</code></td><td><code>STRING</code></td><td>Descrição da unidade de medida</td><td>Nenhuma</td></tr></tbody></table>

##### Ticket
<table><thead><tr><th>Nome do Atributo</th><th>Tipo de Dado</th><th>Descrição</th><th>Tipo de Chave</th></tr></thead><tbody><tr><td><code>TICKET_ID</code></td><td><code>INTEGER</code></td><td>Chave primária com auto incremento</td><td>Primária</td></tr><tr><td><code>PRODUCT_ID</code></td><td><code>UUID</code></td><td>ID do produto associado</td><td>Estrangeira</td></tr><tr><td><code>TICKET_CONTACT</code></td><td><code>STRING</code></td><td>Contato do ticket</td><td>Nenhuma</td></tr><tr><td><code>TICKET_SUBJECT</code></td><td><code>STRING</code></td><td>Assunto do ticket</td><td>Nenhuma</td></tr><tr><td><code>TICKET_DESCRIPTION</code></td><td><code>STRING</code></td><td>Descrição do ticket</td><td>Nenhuma</td></tr><tr><td><code>TICKET_TYPE</code></td><td><code>INTEGER</code></td><td>Tipo do ticket</td><td>Nenhuma</td></tr><tr><td><code>TICKET_STATUS</code></td><td><code>INTEGER</code></td><td>Status do ticket</td><td>Nenhuma</td></tr><tr><td><code>TICKET_PRIORITY</code></td><td><code>INTEGER</code></td><td>Prioridade do ticket</td><td>Nenhuma</td></tr><tr><td><code>CREATED_AT</code></td><td><code>INTEGER</code></td><td>Data de criação do ticket</td><td>Nenhuma</td></tr><tr><td><code>UPDATED_AT</code></td><td><code>INTEGER</code></td><td>Data de atualização do ticket</td><td>Nenhuma</td></tr></tbody></table>

##### Prioridade do Ticket

<table><thead><tr><th>Nome do Atributo</th><th>Tipo de Dado</th><th>Descrição</th><th>Tipo de Chave</th></tr></thead><tbody><tr><td><code>TICKET_PRIORITY_ID</code></td><td><code>INTEGER</code></td><td>Identificador do ticket de prioridade</td><td>Primária</td></tr><tr><td><code>TICKET_PRIORITY_NAME</code></td><td><code>STRING</code></td><td>Nome da prioridade do ticket</td><td>Nenhuma</td></tr></tbody></table>

##### Status do Ticket
<table><thead><tr><th>Nome do Atributo</th><th>Tipo de Dado</th><th>Descrição</th><th>Tipo de Chave</th></tr></thead><tbody><tr><td><code>TICKET_STATUS_ID</code></td><td><code>INTEGER</code></td><td>Chave primária</td><td>Primária</td></tr><tr><td><code>TICKET_STATUS_NAME</code></td><td><code>STRING</code></td><td>Nome do status do ticket</td><td>Nenhuma</td></tr></tbody></table>


##### Tipo de Ticket
<table><thead><tr><th>Nome do Atributo</th><th>Tipo de Dado</th><th>Descrição</th><th>Tipo de Chave</th></tr></thead><tbody><tr><td><code>TICKET_TYPE_ID</code></td><td><code>INTEGER</code></td><td>Chave primária</td><td>Primária</td></tr><tr><td><code>TICKET_TYPE_NAME</code></td><td><code>STRING</code></td><td>Nome do tipo de ticket</td><td>Nenhuma</td></tr></tbody></table>

### Arquitetura do Sistema

O sistema foi desenvolvido utilizando a arquitetura MVC (Model-View-Controller). Essa arquitetura separa a lógica de negócio da interface do usuário, permitindo que cada componente seja desenvolvido e testado independentemente.

#### Modelos

Os modelos são responsáveis por organizar a lógica de negócios referente a como os dados serão manipulados, sendo responsável por armazenar e recuperar informações do banco de dados. O modelo também é responsável por validar as informações inseridas pelo usuário e garantir que elas estejam corretas. Desta forma, temos um modelo para cada uma das tabelas listadas.

<br>
<br>
<br>
<br>


#### Controladores

Atua como um intermediário entre o Model e a View. Ele recebe a entrada do usuário através da View, processa essa entrada (eventualmente modificando o estado do Model), e determina qual View deve ser atualizada ou exibida. O Controller coordena a comunicação entre o Model e a View para garantir que as ações do usuário resultem nas respostas adequadas da interface. Além disso, o Controller é responsável por definir as Routes (rotas) da aplicação, que mapeiam URLs específicas para funções ou métodos específicos do Controller. As rotas determinam como as solicitações de entrada (geralmente de navegadores web) são direcionadas para os controladores apropriados, garantindo que cada URL execute a lógica correta da aplicação.
Neste projeto, temos 4 principais controladores: GroupsController, ManufacturersController, ProductsController e UnitiesController.

Como a tecnicidade dos  CRUDs se mantém similar em todos os controladores, podemos detalhar os métodos do controlador de Produtos por ser mais completo.
##### Métodos CRUD do Controller de Produtos
* **all:** Obtém todos os produtos do banco de dados e retorna-os em formato JSON com status 200. Em caso de erro, retorna status 400 e o erro.
* **one:** Obtém um produto específico pelo PROD_ID passado como parâmetro na URL. Caso encontrado, retorna o produto com status 200. Em caso de erro ou não encontrado, retorna status 400.
* **create:** Cria um novo produto com base nos dados fornecidos no corpo da requisição. Caso encontrado, retorna o produto com status 200. Em caso de erro ou não encontrado, retorna status 400.
* **update:** Atualiza um produto específico pelo PROD_ID passado como parâmetro na URL com os dados fornecidos no corpo da requisição. Caso encontrado, retorna o produto com status 200. Em caso de erro ou não encontrado, retorna status 400.
* **delete:** Exclui um produto específico pelo PROD_ID passado como parâmetro na URL. Caso encontrado, retorna o produto com status 200. Em caso de erro ou não encontrado, retorna status 400.

#### Serviços e Utilitários
* **Integrações de API:** O Mailtrap pode se integrar à API do PayPal para facilitar as transações financeiras, como o pagamento de mensalidades escolares.
* **Serviços de Autenticação:** O SMTP pode permitir que os usuários façam login usando suas contas do Google, facilitando o processo de autenticação e aumentando a segurança.
* **Serviços de Armazenamento em Nuvem:** O Mailtrap pode usar o Amazon S3 para armazenar e recuperar dados, como informações de alunos, planos de aula e notas.
* **Serviços de Email e SMS:** Serviço de envio de E-mail: A aplicação oferece o serviço de abertura de chamados (em tickets) para manutenção e suporte de materiais escolares e de laboratório (informática, artes, ciências etc.). A cada abertura de um novo chamado, feita pela instituição escolar, um e-mail de confirmação é enviado para a própria instituição e outro é destinado ao suporte. Para realizar o envio de e-mails é necessário um servidor SMTP (Simple Mail Transfer Protocol). O serviço escolhido foi o Mailtrap, que oferece um pacote de teste gratuito, ideal para o desenvolvimento da aplicação e realização de testes. Outro motivo da escolha pelo Mailtrap é o suporte e integração com Node.js e a biblioteca nodemailer, utilizados para desenvolver a aplicação.
* **Ferramentas de Análise:** O Mailtrap pode usar o Google Analytics para entender melhor como os usuários estão interagindo com o software e identificar áreas para melhoria.

#### Visualização

A camada de apresentação que exibe os dados ao usuário. Ela é responsável por renderizar a interface do usuário e por exibir os dados fornecidos pelo Model de maneira compreensível. A View também captura a entrada do usuário e a encaminha ao Controller.

* Tela inicial
![alt text](image.png)

<br>
<br>
<br>
<br>


* Tela para Adicionar produto
![alt text](image-1.png)

<br>

* Tela de Visualização do Produto
![alt text](image-8.png)

<br>
<br>

* Tela de Chamados
![alt text](image-3.png)

<br>

* Tela de Novo Chamado
![alt text](image-7.png)

<br>
<br>
<br>

### Colaboradores
Diego Delgado dos Reis - Documentação
Felipe Micaroni - Apresentação
Guilherme Freitas Rocha - Front-end
Guilherme Henrique Totti Benatti - Back-end
Kelvin Coelho Loiola - Banco de dados/Documentação
Vinícius Carmo Fonseca - Front-end

