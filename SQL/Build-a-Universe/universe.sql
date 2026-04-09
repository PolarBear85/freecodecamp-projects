--
-- PostgreSQL database dump
--

-- Dumped from database version 12.22 (Ubuntu 12.22-0ubuntu0.20.04.4)
-- Dumped by pg_dump version 12.22 (Ubuntu 12.22-0ubuntu0.20.04.4)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE universe;
--
-- Name: universe; Type: DATABASE; Schema: -; Owner: freecodecamp
--

CREATE DATABASE universe WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';


ALTER DATABASE universe OWNER TO freecodecamp;

\connect universe

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: galaxy; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.galaxy (
    galaxy_id integer NOT NULL,
    name character varying(30) NOT NULL,
    type character varying(30) NOT NULL,
    width_in_light_years numeric NOT NULL,
    has_been_visited boolean
);


ALTER TABLE public.galaxy OWNER TO freecodecamp;

--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.galaxy_galaxy_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.galaxy_galaxy_id_seq OWNER TO freecodecamp;

--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.galaxy_galaxy_id_seq OWNED BY public.galaxy.galaxy_id;


--
-- Name: lifeform; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.lifeform (
    lifeform_id integer NOT NULL,
    planet_id integer,
    is_sentient boolean,
    name character varying(30) NOT NULL
);


ALTER TABLE public.lifeform OWNER TO freecodecamp;

--
-- Name: lifeform_life_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.lifeform_life_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.lifeform_life_id_seq OWNER TO freecodecamp;

--
-- Name: lifeform_life_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.lifeform_life_id_seq OWNED BY public.lifeform.lifeform_id;


--
-- Name: moon; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.moon (
    moon_id integer NOT NULL,
    planet_id integer NOT NULL,
    name character varying(30) NOT NULL,
    width_in_km numeric,
    distance_from_planet numeric
);


ALTER TABLE public.moon OWNER TO freecodecamp;

--
-- Name: moon_moon_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.moon_moon_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.moon_moon_id_seq OWNER TO freecodecamp;

--
-- Name: moon_moon_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.moon_moon_id_seq OWNED BY public.moon.moon_id;


--
-- Name: planet; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.planet (
    planet_id integer NOT NULL,
    star_id integer NOT NULL,
    name character varying(30) NOT NULL,
    planet_type character varying(30),
    is_habitable boolean,
    has_life boolean,
    description text,
    number_of_moons integer NOT NULL
);


ALTER TABLE public.planet OWNER TO freecodecamp;

--
-- Name: planet_planet_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.planet_planet_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.planet_planet_id_seq OWNER TO freecodecamp;

--
-- Name: planet_planet_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.planet_planet_id_seq OWNED BY public.planet.planet_id;


--
-- Name: star; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.star (
    star_id integer NOT NULL,
    galaxy_id integer NOT NULL,
    name character varying(30) NOT NULL,
    has_planets boolean,
    number_of_planets integer NOT NULL
);


ALTER TABLE public.star OWNER TO freecodecamp;

--
-- Name: star_star_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.star_star_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.star_star_id_seq OWNER TO freecodecamp;

--
-- Name: star_star_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.star_star_id_seq OWNED BY public.star.star_id;


--
-- Name: galaxy galaxy_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy ALTER COLUMN galaxy_id SET DEFAULT nextval('public.galaxy_galaxy_id_seq'::regclass);


--
-- Name: lifeform lifeform_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.lifeform ALTER COLUMN lifeform_id SET DEFAULT nextval('public.lifeform_life_id_seq'::regclass);


--
-- Name: moon moon_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon ALTER COLUMN moon_id SET DEFAULT nextval('public.moon_moon_id_seq'::regclass);


--
-- Name: planet planet_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet ALTER COLUMN planet_id SET DEFAULT nextval('public.planet_planet_id_seq'::regclass);


--
-- Name: star star_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star ALTER COLUMN star_id SET DEFAULT nextval('public.star_star_id_seq'::regclass);


