# Moonball

Daily NFL rare-answer trivia. 7 prompts, 25 seconds each. The rarer your answer, the deeper the throw.

Play: https://playmoonball.com

- `index.html`, `data.js`: the game (answers are encoded in data.js)
- `config.js`: Firebase web config + owner email
- `fb-shim.js`: Google/guest sign-in and database on Firebase
- `firestore.rules`: database security rules (live copy is in Firebase console > Firestore > Rules)
