# Jogos DB

<h3>Banco de Dados desenvolvido com Node.js e MongoDB para estudo.</h3>

<p>Segue abaixo os caminhos e opções que você tem</p>


"/"
raíz, retorna um texto de confirmação de conexão


"/console"

método get:
retorna todos os consoles

método post:
-> campos obrigatórios: 
	nome
  
método delete:
 exclui todos os consoles cadastrados


"/genero"

método get:
retorna todos os generos

opção: enviar o parametro "_id"
retorna o genero correspondente


método post:
-> campos obrigatórios: 
	nome
  
método delete:
 exclui todos os generos cadastrados


"/desenvolvedor"

método get:
retorna todos os desenvolvedores

opção: enviar o parametro "_id"
retorna o desenvolvedor correspondente


método post:
-> campos obrigatórios: 
	nome

método delete:
 exclui todos os desenvolvedores cadastrados


"/jogos"

método get:
deve passar o parâmetro "nome" que é o nome do console correspondente
retorna todos os jogos referentes ao console

método post:
-> campos obrigatórios: 
  nome, 
	desenvolvedor, 
	genero,
	console_id,
	genero_id,
	desenvolvedor_id

-> campos não obrigatórios:
	resumo,
	descricao,
	imagem

método delete:
 exclui todos os jogos cadastrados
 
 
 "/jogos/jogo"

método get:
deve passar o parâmetro "nome" que é o nome do jogo correspondente
retorna os dados do jogo requisitado


 "/jogos/topGames"

método get:
deve passar o parâmetro "nome" que é o nome do console correspondente
retorna os 3 jogos melhores avaliados do console correspondente ( em ordem de avaliação )


"/review"

método get:
deve passar o parâmetro "nome" que é o nome do jogo correspondente
retorna todos os reviews referentes ao jogo

método post:
-> campos obrigatórios
  nota, 
  nome, 
  texto, 
  email

"/users"
método get:
retorna todos os usuários cadastrados

"/users/create"
método post:
-> campos obrigatórios: 
  nome
  email
  senha

"/users/login"
método post:
-> campos obrigatórios: 
  email
  senha

