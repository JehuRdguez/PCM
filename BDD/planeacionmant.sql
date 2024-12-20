PGDMP         
                {            planeacionmant    15.2    15.2 ,    C           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            D           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            E           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            F           1262    16659    planeacionmant    DATABASE     �   CREATE DATABASE planeacionmant WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Mexico.1252';
    DROP DATABASE planeacionmant;
                postgres    false            �            1259    16660    bitacora    TABLE       CREATE TABLE public.bitacora (
    tdescripcion character varying(600),
    fhfecha date,
    tdisponibilidad character varying(30),
    tefectosfalla character varying(300),
    tunidad character varying(100),
    tunidadnegocios character varying(100),
    tcaptura character varying(100),
    ttiporeporte character varying(100),
    tpiezasutilizadas character varying(100),
    ttecnico character varying(100),
    tsupervisor character varying(100),
    tsistema character varying(100),
    tsubsistema character varying(100),
    tturno character varying(100),
    ecodbitacora integer NOT NULL,
    estado character varying(20)
);
    DROP TABLE public.bitacora;
       public         heap    postgres    false            �            1259    16665    bitacora_ecodbitacora_seq    SEQUENCE     �   CREATE SEQUENCE public.bitacora_ecodbitacora_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.bitacora_ecodbitacora_seq;
       public          postgres    false    214            G           0    0    bitacora_ecodbitacora_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.bitacora_ecodbitacora_seq OWNED BY public.bitacora.ecodbitacora;
          public          postgres    false    215            �            1259    16666    mantenimiento    TABLE     i   CREATE TABLE public.mantenimiento (
    ecodtipomantenimiento numeric NOT NULL,
    ecantidad numeric
);
 !   DROP TABLE public.mantenimiento;
       public         heap    postgres    false            �            1259    16671    mantpreventivo    TABLE     	  CREATE TABLE public.mantpreventivo (
    ecodmantprev numeric NOT NULL,
    bestado boolean,
    fk_eunidadnegocios numeric,
    fk_eunidad numeric,
    fhultimomantenimiento date,
    ehorometro numeric,
    eodometro numeric,
    fk_etipomantenimiento numeric
);
 "   DROP TABLE public.mantpreventivo;
       public         heap    postgres    false            �            1259    16676    piezas    TABLE     [   CREATE TABLE public.piezas (
    ecodpiezas numeric NOT NULL,
    ecodigo numeric(30,0)
);
    DROP TABLE public.piezas;
       public         heap    postgres    false            �            1259    16681    sistema    TABLE     f   CREATE TABLE public.sistema (
    ecodsistema numeric NOT NULL,
    tnombre character varying(100)
);
    DROP TABLE public.sistema;
       public         heap    postgres    false            �            1259    16686 
   subsistema    TABLE     l   CREATE TABLE public.subsistema (
    ecodsubsistema numeric NOT NULL,
    tnombre character varying(100)
);
    DROP TABLE public.subsistema;
       public         heap    postgres    false            �            1259    16691    tiporeporte    TABLE     n   CREATE TABLE public.tiporeporte (
    ecodtiporeporte numeric NOT NULL,
    tnombre character varying(100)
);
    DROP TABLE public.tiporeporte;
       public         heap    postgres    false            �            1259    16696    tipousuario    TABLE     �   CREATE TABLE public.tipousuario (
    ecodtipousuario numeric NOT NULL,
    tdescripcionusuario character varying(100),
    bestado boolean
);
    DROP TABLE public.tipousuario;
       public         heap    postgres    false            �            1259    16701    unidad    TABLE     d   CREATE TABLE public.unidad (
    ecodunidad numeric NOT NULL,
    tnombre character varying(100)
);
    DROP TABLE public.unidad;
       public         heap    postgres    false            �            1259    16706    unidadnegocios    TABLE     t   CREATE TABLE public.unidadnegocios (
    ecodunidadnegocios numeric NOT NULL,
    tnombre character varying(100)
);
 "   DROP TABLE public.unidadnegocios;
       public         heap    postgres    false            �            1259    16711    usuario    TABLE     �   CREATE TABLE public.usuario (
    ecodusuario numeric NOT NULL,
    bstatus text,
    tnombre text,
    ttipousuario text,
    enumtrabajador numeric(10,0),
    tcontra text
);
    DROP TABLE public.usuario;
       public         heap    postgres    false            �           2604    16716    bitacora ecodbitacora    DEFAULT     ~   ALTER TABLE ONLY public.bitacora ALTER COLUMN ecodbitacora SET DEFAULT nextval('public.bitacora_ecodbitacora_seq'::regclass);
 D   ALTER TABLE public.bitacora ALTER COLUMN ecodbitacora DROP DEFAULT;
       public          postgres    false    215    214            5          0    16660    bitacora 
   TABLE DATA           �   COPY public.bitacora (tdescripcion, fhfecha, tdisponibilidad, tefectosfalla, tunidad, tunidadnegocios, tcaptura, ttiporeporte, tpiezasutilizadas, ttecnico, tsupervisor, tsistema, tsubsistema, tturno, ecodbitacora, estado) FROM stdin;
    public          postgres    false    214   �3       7          0    16666    mantenimiento 
   TABLE DATA           I   COPY public.mantenimiento (ecodtipomantenimiento, ecantidad) FROM stdin;
    public          postgres    false    216   V6       8          0    16671    mantpreventivo 
   TABLE DATA           �   COPY public.mantpreventivo (ecodmantprev, bestado, fk_eunidadnegocios, fk_eunidad, fhultimomantenimiento, ehorometro, eodometro, fk_etipomantenimiento) FROM stdin;
    public          postgres    false    217   �6       9          0    16676    piezas 
   TABLE DATA           5   COPY public.piezas (ecodpiezas, ecodigo) FROM stdin;
    public          postgres    false    218   �6       :          0    16681    sistema 
   TABLE DATA           7   COPY public.sistema (ecodsistema, tnombre) FROM stdin;
    public          postgres    false    219   7       ;          0    16686 
   subsistema 
   TABLE DATA           =   COPY public.subsistema (ecodsubsistema, tnombre) FROM stdin;
    public          postgres    false    220   I7       <          0    16691    tiporeporte 
   TABLE DATA           ?   COPY public.tiporeporte (ecodtiporeporte, tnombre) FROM stdin;
    public          postgres    false    221   }7       =          0    16696    tipousuario 
   TABLE DATA           T   COPY public.tipousuario (ecodtipousuario, tdescripcionusuario, bestado) FROM stdin;
    public          postgres    false    222   �7       >          0    16701    unidad 
   TABLE DATA           5   COPY public.unidad (ecodunidad, tnombre) FROM stdin;
    public          postgres    false    223   �7       ?          0    16706    unidadnegocios 
   TABLE DATA           E   COPY public.unidadnegocios (ecodunidadnegocios, tnombre) FROM stdin;
    public          postgres    false    224   !8       @          0    16711    usuario 
   TABLE DATA           g   COPY public.usuario (ecodusuario, bstatus, tnombre, ttipousuario, enumtrabajador, tcontra) FROM stdin;
    public          postgres    false    225   T8       H           0    0    bitacora_ecodbitacora_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.bitacora_ecodbitacora_seq', 17, true);
          public          postgres    false    215            �           2606    16718    bitacora bitacora_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.bitacora
    ADD CONSTRAINT bitacora_pkey PRIMARY KEY (ecodbitacora);
 @   ALTER TABLE ONLY public.bitacora DROP CONSTRAINT bitacora_pkey;
       public            postgres    false    214            �           2606    16720    unidad fk_eunidad_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.unidad
    ADD CONSTRAINT fk_eunidad_pkey PRIMARY KEY (ecodunidad);
 @   ALTER TABLE ONLY public.unidad DROP CONSTRAINT fk_eunidad_pkey;
       public            postgres    false    223            �           2606    16722     mantenimiento mantenimiento_pkey 
   CONSTRAINT     q   ALTER TABLE ONLY public.mantenimiento
    ADD CONSTRAINT mantenimiento_pkey PRIMARY KEY (ecodtipomantenimiento);
 J   ALTER TABLE ONLY public.mantenimiento DROP CONSTRAINT mantenimiento_pkey;
       public            postgres    false    216            �           2606    16724 "   mantpreventivo mantpreventivo_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public.mantpreventivo
    ADD CONSTRAINT mantpreventivo_pkey PRIMARY KEY (ecodmantprev);
 L   ALTER TABLE ONLY public.mantpreventivo DROP CONSTRAINT mantpreventivo_pkey;
       public            postgres    false    217            �           2606    16726    piezas piezas_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.piezas
    ADD CONSTRAINT piezas_pkey PRIMARY KEY (ecodpiezas);
 <   ALTER TABLE ONLY public.piezas DROP CONSTRAINT piezas_pkey;
       public            postgres    false    218            �           2606    16728    sistema sistema_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.sistema
    ADD CONSTRAINT sistema_pkey PRIMARY KEY (ecodsistema);
 >   ALTER TABLE ONLY public.sistema DROP CONSTRAINT sistema_pkey;
       public            postgres    false    219            �           2606    16730    subsistema subsistema_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.subsistema
    ADD CONSTRAINT subsistema_pkey PRIMARY KEY (ecodsubsistema);
 D   ALTER TABLE ONLY public.subsistema DROP CONSTRAINT subsistema_pkey;
       public            postgres    false    220            �           2606    16732    tiporeporte tiporeporte_pkey 
   CONSTRAINT     g   ALTER TABLE ONLY public.tiporeporte
    ADD CONSTRAINT tiporeporte_pkey PRIMARY KEY (ecodtiporeporte);
 F   ALTER TABLE ONLY public.tiporeporte DROP CONSTRAINT tiporeporte_pkey;
       public            postgres    false    221            �           2606    16734    tipousuario tipousuario_pkey 
   CONSTRAINT     g   ALTER TABLE ONLY public.tipousuario
    ADD CONSTRAINT tipousuario_pkey PRIMARY KEY (ecodtipousuario);
 F   ALTER TABLE ONLY public.tipousuario DROP CONSTRAINT tipousuario_pkey;
       public            postgres    false    222            �           2606    16736 $   unidadnegocios unidaddenegocios_pkey 
   CONSTRAINT     r   ALTER TABLE ONLY public.unidadnegocios
    ADD CONSTRAINT unidaddenegocios_pkey PRIMARY KEY (ecodunidadnegocios);
 N   ALTER TABLE ONLY public.unidadnegocios DROP CONSTRAINT unidaddenegocios_pkey;
       public            postgres    false    224            �           2606    16738    usuario usuario_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (ecodusuario);
 >   ALTER TABLE ONLY public.usuario DROP CONSTRAINT usuario_pkey;
       public            postgres    false    225            �           2606    16739 $   mantpreventivo fk_etipomantenimiento    FK CONSTRAINT     �   ALTER TABLE ONLY public.mantpreventivo
    ADD CONSTRAINT fk_etipomantenimiento FOREIGN KEY (fk_etipomantenimiento) REFERENCES public.mantpreventivo(ecodmantprev) NOT VALID;
 N   ALTER TABLE ONLY public.mantpreventivo DROP CONSTRAINT fk_etipomantenimiento;
       public          postgres    false    217    3219    217            �           2606    16744    mantpreventivo fk_eunidad    FK CONSTRAINT     �   ALTER TABLE ONLY public.mantpreventivo
    ADD CONSTRAINT fk_eunidad FOREIGN KEY (fk_eunidad) REFERENCES public.unidad(ecodunidad) NOT VALID;
 C   ALTER TABLE ONLY public.mantpreventivo DROP CONSTRAINT fk_eunidad;
       public          postgres    false    223    217    3231            �           2606    16749 !   mantpreventivo fk_eunidadnegocios    FK CONSTRAINT     �   ALTER TABLE ONLY public.mantpreventivo
    ADD CONSTRAINT fk_eunidadnegocios FOREIGN KEY (fk_eunidadnegocios) REFERENCES public.unidadnegocios(ecodunidadnegocios) NOT VALID;
 K   ALTER TABLE ONLY public.mantpreventivo DROP CONSTRAINT fk_eunidadnegocios;
       public          postgres    false    3233    217    224            5   t  x����N�@�ϛ��hhp 􊀐�@I�*q�'�V�w�D"o���#��:�P�J�ػ�g���|�Q*�C����@�6-�68�;��^����~O]1T&4�LiI�pMn�z�}���	U_&�A�N�Y=��FjH�k�<ñ����%Ƀ�%��׫_��=-�E�@546z�5�HA]�G��	[����gUB_1|���nh�͜<j�ztjJ��1���c���@�: Tѣ3��Ap$�i)8I-��
�HBݢxEHv�К%Bi2^�Dc]j4��9s�����t��e��O��0:P��3�3���^��&����<�ֈ���*���Ԝ����"5
/�CHP&y;Kr
;�O��~Fy��8D[m6����1k�N��ڄ���h28ځz�����=P�>�{u��в� �(JeL�ĸUq�6CzS4]!�nha��� ��E�W���</� i�@�6l(�J�.[��bE��T�[b���6�s���C4Z�jt����6�	{O�㽛�Փ&T�r�"�^uK�!Mk�����ē��j^��c��C#$���[��fX�WTc0(B��!5�������%:����O�� ��Xi�������N����      7   "   x�3�450�2�44 RƜ� �	�1����� N;�      8   B   x�m��	�0���.)g_�F'�ݟ�*D}$�Pt�Gy�q�誂�����Î؇�aG��?��.�+q�      9   %   x�3�4�0�0�2�4.cNc0�2�4�=... ��c      :   *   x�3�,NM/-�LIL�2�,I-.1�2��\&`ڄ+F��� �P      ;   $   x�3�L��+)-���2�,I-.1�2��\1z\\\ �"�      <   &   x�3�L�/*JM.�,��2�,I-.1�2��\1z\\\ �-	�      =   -   x�3�LL����,.)JL�/�,�2�,I-.�\�`������ -�E      >   !   x�3�41w�4r�2�4.cNc0������ [6      ?   #   x�3��vrw�2�,I-.1�2��\1z\\\ |�k      @   �   x�m�=
1@�zr��@���n!�����Mt�X30Ioci�)r1���탏g�J#8�D�lA��Y*� >RN�J@p�Yc��G��+����zZn$���$�WFz�%�TC��b���gJ9,c:3J��6�߱���N)��=1     