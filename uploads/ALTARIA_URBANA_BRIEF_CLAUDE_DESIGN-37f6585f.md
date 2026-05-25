# CLAUDE DESIGN BRIEF — PROTOTIPO WEB ALTARIA URBANA

**Proyecto:** Altaria Urbana  
**Dominio previsto:** altariaurbana.com  
**Versión:** 1.0  
**Fecha:** 22/05/2026  
**Objetivo del archivo:** usar este documento como briefing completo para Claude Design / Claude Code / Claude Artifacts para generar un prototipo web profesional, responsive y editable de Altaria Urbana.

---

## 1. Encargo para Claude

Actúa como diseñador senior UX/UI, arquitecto frontend, copywriter inmobiliario B2B y especialista en funnels de captación para el sector inmobiliario en España.

Necesito que generes un prototipo completo de la web de **Altaria Urbana**, una firma de desarrollo inmobiliario estratégico especializada en estructurar oportunidades de suelo, activos inmobiliarios y proyectos para propietarios, promotores, inversores y gestoras de cooperativas.

La web debe ser moderna, sobria, premium, clara, técnica y comercial. No debe parecer una inmobiliaria tradicional de venta de pisos. Debe transmitir criterio, orden, trazabilidad, análisis y capacidad de convertir activos complejos en oportunidades comprensibles.

---

## 2. Idea central de Altaria Urbana

### Definición corta

Altaria Urbana estructura oportunidades inmobiliarias para que propietarios, promotores, inversores y gestoras puedan entenderlas, analizarlas, comercializarlas y ejecutarlas con menor incertidumbre.

### Posicionamiento

No somos una inmobiliaria genérica.  
Somos una capa de inteligencia, análisis y comercialización estructurada entre el activo inmobiliario opaco y la decisión profesional.

### Claim principal

**Estructuramos oportunidades inmobiliarias.**

### Subclaim

**Suelo, activos y proyectos explicados con claridad para que el mercado pueda decidir.**

### Mensaje principal para la home

En Altaria Urbana ordenamos información, analizamos viabilidad, preparamos expedientes y conectamos suelo, propietarios, promotores, inversores y gestoras con oportunidades mejor documentadas, trazables y comercializables.

---

## 3. Objetivo de la web

La web debe servir para:

1. Explicar qué es Altaria Urbana.
2. Captar propietarios de suelo o activos inmobiliarios complejos.
3. Captar promotores e inversores interesados en oportunidades filtradas.
4. Captar gestoras de cooperativas interesadas en suelo viable y compradores finales.
5. Captar compradores finales interesados en vivienda cooperativa o proyectos futuros.
6. Publicar artículos, estudios, noticias y oportunidades.
7. Centralizar formularios y alimentar una base de datos/CRM.
8. Transmitir confianza, claridad jurídica y profesionalidad.
9. Facilitar la conversión a reunión o diagnóstico inicial.

---

## 4. Estilo visual

### Sensación de marca

- Premium, pero accesible.
- Técnico, pero humano.
- Sobrio, pero moderno.
- Inmobiliario estratégico, no inmobiliaria de portal.
- Claridad documental, urbanismo, territorio, estructura, futuro habitable.

### Evitar

- Iconos de casitas genéricas.
- Llaves, tejados, skyline cliché.
- Colores chillones.
- Fotos de stock excesivamente comerciales.
- Promesas de rentabilidad.
- Frases tipo “la mejor oportunidad del mercado”.
- Estética de agencia inmobiliaria tradicional.

### Inspiración visual

- Consultora estratégica.
- Firma de arquitectura/urbanismo.
- PropTech sobria.
- Dossier institucional.
- Landing B2B de alto ticket.

### Paleta corporativa recomendada

```css
:root {
  --tierra-profunda: #6E5A46;
  --grafito-mineral: #263238;
  --arena-calida: #DBCCBB;
  --marfil-tecnico: #F5F1EA;
  --verde-horizonte: #6F8372;
  --blanco-calido: #FAF8F4;
  --gris-linea: #D8D2C8;
}
```

### Tipografías recomendadas

