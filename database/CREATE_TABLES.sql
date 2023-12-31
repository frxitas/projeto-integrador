CREATE TABLE PRODUTO_UNIDADE_MEDIDA
(
    UMED_ID INTEGER UNIQUE,
    UMED_NOME TEXT NOT NULL,
    UMED_DESC TEXT,
    CONSTRAINT PK_UMED_ID PRIMARY KEY (UMED_ID)
);

CREATE TABLE PRODUTO_CATEGORIA
(
    CATEGORIA_ID INTEGER UNIQUE,
    CATEGORIA_NOME TEXT NOT NULL,
    CATEGORIA_DESC TEXT,
    CONSTRAINT PK_CATEGORIA_ID PRIMARY KEY (CATEGORIA_ID)
);

CREATE TABLE PRODUTO_GRUPO
(
    GRUPO_ID INTEGER NOT NULL UNIQUE,
    GRUPO_NOME TEXT NOT NULL,
    GRUPO_DESC TEXT NOT NULL,
    GRUPO_CATEGORIA_ID INTEGER NOT NULL,
    CONSTRAINT PK_GRUPO_ID PRIMARY KEY (GRUPO_ID),
    CONSTRAINT FK_GRUPO_CATEGORIA FOREIGN KEY (GRUPO_CATEGORIA_ID) REFERENCES PRODUTO_CATEGORIA(CATEGORIA_ID)
);

CREATE TABLE PRODUTO_FABRICANTE
(
    FABRICANTE_ID INTEGER NOT NULL UNIQUE,
    FABRICANTE_NOME TEXT NOT NULL,
    FABRICANTE_CNPJ TEXT NOT NULL,
    CONSTRAINT PK_FABRICANTE_ID PRIMARY KEY (FABRICANTE_ID)
);

CREATE TABLE PRODUTO
(
    PROD_ID INTEGER UNIQUE,
    PROD_NOME TEXT NOT NULL,
    PROD_DESC TEXT NOT NULL,
    PROD_VALOR DECIMAL(10, 3) NOT NULL,
    PROD_UMED_ID INTEGER NOT NULL,
    PROD_GRUPO_ID INTEGER NOT NULL,
    PROD_FABRICANTE_ID INTEGER NOT NULL,
    CONSTRAINT PK_PROD_ID PRIMARY KEY (PROD_ID),
    CONSTRAINT FK_PROD_UMED_ID FOREIGN KEY (PROD_UMED_ID) REFERENCES PRODUTO_UNIDADE_MEDIDA(UMED_ID),
    CONSTRAINT FK_PROD_GRUPO_ID FOREIGN KEY (PROD_GRUPO_ID) REFERENCES PRODUTO_GRUPO(GRUPO_ID),
    CONSTRAINT FK_PROD_FABRICANTE_ID FOREIGN KEY (PROD_FABRICANTE_ID) REFERENCES PRODUTO_FABRICANTE(FABRICANTE_ID),
    CONSTRAINT VERIF_VALOR_POSITIVO CHECK (PROD_VALOR>= 0)
);