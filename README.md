# iSave
##### Sistema de alerta de desastres naturais


### Para rodar

1. Baixe e instale o Node.js, porque vamos precisar usar o gerenciador de pacotes dele (npm)
1. Na raiz do projeto, faça `npm install`. Isso vai instalar as dependências do Grunt, o Bower e o Servidor
1. Digite `npm run-script bowerinstall`. Isso vai instalar as dependências do Bower (inclusive o Angular)
1. Digite `npm run-script compile` na primeira vez E sempre que você atualizar qualquer arquivo. Isso vai compilar/concatenar os arquivos Javascript, CSS e SASS que você criar dentro de `app/` e vai colocar o resultado em `prod/`. [*]
    * Caso você não queira compilar manualmente toda vez que alterar algum arquivo, basta rodar `npm run-script compile watch` que ele vai compilar sozinho a cada vez que você salvar algum arquivo.
1. Para rodar o servidor, faça `npm run-script run`. Você pode acessar o site em http://localhost:3000/
    * Você **não** precisa reiniciar o servidor para recarregar os arquivos, mas **precisa** atualizar a página (F5) para que o navegador carregue os novos arquivos.



[*] Perceba que em `app/index.html` ele só importa UM arquivo CSS local e UM arquivo JS local, que é o resultado da compilação. Se você criar novos arquivos CSS ou JS dentro da pasta `app/` então não precisa se preocupar que ele vai ser incluído no arquivo final. Se você instalar novas dependências do Bower AÍ SIM você precisa incluir isso no arquivo `Gruntfile.js`.