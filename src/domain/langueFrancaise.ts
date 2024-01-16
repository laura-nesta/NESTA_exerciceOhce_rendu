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
                break;
            case MomentJournee.Nuit:
                return Dictionaire.BONSOIR;
                break;
            default:
                return Dictionaire.BONJOUR;
                break;
        }
    }

    public Cloture(momentJournee: MomentJournee): string {
        switch(momentJournee) {
            case MomentJournee.Matin:
                return Dictionaire.BONNE_JOURNEE;
                break;
            case MomentJournee.ApresMidi:
                return Dictionaire.BONNE_JOURNEE;
                break;
            case MomentJournee.Soiree:
                return Dictionaire.BONNE_SOIREE;
                break;
            case MomentJournee.Nuit:
                return Dictionaire.BONNE_NUIT;
                break;
            default:
                return Dictionaire.AU_REVOIR;
                break;
        }
    }

    public toString(): string {
        return "Langue Française";
    }
}