Usar fuentes de Google Fonts o equivalentes:

- Titulares: `Cormorant Garamond`, `Libre Baskerville`, `Playfair Display` o similar.
- Texto: `Inter`, `Manrope`, `Source Sans 3` o similar.
- Números/KPIs: `Inter` o `IBM Plex Sans`.

### Estilo de componentes

- Fondos claros: marfil, arena, blanco cálido.
- Texto principal en grafito.
- Botones sólidos en grafito o tierra profunda.
- Botones secundarios con borde fino.
- Tarjetas con borde sutil, sombra mínima y esquinas suaves.
- Mucho espacio en blanco.
- Líneas finas, grids, mapas abstractos, patrones topográficos o parcelarios.

---

## 5. Stack técnico recomendado para el prototipo

Generar preferentemente en:

- **React + Tailwind CSS**
- Componentes limpios y reutilizables.
- Responsive mobile-first.
- Formularios funcionales a nivel visual.
- Datos mock en arrays.
- Preparado para conectar después con:
  - Google Sheets
  - Airtable
  - Supabase
  - Firebase
  - Notion
  - AppSheet
  - Make/Zapier/n8n

No hace falta backend real en el primer prototipo, pero sí dejar claramente definidos los campos de formularios y los modelos de datos.

---

## 6. Arquitectura de páginas

Crear un prototipo con estas páginas o secciones navegables:

1. **Inicio**
2. **Altaria Suelo**
3. **Altaria Desarrollo**
4. **Altaria Comercialización**
5. **Gestoras de Cooperativas**
6. **Compradores / Vivienda Cooperativa**
7. **Oportunidades**
8. **Blog / Estudios**
9. **Sobre Altaria**
10. **Contacto / Diagnóstico**

Si el prototipo se hace como SPA, usar navegación con secciones ancladas o simulación de rutas.

---

# 7. Página Inicio

## 7.1 Hero

### Copy principal

**Estructuramos oportunidades inmobiliarias para que el mercado pueda decidir.**

### Subtítulo

Ordenamos suelo, activos y proyectos con criterio técnico, trazabilidad documental y visión comercial para conectar propietarios, promotores, inversores y gestoras con oportunidades mejor preparadas.

### CTA principal

**Solicitar diagnóstico inicial**

### CTA secundaria

**Ver cómo trabajamos**

### Elementos visuales

- Fondo claro con patrón sutil de parcelas/topografía.
- Bloque lateral con una tarjeta tipo “Expediente Altaria”.
- Microdatos en la tarjeta:
  - Activo analizado
  - Riesgo documental
  - Encaje urbanístico
  - Comprador objetivo
  - Estado: Go / Hold / No-Go

---

## 7.2 Problema de mercado

### Título

**El problema no es solo encontrar suelo. Es entenderlo, documentarlo y convertirlo en una oportunidad real.**

### Texto

Muchos activos no avanzan porque llegan al mercado con información incompleta, precio mal defendido, urbanismo poco claro, documentación dispersa o una narrativa comercial débil. Altaria reduce ese ruido.

### Tarjetas

1. **Activos opacos**
   - Suelos con valor potencial que el mercado no entiende.

2. **Documentación dispersa**
   - Notas, planos, catastro, cargas y normativa sin ordenar.

3. **Decisiones lentas**
   - Promotores e inversores descartan rápido cuando falta claridad.

4. **Comercialización débil**
   - Publicar un activo no equivale a estructurar una oportunidad.

---

## 7.3 Qué hace Altaria

### Título

**De activo confuso a expediente comercializable.**

### Proceso en 5 pasos

1. **Captamos**
   - Identificamos activos, propietarios y oportunidades con potencial.

2. **Ordenamos**
   - Centralizamos documentación, titularidad, catastro, planeamiento y riesgos.

3. **Analizamos**
   - Estudiamos escenarios, usos, compradores objetivo y viabilidad inicial.

4. **Estructuramos**
   - Creamos fichas, dossiers, data rooms y narrativa de decisión.

5. **Comercializamos**
   - Conectamos el activo con promotores, inversores, gestoras o compradores adecuados.

