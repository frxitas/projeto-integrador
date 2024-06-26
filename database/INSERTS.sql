INSERT INTO
  PRODUTO_UNIDADE_MEDIDA (UMED_ID, UMED_NOME, UMED_DESC)
VALUES
  (1, 'Unidade', 'Unidade simples para contagem'),
  (2, 'Metro', 'Medida de comprimento'),
  (3, 'Quilograma', 'Medida de peso'),
  (4, 'Litro', 'Medida de volume'),
  (
    5,
    'Pacote',
    'Unidade de medida para itens embalados'
  ),
  (
    6,
    'Caixa',
    'Unidade de medida para itens em caixas'
  ),
  (7, 'Hora', 'Medida de tempo'),
  (
    8,
    'Folha',
    'Unidade de medida para papel ou material impresso'
  ),
  (
    9,
    'Peça',
    'Unidade genérica para um item individual'
  ),
  (
    10,
    'Conjunto',
    'Grupo de itens vendidos juntos como uma unidade'
  );

INSERT INTO
  PRODUTO_CATEGORIA (CATEGORIA_ID, CATEGORIA_NOME, CATEGORIA_DESC)
VALUES
  (
    1,
    'Livros e Materiais Didáticos',
    'Categoria para livros e materiais utilizados na educação'
  ),
  (
    2,
    'Equipamentos e Tecnologia',
    'Categoria para equipamentos e dispositivos tecnológicos educacionais'
  ),
  (
    3,
    'Material de Escritório e Papelaria',
    'Categoria para materiais de escritório e papelaria utilizados em atividades educacionais'
  ),
  (
    4,
    'Ferramentas e Instrumentos Educacionais',
    'Categoria para ferramentas e instrumentos usados para educação'
  ),
  (
    5,
    'Kits e Conjuntos de Aprendizado',
    'Categoria para kits e conjuntos de aprendizado utilizados no ensino'
  ),
  (
    6,
    'Recursos Digitais e Softwares Educativos',
    'Categoria para recursos digitais e softwares utilizados na educação'
  ),
  (
    7,
    'Suprimentos para Laboratório',
    'Categoria para suprimentos utilizados em laboratórios educacionais'
  ),
  (
    8,
    'Acessórios e Materiais Diversos',
    'Categoria para acessórios e materiais diversos relacionados à educação'
  ),
  (
    9,
    'Categorias a serem preenchidas',
    'Categoria reservada para futuros preenchimentos'
  ),
  (
    10,
    'Outra categoria',
    'Categoria genérica adicional para produtos educacionais'
  );

INSERT INTO
  PRODUTO_GRUPO (
    GRUPO_ID,
    GRUPO_NOME,
    GRUPO_DESC,
    GRUPO_CATEGORIA_ID
  )
VALUES
  (
    1,
    'Laptops Universitários',
    'Laptops específicos para uso acadêmico',
    2
  ),
  (
    2,
    'Kits de Biologia',
    'Kits para estudos práticos de biologia',
    4
  ),
  (
    3,
    'Canetas e Lápis',
    'Materiais básicos de escrita',
    3
  ),
  (
    4,
    'Softwares de Matemática',
    'Softwares especializados em matemática',
    6
  ),
  (
    5,
    'Microscópios Avançados',
    'Equipamentos de alta precisão para laboratório',
    7
  ),
  (
    6,
    'Pincéis e Tintas',
    'Materiais artísticos para pintura',
    8
  ),
  (
    7,
    'Teclados Musicais',
    'Instrumentos musicais - teclados',
    5
  ),
  (
    8,
    'Máquinas de Experimentos Químicos',
    'Equipamentos específicos para química',
    7
  ),
  (
    9,
    'Kits de Robótica',
    'Kits para aprendizado de robótica',
    4
  ),
  (
    10,
    'Software de História',
    'Softwares para estudo de história',
    6
  ),
  (
    11,
    'Óculos de Proteção para Laboratório',
    'Equipamentos de segurança para laboratório',
    7
  ),
  (
    12,
    'Mapas e Globos',
    'Materiais para estudos geográficos',
    8
  ),
  (
    13,
    'Bolas e Equipamentos Esportivos',
    'Equipamentos para atividades esportivas',
    5
  ),
  (
    14,
    'Calculadoras Científicas',
    'Calculadoras específicas para uso acadêmico',
    2
  );

