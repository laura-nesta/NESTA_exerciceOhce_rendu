import * as os from "os";
import {Langue} from "./langue";
import {MomentJournee} from "./momentJournee";
import {LangueFrancaise} from "./langueFrancaise"
import {LangueAnglaise} from "./langueAnglaise"

export class VerifiePalindrome {

    // Constructeur class VerifiePalindrome
    langue : Langue = new LangueFrancaise();
    moment : MomentJournee = MomentJournee.Inconnu;

    // Setteur qui permet de modifier la langue de la classe
    public setLangue(langue: string): void {
        switch(langue){
            case "Langue Française":
                this.langue = new LangueFrancaise();
                break;
            case "Langue Anglaise":
                this.langue = new LangueAnglaise();
                break;
            default:
                this.langue = new LangueFrancaise();
                break;
        }
    }

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

    public Console(chaine: string) : string {
        let sortiePalindrome = this.Verifie(chaine);
        return this.langue.Salue(this.moment) + os.EOL + sortiePalindrome + os.EOL + this.langue.Cloture(this.moment)
    }
}