---

## 7.4 Líneas de negocio

### Tarjetas principales

#### Altaria Suelo

Captación, análisis, estructuración y comercialización de suelo residencial, terciario, urbanizable, finalista o con potencial de mejora.

CTA: **Ver Altaria Suelo**

#### Altaria Desarrollo

Estudios de viabilidad urbanística, económica, comercial y operativa para convertir activos poco claros en oportunidades comprensibles.

CTA: **Ver Altaria Desarrollo**

#### Altaria Comercialización

Dossiers, landings, campañas, CRM, contacto directo, negociación y cierre para propietarios, promotores y operadores.

CTA: **Ver Comercialización**

#### Gestoras de Cooperativas

Suelo filtrado, fichas cooperativas, escenarios y captación de compradores finales para acelerar proyectos viables.

CTA: **Ver solución para gestoras**

---

## 7.5 Segmentos

### Título

**Una metodología para cada decisión.**

Tarjetas:

1. **Propietarios**
   - Ordenar el activo antes de venderlo.

2. **Promotores**
   - Recibir expedientes, no ruido.

3. **Inversores**
   - Analizar escenarios, riesgos y plan B.

4. **Gestoras**
   - Acceder a suelo filtrado y compradores finales.

5. **Compradores**
   - Apuntarse a proyectos cooperativos con información clara.

---

## 7.6 KPIs o indicadores de metodología

Usar cifras como metodología, no como promesas reales cerradas.

Mostrar:

- 0–48 h: triage inicial
- 7–10 días: ficha preliminar
- 14–21 días: dossier completo
- 100% trazabilidad documental
- Go / Hold / No-Go como criterio de decisión

Texto legal debajo:

> Los plazos son objetivos operativos internos y pueden variar según documentación, complejidad urbanística y validación técnica.

---

## 7.7 CTA intermedio

### Título

**¿Tienes un suelo o activo que el mercado no está entendiendo?**

Texto:

Podemos revisarlo de forma preliminar y decirte con honestidad si merece análisis, estructuración o comercialización.

Botón:

**Solicitar diagnóstico**

---

## 7.8 Blog / Estudios destacados

Mostrar 3 tarjetas mock:

1. **Cómo saber si un suelo está preparado para salir al mercado**
2. **Qué mira un promotor antes de estudiar una oportunidad**
3. **Cooperativas de vivienda: cuándo el suelo encaja y cuándo no**

CTA: **Ver todos los estudios**

---

## 7.9 FAQ home

Preguntas:

1. ¿Altaria compra suelo?
   - No en la fase inicial. Altaria estructura, analiza y comercializa oportunidades. La compra o coinversión solo se estudiaría en escenarios futuros muy concretos.

2. ¿Altaria actúa como promotora?
   - No. Altaria no asume obligaciones de promoción, construcción ni gestión de fondos de terceros salvo estructura jurídica específica y revisada.

3. ¿Trabajáis con propietarios particulares?
   - Sí, especialmente si tienen suelo o activos con complejidad documental, urbanística o comercial.

4. ¿Qué entregáis?
   - Fichas preliminares, análisis, dossiers, data rooms, campañas, formularios, CRM y reporting.

5. ¿La primera revisión tiene coste?
   - Puede existir una revisión inicial breve sin compromiso, pero los análisis documentales y técnicos completos deben presupuestarse.

---

# 8. Página Altaria Suelo

## Hero

**Suelo mejor ordenado, mejor explicado y mejor dirigido.**

Subtítulo:

Captamos, analizamos y estructuramos suelo residencial, terciario, urbanizable o finalista para convertirlo en una oportunidad legible para propietarios, promotores e inversores.

## Secciones

### Qué resolvemos

- Suelos sin relato comercial.
- Documentación incompleta.
- Precio sin defensa.
- Comprador objetivo mal definido.
- Falta de estrategia de salida.

### Qué entregamos

1. Ficha de activo.
2. Checklist documental.
3. Análisis preliminar.
4. Scoring de oportunidad.
5. Data room.
6. Dossier comercial.
7. Estrategia de contacto a compradores.

