// deviner un prix entre 0 et 10
// quand on tapper, le form devient rouge (encadré)
// si saisie texte, msg : vous devez rentrer un nombre
// si nb < nbSaisie => #1 (nbSaisie) c'est moins ! en rouge-rose
// si nb > nbSaisie => #2 (nbSaisie) c'est plus ! en rouge-rose
// si nb === nbSaisie => #3 (nbSaisie) Bravo, vous avez trouvé le juste prix !  en vert

//déclarations
let bouton_deviner = document.querySelector('#bouton_deviner');
let prix = document.querySelector('#prix');
let msgError = document.querySelector('.msgError');
let infos = document.querySelector('.infos');
let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);
let cpt = 0;

//fonction qui créer un encadré qui indique si on refroidie ou brûle, + incrémente le compteur
const guessPrice = () => {
	if (prix.value < randomNumber) {
		cpt++;
		let div = document.createElement('div');
		div.className="element_infos";
		infos.prepend(div);

		div.innerHTML = `#${cpt} (${prix.value}) C'est plus !`;
		prix.value = '';
		div.style.backgroundColor = '#f67280';
	} else if (prix.value > randomNumber) {
		cpt++;
		let div = document.createElement('div');
		div.className="element_infos";
		infos.prepend(div);

		div.innerHTML = `#${cpt} (${prix.value}) C'est moins !`;
		prix.value = '';
		div.style.backgroundColor = '#ffa372';
	} else if (prix.value == randomNumber) {

		cpt++;
		let div = document.createElement('div');
		div.className="element_infos";
		infos.prepend(div);

		div.innerHTML = `#${cpt} (${prix.value}) Bravo !`;
		prix.value = '';
		div.style.backgroundColor = '#0c9463';
		prix.disabled = true;
	}
};

//gestionnaire d'evenement pour proposer un nouveau nombre
bouton_deviner.addEventListener('click', guessPrice);

//gestionnaire d'evenement qui affiche un msg d'erreur si le prix n'est pas un nombre
prix.addEventListener('input', () => {
	if (isNaN(prix.value)) {
		msgError.style.visibility = 'visible';
	} else {
		msgError.style.visibility = 'hidden';
	}
});