--
-- Data for Name: galaxy; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.galaxy VALUES (1, 'Andromeda', 'Spiral', 300000, NULL);
INSERT INTO public.galaxy VALUES (2, 'Pegasus', 'Spiral', 1200000, NULL);
INSERT INTO public.galaxy VALUES (3, 'Delta Episilon', 'Binary', 500000, NULL);
INSERT INTO public.galaxy VALUES (4, 'Perseus', 'Irregular', 1200000, NULL);
INSERT INTO public.galaxy VALUES (5, 'Zeta Erebus', 'Elliptical', 523345350, NULL);
INSERT INTO public.galaxy VALUES (6, 'Gamma Eridani', 'Spiral', 543214, NULL);


--
-- Data for Name: lifeform; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.lifeform VALUES (1, 1, true, 'Human');
INSERT INTO public.lifeform VALUES (2, 1, false, 'Blue Whale');
INSERT INTO public.lifeform VALUES (3, 3, false, 'Proxima Lichen');
INSERT INTO public.lifeform VALUES (4, 5, true, 'Keplerian Grey');
INSERT INTO public.lifeform VALUES (5, 1, false, 'Tardigrade');
INSERT INTO public.lifeform VALUES (6, 3, true, 'Proxima Centaurian');


--
-- Data for Name: moon; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.moon VALUES (1, 1, 'Moon', 3474.8, 384400);
INSERT INTO public.moon VALUES (2, 2, 'Phobos', 22.2, 9377);
INSERT INTO public.moon VALUES (3, 2, 'Deimos', 12.4, 23460);
INSERT INTO public.moon VALUES (4, 12, 'Io', 3642.6, 421700);
INSERT INTO public.moon VALUES (5, 12, 'Europa', 3121.6, 670900);
INSERT INTO public.moon VALUES (6, 12, 'Ganymede', 5268.2, 1070400);
INSERT INTO public.moon VALUES (7, 12, 'Callisto', 4820.6, 1882700);
INSERT INTO public.moon VALUES (8, 12, 'Amalthea', 167.0, 181400);
INSERT INTO public.moon VALUES (9, 12, 'Himalia', 170.0, 11461000);
INSERT INTO public.moon VALUES (10, 12, 'Elara', 86.0, 11741000);
INSERT INTO public.moon VALUES (11, 12, 'Pasiphae', 60.0, 23624000);
INSERT INTO public.moon VALUES (12, 12, 'Carme', 46.0, 23011000);
INSERT INTO public.moon VALUES (13, 12, 'Lysithea', 36.0, 11717000);
INSERT INTO public.moon VALUES (14, 7, 'S-1 Alpha', 1200.5, 450000);
INSERT INTO public.moon VALUES (15, 7, 'S-2 Beta', 890.0, 620000);
INSERT INTO public.moon VALUES (16, 7, 'S-3 Gamma', 2100.2, 900000);
INSERT INTO public.moon VALUES (17, 7, 'S-4 Delta', 150.0, 1200000);
INSERT INTO public.moon VALUES (18, 7, 'S-5 Epsilon', 45.0, 2500000);
INSERT INTO public.moon VALUES (19, 8, 'Canis I', 300.0, 200000);
INSERT INTO public.moon VALUES (20, 8, 'Canis II', 120.0, 350000);
INSERT INTO public.moon VALUES (21, 9, 'Giant-Ring A', 4500.0, 800000);
INSERT INTO public.moon VALUES (22, 9, 'Giant-Ring B', 3200.0, 1100000);
INSERT INTO public.moon VALUES (23, 9, 'Giant-Ring C', 110.0, 2200000);
INSERT INTO public.moon VALUES (24, 9, 'Giant-Ring D', 95.0, 2800000);
INSERT INTO public.moon VALUES (25, 9, 'Giant-Ring E', 40.0, 3500000);
INSERT INTO public.moon VALUES (26, 11, 'Lyra Minor', 500.0, 400000);
INSERT INTO public.moon VALUES (27, 12, 'Thebe', 98.6, 221900);
INSERT INTO public.moon VALUES (28, 12, 'Adrastea', 16.4, 129000);
INSERT INTO public.moon VALUES (29, 12, 'Metis', 43.0, 128000);
INSERT INTO public.moon VALUES (30, 12, 'Sinope', 38.0, 23939000);


