"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MomentJournee = void 0;
class MomentJournee {
    constructor(moment) {
        this._moment = moment;
    }
    toString() {
        return this._moment;
    }
    static buildMoment(momentJournee) {
        return new MomentJournee(momentJournee);
    }
    static getMomentActuel() {
        const heureActuelle = new Date().getHours();
        if (heureActuelle < 12 && heureActuelle > 7) {
            return MomentJournee.Matin;
        }
        else if (heureActuelle < 17) {
            return MomentJournee.ApresMidi;
        }
        else if (heureActuelle < 21) {
            return MomentJournee.Soiree;
        }
        else {
            return MomentJournee.Nuit;
        }
    }
}
exports.MomentJournee = MomentJournee;
MomentJournee.Inconnu = new MomentJournee("Inconnu");
MomentJournee.Matin = new MomentJournee("Matin");
MomentJournee.ApresMidi = new MomentJournee("Après-Midi");
MomentJournee.Soiree = new MomentJournee("Soirée");
MomentJournee.Nuit = new MomentJournee("Nuit");
