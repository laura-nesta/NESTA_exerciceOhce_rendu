import * as os from "os";
import {Langue} from "./langue";
import {MomentJournee} from "./momentJournee";

export class VerifiePalindrome {

    public Miroir(chaine: string) : string {
        return chaine.split('').reverse().join('');
    }
    public Verifie(chaine: string, langue : Langue) : string {
        let miroir = this.Miroir(chaine);
        if(miroir === chaine){
            return miroir + os.EOL + langue.Valide();
        }
        else {
            return miroir;
        }
    }

    public Console(chaine: string,  langue : Langue, moment : MomentJournee) : string {
        let sortiePalindrome = this.Verifie(chaine, langue);
        return langue.Salue(moment) + os.EOL + sortiePalindrome + os.EOL + langue.Cloture(moment)
    }
}