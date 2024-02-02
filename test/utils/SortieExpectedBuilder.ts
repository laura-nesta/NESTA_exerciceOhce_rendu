import {Langue} from "../../src/domain/langue";
import {LangueFrancaise} from "../../src/domain/langueFrancaise";
import {MomentJournee} from "../../src/domain/momentJournee";
import os from "os";
import {LangueAnglaise} from "../../src/domain/langueAnglaise";

export class buildTestSortieExpected {
    private langue: Langue = new LangueFrancaise();
    private moment: MomentJournee = MomentJournee.Inconnu;

    public Miroir(chaine: string) :string {
        return chaine.split('').reverse().join('');
    }

    public VerifiePalindrome(chaine: string) :string {
        if(this.Miroir(chaine) == chaine){
            return this.Miroir(chaine)
                + os.EOL
                + this.langue.Valide()
        } else {
            return this.Miroir(chaine)
        }

    }

    public Console(chaine:string) : string {
        return this.langue.Salue(this.moment)
            + os.EOL
            + this. VerifiePalindrome(chaine)
            + os.EOL
            + this.langue.Cloture(this.moment)
            + os.EOL
    }

    public AvecLangue (langueParlee: string) : buildTestSortieExpected {
        const langueFrancaise = new LangueFrancaise();
        const langueAnglaise = new LangueAnglaise();
        if(langueParlee === langueAnglaise.toString()){
            this.langue = langueAnglaise;
        } else {
            this.langue = langueFrancaise;
        }
        return this;
    };

    public AvecMoment (momentJournee: string) : buildTestSortieExpected {
        switch (momentJournee) {
            case 'Matin':
                this.moment = MomentJournee.Matin;
                break;
            case 'Après-midi':
                this.moment = MomentJournee.ApresMidi;
                break;
            case 'Soirée':
                this.moment = MomentJournee.Soiree;
                break;
            case 'Nuit':
                this.moment = MomentJournee.Nuit;
                break;
            default:
                this.moment = MomentJournee.Inconnu;
                break;
        }
        return this;
    }

    public AvecMomentActuel () : buildTestSortieExpected {
        const heureActuelle = new Date().getHours();
        if (heureActuelle < 12 && heureActuelle > 7) {
            this.moment = MomentJournee.Matin;
        } else if (heureActuelle < 17) {
            this.moment = MomentJournee.ApresMidi;
        } else if (heureActuelle < 21) {
            this.moment = MomentJournee.Soiree;
        } else {
            this.moment = MomentJournee.Nuit;
        }
        return this;
    }

    public BuildCloture () : string {
        return this.langue.Cloture(this.moment);
    }

    public BuildSaluer () : string {
        return this.langue.Salue(this.moment);
    }

}