### CTA

**Analizar mi suelo**

---

# 9. Página Altaria Desarrollo

## Hero

**Convertimos incertidumbre en escenarios de decisión.**

Subtítulo:

Estudios de viabilidad urbanística, económica, comercial y operativa para entender qué puede hacerse con un activo y qué riesgos deben resolverse antes de avanzar.

## Bloques

### Análisis incluido

- Situación urbanística.
- Usos compatibles.
- Edificabilidad estimada.
- Riesgos y condicionantes.
- Escenarios de producto.
- Comparables.
- Cronograma preliminar.
- Recomendación Go / Hold / No-Go.

### Advertencia de rigor

Altaria no sustituye la validación técnica, jurídica o administrativa definitiva. Nuestro trabajo ordena hipótesis, riesgos y escenarios para acelerar la decisión profesional.

### CTA

**Solicitar estudio preliminar**

---

# 10. Página Altaria Comercialización

## Hero

**No basta con publicar. Hay que preparar la operación para que el comprador correcto la entienda.**

## Servicios

1. Dossier comercial.
2. Landing de oportunidad.
3. Campaña B2B selectiva.
4. CRM de contactos.
5. Seguimiento de promotores e inversores.
6. Reporting semanal.
7. Negociación y coordinación de siguientes pasos.

## Proceso

1. Preparar expediente.
2. Identificar comprador objetivo.
3. Crear narrativa.
4. Activar canal.
5. Medir respuesta.
6. Ajustar estrategia.
7. Acompañar negociación.

### CTA

**Preparar comercialización**

---

# 11. Página Gestoras de Cooperativas

## Hero

**Suelo filtrado y compradores finales para gestoras de cooperativas.**

Subtítulo:

Ayudamos a gestoras de cooperativas a encontrar, analizar y presentar suelo viable, con la posibilidad de aportar pipeline de compradores finales interesados.

## Problema

Las gestoras suelen enfrentarse a:

- Falta de suelo apto.
- Documentación incompleta.
- Incertidumbre urbanística.
- Operaciones que se caen tarde.
- Dificultad para formar grupo.
- Coste alto de captación.

## Qué ofrece Altaria

1. **Ficha preliminar cooperativa**
   - Encaje urbanístico, edificabilidad útil, riesgos y tipología posible.

2. **Dossier cooperativo**
   - Escenarios, cronograma, comparables, plan B y narrativa para decisión.

3. **Captación de compradores finales**
   - Landing, formulario, base de datos, scoring y seguimiento.

4. **Soporte técnico-comercial**
   - Un puente entre suelo, mercado, gestora y comprador final.

## CTA

**Quiero recibir suelo filtrado**

CTA secundario:

**Solicitar ficha cooperativa de muestra**

---

# 12. Página Compradores / Vivienda Cooperativa

## Hero

**Accede a futuros proyectos de vivienda cooperativa con información clara desde el inicio.**

Subtítulo:

Apúntate a la lista de interés para recibir proyectos filtrados según tu zona, presupuesto y tipo de vivienda.

## Explicación sencilla

Una cooperativa de viviendas permite acceder a vivienda a precio de coste, con mayor transparencia y participación, aunque exige entender fases, pagos, riesgos, plazos y compromisos.

## Ventajas

- Precio potencialmente más ajustado.
- Transparencia de costes.
- Participación en decisiones.
- Comunidad desde el inicio.
- Información estructurada.

## Advertencia honesta

La vivienda cooperativa no es para todo el mundo. Requiere paciencia, compromiso, revisión documental y comprensión de los riesgos de cada fase.

## CTA

**Apuntarme a la lista de interés**

---

# 13. Página Oportunidades

Crear una página tipo catálogo profesional, no portal inmobiliario.

## Filtros

- Tipo: suelo residencial, terciario, mixto, cooperativa, inversión.
- Provincia.
- Estado: En análisis, Dossier disponible, Comercialización, Reservado, Cerrado.
- Riesgo: Bajo, Medio, Alto.
- Perfil objetivo: promotor, inversor, gestora, comprador final.

