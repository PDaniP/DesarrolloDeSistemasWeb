CREATE DATABASE IF NOT EXISTS BBDD_DesSistWeb;
USE BBDD_DesSistWeb;

CREATE TABLE public.usuarios (
    id integer GENERATED ALWAYS AS IDENTITY,
    nombre character varying(100) NOT NULL,
    email character varying(150) NOT NULL,
    password character varying(255) NOT NULL,
    rol character varying(50) DEFAULT 'usuario_estandar',
    estado_id integer DEFAULT 1 NOT NULL,
    fecha_creacion timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Usuarios_pkey" PRIMARY KEY (id),
    CONSTRAINT email_unique UNIQUE (email)
);



CREATE TABLE public.estado_usuario (
    id integer GENERATED ALWAYS AS IDENTITY,
    descripcion character varying(50) NOT NULL,
    CONSTRAINT estado_usuario_id PRIMARY KEY (id),
    CONSTRAINT descricion_unique UNIQUE (descripcion)
);

INSERT INTO public.estado_usuario (descripcion) VALUES
('activo'),
('inactivo'),
('suspendido');

CREATE TABLE public.publicaciones (
    id integer GENERATED ALWAYS AS IDENTITY,
    titulo character varying(150) NOT NULL,
    contenido text NOT NULL,
    autor_id integer NOT NULL,
    CONSTRAINT publicaciones_pkey PRIMARY KEY (id)
);