INSERT INTO
  PRODUTO_FABRICANTE (FABRICANTE_ID, FABRICANTE_NOME, FABRICANTE_CNPJ)
VALUES
  (1, 'Editora Educativa X', '1234567890001'),
  (2, 'Tecnologia Educação 2000', '2345678900001'),
  (
    3,
    'Equipamentos Acadêmicos Inc.',
    '3456789000001'
  ),
  (4, 'Papelaria Escolar LTDA', '4567890010001'),
  (
    5,
    'Instrumentos Científicos S/A',
    '5678900100001'
  ),
  (6, 'Didáticos & Cia.', '6789001000001'),
  (7, 'Mundo Digital Educação', '7890010000010'),
  (
    8,
    'Laboratórios Avançados Ltda.',
    '8900100000100'
  ),
  (9, 'Artigos Escolares Diversos', '9001000001000'),
  (
    10,
    'Indústria de Livros Instrutivos',
    '1000000010000'
  ),
  (
    11,
    'Tecnologia para Ensino Ltda.',
    '2000000100000'
  ),
  (
    12,
    'Fabricante de Materiais Didáticos Aprendizagem',
    '3000001000000'
  ),
  (
    13,
    'Softwares Pedagógicos Avançados',
    '4000010000000'
  ),
  (
    14,
    'Laboratórios Científicos e Experimentais',
    '5000100000000'
  ),
  (15, 'Papelaria Criativa', '6001000000000'),
  (16, 'Editora Educação Global', '7000000000000'),
  (
    17,
    'Tecnologia Educacional Futurista',
    '8000000000000'
  ),
  (
    18,
    'Ferramentas para Aprendizado Ltda.',
    '9000000000000'
  ),
  (
    19,
    'Materiais Escolares Multidisciplinares',
    '10000000000000'
  ),
  (20, 'Inovação Educacional 360', '11000000000000');

INSERT INTO
  PRODUTO (
    PROD_ID,
    PROD_NOME,
    PROD_DESC,
    PROD_VALOR,
    PROD_UMED_ID,
    PROD_GRUPO_ID,
    PROD_FABRICANTE_ID
  )
