# NESTA_exerciceOhce_rendu
Application typeScript de palyndrome

## Etape 1 
QUAND on saisit une chaîne ALORS celle-ci est renvoyée en miroir  
  
QUAND on saisit un palindrome ALORS celui-ci est renvoyé ET
« Bien dit » est envoyé ensuite  
    
QUAND on saisit une chaîne ALORS « Bonjour » est envoyé avant
toute réponse  
  
QUAND on saisit une chaîne ALORS « Au revoir » est envoyé en
dernier  

## Etape 2

Continuez OHCE en introduisant la notion de langue.  
ETANT DONNE un utilisateur parlant une langue  
QUAND on entre un palindrome  
ALORS il est renvoyé  
ET le <bienDit> de cette langue est envoyé  
  
ETANT DONNE un utilisateur parlant une langue  
QUAND on saisit une chaîne  
ALORS <bonjour> de cette langue est envoyé avant tout  
  
ETANT DONNE un utilisateur parlant une langue  
QUAND on saisit une chaîne  
ALORS <auRevoir> dans cette langue est envoyé en dernier  
  
Vous aurez besoin des doubles de test vus précédemment.  

## Etape 3

On poursuit en complexifiant, grâce aux builders qui permettent
d’ajouter des cas de manière indolore.  
  
ETANT DONNE un utilisateur parlant une langue   
ET que la période de la journée est <période>  
QUAND on saisit une chaîne  
ALORS <salutation> de cette langue à cette période est envoyé avant
tout  
  
CAS {‘matin’, ‘bonjour_am’}  
CAS {‘après-midi’, ‘bonjour_pm’}  
CAS {‘soirée’, ‘bonjour_soir’}  
CAS {‘nuit’, ‘bonjour_nuit’}  
  
ETANT DONNE un utilisateur parlant une langue  
ET que la période de la journée est <période>  
QUAND on saisit une chaîne  
ALORS <auRevoir> dans cette langue à cette période est envoyé en
dernier  
  
CAS {‘matin’, ‘auRevoir_am’}  
CAS {‘après-midi’, ‘auRevoir _pm’}  
CAS {‘soirée’, ‘auRevoir _soir’}  
CAS {‘nuit’, ‘auRevoir _nuit’}  

# Etape 4

1. Reliez
  - La langue à celle du système
  - Le moment de la journée à l’horloge
  - L’entrée et la sortie à la console
  - Les tests d’intégration sont des points bonus.
2. Il n’y a pas de sauts de ligne comme dernier caractère de la
sortie alors qu’il faudrait. Rédigez un test de défaut.
3. Rédigez un test de recette avec le scénario suivant :
  - Palindrome, anglais, soir.
  - Non-palindrome, français, matin.
3. Palindrome, inconnue, nuit.
  - Ne corrompez pas votre domaine métier ! Tordez le réel pour qu’il
rentre dans votre code.
