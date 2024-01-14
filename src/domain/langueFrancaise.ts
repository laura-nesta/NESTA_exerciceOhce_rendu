import {Langue} from "./langue";
import {Dictionaire} from "./dictionaire";

export class LangueFrancaise implements Langue {

    public Valide(): string {
        return Dictionaire.BIEN_DIT;
    }

    public Salue(): string {
        return Dictionaire.BONJOUR;
    }

    public toString(): string {
        return "Langue Française";
    }
}