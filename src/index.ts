import {MomentJournee} from "./domain/momentJournee";


function main(){
    const moment: MomentJournee = DonneMomentJourne();
    console.log("Moment de la journée : " + moment)

    const langueSysteme = DonneLangueSysteme()
    console.log("Langage du systeme : " + langueSysteme);

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

main();