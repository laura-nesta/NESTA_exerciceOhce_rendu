import {Langue} from "./langue";
import {Dictionaire} from "./dictionaire";

export class LangueAnglaise implements Langue {

    public Valide(): string {
        return Dictionaire.WELL_SAID;
    }

    public Salue(): string {
        return Dictionaire.HELLO;
    }

    public toString(): string {
        return "Langue Anglaise";
    }
}