-- PureDent website — Supabase schema
-- Run in the Supabase SQL editor (or `supabase db push`).
-- The browser uses only the anon key. RLS below lets anonymous visitors
-- INSERT enquiries/sign-ups and SELECT published content — nothing else.

create extension if not exists citext;

-- ---------------------------------------------------------------- enquiries
create table if not exists public.contact_enquiries (
  id           uuid primary key default gen_random_uuid(),
  created_at   timestamptz not null default now(),
  full_name    text not null check (char_length(full_name) between 1 and 160),
  email        citext not null check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]{2,}$'),
  category     text not null check (char_length(category) <= 80),
  subject      text not null check (char_length(subject) between 1 and 200),
  message      text not null check (char_length(message) between 10 and 5000),
  source_path  text,
  status       text not null default 'new' check (status in ('new', 'in_progress', 'closed'))
);

create table if not exists public.purchase_enquiries (
  id            uuid primary key default gen_random_uuid(),
  created_at    timestamptz not null default now(),
  full_name     text not null check (char_length(full_name) between 1 and 160),
  email         citext not null check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]{2,}$'),
  phone         text check (char_length(phone) <= 40),
  country       text not null check (char_length(country) <= 80),
  city          text not null check (char_length(city) <= 120),
  enquiry_type  text not null check (char_length(enquiry_type) <= 80),
  products      text check (char_length(products) <= 200),
  message       text check (char_length(message) <= 5000),
  source_path   text,
  status        text not null default 'new' check (status in ('new', 'in_progress', 'closed'))
);

create table if not exists public.newsletter_subscribers (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  email       citext not null unique check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]{2,}$'),
  source_path text,
  unsubscribed_at timestamptz
);

create table if not exists public.community_signups (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  full_name   text not null check (char_length(full_name) between 1 and 160),
  email       citext not null unique check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]{2,}$'),
  country     text not null check (char_length(country) <= 80),
  role        text check (char_length(role) <= 80),
  source_path text
);

-- ---------------------------------------------------------------- content
create table if not exists public.posts (
  id            uuid primary key default gen_random_uuid(),
  slug          text not null unique,
  title         text not null,
  excerpt       text not null,
  category      text not null,
  image_path    text not null,
  image_alt     text not null,
  body          jsonb not null,          -- array of {type: 'p'|'h2'|'ul', ...}
  featured      boolean not null default false,
  published_at  date,
  is_published  boolean not null default false,
  reviewed_by   text,                     -- clinical reviewer sign-off
  updated_at    timestamptz not null default now()
);
create index if not exists posts_published_idx on public.posts (is_published, published_at desc);

create table if not exists public.stockists (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  area        text,
  lga         text,
  state       text,
  country     text not null default 'Nigeria',
  kind        text not null default 'store' check (kind in ('store', 'online', 'distributor')),
  url         text,
  verified    boolean not null default false,
  is_active   boolean not null default true
);

-- ---------------------------------------------------------------- RLS
alter table public.contact_enquiries      enable row level security;
alter table public.purchase_enquiries     enable row level security;
alter table public.newsletter_subscribers enable row level security;
alter table public.community_signups      enable row level security;
alter table public.posts                  enable row level security;
alter table public.stockists              enable row level security;

-- Anonymous visitors may submit, never read back.
create policy "anon can submit contact"   on public.contact_enquiries      for insert to anon with check (status = 'new');
create policy "anon can submit purchase"  on public.purchase_enquiries     for insert to anon with check (status = 'new');
create policy "anon can subscribe"        on public.newsletter_subscribers for insert to anon with check (unsubscribed_at is null);
create policy "anon can join community"   on public.community_signups      for insert to anon with check (true);

-- Public content: only published / verified rows.
create policy "read published posts"      on public.posts     for select to anon using (is_published);
create policy "read verified stockists"   on public.stockists for select to anon using (verified and is_active);

-- Staff access: grant via the `authenticated` role + your own admin claim, e.g.
-- create policy "staff read enquiries" on public.contact_enquiries for select to authenticated
--   using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'staff');

-- ---------------------------------------------------------------- seed (verified 18 Nov 2026)
insert into public.stockists (name, area, lga, state, kind, verified) values
  ('Blenco Supermarket', 'Akowojo', 'Alimosho', 'Lagos State', 'store', true),
  ('Buymore Supermarket', 'Ikeja', 'Ikeja', 'Lagos State', 'store', true),
  ('Code Silver Nig. Ltd.', 'Ajah', 'Eti-Osa', 'Lagos State', 'store', true),
  ('De Emperor Superstore', 'Alagbado', 'Alimosho', 'Lagos State', 'store', true),
  ('Jendol Supermarket', 'Abule Egba', 'Alimosho', 'Lagos State', 'store', true)
on conflict do nothing;
insert into public.stockists (name, kind, url, verified) values
  ('Jumia Nigeria', 'online', 'https://www.jumia.com.ng/catalog/?q=puredent', true),
  ('Konga', 'online', 'https://www.konga.com/search?search=puredent', true)
on conflict do nothing;
