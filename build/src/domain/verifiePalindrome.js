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
exports.VerifiePalindrome = void 0;
const os = __importStar(require("os"));
const momentJournee_1 = require("./momentJournee");
const langueFrancaise_1 = require("./langueFrancaise");
const langueAnglaise_1 = require("./langueAnglaise");
class VerifiePalindrome {
    constructor() {
        // Constructeur class VerifiePalindrome
        this.langue = new langueFrancaise_1.LangueFrancaise();
        this.moment = momentJournee_1.MomentJournee.Inconnu;
    }
    // Setteur qui permet de modifier la langue de la classe
    setLangue(langue) {
        switch (langue) {
            case "Langue Française":
                this.langue = new langueFrancaise_1.LangueFrancaise();
                break;
            case "Langue Anglaise":
                this.langue = new langueAnglaise_1.LangueAnglaise();
                break;
            default:
                this.langue = new langueFrancaise_1.LangueFrancaise();
                break;
        }
    }
    // Setteur qui permet de modifier le moment de la journée de la classe
    setMoment(moment) {
        this.moment = moment;
    }
    // Fonction qui renvoie le mirroir d'une chaine de caractère
    Miroir(chaine) {
        return chaine.split('').reverse().join('');
    }
    // Fonction qui renvoie une chaine en miroir et si c'est un palindrome ou non
    Verifie(chaine) {
        let miroir = this.Miroir(chaine);
        if (miroir === chaine) {
            return miroir + os.EOL + this.langue.Valide();
        }
        else {
            return miroir;
        }
    }
    // Fonction qui prend un mot en entrée, Salue l'utilisateur, Verfie si c'est un palindrome puis dit au revoir
    Console(chaine) {
        let sortiePalindrome = this.Verifie(chaine);
        return this.langue.Salue(this.moment) + os.EOL + sortiePalindrome + os.EOL + this.langue.Cloture(this.moment);
    }
}
exports.VerifiePalindrome = VerifiePalindrome;
