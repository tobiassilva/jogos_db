# Jogos DB

<h3>Banco de Dados desenvolvido com Node.js e MongoDB para estudo.</h3>

<h4>Segue abaixo os caminhos e opções que você tem</h4>


<h3>"/"</h3>
> raíz, retorna um texto de confirmação de conexão


<h3>"/console"</h3>

método get:
> retorna todos os consoles

método post:
> -> campos obrigatórios: 
>	<ul><li>nome</li></ul>
  
método delete:
 > exclui todos os consoles cadastrados


<h3>"/genero"</h3>

método get:
>retorna todos os generos

opção: 
> enviar o parametro "_id"
> retorna o genero correspondente


método post:
> -> campos obrigatórios: 
	<ul><li>nome</li></ul>
  
método delete:
> exclui todos os generos cadastrados


<h3>"/desenvolvedor"</h3>

método get:
> retorna todos os desenvolvedores

opção: 
> enviar o parametro "_id"
> retorna o desenvolvedor correspondente


método post:
> -> campos obrigatórios: 
	<ul><li>nome</li></ul>

método delete:
> exclui todos os desenvolvedores cadastrados


<h3>"/jogos"</h3>

método get:
> deve passar o parâmetro "nome" que é o nome do console correspondente
> retorna todos os jogos referentes ao console

método post:
> -> campos obrigatórios: 
	<ul><li>nome</li>
	<li>desenvolvedor</li> 
	<li>genero</li>
	<li>console_id</li>
	<li>genero_id</li>
	<li>desenvolvedor_id</li></ul> 

> -> campos não obrigatórios:
	<ul><li>resumo</li>
	<li>descricao</li>
	<li>imagem</li></ul> 

método delete:
> exclui todos os jogos cadastrados
 
 
 <h3>"/jogos/jogo"</h3>

método get:
> deve passar o parâmetro "nome" que é o nome do jogo correspondente
> retorna os dados do jogo requisitado


 <h3>"/jogos/topGames"</h3>

método get:
> deve passar o parâmetro "nome" que é o nome do console correspondente
> retorna os 3 jogos melhores avaliados do console correspondente ( em ordem de avaliação )


<h3>"/review"</h3>

método get:
> deve passar o parâmetro "nome" que é o nome do jogo correspondente
> retorna todos os reviews referentes ao jogo

método post:
> -> campos obrigatórios
	  <ul><li>nota</li> 
	  <li>nome</li>
	  <li>texto</li>
	  <li>email</li></ul>

<h3>"/users"</h3>
método get:
> retorna todos os usuários cadastrados

<h3>"/users/create"</h3>
método post:
> -> campos obrigatórios: 
	  <ul><li>nome</li>
	  <li>email</li>
	  <li>senha</li></ul>

<h3>"/users/login"</h3>
método post:
> -> campos obrigatórios: 
	  <ul><li>email</li>
	  <li>senha</li></ul>

