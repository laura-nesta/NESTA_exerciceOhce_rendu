import {Langue} from "./langue";
import {Dictionaire} from "./dictionaire";
import {MomentJournee} from "./momentJournee";

export class LangueFrancaise implements Langue {

    public Valide(): string {
        return Dictionaire.BIEN_DIT;
    }

    public Salue(momentJournee: MomentJournee): string {
        switch(momentJournee){
            case MomentJournee.Soiree:
                return Dictionaire.BONSOIR;
            case MomentJournee.Nuit:
                return Dictionaire.BONSOIR;
            default:
                return Dictionaire.BONJOUR;
        }
    }

    public Cloture(momentJournee: MomentJournee): string {
        switch(momentJournee) {
            case MomentJournee.Matin:
                return Dictionaire.BONNE_JOURNEE;
            case MomentJournee.ApresMidi:
                return Dictionaire.BONNE_JOURNEE;
            case MomentJournee.Soiree:
                return Dictionaire.BONNE_SOIREE;
            case MomentJournee.Nuit:
                return Dictionaire.BONNE_NUIT;
            default:
                return Dictionaire.AU_REVOIR;
        }
    }

    public toString(): string {
        return "Langue Française";
    }
}