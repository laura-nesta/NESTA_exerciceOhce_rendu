import * as os from "os";
import {Langue} from "./langue";

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

    public Console(chaine: string,  langue : Langue) : string {
        let sortiePalindrome = this.Verifie(chaine, langue);

        return "Bonjour" + os.EOL + sortiePalindrome + os.EOL + "Au revoir"
    }
}