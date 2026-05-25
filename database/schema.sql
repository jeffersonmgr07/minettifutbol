-- Esquema inicial referencial.
-- Este archivo se ampliará cuando definamos las bases completas del campeonato.

create table if not exists championships (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  season text,
  created_at timestamp with time zone default now()
);

create table if not exists categories (
  id uuid primary key default gen_random_uuid(),
  championship_id uuid references championships(id),
  name text not null,
  min_birth_year int not null,
  created_at timestamp with time zone default now()
);

create table if not exists clubs (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  created_at timestamp with time zone default now()
);

create table if not exists teams (
  id uuid primary key default gen_random_uuid(),
  club_id uuid references clubs(id),
  category_id uuid references categories(id),
  name text not null,
  group_name text,
  created_at timestamp with time zone default now()
);

create table if not exists players (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  dni text not null,
  birth_date date not null,
  photo_url text,
  created_at timestamp with time zone default now()
);
