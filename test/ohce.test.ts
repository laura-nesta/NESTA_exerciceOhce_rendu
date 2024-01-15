import {VerifiePalindrome} from "../src/domain/verifiePalindrome";
import * as os from "os";
import {LangueFrancaise} from "../src/domain/langueFrancaise";
import {Langue} from "../src/domain/langue";
import {LangueAnglaise} from "../src/domain/langueAnglaise";
import {MomentJournee} from "../src/domain/momentJournee";

describe("test palindrome", () => {

    const buildLangue = (langueParlee: string): Langue => {
        const langueFrancaise = new LangueFrancaise();
        const langueAnglaise = new LangueAnglaise();

        return langueParlee === langueAnglaise.toString() ? langueAnglaise : langueFrancaise;
    };

    const buildMoment = (momentJournee: string) : MomentJournee => {
        return MomentJournee.buildMoment(momentJournee);
    }

    const buildTestInput = (chaine: string, langueParlee: string): [string, Langue] => {
        return [chaine, buildLangue(langueParlee)];
    };

    const buildConsoleOutput = (chaine: string, langue: Langue, momentJournee: string): string => {
        const miroir = chaine.split('').reverse().join('');
        return `${langue.Salue(buildMoment(momentJournee))}${os.EOL}${miroir}${os.EOL}${langue.Cloture()}`;
    };

    const buildVerifieOutput = (chaine: string): string => {
        return chaine.split('').reverse().join('');
    };

    // QUAND on saisit une chaîne ALORS celle-ci est renvoyée en miroir
    test.each(['kayak', 'nopalindrome'])(
        "QUAND on saisit un non palindrome" +
        "ALORS elle est renvoyée en miroir",
        (chaine: string)=>{
            let miroir = new VerifiePalindrome().Miroir(chaine);
            let palindrome = buildVerifieOutput(chaine);

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
            let miroir = new VerifiePalindrome().Verifie(chaine, buildLangue(langueParlee));
            let palindrome =  buildVerifieOutput(chaine);

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
            let miroir = new VerifiePalindrome().Verifie(chaine, buildLangue(langueParlee));
            let palindrome = buildVerifieOutput(chaine);

            expect(miroir).toEqual(palindrome + os.EOL + buildLangue(langueParlee)?.Valide());
        }
    );



    // QUAND on saisit une chaîne ALORS « Bonjour » est envoyé avant toute réponse
    test.each([
        ['kayak',  "Langue Française", "Inconu"],
        ['kayak',  "Langue Anglaise", "Inconu"],
        ['test',  "Langue Française", "Nuit"],
        ['test',  "Langue Anglaise", "Matin"]
    ])(
        "QUAND on saisit une chaîne" +
        "ET un moment donné de la journée" +
        "ALORS 'Bonjour' est envoyé avant toute réponse",
        (chaine: string, langueParlee: string, moment:string) => {

            let sortie = new VerifiePalindrome().Console(chaine, buildLangue(langueParlee), buildMoment(moment));

            expect(sortie).toContain(buildLangue(langueParlee).Salue(buildMoment(moment)) + os.EOL + buildVerifieOutput(chaine));
        }
    )

    // QUAND on saisit une chaîne ALORS « Au revoir » est envoyé en dernier
    test.each([
        ['kayak',  "Langue Française", "Inconu"],
        ['kayak',  "Langue Anglaise", "Inconu"],
        ['test',  "Langue Française", "Nuit"],
        ['test',  "Langue Anglaise", "Matin"],
        ['kayak',  "Langue Anglaise", "Après-midi"],
        ['kayak',  "Langue Anglaise", "Soirée"],
    ])(
        "QUAND on saisit une chaîne" +
        "ALORS 'Au revoir' est envoyé en dernier",
        (chaine: string, langueParlee: string, moment: string) => {
            let sortie = new VerifiePalindrome().Console(chaine, buildLangue(langueParlee), buildMoment(moment));

            let sortieExplosed = sortie.split(os.EOL);
            let derniereLigne = sortieExplosed[sortieExplosed.length-1]
            expect(derniereLigne).toEqual(buildLangue(langueParlee).Cloture())
        }
    )
});

