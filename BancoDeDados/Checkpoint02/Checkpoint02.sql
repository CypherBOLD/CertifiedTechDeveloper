-- Criar Banco de Dados
CREATE SCHEMA IF NOT EXISTS FornecedorAutopecas;
-- Usar Banco de Dados
USE FornecedorAutopecas;

-- Tabela Cliente
CREATE TABLE IF NOT EXISTS Cliente 
(
	id BIGINT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT ,
	Nome VARCHAR(25) NOT NULL,
	Sobrenome VARCHAR(55) NOT NULL,
	Documento VARCHAR(15) NOT NULL,
	Endereco VARCHAR(150) NULL,
	CodigoPostal VARCHAR(10) NULL,
	Cidade VARCHAR(40) NOT NULL,
	Regiao VARCHAR(20) NOT NULL,
	Pais VARCHAR(25) NOT NULL,
	Email VARCHAR(60) NULL,
	Telefone CHAR(15) NOT NULL
);

-- Tabela Fabricante
CREATE TABLE IF NOT EXISTS Fabricante
(
	id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
	Nome VARCHAR(25) NOT NULL,
	Documento VARCHAR(15) NOT NULL,
	Endereco VARCHAR(150) NULL,
	CodigoPostal VARCHAR(10) NULL,
	Cidade VARCHAR(40) NULL,
	Regiao VARCHAR(20) NOT NULL,
	Pais VARCHAR(25) NOT NULL,
	Email VARCHAR(60) NULL,
	Telefone CHAR(15) NOT NULL
);

-- Tabela Produto
CREATE TABLE IF NOT EXISTS Produto
(
	id BIGINT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
	Nome VARCHAR(100) NOT NULL,
	Descricao TEXT NULL,
	urlImage VARCHAR(500) NULL,
	Validade DATE NOT NULL,
	QuantidadeEstoque BIGINT UNSIGNED NOT NULL
);
  
-- Tabela Entrega - FK com idCliente
CREATE TABLE IF NOT EXISTS Entrega
(
	id BIGINT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
	Tipo VARCHAR(100) NOT NULL,
	Data DATETIME NOT NULL,
	`Status` ENUM('pendente', 'pgtoconfirmado', 'emtransporte', 'entregue') NOT NULL DEFAULT 'pendente',
	idCliente BIGINT UNSIGNED NOT NULL,
	CONSTRAINT FK_Entrega_Cliente_idCliente 
		FOREIGN KEY (idCliente)
		REFERENCES Cliente (id)
);

-- Tabela Venda - FK com idCliente
CREATE TABLE IF NOT EXISTS Venda
(
	id BIGINT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
	DataVenda DATETIME NOT NULL,
	ValorTotal DECIMAL(10,2) NOT NULL,
	idCliente BIGINT UNSIGNED NOT NULL,
	CONSTRAINT FK_Venda_Cliente_idCliente
		FOREIGN KEY (idCliente)
		REFERENCES Cliente (id)
);

-- Tabela ProdutoCliente - FK com idEntrega , idVenda
CREATE TABLE IF NOT EXISTS EntregaVenda
(
 id BIGINT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
	idEntrega BIGINT UNSIGNED NOT NULL,
	idVenda BIGINT UNSIGNED NOT NULL,
 	CONSTRAINT FK_EntregaVenda_Entrega_idEntrega
    		FOREIGN KEY (idEntrega)
		REFERENCES Entrega(id),
	CONSTRAINT FK_EntregaVenda_Venda_idVenda
		FOREIGN KEY (idVenda)
		REFERENCES Venda (id)
);

-- Tabela ProdutoFabricante - FK com idProduto , idFabricante 
CREATE TABLE IF NOT EXISTS ProdutoFabricante
(
	id BIGINT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
	idFabricante INT UNSIGNED NOT NULL,
	idProduto BIGINT UNSIGNED NOT NULL,
	CONSTRAINT FK_ProdutoFabricante_Produto_idProduto
		FOREIGN KEY (idProduto)
    		REFERENCES Produto (id),
	CONSTRAINT FK_ProdutoFabricante_Fabricante_idFabricante
    		FOREIGN KEY (idFabricante)
    		REFERENCES Fabricante (id)
);

-- Tabela ProdutoFabricante - FK com idProduto , id Fabricante 
CREATE TABLE IF NOT EXISTS ProdutoVenda
(
	id BIGINT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
	Quantidade INT UNSIGNED NOT NULL,
	PrecoUnitario DECIMAL(10,2) NOT NULL,
	idVenda BIGINT UNSIGNED NOT NULL,
	idProduto BIGINT UNSIGNED NOT NULL,
	CONSTRAINT FK_ProdutoVenda_Venda_idVenda
    		FOREIGN KEY (idVenda)
    		REFERENCES Venda (id),
	CONSTRAINT FK_ProdutoVenda_Produto_idProduto
    		FOREIGN KEY (idProduto)
    		REFERENCES Produto (id)
);


-- inserir dados

INSERT INTO 
	Cliente	 (Nome, Sobrenome, Documento, Cidade, Regiao, Pais, Telefone)
VALUES 
	('Harry Potter', 'Bruxao AutoPecas', '04098736523', 'Curitiba', 'Parana', 'Brasil', '041998121451'),
	('Ronaldinho Fenomeno', 'Martelinho de Ouro', '05038435567', 'Florianopolis', 'Santa Catarina', 'Brasil', '048999001451'),
	('AutoBraz', 'Distribuidora', '98033493418', 'Porto Alegre', 'Rio Grande do Sul', 'Brasil', '050998459862'),
	('Hogwartz', 'Martelinho Magico', '670454923471', 'Londres', 'Grande Londres', 'Inglaterra', '066997169889'),
	('StalinPecas', 'Comunidade', '152493976731', 'Moscou', 'Central', 'Russia', '099666099446')
;

-- Ver Informacoes
SELECT * FROM Cliente;

-- Deletar ID 3
DELETE FROM Cliente
WHERE id = 3;

-- Ver Informacoes
SELECT * FROM Cliente;

-- Atualizar o ID 5
UPDATE Cliente
SET Nome = 'Vinicius Marxx', Sobrenome = 'Revenda de Pecas', Documento = '04098933675', Cidade = 'Salvador', Regiao = 'Bahia', Pais = 'Brasil', Telefone = '055998422789'
WHERE id = 5;

-- Ver Informacoes
SELECT * FROM Cliente;

-- Tudo Verdinho

-- DROP  SCHEMA FornecedorAutopecas;