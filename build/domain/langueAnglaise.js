"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LangueAnglaise = void 0;
const dictionaire_1 = require("./dictionaire");
const momentJournee_1 = require("./momentJournee");
class LangueAnglaise {
    Valide() {
        return dictionaire_1.Dictionaire.WELL_SAID;
    }
    Salue(momentJournee) {
        switch (momentJournee) {
            case momentJournee_1.MomentJournee.Matin:
                return dictionaire_1.Dictionaire.GOOD_MORNING;
            case momentJournee_1.MomentJournee.ApresMidi:
                return dictionaire_1.Dictionaire.GOOD_AFTERNOON;
            case momentJournee_1.MomentJournee.Soiree:
                return dictionaire_1.Dictionaire.GOOD_EVENING;
            case momentJournee_1.MomentJournee.Nuit:
                return dictionaire_1.Dictionaire.GOOD_NIGHT;
            default:
                return dictionaire_1.Dictionaire.HELLO;
        }
    }
    Cloture(momentJournee) {
        switch (momentJournee) {
            case momentJournee_1.MomentJournee.Nuit:
                return dictionaire_1.Dictionaire.GOOD_NIGHT;
            default:
                return dictionaire_1.Dictionaire.GOODBYE;
        }
    }
    toString() {
        return "Langue Anglaise";
    }
}
exports.LangueAnglaise = LangueAnglaise;
