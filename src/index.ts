import {MomentJournee} from "./domain/momentJournee";

function main(){
    const moment: MomentJournee = DonneMomentJourne();
    console.log("Moment de la journée : " + moment)

}

function DonneMomentJourne() : MomentJournee{
    const heureActuelle = new Date().getHours();
    return MomentJournee.getMomentSelonHeure(heureActuelle);
}

main();