## Tarjeta de oportunidad

Campos visibles:

- Nombre del activo.
- Municipio.
- Tipo de activo.
- Estado.
- Superficie.
- Uso potencial.
- Estado documental.
- Perfil objetivo.
- CTA: Solicitar información.

## Disclaimer

La información publicada es preliminar, no constituye oferta vinculante y está sujeta a verificación documental, urbanística, jurídica y comercial.

---

# 14. Página Blog / Estudios

Debe servir como sistema de autoridad y SEO.

## Categorías

1. Suelo y urbanismo.
2. Viabilidad inmobiliaria.
3. Comercialización.
4. Cooperativas.
5. Mercado residencial.
6. Guías para propietarios.
7. Estudios de zona.

## Artículos mock iniciales

1. Cómo preparar un suelo antes de enseñarlo a un promotor.
2. Qué documentación mínima debe tener un activo inmobiliario.
3. Por qué muchos suelos no se venden aunque tengan potencial.
4. Qué mira una gestora antes de estudiar una cooperativa.
5. Diferencia entre ficha preliminar, dossier y data room.
6. Cómo evitar promesas peligrosas en una oportunidad inmobiliaria.

---

# 15. Página Sobre Altaria

## Hero

**Claridad, estructura y criterio para operaciones inmobiliarias complejas.**

## Texto

Altaria Urbana nace para cubrir un hueco entre la consultoría técnica, la intermediación inmobiliaria y la comercialización profesional. Nuestro trabajo consiste en transformar activos poco claros en expedientes comprensibles, trazables y comercializables.

## Principios

1. Claridad antes que promesa.
2. Documentación antes que marketing.
3. Hipótesis separadas de hechos.
4. Trazabilidad desde el primer contacto.
5. Decisiones Go / Hold / No-Go.
6. Prudencia legal y cumplimiento RGPD.
7. Tecnología al servicio del criterio, no al revés.

---

# 16. Página Contacto / Diagnóstico

## Hero

**Cuéntanos qué activo, proyecto o necesidad quieres ordenar.**

## Formulario principal

Campos:

- Nombre y apellidos
- Empresa
- Teléfono
- Email
- Tipo de perfil:
  - Propietario
  - Promotor
  - Inversor
  - Gestora de cooperativas
  - Comprador final
  - Técnico / colaborador
  - Otro
- Tipo de activo o necesidad:
  - Suelo residencial
  - Suelo terciario
  - Activo inmobiliario
  - Proyecto cooperativo
  - Comercialización
  - Análisis de viabilidad
  - Captación de compradores
- Provincia / municipio
- Breve descripción
- ¿Dispone de documentación?
  - Nota simple
  - Catastro
  - Planeamiento
  - Fotos
  - Ninguna
- Urgencia:
  - Baja
  - Media
  - Alta
- Aceptación de política de privacidad
- Consentimiento para contacto comercial

Botón:

**Enviar solicitud**

Mensaje tras envío:

Gracias. Revisaremos la información y, si encaja con nuestro foco, te propondremos el siguiente paso: revisión inicial, análisis, ficha o reunión.

---

# 17. Formularios específicos

Además del formulario general, crear componentes o modales para 5 formularios:

## 17.1 Formulario Propietarios

Campos:

- Nombre
- Teléfono
- Email
- Tipo de activo
- Municipio
- Dirección aproximada
- Referencia catastral
- Superficie
- Precio esperado
- Situación documental
- Situación urbanística conocida
- Motivo de venta
- Urgencia
- Documentos disponibles
- ¿Está dispuesto a contratar un análisis si el activo encaja?
- Consentimiento RGPD

## 17.2 Formulario Promotores / Inversores

Campos:

- Nombre
- Empresa
- Teléfono
- Email
- Perfil: promotor / inversor / patrimonialista / broker
- Zonas objetivo
- Ticket aproximado
- Tipo de activo buscado
- Margen o criterio de inversión
- Plazo de decisión
- Documentación mínima exigida
- ¿Desea recibir oportunidades filtradas?
- Consentimiento RGPD

## 17.3 Formulario Gestoras

