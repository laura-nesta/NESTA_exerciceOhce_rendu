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

    public Cloture(): string {
        return Dictionaire.AU_REVOIR;
    }

    public toString(): string {
        return "Langue Française";
    }
}