import {VerifiePalindrome} from "../src/domain/verifiePalindrome";
import * as os from "os";
import {LangueFrancaise} from "../src/domain/langueFrancaise";
import {Langue} from "../src/domain/langue";
import {LangueAnglaise} from "../src/domain/langueAnglaise";

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

    // QUAND on saisit un non-palindrome ALORS celui-ci est renvoyé en miroir
    test.each([
        ['test',  "Langue Française"],
        ['nonpalindrome',  "Langue Anglaise"]
    ])(
        "QUAND on saisit un non-palindrome" +
        "ALORS celui-ci est renvoyé en miroir",
        (chaine: string, langueParlee: string) => {
            let langueFrancaise = new LangueFrancaise();
            let langueAnglaise = new LangueAnglaise();

            let langue;
            if(langueParlee === langueAnglaise.toString()){
                langue = langueAnglaise;
            }else {
                langue = langueFrancaise;
            }

            let miroir = new VerifiePalindrome().Verifie(chaine, langue);
            let palindrome = chaine.split('').reverse().join('');

            expect(miroir).toEqual(palindrome);
        }
    )

    // QUAND on saisit un palindrome ALORS celui-ci est renvoyé ET « Bien dit » est envoyé ensuite
    // ETANT DONNE un utilisateur parlant une langue QUAND on entre un palindrome ALORS il est renvoyé ET le <bienDit> de cette langue est envoyé
    test.each([
        ['kayak',  "Langue Française"],
        ['kayak',  "Langue Anglaise"]
    ])(
        "QUAND on saisit un palindrome " +
        "ALORS celui-ci est renvoyé " +
        "ET 'Bien dit' est renvoyé dans la bonne langue",
        ( chaine: string, langueParlee: string) => {
            let langueFrancaise = new LangueFrancaise();
            let langueAnglaise = new LangueAnglaise();

            let langue;
            if(langueParlee === langueAnglaise.toString()){
                langue = langueAnglaise;
            }else {
                langue = langueFrancaise;
            }

            let miroir = new VerifiePalindrome().Verifie(chaine, langue);

            expect(miroir).toEqual(chaine.split('').reverse().join('') + os.EOL + langue?.Valide());
        }
    );



    // QUAND on saisit une chaîne ALORS « Bonjour » est envoyé avant toute réponse
    test.each([
        ['kayak',  "Langue Française"],
        ['kayak',  "Langue Anglaise"],
        ['test',  "Langue Française"],
        ['test',  "Langue Anglaise"]
    ])(
        "QUAND on saisit une chaîne" +
        "ALORS 'Bonjour' est envoyé avant toute réponse",
        (chaine: string, langueParlee: string) => {
            let langueFrancaise = new LangueFrancaise();
            let langueAnglaise = new LangueAnglaise();

            let langue;
            if(langueParlee === langueAnglaise.toString()){
                langue = langueAnglaise;
            }else {
                langue = langueFrancaise;
            }

            let sortie = new VerifiePalindrome().Console(chaine, langue);
            let miroir = chaine.split('').reverse().join('');

            expect(sortie).toContain(langue.Salue() + os.EOL + miroir);
        }
    )

    // QUAND on saisit une chaîne ALORS « Au revoir » est envoyé en dernier
    test.each([
        ['kayak',  "Langue Française"],
        ['kayak',  "Langue Anglaise"],
        ['test',  "Langue Française"],
        ['test',  "Langue Anglaise"]
    ])(
        "QUAND on saisit une chaîne" +
        "ALORS 'Au revoir' est envoyé en dernier",
        (chaine: string, langueParlee: string) => {
            let langueFrancaise = new LangueFrancaise();
            let langueAnglaise = new LangueAnglaise();

            let langue;
            if(langueParlee === langueAnglaise.toString()){
                langue = langueAnglaise;
            }else {
                langue = langueFrancaise;
            }

            let sortie = new VerifiePalindrome().Console(chaine, langue);
            let miroir = chaine.split('').reverse().join('');

            let sortieExplosed = sortie.split(os.EOL);
            let derniereLigne = sortieExplosed[sortieExplosed.length-1]
            expect(derniereLigne).toEqual("Au revoir")
        }
    )
});

