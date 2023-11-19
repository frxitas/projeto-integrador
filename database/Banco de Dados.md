## Documentação das Tabelas do Banco de Dados

### Tabela: PRODUTO

- **PROD_ID**: Identificador único do produto (Chave Primária)
- **PROD_NOME**: Nome do produto (Texto não nulo)
- **PROD_DESC**: Descrição do produto (Texto não nulo)
- **PROD_VALOR**: Valor do produto (Número decimal não nulo)
- **PROD_UMED_ID**: Chave estrangeira referenciando a tabela PRODUTO_UNIDADE_MEDIDA
- **PROD_GRUPO_ID**: Chave estrangeira referenciando a tabela PRODUTO_GRUPO
- **PROD_FABRICANTE_ID**: Chave estrangeira referenciando a tabela PRODUTO_FABRICANTE

### Tabela: PRODUTO_UNIDADE_MEDIDA

- **UMED_ID**: Identificador único da unidade de medida (Chave Primária)
- **UMED_NOME**: Nome da unidade de medida (Texto não nulo)
- **UMED_DESC**: Descrição da unidade de medida (Texto)

### Tabela: PRODUTO_CATEGORIA

- **CATEGORIA_ID**: Identificador único da categoria (Chave Primária)
- **CATEGORIA_NOME**: Nome da categoria (Texto não nulo)
- **CATEGORIA_DESC**: Descrição da categoria (Texto)

### Tabela: PRODUTO_GRUPO

- **GRUPO_ID**: Identificador único do grupo (Chave Primária)
- **GRUPO_NOME**: Nome do grupo (Texto não nulo)
- **GRUPO_DESC**: Descrição do grupo (Texto não nulo)
- **GRUPO_CATEGORIA_ID**: Chave estrangeira referenciando a tabela PRODUTO_CATEGORIA

### Tabela: PRODUTO_FABRICANTE

- **FABRICANTE_ID**: Identificador único do fabricante (Chave Primária)
- **FABRICANTE_NOME**: Nome do fabricante (Texto não nulo)
- **FABRICANTE_CNPJ**: CNPJ do fabricante (Texto não nulo)

### Relacionamentos:

- **PRODUTO.PROD_UMED_ID** -> **PRODUTO_UNIDADE_MEDIDA.UMED_ID**
  - Relacionamento entre produtos e unidades de medida.

- **PRODUTO.PROD_GRUPO_ID** -> **PRODUTO_GRUPO.GRUPO_ID**
  - Relacionamento entre produtos e grupos.

- **PRODUTO.PROD_FABRICANTE_ID** -> **PRODUTO_FABRICANTE.FABRICANTE_ID**
  - Relacionamento entre produtos e fabricantes.

- **PRODUTO_GRUPO.GRUPO_CATEGORIA_ID** -> **PRODUTO_CATEGORIA.CATEGORIA_ID**
  - Relacionamento entre grupos de produtos e categorias.