--
-- Data for Name: planet; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.planet VALUES (1, 1, 'Earth', 'Terrestrial', true, true, 'The only known planet with life.', 1);
INSERT INTO public.planet VALUES (2, 1, 'Mars', 'Terrestrial', false, false, 'The Red Planet, potentially habitable in the past.', 2);
INSERT INTO public.planet VALUES (3, 2, 'Proxima b', 'Terrestrial', true, false, 'Orbits in the habitable zone of our closest neighbor.', 0);
INSERT INTO public.planet VALUES (4, 2, 'Proxima c', 'Super-Earth', false, false, 'A cold planet orbiting much further out.', 0);
INSERT INTO public.planet VALUES (5, 3, 'Kepler-186f', 'Terrestrial', true, false, 'First Earth-sized planet in a habitable zone.', 0);
INSERT INTO public.planet VALUES (6, 3, 'Kepler-186e', 'Terrestrial', false, false, 'Very hot planet orbiting close to its star.', 0);
INSERT INTO public.planet VALUES (7, 4, 'Sirius Prime', 'Gas Giant', false, false, 'A hypothetical massive gas giant.', 14);
INSERT INTO public.planet VALUES (8, 4, 'Dog Star Minor', 'Ice Giant', false, false, 'Frigid world on the edge of the system.', 5);
INSERT INTO public.planet VALUES (9, 5, 'Betelgeuse Alpha', 'Gas Giant', false, false, 'Massive world surviving intense radiation.', 22);
INSERT INTO public.planet VALUES (10, 6, 'Vega I', 'Rocky', false, false, 'A young, scorched planet covered in lava.', 0);
INSERT INTO public.planet VALUES (11, 6, 'Vega II', 'Super-Earth', false, false, 'High gravity world with a thick atmosphere.', 1);
INSERT INTO public.planet VALUES (12, 1, 'Jupiter', 'Gas Giant', false, false, 'The largest planet in our solar system.', 95);


--
-- Data for Name: star; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.star VALUES (1, 1, 'Sun', true, 8);
INSERT INTO public.star VALUES (2, 2, 'Proxima Centauri', true, 3);
INSERT INTO public.star VALUES (3, 3, 'Kepler-186', true, 5);
INSERT INTO public.star VALUES (4, 4, 'Sirius', false, 0);
INSERT INTO public.star VALUES (5, 5, 'Betelgeuse', false, 0);
INSERT INTO public.star VALUES (6, 6, 'Vega', true, 0);


--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.galaxy_galaxy_id_seq', 6, true);


--
-- Name: lifeform_life_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.lifeform_life_id_seq', 6, true);


--
-- Name: moon_moon_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.moon_moon_id_seq', 30, true);


--
-- Name: planet_planet_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.planet_planet_id_seq', 12, true);


--
-- Name: star_star_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.star_star_id_seq', 6, true);


--
-- Name: galaxy galaxy_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_name_key UNIQUE (name);


--
-- Name: galaxy galaxy_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_pkey PRIMARY KEY (galaxy_id);


--
-- Name: lifeform lifeform_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.lifeform
    ADD CONSTRAINT lifeform_name_key UNIQUE (name);


--
-- Name: lifeform lifeform_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.lifeform
    ADD CONSTRAINT lifeform_pkey PRIMARY KEY (lifeform_id);


--
-- Name: moon moon_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_name_key UNIQUE (name);


--
-- Name: moon moon_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_pkey PRIMARY KEY (moon_id);


--
-- Name: planet planet_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_name_key UNIQUE (name);


--
-- Name: planet planet_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_pkey PRIMARY KEY (planet_id);


--
-- Name: star star_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_name_key UNIQUE (name);


--
-- Name: star star_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_pkey PRIMARY KEY (star_id);


--
-- Name: lifeform lifeform_home_planet_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.lifeform
    ADD CONSTRAINT lifeform_home_planet_fkey FOREIGN KEY (planet_id) REFERENCES public.planet(planet_id);


--
-- Name: moon moon_planet_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_planet_id_fkey FOREIGN KEY (planet_id) REFERENCES public.planet(planet_id);


--
-- Name: planet planet_star_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_star_id_fkey FOREIGN KEY (star_id) REFERENCES public.star(star_id);


--
-- Name: star star_galaxy_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_galaxy_id_fkey FOREIGN KEY (galaxy_id) REFERENCES public.galaxy(galaxy_id);


--
-- PostgreSQL database dump complete
--

