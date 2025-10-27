# Age Gate Bypass Script

## Description
Ce script permet de bypasser automatiquement l'age gate pour les utilisateurs venant des domaines Aperol (aperol.com, shop.aperol.com, us-shop.aperol.com) et The Mixer (themixer.com).

## Fonctionnement
- Le script vérifie le referrer de l'utilisateur
- Si l'utilisateur vient d'un domaine Aperol ou The Mixer, l'age gate est automatiquement masqué
- Si l'utilisateur vient d'ailleurs, l'age gate s'affiche normalement

## Intégration
Ajoutez ce script AVANT votre age gate existant :

```html
<script src="https://jazzy-biscotti-076f8f.netlify.app/wdf-common/age-gate-bypass/agegatebypass.js"></script>
```

## Domaines supportés
- aperol.com
- shop.aperol.com
- us-shop.aperol.com
- www.aperol.com
- www.shop.aperol.com
- www.us-shop.aperol.com
- themixer.com
- www.themixer.com

## Configuration
Le script masque automatiquement l'élément avec l'ID `#age-gate-otp`. Si votre age gate utilise un autre sélecteur, modifiez la ligne `elementsToHide: "#age-gate-otp"` dans le script.