Campos:

- Nombre de gestora
- Persona de contacto
- Cargo
- Teléfono
- Email
- Zonas de interés
- Nº viviendas objetivo
- Tipo de suelo buscado
- Presupuesto de suelo
- ¿Necesita captación de compradores finales?
- ¿Quiere recibir ficha de muestra?
- Mensaje
- Consentimiento RGPD

## 17.4 Formulario Compradores Finales

Campos:

- Nombre
- Teléfono
- Email
- Ciudad o zona de interés
- Tipo de vivienda
- Nº dormitorios
- Presupuesto aproximado
- Plazo para comprar
- ¿Conoce el modelo cooperativo?
- ¿Quiere recibir guía gratuita?
- Consentimiento RGPD

## 17.5 Formulario Técnicos / Colaboradores

Campos:

- Nombre
- Empresa / estudio
- Especialidad
- Provincia
- Teléfono
- Email
- Tipo de colaboración
- Experiencia en urbanismo / suelo / cooperativas
- Mensaje
- Consentimiento RGPD

---

# 18. Modelo de base de datos

Diseñar la web pensando en que cada formulario alimente una base de datos.

## Tabla: Contactos

```json
{
  "id": "string",
  "fecha_alta": "date",
  "nombre": "string",
  "empresa": "string",
  "email": "string",
  "telefono": "string",
  "perfil": "propietario | promotor | inversor | gestora | comprador | tecnico | otro",
  "origen": "web | linkedin | referido | evento | llamada | campaña",
  "estado": "nuevo | contactado | cualificado | propuesta | cliente | descartado",
  "rgpd_consentimiento": true,
  "notas": "string"
}
```

## Tabla: Activos

```json
{
  "id": "string",
  "nombre_activo": "string",
  "tipo": "suelo_residencial | suelo_terciario | mixto | activo | cooperativa",
  "municipio": "string",
  "provincia": "string",
  "referencia_catastral": "string",
  "superficie_m2": "number",
  "precio_esperado": "number",
  "propietario_id": "string",
  "estado_documental": "sin_documentos | basico | completo | en_revision",
  "estado_urbanistico": "desconocido | preliminar | validado | riesgo",
  "riesgo": "verde | amarillo | rojo",
  "score": "number",
  "estado_pipeline": "triage | analisis | dossier | comercializacion | negociacion | cerrado | descartado",
  "proxima_accion": "string"
}
```

## Tabla: Oportunidades

```json
{
  "id": "string",
  "activo_id": "string",
  "segmento_objetivo": "promotor | inversor | gestora | comprador",
  "tipo_oportunidad": "analisis | dossier | mandato | comercializacion | cooperativa",
  "estado": "abierta | enviada | reunion | loi | cerrada | descartada",
  "valor_estimado": "number",
  "ingreso_potencial_altaria": "number",
  "probabilidad": "number",
  "fecha_ultima_actualizacion": "date"
}
```

## Tabla: Dossiers

```json
{
  "id": "string",
  "activo_id": "string",
  "tipo": "ficha_preliminar | dossier_completo | dossier_cooperativo | data_room",
  "estado": "borrador | revision | enviado | aprobado",
  "url_drive": "string",
  "fecha_entrega_prevista": "date",
  "responsable": "string"
}
```

## Tabla: Leads Compradores

```json
{
  "id": "string",
  "nombre": "string",
  "email": "string",
  "telefono": "string",
  "zona_interes": "string",
  "tipo_vivienda": "string",
  "presupuesto": "number",
  "estado": "nuevo | contactado | cualificado | reunion | pre_reserva | descartado",
  "score": "number",
  "consentimiento_rgpd": true
}
```

## Tabla: Blog

```json
{
  "id": "string",
  "titulo": "string",
  "slug": "string",
  "categoria": "suelo | urbanismo | viabilidad | comercializacion | cooperativas | mercado | guias",
  "extracto": "string",
  "contenido": "markdown",
  "fecha_publicacion": "date",
  "autor": "string",
  "estado": "borrador | publicado"
}
```

---

# 19. Automatizaciones previstas

