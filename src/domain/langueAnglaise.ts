import {Langue} from "./langue";
import {Dictionaire} from "./dictionaire";

export class LangueAnglaise implements Langue {

    public Valide(): string {
        return Dictionaire.WELL_SAID;
    }

    public toString(): string {
        return "Langue Anglaise";
    }
}