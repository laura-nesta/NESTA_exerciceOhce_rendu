import * as os from "os";
import {Langue} from "./langue";
import {MomentJournee} from "./momentJournee";
import {LangueFrancaise} from "./langueFrancaise"

export class VerifiePalindrome {

    // Constructeur class VerifiePalindrome
    langue : Langue = new LangueFrancaise();
    moment : MomentJournee = MomentJournee.Inconnu;

    public Miroir(chaine: string) : string {
        return chaine.split('').reverse().join('');
    }
    public Verifie(chaine: string) : string {
        let miroir = this.Miroir(chaine);
        if(miroir === chaine){
            return miroir + os.EOL + this.langue.Valide();
        }
        else {
            return miroir;
        }
    }

    public Console(chaine: string,  langue : Langue, moment : MomentJournee) : string {
        let sortiePalindrome = this.Verifie(chaine);
        return langue.Salue(moment) + os.EOL + sortiePalindrome + os.EOL + langue.Cloture(moment)
    }
}