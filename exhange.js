// exhange.js

const taux = {
  USD: 1,
  HTG: 132,
  CAD: 1.36,
  BRL: 5.1,
  EUR: 0.93,
  DOP: 58,
};

const montantInput = document.querySelector('input[name="first_convert"]');
const deviseSource = document.querySelector('select[name="devise_posseder"]');
const deviseCible = document.querySelector('select[name="devise_change"]');
const montantConverti = document.querySelector('input[name="second_convert"]');
const boutonInverse = document.querySelector(".icone");

// Fonction principale de conversion
function convertir() {
  const montant = parseFloat(montantInput.value);
  const deviseDe = deviseSource.value;
  const deviseVers = deviseCible.value;

  if (!isNaN(montant) && montant >= 0) {
    const enUSD = montant / taux[deviseDe];
    const resultat = enUSD * taux[deviseVers];
    montantConverti.value = resultat.toFixed(2);
  } else {
    montantConverti.value = "";
  }
}

// Inversion des devises
function inverserDevises() {
  const temp = deviseSource.value;
  deviseSource.value = deviseCible.value;
  deviseCible.value = temp;
  convertir(); // Mettre à jour le résultat
}

// Bloquer les lettres et les valeurs négatives
montantInput.addEventListener("input", () => {
  // Empêche les caractères non numériques et supprime les négatifs
  if (montantInput.value < 0 || /[^\d.,]/.test(montantInput.value)) {
    montantInput.value = montantInput.value.replace(/[^\d.,]/g, "");
  }
  convertir();
});

// Lier les événements
deviseSource.addEventListener("change", convertir);
deviseCible.addEventListener("change", convertir);
boutonInverse.addEventListener("click", inverserDevises);
