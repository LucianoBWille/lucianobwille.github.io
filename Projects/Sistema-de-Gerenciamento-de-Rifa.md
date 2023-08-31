# Sistema de Gerenciamento de Rifa

Bem-vindo ao meu projeto de Sistema de Gerenciamento de Rifa! Este projeto foi desenvolvido com o objetivo de criar uma solução simples e eficiente para realizar rifas de forma digital. O sistema foi dividido em duas aplicações: a de venda e a de administração. Cada uma delas desempenha um papel importante na experiência do usuário.

## Aplicação de Venda

A aplicação de venda foi projetada para tornar o processo de compra de números de rifa fácil e conveniente. As principais características incluem:

- Visualização e seleção de números disponíveis para venda.
- Seleção aleatória de uma quantidade específica de números.
- Preenchimento do nome do comprador e pelo menos um contato.
- Confirmação da venda após seleção dos números e informações do comprador.
- Detecção de números que já foram vendidos por outros vendedores.
- Possibilidade de ocultar números já vendidos.
- Download de uma imagem compartilhável com os números disponíveis.

Acesse o [Demo do Web App de Venda](https://rifa-rafaela-app.vercel.app/) para experimentar você mesmo.

## Aplicação de Administração

A aplicação de administração oferece controle total sobre a rifa, permitindo uma gestão eficaz e segura. Porém, para garantir a segurança, a aplicação de administração real roda em localhost, na máquina do administrador. No entanto, você pode acessar uma versão demo da aplicação de administração que está sendo executada nos servidores da Vercel. Suas principais funcionalidades incluem:

- Inicialização da rifa, gerando a lista de números a serem vendidos.
- Visualização da lista completa de números.
- Filtragem por diversos atributos, como nome, status de venda, pagamento, etc.
- Atualização de dados de números.
- Marcação de números como pagos.
- Geração de comprovantes de compra.
- Liberação de números vendidos há mais de 48h e não pagos.
- Busca do vencedor da rifa pelo número sorteado.

Acesse a [Demo da Aplicação de Administração](https://rifa-rafaela-adm-app.vercel.app/) para explorar suas funcionalidades.

## Limitações e Considerações Técnicas

O projeto foi desenvolvido com várias limitações e requisitos específicos em mente:

- **Segurança**: Os dados dos compradores são protegidos e não expostos no sistema de venda.
- **Barreira de Segurança**: Foram implementadas medidas de segurança para proteger tanto a aplicação de venda quanto a de administração.
- **Acesso Restrito**: A aplicação de administração só é acessível na máquina do administrador.
- **Prazo Apertado**: A primeira versão do projeto foi concluída em apenas 3 dias.
- **Logs de Operações**: Todas as operações são registradas em um log no banco de dados.

## Tecnologias Utilizadas

- **API de Venda**: Node.js + Express.js, hospedada na Vercel. [Repositório](https://github.com/LucianoBWille/Sistema-de-Gerenciamento-de-Rifa---API-de-Venda)
- **Web App de Venda**: HTML/CSS + JavaScript, hospedado na Vercel. [Repositório](https://github.com/LucianoBWille/Sistema-de-Gerenciamento-de-Rifa---Interface-Web-de-Venda)
- **API de Administração**: Node.js + Express.js, executada localmente. [Repositório](https://github.com/LucianoBWille/Sistema-de-Gerenciamento-de-Rifa---API-Administrativa)
- **Página Web de Administração**: HTML/CSS + JavaScript, executada localmente. [Repositório](https://github.com/LucianoBWille/Sistema-de-Gerenciamento-de-Rifa---Interface-Web-Administrativa)

<!--- 
Sinta-se à vontade para explorar os [projetos rodando](link_do_projeto_roda_outras_paginas) e os [repositórios no GitHub](link_do_seu_perfil_no_github).
-->

Espero que este projeto demonstre minha capacidade de desenvolver soluções práticas e eficientes para problemas do mundo real. Se tiver alguma dúvida ou feedback, não hesite em entrar em contato!
