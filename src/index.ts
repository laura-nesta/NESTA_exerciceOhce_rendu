import {MomentJournee} from "./domain/momentJournee";
import {VerifiePalindrome} from "./domain/verifiePalindrome";


function main(){
    const moment: MomentJournee = DonneMomentJourne();
    console.log("Moment de la journée : " + moment)

    const langueSysteme = DonneLangueSysteme()
    console.log("Langage du systeme : " + langueSysteme);

    const userInput = lireConsole();

    const verifiePalindrome = new VerifiePalindrome();
    verifiePalindrome.setMoment(moment);
    verifiePalindrome.setLangue(langueSysteme);
    const sortie = verifiePalindrome.Console(userInput);

    console.log(sortie);

}

function DonneMomentJourne() : MomentJournee{
    const heureActuelle = new Date().getHours();
    return MomentJournee.getMomentSelonHeure(heureActuelle);
}

function DonneLangueSysteme() {
    // Je ne trouve pas de moyen de récupérer le langage du système
    // const langueSysteme = navigator?.language  || 'Langue Française';
    const langueSysteme =  'Langue Française';
    return langueSysteme;
}

function lireConsole(): string {
    const readline = require('readline-sync');
    return readline.question('Entrez une chaine : ');
}

main();