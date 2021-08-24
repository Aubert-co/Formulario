/*Só copiar e colocar no console do mysql
que esses comandos  faz tudo
*/
CREATE DATABASE users;
USE users;
create table formulario(
    id int not null primary key auto_increment,
    name varchar(255),
    email varchar(255),
    cpf int(255)
);