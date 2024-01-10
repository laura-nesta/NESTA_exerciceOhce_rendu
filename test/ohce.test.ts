import {VerifiePalindrome} from "../src/domain/verifiePalindrome";

// QUAND on saisit une chaîne ALORS celle-ci est renvoyée en miroir
test.each(['kayak', 'nopalindrome'])(
    "QUAND on saisit une chaine" +
    "ALORS elle est renvoyée en miroir",
    (chaine: string)=>{
        let miroir = new VerifiePalindrome().Verifie(chaine);
        let palindrome = chaine.split('').reverse().join('');
        expect(miroir).toEqual(palindrome);
    }
)