VALUES
  (
    1,
    'Laptop Universitário Modelo A',
    'Laptop para uso acadêmico',
    1500.00,
    2,
    1,
    1
  ),
  (
    2,
    'Kit de Biologia Básica',
    'Kit para estudos iniciais de biologia',
    200.00,
    1,
    2,
    2
  ),
  (
    3,
    'Caneta Esferográfica Preta',
    'Caneta para escrita cotidiana',
    2.50,
    8,
    3,
    4
  ),
  (
    4,
    'Software de Matemática Avançada',
    'Software para cálculos matemáticos complexos',
    120.00,
    6,
    4,
    3
  ),
  (
    5,
    'Microscópio de Alta Resolução',
    'Microscópio para pesquisas avançadas',
    2500.00,
    7,
    5,
    5
  ),
  (
    6,
    'Conjunto de Pincéis e Tintas',
    'Conjunto artístico para pintura',
    30.00,
    8,
    6,
    6
  ),
  (
    7,
    'Teclado Musical Profissional',
    'Teclado para estudo e prática musical',
    800.00,
    7,
    7,
    7
  ),
  (
    8,
    'Máquina de Experimentos Químicos',
    'Equipamento para experimentos em laboratório',
    350.00,
    7,
    8,
    8
  ),
  (
    9,
    'Kit de Robótica Educativa',
    'Kit para aprendizado de robótica',
    100.00,
    1,
    9,
    9
  ),
  (
    10,
    'Software Interativo de História',
    'Software para ensino interativo de história',
    50.00,
    6,
    10,
    10
  ),
  (
    11,
    'Óculos de Proteção para Laboratório',
    'Equipamento de segurança para laboratório',
    15.00,
    1,
    11,
    8
  ),
  (
    12,
    'Mapa Mundi em Papel',
    'Mapa para estudos geográficos',
    10.00,
    8,
    12,
    4
  ),
  (
    13,
    'Bola de Futebol Oficial',
    'Bola para atividades esportivas',
    25.00,
    1,
    13,
    5
  ),
  (
    14,
    'Calculadora Científica Básica',
    'Calculadora para cálculos simples',
    20.00,
    1,
    14,
    1
  ),
  (
    15,
    'Laptop Universitário Modelo B',
    'Laptop para uso acadêmico',
    1700.00,
    2,
    1,
    1
  ),
  (
    16,
    'Kit de Biologia Avançada',
    'Kit para estudos avançados de biologia',
    300.00,
    1,
    2,
    2
  ),
  (
    17,
    'Caneta Esferográfica Azul',
    'Caneta para escrita cotidiana',
    2.50,
    8,
    3,
    4
  ),
  (
    18,
    'Software de Estatística',
    'Software para análise estatística',
    150.00,
    6,
    4,
    3
  ),
  (
    19,
    'Microscópio de Pesquisa',
    'Microscópio de alta precisão',
    3000.00,
    7,
    5,
    5
  ),
  (
    20,
    'Conjunto de Pincéis para Pintura em Aquarela',
    'Conjunto artístico para aquarela',
    40.00,
    8,
    6,
    6
  ),
  (
    21,
    'Teclado Musical para Iniciantes',
    'Teclado para iniciantes em música',
    200.00,
    7,
    7,
    7
  ),
  (
    22,
    'Kits de Experimentos Químicos Avançados',
    'Kits para experimentos avançados',
    200.00,
    1,
    8,
    8
  ),
  (
    23,
    'Kit de Robótica Avançada',
    'Kit para robótica avançada',
    150.00,
    1,
    9,
    9
  ),
  (
    24,
    'Software de Geografia Interativa',
    'Software para estudo interativo de geografia',
    60.00,
    6,
    10,
    10
  ),
  (
    25,
    'Óculos de Segurança Especializados para Laboratório',
    'Equipamento de segurança para laboratório',
    20.00,
    1,
    11,
    8
  ),
  (
    26,
    'Mapa Mundi em Tecido',
    'Mapa para estudos geográficos',
    15.00,
    8,
    12,
    4
  ),
  (
    27,
    'Bola de Basquete Oficial',
    'Bola para atividades esportivas',
    30.00,
    1,
    13,
    5
  ),
  (
    28,
    'Calculadora Científica Avançada',
    'Calculadora para cálculos complexos',
    60.00,
    1,
    14,
    2
  ),
  (
    29,
    'Laptop Universitário Modelo C',
    'Laptop para uso acadêmico',
    1800.00,
    2,
    1,
    1
  ),
  (
    30,
    'Kit de Biologia Avançada II',
    'Kit para estudos avançados de biologia',
    350.00,
    1,
    2,
    2
  ),
  (
    31,
    'Caneta Esferográfica Vermelha',
    'Caneta para escrita cotidiana',
    2.50,
    8,
    3,
    4
  ),
  (
    32,
    'Software de Física',
    'Software para estudos de física avançada',
    180.00,
    6,
    4,
    3
  ),
  (
    33,
    'Microscópio de Alta Potência',
    'Microscópio para pesquisas avançadas',
    2800.00,
    7,
    5,
    5
  ),
  (
    34,
    'Conjunto de Pincéis Profissionais',
    'Conjunto artístico profissional',
    50.00,
    8,
    6,
    6
  ),
  (
    35,
    'Teclado Musical Avançado',
    'Teclado profissional para música',
    1200.00,
    7,
    7,
    7
  ),
  (
    36,
    'Equipamento de Experimentos Químicos',
    'Equipamento para experimentos em laboratório',
    400.00,
    7,
    8,
    8
  ),
  (
    37,
    'Kit de Robótica Avançada II',
    'Kit para robótica avançada',
    200.00,
    1,
    9,
    9
  ),
  (
    38,
    'Software de História do Brasil',
    'Software para estudo de história do Brasil',
    70.00,
    6,
    10,
    10
  ),
  (
    39,
    'Óculos de Proteção para Laboratório - Edição Especial',
    'Equipamento de segurança para laboratório',
    25.00,
    1,
    11,
    8
  ),
  (
    40,
    'Mapa Mundi Gigante',
    'Mapa para estudos geográficos',
    20.00,
    8,
    12,
    4
  ),
  (
    41,
    'Bola de Vôlei Oficial',
    'Bola para atividades esportivas',
    35.00,
    1,
    13,
    5
  ),
  (
    42,
    'Calculadora Financeira',
    'Calculadora para cálculos financeiros',
    80.00,
    1,
    14,
    1
  ),
  (
    43,
    'Laptop Universitário Modelo D',
    'Laptop para uso acadêmico',
    1900.00,
    2,
    1,
    1
  ),
  (
    44,
    'Kit de Biologia para Laboratório',
    'Kit para estudos de biologia em laboratório',
    400.00,
    1,
    2,
    2
  ),
  (
    45,
    'Caneta Esferográfica Verde',
    'Caneta para escrita cotidiana',
    2.50,
    8,
    3,
    4
  ),
  (
    46,
    'Software de Química Orgânica',
    'Software para estudos de química orgânica',
    200.00,
    6,
    4,
    3
  ),
  (
    47,
    'Microscópio de Pesquisa Avançada',
    'Microscópio de alta precisão',
    3200.00,
    7,
    5,
    5
  ),
  (
    48,
    'Conjunto de Pincéis para Acrílico',
    'Conjunto artístico para pintura em acrílico',
    60.00,
    8,
    6,
    6
  ),
  (
    49,
    'Teclado Musical Intermediário',
    'Teclado intermediário para música',
    600.00,
    7,
    7,
    7
  ),
  (
    50,
    'Máquina de Experimentos Químicos Avançados II',
    'Equipamento para experimentos em laboratório',
    500.00,
    7,
    8,
    8
  ),
  (
    51,
    'Kit de Robótica para Iniciantes',
    'Kit introdutório para estudo de robótica',
    80.00,
    1,
    9,
    9
  ),
  (
    52,
    'Software de Geografia Mundial',
    'Software para estudo de geografia mundial',
    90.00,
    6,
    10,
    10
  ),
  (
    53,
    'Óculos de Segurança para Laboratório - Versão Estudantil',
    'Equipamento de segurança para laboratório',
    18.00,
    1,
    11,
    8
  ),
  (
    54,
    'Mapa Mundi de Parede',
    'Mapa decorativo para estudos geográficos',
    25.00,
    8,
    12,
    4
  ),
  (
    55,
    'Bola de Rugby Oficial',
    'Bola para prática de rugby',
    40.00,
    1,
    13,
    5
  ),
  (
    56,
    'Calculadora Científica com Funções Avançadas',
    'Calculadora para cálculos avançados',
    100.00,
    1,
    14,
    2
  ),
  (
    57,
    'Laptop Universitário Modelo E',
    'Laptop para uso acadêmico',
    2000.00,
    2,
    1,
    1
  ),
  (
    58,
    'Kit de Biologia para Avançados',
    'Kit para estudos avançados de biologia',
    500.00,
    1,
    2,
    2
  ),
  (
    59,
    'Caneta Esferográfica Roxa',
    'Caneta para escrita cotidiana',
    2.50,
    8,
    3,
    4
  ),
  (
    60,
    'Software de Física Quântica',
    'Software para estudos de física quântica',
    250.00,
    6,
    4,
    3
  ),
  (
    61,
    'Microscópio de Alta Resolução com Câmera',
    'Microscópio para pesquisas avançadas',
    3500.00,
    7,
    5,
    5
  ),
  (
    62,
    'Conjunto de Pincéis Profissionais para Técnicas Variadas',
    'Conjunto artístico profissional',
    70.00,
    8,
    6,
    6
  ),
  (
    63,
    'Teclado Musical Profissional para Palcos',
    'Teclado profissional para apresentações',
    1500.00,
    7,
    7,
    7
  ),
  (
    64,
    'Equipamento de Experimentos Químicos Avançados III',
    'Equipamento para experimentos em laboratório',
    600.00,
    7,
    8,
    8
  ),
  (
    65,
    'Kit de Robótica para Intermediários',
    'Kit para estudo intermediário de robótica',
    150.00,
    1,
    9,
    9
  ),
  (
    66,
    'Software de História Antiga',
    'Software para estudo de história antiga',
    80.00,
    6,
    10,
    10
  ),
  (
    67,
    'Óculos de Proteção para Laboratório - Design Especial',
    'Equipamento de segurança para laboratório',
    22.00,
    1,
    11,
    8
  ),
  (
    68,
    'Mapa Mundi de Mesa',
    'Mapa para estudos geográficos',
    12.00,
    8,
    12,
    4
  ),
  (
    69,
    'Bola de Handebol Oficial',
    'Bola para prática de handebol',
    45.00,
    1,
    13,
    5
  ),
  (
    70,
    'Calculadora Financeira Avançada',
    'Calculadora para cálculos financeiros complexos',
    120.00,
    1,
    14,
    1
  ),
  (
    71,
    'Laptop Universitário Modelo F',
    'Laptop para uso acadêmico',
    2100.00,
    2,
    1,
    1
  ),
  (
    72,
    'Kit de Biologia para Laboratório II',
    'Kit para estudos de biologia em laboratório',
    600.00,
    1,
    2,
    2
  ),
  (
    73,
    'Caneta Esferográfica Rosa',
    'Caneta para escrita cotidiana',
    2.50,
    8,
    3,
    4
  ),
  (
    74,
    'Software de Química Orgânica II',
    'Software para estudos de química orgânica',
    300.00,
    6,
    4,
    3
  ),
  (
    75,
    'Microscópio de Pesquisa Avançada com Câmera',
    'Microscópio de alta precisão',
    4000.00,
    7,
    5,
    5
  ),
  (
    76,
    'Conjunto de Pincéis para Óleo',
    'Conjunto artístico para pintura em óleo',
    80.00,
    8,
    6,
    6
  ),
  (
    77,
    'Teclado Musical Avançado para Estúdio',
    'Teclado profissional para estúdio',
    1800.00,
    7,
    7,
    7
  ),
  (
    78,
    'Máquina de Experimentos Químicos Avançados IV',
    'Equipamento para experimentos em laboratório',
    700.00,
    7,
    8,
    8
  ),
  (
    79,
    'Kit de Robótica para Avançados II',
    'Kit para estudo avançado de robótica',
    250.00,
    1,
    9,
    9
  ),
  (
    80,
    'Software de Geografia do Brasil',
    'Software para estudo de geografia do Brasil',
    100.00,
    6,
    10,
    10
  ),
  (
    81,
    'Óculos de Segurança para Laboratório - Modelo Esportivo',
    'Equipamento de segurança para laboratório',
    30.00,
    1,
    11,
    8
  ),
  (
    82,
    'Mapa Mundi Interativo',
    'Mapa interativo para estudos geográficos',
    50.00,
    8,
    12,
    4
  ),
  (
    83,
    'Bola de Golfe Oficial',
    'Bola para prática de golfe',
    55.00,
    1,
    13,
    5
  ),
  (
    84,
    'Calculadora Científica Gráfica',
    'Calculadora para cálculos gráficos',
    150.00,
    1,
    14,
    2
  ),
  (
    85,
    'Laptop Universitário Modelo G',
    'Laptop para uso acadêmico',
    2200.00,
    2,
    1,
    1
  ),
  (
    86,
    'Kit de Biologia para Laboratório III',
    'Kit para estudos de biologia em laboratório',
    800.00,
    1,
    2,
    2
  ),
  (
    87,
    'Caneta Esferográfica Marrom',
    'Caneta para escrita cotidiana',
    2.50,
    8,
    3,
    4
  ),
  (
    88,
    'Software de Química Inorgânica',
    'Software para estudos de química inorgânica',
    400.00,
    6,
    4,
    3
  ),
  (
    89,
    'Microscópio Avançado com Acessórios',
    'Microscópio de alta precisão',
    5000.00,
    7,
    5,
    5
  ),
  (
    90,
    'Conjunto de Pincéis para Aquarela Profissional',
    'Conjunto artístico profissional para aquarela',
    100.00,
    8,
    6,
    6
  ),
  (
    91,
    'Teclado Musical de Palco Profissional',
    'Teclado profissional para palco',
    2000.00,
    7,
    7,
    7
  ),
  (
    92,
    'Máquina de Experimentos Químicos Avançados V',
    'Equipamento para experimentos em laboratório',
    800.00,
    7,
    8,
    8
  ),
  (
    93,
    'Kit de Robótica para Iniciantes II',
    'Kit introdutório para estudo de robótica',
    100.00,
    1,
    9,
    9
  ),
  (
    94,
    'Software de História Medieval',
    'Software para estudo de história medieval',
    120.00,
    6,
    10,
    10
  ),
  (
    95,
    'Óculos de Proteção para Laboratório - Estilo Moderno',
    'Equipamento de segurança para laboratório',
    35.00,
    1,
    11,
    8
  ),
  (
    96,
    'Mapa Mundi em 3D',
    'Mapa em 3D para estudos geográficos',
    70.00,
    8,
    12,
    4
  ),
  (
    97,
    'Bola de Beisebol Oficial',
    'Bola para prática de beisebol',
    60.00,
    1,
    13,
    5
  ),
  (
    98,
    'Calculadora Científica Avançada II',
    'Calculadora para cálculos complexos',
    180.00,
    1,
    14,
    2
  ),
  (
    99,
    'Laptop Universitário Modelo H',
    'Laptop para uso acadêmico',
    2300.00,
    2,
    1,
    1
  ),
  (
    100,
    'Kit de Biologia para Laboratório IV',
    'Kit para estudos de biologia em laboratório',
    900.00,
    1,
    2,
    2
  ),
  (
    101,
    'Caneta Esferográfica Laranja',
    'Caneta para escrita cotidiana',
    2.50,
    8,
    3,
    4
  ),
  (
    102,
    'Software de Bioquímica',
    'Software para estudos de bioquímica',
    500.00,
    6,
    4,
    3
  ),
  (
    103,
    'Microscópio de Pesquisa Avançada de Campo',
    'Microscópio de alta precisão',
    5500.00,
    7,
    5,
    5
  ),
  (
    104,
    'Conjunto de Pincéis para Técnicas Mistas',
    'Conjunto artístico para técnicas mistas',
    120.00,
    8,
    6,
    6
  ),
  (
    105,
    'Teclado Musical para Estudo Avançado',
    'Teclado para estudo avançado de música',
    1300.00,
    7,
    7,
    7
  ),
  (
    106,
    'Máquina de Experimentos Químicos Avançados VI',
    'Equipamento para experimentos em laboratório',
    900.00,
    7,
    8,
    8
  ),
  (
    107,
    'Kit de Robótica para Avançados III',
    'Kit para estudo avançado de robótica',
    300.00,
    1,
    9,
    9
  ),
  (
    108,
    'Software de História Moderna',
    'Software para estudo de história moderna',
    150.00,
    6,
    10,
    10
  ),
  (
    109,
    'Óculos de Segurança para Laboratório - Modelo Premium',
    'Equipamento de segurança para laboratório',
    40.00,
    1,
    11,
    8
  ),
  (
    110,
    'Mapa Mundi Educativo',
    'Mapa educativo para estudos geográficos',
    80.00,
    8,
    12,
    4
  ),
  (
    111,
    'Bola de Softball Oficial',
    'Bola para prática de softball',
    70.00,
    1,
    13,
    5
  ),
  (
    112,
    'Calculadora Financeira Avançada II',
    'Calculadora para cálculos financeiros complexos',
    200.00,
    1,
    14,
    2
  ),
  (
    113,
    'Laptop Universitário Modelo I',
    'Laptop para uso acadêmico',
    2400.00,
    2,
    1,
    1
  ),
  (
    114,
    'Kit de Biologia para Laboratório V',
    'Kit para estudos de biologia em laboratório',
    1000.00,
    1,
    2,
    2
  ),
  (
    115,
    'Caneta Esferográfica Amarela',
    'Caneta para escrita cotidiana',
    2.50,
    8,
    3,
    4
  ),
  (
    116,
    'Software de Química Computacional',
    'Software para estudos de química computacional',
    600.00,
    6,
    4,
    3
  ),
  (
    117,
    'Microscópio de Pesquisa Avançada Portátil',
    'Microscópio de alta precisão',
    6000.00,
    7,
    5,
    5
  ),
  (
    118,
    'Conjunto de Pincéis para Acrílico Profissional',
    'Conjunto artístico para pintura em acrílico',
    150.00,
    8,
    6,
    6
  ),
  (
    119,
    'Teclado Musical Avançado para Performance',
    'Teclado para performance musical',
    2500.00,
    7,
    7,
    7
  ),
  (
    120,
    'Máquina de Experimentos Químicos Avançados VII',
    'Equipamento para experimentos em laboratório',
    1000.00,
    7,
    8,
    8
  );

INSERT INTO
  TICKET_STATUS (TICKET_STATUS_ID, TICKET_STATUS_NAME)
VALUES
  (1, 'Novo'),
  (2, 'Pendente'),
  (3, 'Em Andamento'),
  (4, 'Resolvido'),
  (5, 'Cancelado');

INSERT INTO
  TICKET_TYPE (TICKET_TYPE_ID, TICKET_TYPE_NAME)
VALUES
  (1, 'Manutenção'),
  (2, 'Suporte');

INSERT INTO
  TICKET_PRIORITY (TICKET_PRIORITY_ID, TICKET_PRIORITY_NAME)
VALUES
  (1, 'Baixa'),
  (2, 'Moderado'),
  (3, 'Alta');