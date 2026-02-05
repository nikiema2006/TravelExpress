# Travel Express - Design Luxe (Refonte)

## 1. Identité Visuelle

### Palette de Couleurs

**Couleurs Principales :**
- Or primaire : `#D4AF37` (Gold)
- Or clair : `#F4E4BC` (Light Gold)
- Or foncé : `#B8941F` (Dark Gold)
- Noir profond : `#0A0A0A` (Deep Black)
- Noir secondaire : `#111111` (Rich Black)
- Gris anthracite : `#1A1A1A` (Charcoal)

**Couleurs par Pays :**
- Chine : `#DE2910` (Rouge) + `#FFDE00` (Jaune)
- Espagne : `#AA151B` (Rouge) + `#F1BF00` (Jaune)
- Allemagne : `#000000` + `#DD0000` + `#FFCE00`
- Russie : `#FFFFFF` + `#0039A6` + `#D52B1E`

### Typographie

**Titres :** `Playfair Display` (serif élégant)
- H1 : 72px, weight 700, letter-spacing 0.02em
- H2 : 48px, weight 600
- H3 : 32px, weight 600

**Corps :** `Inter` (sans-serif moderne)
- Body : 16px, weight 400, line-height 1.7
- Labels : 14px, weight 500, uppercase, letter-spacing 0.1em

### Effets Visuels

**Header :**
- Backdrop-filter : blur(20px)
- Background : rgba(10, 10, 10, 0.8)
- Border-bottom : 1px solid rgba(212, 175, 55, 0.2)

**Effets Or :**
- Gradient or : `linear-gradient(135deg, #F4E4BC 0%, #D4AF37 50%, #B8941F 100%)`
- Text gradient : `-webkit-background-clip: text`
- Glow : `box-shadow: 0 0 40px rgba(212, 175, 55, 0.3)`

---

## 2. Structure des Sections

### Section 1 : Hero Dashboard (Très Design)

**Concept :** "Portail vers l'excellence internationale"
- Fond noir avec effet de particules dorées flottantes
- Titre principal avec gradient or
- Compteur animé des statistiques
- 5 cartes pays en perspective 3D
- Effet de lumière dorée qui suit la souris

**Animations :**
- Particules qui flottent lentement
- Titre qui apparaît lettre par lettre
- Cartes qui se révèlent avec un effet de flip 3D
- Lumière dorée interactive au mouvement de la souris

### Section 2 : Chine (Mise en avant spéciale)

**Concept :** "L'Empire du Milieu vous ouvre ses portes"
- Fond avec motif subtil de dragon chinois (opacity 0.05)
- Couleurs : Rouge #DE2910 + Or #FFDE00
- Layout asymétrique avec grande image à gauche
- Contenu à droite avec typographie élégante
- Effet de lanternes qui flottent en arrière-plan

**Éléments spéciaux :**
- Bannière "Destination Phare" avec ruban doré
- Statistiques en grand format
- Galerie d'images défilante
- CTA premium avec effet de brillance

### Section 3 : Espagne

**Concept :** "La passion méditerranéenne"
- Couleurs : Rouge #AA151B + Jaune #F1BF00
- Design avec formes ondulées
- Images de architecture gothique et plages

### Section 4 : Allemagne

**Concept :** "Précision et excellence"
- Couleurs : Noir, Rouge, Or
- Design géométrique et structuré
- Images d'industrie et d'universités modernes

### Section 5 : Russie

**Concept :** "Grandeur et culture"
- Couleurs : Blanc, Bleu, Rouge
- Design avec motifs orthodoxes subtils
- Images de la Place Rouge et cathédrales

### Section 6 : Processus

**Concept :** "Votre voyage en 4 étapes"
- Timeline verticale avec lignes dorées
- Icônes animées
- Connexions entre les étapes

### Section 7 : Témoignages

**Concept :** "Ils nous ont fait confiance"
- Carousel 3D
- Cards avec reflet doré

### Section 8 : Contact & Footer

**Concept :** "Commencez votre aventure"
- Formulaire élégant avec bordures dorées
- Footer sombre avec accents dorés

---

## 3. Animations Avancées

### Effet Particules (Hero)
- 50 particules dorées qui flottent
- Taille aléatoire entre 2-6px
- Vitesse lente et fluide
- Connexions entre particules proches

### Effet Lumière Interactive
- Spot de lumière dorée qui suit la souris
- Blend mode : soft-light
- Opacity : 0.15
- Transition fluide

### Effet 3D Cards
- Perspective : 1000px
- Rotation au hover : rotateY(±5deg)
- Shadow dynamique

### Effet Text Reveal
- Lettres qui apparaissent une par une
- Stagger : 50ms
- Easing : power3.out

### Effet Scroll Parallax
- Images qui bougent à des vitesses différentes
- Depth effect

---

## 4. Composants UI

### Boutons

**Primary (Or) :**
```css
background: linear-gradient(135deg, #F4E4BC, #D4AF37, #B8941F);
color: #0A0A0A;
border-radius: 4px;
padding: 16px 32px;
text-transform: uppercase;
letter-spacing: 0.1em;
font-weight: 600;
box-shadow: 0 4px 20px rgba(212, 175, 55, 0.3);
transition: all 0.3s ease;
```

**Secondary (Outline Or) :**
```css
background: transparent;
border: 1px solid #D4AF37;
color: #D4AF37;
/* hover : fond or, texte noir */
```

### Cards

**Card Pays :**
- Background : #111111
- Border : 1px solid rgba(212, 175, 55, 0.3)
- Border-radius : 16px
- Hover : glow doré, scale 1.02

---

## 5. Responsive

- Mobile : Layout simplifié, animations réduites
- Tablet : 2 colonnes
- Desktop : Full experience
