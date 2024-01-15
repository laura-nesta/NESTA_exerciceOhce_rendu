import {Langue} from "./langue";
import {Dictionaire} from "./dictionaire";
import {MomentJournee} from "./momentJournee";

export class LangueAnglaise implements Langue {

    public Valide(): string {
        return Dictionaire.WELL_SAID;
    }

    public Salue(momentJournee: MomentJournee): string {
        switch(momentJournee){
            case MomentJournee.Matin:
                return Dictionaire.GOOD_MORNING;
                break;
            case MomentJournee.ApresMidi:
                return Dictionaire.GOOD_AFTERNOON;
                break;
            case MomentJournee.Soiree:
                return Dictionaire.GOOD_EVENING;
                break;
            case MomentJournee.Nuit:
                return Dictionaire.GOOD_NIGHT;
                break;
            default:
                return Dictionaire.HELLO;
                break;
        }
    }

    public Cloture(): string {
        return Dictionaire.GOODBYE;
    }

    public toString(): string {
        return "Langue Anglaise";
    }
}