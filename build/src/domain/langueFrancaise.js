"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LangueFrancaise = void 0;
const dictionaire_1 = require("./dictionaire");
const momentJournee_1 = require("./momentJournee");
class LangueFrancaise {
    Valide() {
        return dictionaire_1.Dictionaire.BIEN_DIT;
    }
    Salue(momentJournee) {
        switch (momentJournee) {
            case momentJournee_1.MomentJournee.Soiree:
                return dictionaire_1.Dictionaire.BONSOIR;
            case momentJournee_1.MomentJournee.Nuit:
                return dictionaire_1.Dictionaire.BONSOIR;
            default:
                return dictionaire_1.Dictionaire.BONJOUR;
        }
    }
    Cloture(momentJournee) {
        switch (momentJournee) {
            case momentJournee_1.MomentJournee.Matin:
                return dictionaire_1.Dictionaire.BONNE_JOURNEE;
            case momentJournee_1.MomentJournee.ApresMidi:
                return dictionaire_1.Dictionaire.BONNE_JOURNEE;
            case momentJournee_1.MomentJournee.Soiree:
                return dictionaire_1.Dictionaire.BONNE_SOIREE;
            case momentJournee_1.MomentJournee.Nuit:
                return dictionaire_1.Dictionaire.BONNE_NUIT;
            default:
                return dictionaire_1.Dictionaire.AU_REVOIR;
        }
    }
    toString() {
        return "Langue Française";
    }
}
exports.LangueFrancaise = LangueFrancaise;
