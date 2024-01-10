import {VerifiePalindrome} from "../src/domain/verifiePalindrome";
import * as os from "os";

describe("test palindrome", () => {

    // QUAND on saisit une chaîne ALORS celle-ci est renvoyée en miroir
    test.each(['kayak', 'nopalindrome'])(
        "QUAND on saisit un non palindrome" +
        "ALORS elle est renvoyée en miroir",
        (chaine: string)=>{
            let miroir = new VerifiePalindrome().Miroir(chaine);
            let palindrome = chaine.split('').reverse().join('');

            expect(miroir).toEqual(palindrome);
        }
    )

    // QUAND on saisit un palindrome ALORS celui-ci est renvoyé ET « Bien dit » est envoyé ensuite
    test.each(['kayak', 'radar'])(
        "QUAND on saisit un palindrome" +
        "ALORS celui-ci est renvoyé" +
        "ET 'Bien dit' est renvoyé",
        (chaine: string) => {
            let miroir = new VerifiePalindrome().Verifie(chaine);
            let palindrome = chaine.split('').reverse().join('');

            expect(miroir).toEqual(palindrome + os.EOL + "Bien dit");
        }
    )

    // QUAND on saisit un non-palindrome ALORS celui-ci est renvoyé en miroir
    test.each(['test', 'nopalindrome'])(
        "QUAND on saisit un non-palindrome" +
        "ALORS celui-ci est renvoyé en miroir",
        (chaine: string) => {
            let miroir = new VerifiePalindrome().Verifie(chaine);
            let palindrome = chaine.split('').reverse().join('');

            expect(miroir).toEqual(palindrome);
        }
    )

    // QUAND on saisit une chaîne ALORS « Bonjour » est envoyé avant toute réponse
    test.each(['test', 'kayak'])(
        "QUAND on saisit une chaîne" +
        "ALORS 'Bonjour' est envoyé avant toute réponse",
        (chaine: string) => {
            let sortie = new VerifiePalindrome().Console(chaine);
            let miroir = chaine.split('').reverse().join('');

            expect(sortie).toContain("Bonjour" + os.EOL + miroir);
        }
    )

});