Dejar preparado el prototipo para estos flujos futuros:

1. Formulario web → CRM.
2. Nuevo propietario → crear activo en pipeline.
3. Activo con score alto → aviso por email.
4. Nuevo comprador → añadir a lista de interés.
5. Gestora interesada → tarea de llamada.
6. Dossier solicitado → crear carpeta en Drive.
7. Lead cualificado → email de seguimiento.
8. Solicitud de diagnóstico → evento en Calendar.
9. Blog publicado → difusión en LinkedIn.
10. Reporte semanal → resumen de KPIs.

---

# 20. Requisitos legales y de confianza

Incluir en el prototipo:

- Enlaces a Política de privacidad.
- Enlaces a Aviso legal.
- Checkboxes de consentimiento RGPD.
- Disclaimer de información preliminar.
- No prometer rentabilidades.
- No prometer edificabilidad definitiva.
- No hablar de “precio garantizado”.
- No captar reservas ni pagos desde el prototipo.
- Dejar claro que Altaria no actúa como promotora salvo estructura contractual específica.

## Texto de disclaimer recomendado

La información presentada por Altaria Urbana tiene carácter preliminar, orientativo y no vinculante. Toda oportunidad queda sujeta a verificación documental, urbanística, jurídica, técnica y comercial. Altaria no asume funciones de promotor, constructor ni entidad financiera salvo acuerdo expreso y estructura legal específica.

---

# 21. Componentes que debe crear Claude

Crear componentes reutilizables:

1. Navbar
2. HeroSection
3. CTAButton
4. ServiceCard
5. SegmentCard
6. ProcessTimeline
7. KPIBlock
8. OpportunityCard
9. BlogCard
10. FAQAccordion
11. ContactForm
12. LeadFormModal
13. Footer
14. LegalDisclaimer
15. Breadcrumbs
16. NewsletterBox
17. TestimonialPlaceholder
18. DataRoomPreviewCard
19. ScoreBadge
20. StatusBadge

---

# 22. Estructura de navegación

Navbar:

- Inicio
- Suelo
- Desarrollo
- Comercialización
- Gestoras
- Compradores
- Oportunidades
- Blog
- Contacto

Botón destacado:

**Solicitar diagnóstico**

Footer:

- Altaria Urbana
- Suelo, hogar y futuro
- Servicios
- Segmentos
- Blog
- Contacto
- Aviso legal
- Privacidad
- LinkedIn
- Email
- Teléfono

---

# 23. Copy de footer

**Altaria Urbana**  
Estructuramos oportunidades inmobiliarias con claridad, trazabilidad y criterio técnico-comercial.

**Suelo, hogar y futuro.**

---

# 24. SEO inicial

## Meta title

Altaria Urbana | Suelo, desarrollo y comercialización inmobiliaria estratégica

## Meta description

Altaria Urbana estructura oportunidades de suelo y activos inmobiliarios para propietarios, promotores, inversores y gestoras de cooperativas. Análisis, dossiers, trazabilidad y comercialización profesional.

## Keywords orientativas

- suelo inmobiliario
- desarrollo inmobiliario
- comercialización de suelo
- análisis de viabilidad inmobiliaria
- gestoras de cooperativas
- vivienda cooperativa
- suelo para promotores
- oportunidades inmobiliarias
- urbanismo Andalucía
- Altaria Urbana

---

# 25. Requisitos de diseño responsive

## Desktop

- Layout amplio.
- Hero en dos columnas.
- Cards en grids de 3 o 4.
- Menú completo.

## Tablet

- Grids de 2 columnas.
- Hero adaptado.

## Móvil

- Menú hamburguesa.
- Hero en una columna.
- CTA siempre visible.
- Formularios sencillos.
- Tipografía legible.
- Tarjetas apiladas.

---

# 26. Primera versión del prototipo

Claude debe entregar una primera versión con:

1. Home completa.
2. Secciones principales simuladas.
3. Formularios mock.
4. Página de oportunidades con 3 ejemplos ficticios.
5. Página de blog con 6 artículos ficticios.
6. Estilo visual alineado con la marca.
7. Componentes limpios.
8. Código organizado.
9. Responsive.
10. Sin dependencias innecesarias.

