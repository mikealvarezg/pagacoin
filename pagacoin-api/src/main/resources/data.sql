-- create table transaction (id integer not null, amount double, destination_wallet_id integer, origin_wallet_id integer, primary key (id))
-- create table user (id integer not null, name varchar(255), primary key (id))
-- create table wallet (id integer not null, balance double, user_id integer, primary key (id))

-- Users
insert into user values(1, 'Miguel');
insert into user values(2, 'Ander');

-- Miguel wallets
insert into wallet values(1, 1000, 1);
insert into wallet values(2, 4000, 1);

-- Ander wallets
insert into wallet values(3, 1000, 2);

-- Transactions
insert into transaction values(1, 500, 1, 3);
insert into transaction values(2, 1000, 1, 2);
