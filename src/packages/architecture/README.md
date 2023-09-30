---
title: Core Concepts
---

## Introduction

Il est toujours interessant de comprendre le fonctionnement d'un outils afin de bien l'utiliser.
Le but de cette section est de presenter les concepts de base de Stone.js, son architecture et son mode de fonctionnement 
afin d'etre confortable et confiant à l'utiliser.

Stone.js est un micro-framework permettant de developper des applications javascript en toute aisance, 
tout en profitant du jus syntaxique des dernieres versions du langage.

On entend par micro-framework, un framework ou les fonctionnalités de base pour construire un projet sont fournies 
et que toutes autres fonctionnalités peuvent être ajoutées au fur et à mesure et ceci à n'importe quel moment durant le processus de developpement. 
Ce qui vous donne, la flexibilité, le choix d'integrer uniquement les modules qui seront utilisés afin de reduire grandement le poid du bundle de production, 
et la liberté sur la facon d'ecrire et d'organiser votre code.

## Architecture

Stone.js suit une architecture en couche ou l'adapteur est la couche la plus basse, ensuite vient le contexte, après le noyau et enfin votre application. 

**Note:** Le noyau avec lequel votre application sera executée depend grandement de l'adapteur utilisé.

## Principales composantes

Etant un micro cadre de travail on peut fiare differents types de developpement avec Stone.js:
- Microservices
- API

