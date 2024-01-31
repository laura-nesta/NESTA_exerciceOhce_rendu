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

    // Setteur qui permet de modifier le moment de la journée de la classe
    public setMoment(moment: MomentJournee): void {
        this.moment = moment;
    }

    // Fonction qui renvoie le mirroir d'une chaine de caractère
    public Miroir(chaine: string) : string {
        return chaine.split('').reverse().join('');
    }

    // Fonction qui renvoie une chaine en miroir et si c'est un palindrome ou non
    public Verifie(chaine: string) : string {
        let miroir = this.Miroir(chaine);
        if(miroir === chaine){
            return miroir + os.EOL + this.langue.Valide();
        }
        else {
            return miroir;
        }
    }

    // Fonction qui prend un mot en entrée, Salue l'utilisateur, Verfie si c'est un palindrome puis dit au revoir
    public Console(chaine: string) : string {
        let sortiePalindrome = this.Verifie(chaine);
        return this.langue.Salue(this.moment) + os.EOL + sortiePalindrome + os.EOL + this.langue.Cloture(this.moment)
    }
}