import { MomentJournee } from "../../src/domain/momentJournee";
import {VerifiePalindrome} from "../../src/domain/verifiePalindrome";
import {LangueFrancaise} from "../../src/domain/langueFrancaise";
import {LangueAnglaise} from "../../src/domain/langueAnglaise";
import {Langue} from "../../src/domain/langue";

export class buildTest {
    private verifiePalindrome: VerifiePalindrome = new VerifiePalindrome();
    private langue: Langue = this.verifiePalindrome.langue;
    private moment: MomentJournee = this.verifiePalindrome.moment;

    public Miroir(chaine: string) : string {
        return this.verifiePalindrome.Miroir(chaine);
    }

    public Verifie(chaine:string) : string {
        return this.verifiePalindrome.Verifie(chaine);
    }

    public Console(chaine:string) : string{
        return this.verifiePalindrome.Console(chaine);
    }

    public AvecLangue(langue : string) : buildTest{
        this.verifiePalindrome.setLangue(langue);
        this.langue = this.verifiePalindrome.langue;
        return this;
    }

    public AvecMoment(moment: string): buildTest{
        switch (moment) {
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
        this.verifiePalindrome.moment = this.moment;
        return this;
    }

    public AvecMomentActuel() : buildTest{
        this.verifiePalindrome.setMoment(MomentJournee.getMomentActuel());
        this.moment = this.verifiePalindrome.moment;
        return this;
    }

}