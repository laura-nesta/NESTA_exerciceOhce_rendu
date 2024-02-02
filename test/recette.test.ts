import {buildTest} from "./utils/VerifiePalindromeBuilder";
import os from "os";
import {Dictionaire} from "../src/domain/dictionaire";

describe("Test de recette du 02/02/2024", () => {

    // Palindrome, anglais, soir.
    test("QUAND on saisit un palindrome " +
        "ET l'utilisateur parle anglais " +
        "ET que l'on est le soir " +
        "ALORS 'good evening' est envoyer"+
        "ET le palindrome est renvoyé " +
        "ET 'Well said !' est envoyé "+
        "ET ensuite'goodbye'", () => {

        let resultat = new buildTest().AvecLangue('Langue Anglaise').AvecMoment('Soirée').Console('kayak')
        expect(resultat).toContain(Dictionaire.GOOD_EVENING + os.EOL + "kayak" + os.EOL + Dictionaire.WELL_SAID + os.EOL + Dictionaire.GOODBYE + os.EOL);
    });

    // Palindrome, anglais, soir.
    test("QUAND on saisit un non-palindrome " +
        "ET l'utilisateur parle francais " +
        "ET que l'on est le Matin " +
        "ALORS 'Bonjour' est envoyer"+
        "ET le palindrome est renvoyé " +
        "ET ensuite'bonne journée'", () => {

        let resultat = new buildTest().AvecLangue('Langue Française').AvecMoment('Matin').Console('test')
        expect(resultat).toContain(Dictionaire.BONJOUR + os.EOL + "tset" + os.EOL + Dictionaire.BONNE_JOURNEE + os.EOL);
    });



})