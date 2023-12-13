# DevOps mini project 1 & 2

Group 3


[Repo Git](https://github.com/xavier-massart-vinci/devops-mini-proj-tdd-greetings)

## Install

```bash
npm install
```

## Usage

```bash
npm run test

```

## Contributing

- Devos Thibaut
- Massart Xavier
- Ubah Chisom


## Questions

- Décrivez brièvement ce que fait votre fichier YML.  
```bash
Le workflow est déclenché a chaque pull request sur la branche main

Le fichier YML check le code Node.js à partir du dépot et configure ensuite l'environnement Node.js.
Les dépendances Node.js sont ensuite installées et l'heure du commencement de la pipeline est affichée.

Les Coverage tests sont ensuite executés. L'application est build et l'heure de la fin de la pipelin est affichée.
Un message indique ensuite que la pipeline a fonctionné sans erreur.
```

- En particulier : à quoi sert le “on” ? dans votre fichier YML ?  Quelle est la différence entre “on push” et “on pull request”. Que conseilleriez-vous comme option parmi ces 2 options à un groupe de développeurs junior ? Pourquoi ? 
```bash
Le "on" défini quand le workflow doit être déclenché. 
Dans notre fichier YML, le workflow est déclenché lors d'une pull request. 

"on push" déclenche le workflow lorsqu'un nouveau commit est push vers la branche spécifiée.
"on pull request" déclenche le workflow lorsqu'une pull request est ouverte ou mise à jour.

Nous conseillons "on pull request" car cela permet de tester les modifications avant la fusion. Cela permet donc d'éviter l'intégration de code incrorrect ou non testé sur la branche principale.
```

- Quelle est la différence entre run et run_on ?  Expliquez par rapport à votre pipeline.  
```bash
"run" permet de spécifier des commandes à exécuter alors que "run-on" permet de spécifier l'environnement d'exécution.
Dans notre pipeline, "runs-on" spécifie que l'environnement d'exécution est ubuntu-latest et les "run" définissent les commandes à exécuter dans une des étape du workflow
```

- Quelle est la différence entre “use” et “run”. Expliquez par rapport à votre pipeline. 
```bash
"use" permet d'introduire une action existante dans le workflow, cette action est réutilisable alors que "run" permet de spécifier des commandes à exécuter.
Dans notre pipeline, le "uses: actions/checkout@v2" utilise l'action "checkout" de la version "v2" fournie par le référenciel d'actions github et les "run" définissent les commandes à exécuter dans une des étape du workflow.
```

- Peut-on intervertir différentes étapes dans votre pipeline ? Que votre réponse soit oui ou non, expliquez par rapport à votre pipeline. 
```bash
Oui, certaines étapes peuvent être interverties parce qu'elles sont indépendantes. Ce n'est pas le cas de toutes les étapes. Par exemple l'heure de début ou de fin ne peut pas être intervertie sinon ca fausserais le résultat. Le build non plus ne peut pas être interverti car il dépend du succès des étapes de correction de format et tests.
```

- Je veux ajouter un test de sécurité sur mon pipeline en exécutant le programme secure_app. Que devrais-je faire ?  Quelles questions devriez-vous vous poser ? 
```bash
Il faudrait ajouter une étape à notre pipeline. 
À quel moment devons-nous l'exécuter dans notre pipeline (après le build) ? 
Comment fonctionne l'application secure_app ? 
Cette application est-elle en version ligne de commande afin de pouvoir la lancer dans une pipeline ? 
Où pouvons-nous trouver cette application (repo Git, etc.) ? 
Cette application nécessite-t-elle un environnement spécial ( système d'exploitation, etc. ) ?
```