"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const verifiePalindrome_1 = require("../src/domain/verifiePalindrome");
const os = __importStar(require("os"));
const langueFrancaise_1 = require("../src/domain/langueFrancaise");
const langueAnglaise_1 = require("../src/domain/langueAnglaise");
const momentJournee_1 = require("../src/domain/momentJournee");
describe("test palindrome", () => {
    const buildLangue = (langueParlee) => {
        const langueFrancaise = new langueFrancaise_1.LangueFrancaise();
        const langueAnglaise = new langueAnglaise_1.LangueAnglaise();
        return langueParlee === langueAnglaise.toString() ? langueAnglaise : langueFrancaise;
    };
    const buildMoment = (momentJournee) => {
        return momentJournee_1.MomentJournee.buildMoment(momentJournee);
    };
    const buildMomentActuel = () => {
        const heureActuelle = new Date().getHours();
        if (heureActuelle < 12 && heureActuelle > 7) {
            return momentJournee_1.MomentJournee.Matin;
        }
        else if (heureActuelle < 17) {
            return momentJournee_1.MomentJournee.ApresMidi;
        }
        else if (heureActuelle < 21) {
            return momentJournee_1.MomentJournee.Soiree;
        }
        else {
            return momentJournee_1.MomentJournee.Nuit;
        }
    };
    const buildMomentSystem = () => {
        const moment = momentJournee_1.MomentJournee.getMomentActuel();
        return momentJournee_1.MomentJournee.getMomentActuel();
    };
    const buildTestInput = (chaine, langueParlee) => {
        return [chaine, buildLangue(langueParlee)];
    };
    const buildConsoleOutput = (chaine, langue, momentJournee) => {
        const miroir = chaine.split('').reverse().join('');
        return `${langue.Salue(buildMoment(momentJournee))}${os.EOL}${miroir}${os.EOL}${langue.Cloture(buildMoment(momentJournee))}`;
    };
    const buildVerifieOutput = (chaine) => {
        return chaine.split('').reverse().join('');
    };
    // QUAND on saisit une chaîne ALORS celle-ci est renvoyée en miroir
    test.each(['kayak', 'nopalindrome'])("QUAND on saisit un non palindrome" +
        "ALORS elle est renvoyée en miroir", (chaine) => {
        let miroir = new verifiePalindrome_1.VerifiePalindrome().Miroir(chaine);
        let palindrome = buildVerifieOutput(chaine);
        expect(miroir).toEqual(palindrome);
    });
    // QUAND on saisit un non-palindrome ALORS celui-ci est renvoyé en miroir
    test.each([
        ['test'],
        ['nonpalindrome']
    ])("QUAND on saisit un non-palindrome" +
        "ALORS celui-ci est renvoyé en miroir", (chaine) => {
        let miroir = new verifiePalindrome_1.VerifiePalindrome().Verifie(chaine);
        let palindrome = buildVerifieOutput(chaine);
        expect(miroir).toEqual(palindrome);
    });
    // QUAND on saisit un palindrome ALORS celui-ci est renvoyé ET « Bien dit » est envoyé ensuite
    // ETANT DONNE un utilisateur parlant une langue QUAND on entre un palindrome ALORS il est renvoyé ET le <bienDit> de cette langue est envoyé
    test.each([
        ['kayak', "Langue Française"],
        ['kayak', "Langue Anglaise"]
    ])("ETANT DONNE un utilisateur parlant une langue" +
        "QUAND on saisit un palindrome " +
        "ALORS celui-ci est renvoyé " +
        "ET 'Bien dit' est renvoyé dans la bonne langue", (chaine, langueParlee) => {
        var _a;
        let verifiePalindrome = new verifiePalindrome_1.VerifiePalindrome();
        verifiePalindrome.setLangue(langueParlee);
        let miroir = verifiePalindrome.Verifie(chaine);
        let palindrome = buildVerifieOutput(chaine);
        expect(miroir).toEqual(palindrome + os.EOL + ((_a = buildLangue(langueParlee)) === null || _a === void 0 ? void 0 : _a.Valide()));
    });
    // QUAND on saisit une chaîne ALORS « Bonjour » est envoyé avant toute réponse
    test.each([
        ['kayak', "Langue Française", "Inconu"],
        ['kayak', "Langue Anglaise", "Inconu"],
        ['test', "Langue Française", "Nuit"],
        ['test', "Langue Anglaise", "Matin"]
    ])("ETANT DONNE un utilisateur parlant une langue" +
        "QUAND on saisit une chaîne" +
        "ET un moment donné de la journée" +
        "ALORS 'Bonjour' est envoyé avant toute réponse", (chaine, langueParlee, moment) => {
        let verifiePalindrome = new verifiePalindrome_1.VerifiePalindrome();
        verifiePalindrome.setMoment(buildMoment(moment));
        verifiePalindrome.setLangue(langueParlee);
        let sortie = verifiePalindrome.Console(chaine);
        expect(sortie).toContain(buildLangue(langueParlee).Salue(buildMoment(moment)) + os.EOL + buildVerifieOutput(chaine));
    });
    test.each([
        ['kayak', "Langue Française"],
        ['kayak', "Langue Anglaise"],
        ['test', "Langue Française"],
        ['test', "Langue Anglaise"]
    ])("ETANT DONNE un utilisateur parlant une langue" +
        "QUAND on saisit une chaîne" +
        "ET selon le moment de la journée du systeme" +
        "ALORS 'Bonjour' est envoyé avant toute réponse", (chaine, langueParlee) => {
        let verifiePalindrome = new verifiePalindrome_1.VerifiePalindrome();
        verifiePalindrome.setMoment(buildMomentActuel());
        verifiePalindrome.setLangue(langueParlee);
        let sortie = verifiePalindrome.Console(chaine);
        expect(sortie).toContain(buildLangue(langueParlee).Salue(buildMomentSystem()) + os.EOL + buildVerifieOutput(chaine));
    });
    // QUAND on saisit une chaîne ALORS « Au revoir » est envoyé en dernier
    test.each([
        ['kayak', "Langue Française", "Inconu"],
        ['kayak', "Langue Anglaise", "Inconu"],
        ['test', "Langue Française", "Nuit"],
        ['test', "Langue Anglaise", "Matin"],
        ['kayak', "Langue Anglaise", "Après-midi"],
        ['kayak', "Langue Anglaise", "Soirée"],
    ])("ETANT DONNE un utilisateur parlant une langue" +
        "ET un moment donné de la journée" +
        "QUAND on saisit une chaîne" +
        "ALORS 'Au revoir' est envoyé en dernier", (chaine, langueParlee, moment) => {
        let verifiePalindrome = new verifiePalindrome_1.VerifiePalindrome();
        verifiePalindrome.setMoment(buildMoment(moment));
        verifiePalindrome.setLangue(langueParlee);
        let sortie = verifiePalindrome.Console(chaine);
        let sortieExplosed = sortie.split(os.EOL);
        let derniereLigne = sortieExplosed[sortieExplosed.length - 1];
        expect(derniereLigne).toEqual(buildLangue(langueParlee).Cloture(buildMoment(moment)));
    });
    test.each([
        ['kayak', "Langue Française"],
        ['kayak', "Langue Anglaise"],
        ['test', "Langue Française"],
        ['test', "Langue Anglaise"],
        ['kayak', "Langue Anglaise"],
        ['kayak', "Langue Anglaise"],
    ])("ETANT DONNE un utilisateur parlant une langue" +
        "ET selon le moment de la journée du systeme" +
        "QUAND on saisit une chaîne" +
        "ALORS 'Au revoir' est envoyé en dernier", (chaine, langueParlee) => {
        let verifiePalindrome = new verifiePalindrome_1.VerifiePalindrome();
        verifiePalindrome.setMoment(buildMomentActuel());
        verifiePalindrome.setLangue(langueParlee);
        let sortie = verifiePalindrome.Console(chaine);
        let sortieExplosed = sortie.split(os.EOL);
        let derniereLigne = sortieExplosed[sortieExplosed.length - 1];
        expect(derniereLigne).toEqual(buildLangue(langueParlee).Cloture(buildMomentSystem()));
    });
});
