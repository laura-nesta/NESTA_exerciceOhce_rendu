import {VerifiePalindrome} from "../src/domain/verifiePalindrome";
import * as os from "os";
import {LangueFrancaise} from "../src/domain/langueFrancaise";
import {Langue} from "../src/domain/langue";
import {LangueAnglaise} from "../src/domain/langueAnglaise";
import {MomentJournee} from "../src/domain/momentJournee";
import {data,
    casesPalindromeLangue,
    casesChaineLangueMoment,
    casesChaineLangue} from "./utils/testData"

describe("test palindrome", () => {

    const buildLangue = (langueParlee: string): Langue => {
        const langueFrancaise = new LangueFrancaise();
        const langueAnglaise = new LangueAnglaise();
        return langueParlee === langueAnglaise.toString() ? langueAnglaise : langueFrancaise;
    };

    const buildMoment = (momentJournee: string) : MomentJournee => {
        return MomentJournee.buildMoment(momentJournee);
    }

    const buildMomentActuel = () : MomentJournee => {
        const heureActuelle = new Date().getHours();
        if (heureActuelle < 12 && heureActuelle > 7) {
            return MomentJournee.Matin;
        } else if (heureActuelle < 17) {
            return MomentJournee.ApresMidi;
        } else if (heureActuelle < 21) {
            return MomentJournee.Soiree;
        } else {
            return MomentJournee.Nuit;
        }
    }

    const buildMomentSystem = () : MomentJournee =>{
        const moment = MomentJournee.getMomentActuel()
        return MomentJournee.getMomentActuel();
    }


    const buildTestInput = (chaine: string, langueParlee: string): [string, Langue] => {
        return [chaine, buildLangue(langueParlee)];
    };

    const buildConsoleOutput = (chaine: string, langue: Langue, momentJournee: string): string => {
        const miroir = chaine.split('').reverse().join('');
        return `${langue.Salue(buildMoment(momentJournee))}${os.EOL}${miroir}${os.EOL}${langue.Cloture(buildMoment(momentJournee))}`;
    };

    const buildVerifieOutput = (chaine: string): string => {
        return chaine.split('').reverse().join('');
    };

    // QUAND on saisit une chaîne ALORS celle-ci est renvoyée en miroir
    test.each([...data.nonPalindrome, ...data.palindrome])(
        "QUAND on saisit un non palindrome" +
        "ALORS elle est renvoyée en miroir",
        (chaine: string)=>{
            let miroir = new VerifiePalindrome().Miroir(chaine);
            let palindrome = buildVerifieOutput(chaine);

            expect(miroir).toEqual(palindrome);
        }
    )

    // QUAND on saisit un non-palindrome ALORS celui-ci est renvoyé en miroir
    test.each([...data.nonPalindrome])(
        "QUAND on saisit un non-palindrome" +
        "ALORS celui-ci est renvoyé en miroir",
        (chaine: string) => {
            let miroir = new VerifiePalindrome().Verifie(chaine);
            let palindrome =  buildVerifieOutput(chaine);

            expect(miroir).toEqual(palindrome);
        }
    )

    // QUAND on saisit un palindrome ALORS celui-ci est renvoyé ET « Bien dit » est envoyé ensuite
    // ETANT DONNE un utilisateur parlant une langue QUAND on entre un palindrome ALORS il est renvoyé ET le <bienDit> de cette langue est envoyé
    test.each([...casesPalindromeLangue])(
        "ETANT DONNE un utilisateur parlant une langue" +
        "QUAND on saisit un palindrome " +
        "ALORS celui-ci est renvoyé " +
        "ET 'Bien dit' est renvoyé dans la bonne langue",
        ( chaine: string, langueParlee: string) => {
            let verifiePalindrome = new VerifiePalindrome();
            verifiePalindrome.setLangue(langueParlee);
            let miroir = verifiePalindrome.Verifie(chaine);
            let palindrome = buildVerifieOutput(chaine);

            expect(miroir).toEqual(palindrome + os.EOL + buildLangue(langueParlee)?.Valide());
        }
    );



    // QUAND on saisit une chaîne ALORS « Bonjour » est envoyé avant toute réponse
    test.each([... casesChaineLangueMoment])(
        "ETANT DONNE un utilisateur parlant une langue" +
        "QUAND on saisit une chaîne" +
        "ET un moment donné de la journée" +
        "ALORS 'Bonjour' est envoyé avant toute réponse",
        (chaine: string, langueParlee: string, moment:string) => {

            let verifiePalindrome = new VerifiePalindrome();
            verifiePalindrome.setMoment(buildMoment(moment));
            verifiePalindrome.setLangue(langueParlee);
            let sortie = verifiePalindrome.Console(chaine);

            expect(sortie).toContain(buildLangue(langueParlee).Salue(buildMoment(moment)) + os.EOL + buildVerifieOutput(chaine));
        }
    )

    test.each([... casesChaineLangue])(
        "ETANT DONNE un utilisateur parlant une langue" +
        "QUAND on saisit une chaîne" +
        "ET selon le moment de la journée du systeme" +
        "ALORS 'Bonjour' est envoyé avant toute réponse",
        (chaine: string, langueParlee: string) => {
            let verifiePalindrome = new VerifiePalindrome();
            verifiePalindrome.setMoment(buildMomentActuel());
            verifiePalindrome.setLangue(langueParlee);
            let sortie = verifiePalindrome.Console(chaine);

            expect(sortie).toContain(buildLangue(langueParlee).Salue(buildMomentSystem()) + os.EOL + buildVerifieOutput(chaine));
        }
    )

    // QUAND on saisit une chaîne ALORS « Au revoir » est envoyé en dernier
    test.each([... casesChaineLangueMoment])(
        "ETANT DONNE un utilisateur parlant une langue" +
        "ET un moment donné de la journée" +
        "QUAND on saisit une chaîne" +
        "ALORS 'Au revoir' est envoyé en dernier",
        (chaine: string, langueParlee: string, moment: string) => {
            let verifiePalindrome = new VerifiePalindrome();
            verifiePalindrome.setMoment(buildMoment(moment));
            verifiePalindrome.setLangue(langueParlee);
            let sortie = verifiePalindrome.Console(chaine);

            let sortieExplosed = sortie.split(os.EOL);
            let derniereLigne = sortieExplosed[sortieExplosed.length-1]
            expect(derniereLigne).toEqual(buildLangue(langueParlee).Cloture(buildMoment(moment)))
        }
    )

    test.each([... casesChaineLangue])(
        "ETANT DONNE un utilisateur parlant une langue" +
        "ET selon le moment de la journée du systeme" +
        "QUAND on saisit une chaîne" +
        "ALORS 'Au revoir' est envoyé en dernier",
        (chaine: string, langueParlee: string) => {
            let verifiePalindrome = new VerifiePalindrome();
            verifiePalindrome.setMoment(buildMomentActuel());
            verifiePalindrome.setLangue(langueParlee);
            let sortie = verifiePalindrome.Console(chaine);
            let sortieExplosed = sortie.split(os.EOL);
            let derniereLigne = sortieExplosed[sortieExplosed.length-1]
            expect(derniereLigne).toEqual(buildLangue(langueParlee).Cloture(buildMomentSystem()))
        }
    )
});

