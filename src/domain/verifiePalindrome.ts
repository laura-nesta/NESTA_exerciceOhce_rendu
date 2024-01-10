import * as os from "os";

export class VerifiePalindrome {

    public Miroir(chaine: string) : string {
        return chaine.split('').reverse().join('');
    }
    public Verifie(chaine: string) : string {
        let miroir = this.Miroir(chaine);
        if(miroir === chaine){
            return miroir + os.EOL + "Bien dit";
        }
        else {
            return miroir;
        }
    }

    public Console(chaine: string) : string {
        let sortiePalindrome = this.Verifie(chaine);

        return "Bonjour" + os.EOL + sortiePalindrome
    }
}