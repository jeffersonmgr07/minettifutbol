-- Esquema inicial para Supabase/PostgreSQL.
create extension if not exists pgcrypto;

create table if not exists categories (
  id text primary key,
  name text not null,
  birth_years text not null,
  min_birth_year int not null,
  max_birth_year int not null,
  players_on_field int not null,
  min_players_on_field int not null,
  game_time text not null,
  break_time text not null
);

create table if not exists teams (
  id uuid primary key default gen_random_uuid(),
  category_id text references categories(id),
  group_name text not null,
  name text not null
);

create table if not exists matches (
  id text primary key,
  category_id text references categories(id),
  group_name text not null,
  round_number int,
  home_team text not null,
  away_team text,
  status text not null default 'programado'
);

create table if not exists calendar_events (
  id text primary key,
  date_label text,
  round_number int,
  field text,
  time_label text,
  home_team text not null,
  away_team text,
  category_label text,
  status text not null default 'programado'
);
