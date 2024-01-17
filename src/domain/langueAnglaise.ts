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
            case MomentJournee.ApresMidi:
                return Dictionaire.GOOD_AFTERNOON;
            case MomentJournee.Soiree:
                return Dictionaire.GOOD_EVENING;
            case MomentJournee.Nuit:
                return Dictionaire.GOOD_NIGHT;
            default:
                return Dictionaire.HELLO;
        }
    }

    public Cloture(momentJournee: MomentJournee): string {
        switch(momentJournee){
            case MomentJournee.Nuit:
                return Dictionaire.GOOD_NIGHT;
            default:
                return Dictionaire.GOODBYE;
        }
    }

    public toString(): string {
        return "Langue Anglaise";
    }
}