---

# 27. Ejemplos de oportunidades ficticias para el prototipo

Usar como mock data, dejando claro que son ejemplos no reales.

```js
const opportunities = [
  {
    id: 1,
    name: "Suelo residencial en área metropolitana",
    location: "Bahía de Cádiz",
    type: "Suelo residencial",
    status: "En análisis",
    surface: "12.400 m²",
    target: "Promotor / Gestora",
    risk: "Amarillo",
    summary: "Activo en fase de revisión documental con potencial para desarrollo residencial sujeto a validación urbanística."
  },
  {
    id: 2,
    name: "Activo terciario con potencial asistencial",
    location: "Andalucía Occidental",
    type: "Suelo terciario",
    status: "Dossier preliminar",
    surface: "19.600 m² edificables estimados",
    target: "Operador / Inversor",
    risk: "Amarillo",
    summary: "Oportunidad orientada a operador especializado, pendiente de validación técnica y comercial."
  },
  {
    id: 3,
    name: "Proyecto cooperativo en estudio",
    location: "Sevilla área metropolitana",
    type: "Cooperativa",
    status: "Captación de interés",
    surface: "Por definir",
    target: "Compradores / Gestora",
    risk: "Pendiente",
    summary: "Lista de interés para compradores finales interesados en vivienda cooperativa."
  }
]
```

---

# 28. Ejemplos de artículos ficticios para el prototipo

```js
const posts = [
  {
    title: "Qué documentación debe tener un suelo antes de salir al mercado",
    category: "Guías para propietarios",
    excerpt: "Una checklist práctica para evitar que una oportunidad se bloquee por falta de información básica."
  },
  {
    title: "Por qué un promotor descarta una oportunidad en menos de cinco minutos",
    category: "Promotores",
    excerpt: "Los criterios mínimos que necesita un comprador profesional para seguir analizando."
  },
  {
    title: "Ficha preliminar, dossier y data room: diferencias clave",
    category: "Metodología",
    excerpt: "Tres niveles de información para convertir activos opacos en decisiones ordenadas."
  },
  {
    title: "Cuándo un suelo encaja para una cooperativa de viviendas",
    category: "Cooperativas",
    excerpt: "Factores urbanísticos, económicos y comerciales que una gestora debe revisar."
  },
  {
    title: "Go, Hold o No-Go: cómo decidir antes de invertir más tiempo",
    category: "Viabilidad",
    excerpt: "Un sistema simple para no confundir intuición con oportunidad real."
  },
  {
    title: "Comercialización estructurada: más allá de publicar un anuncio",
    category: "Comercialización",
    excerpt: "Cómo preparar una narrativa, un target y un seguimiento profesional."
  }
]
```

---

# 29. Criterios de calidad

El prototipo será correcto si:

- La home se entiende en menos de 10 segundos.
- No parece una agencia inmobiliaria tradicional.
- Tiene CTA claros.
- Los formularios recogen datos útiles para CRM.
- La marca transmite rigor y claridad.
- La web separa bien propietarios, promotores, inversores, gestoras y compradores.
- El copy no promete rentabilidades ni resultados no verificados.
- Hay espacio para blog y oportunidades.
- La estructura puede conectarse luego con base de datos.
- El diseño es visualmente sobrio, limpio y profesional.

---

# 30. Prompt final resumido para Claude

Diseña y desarrolla un prototipo responsive de la web de Altaria Urbana usando React + Tailwind. La web debe posicionar a Altaria como firma de desarrollo inmobiliario estratégico que estructura oportunidades de suelo, activos y proyectos para propietarios, promotores, inversores, gestoras de cooperativas y compradores finales. Usa una estética premium, sobria y técnica, con paleta tierra/grafito/marfil, formularios completos, páginas de servicios, oportunidades, blog y contacto. Incluye componentes reutilizables, mock data, disclaimers legales, estructura preparada para conectar formularios con CRM/base de datos y una experiencia clara orientada a conversión B2B.
