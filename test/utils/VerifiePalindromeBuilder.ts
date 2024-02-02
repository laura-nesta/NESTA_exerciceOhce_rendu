import { MomentJournee } from "../../src/domain/momentJournee";
import {VerifiePalindrome} from "../../src/domain/verifiePalindrome";
import {LangueFrancaise} from "../../src/domain/langueFrancaise";
import {LangueAnglaise} from "../../src/domain/langueAnglaise";
import {Langue} from "../../src/domain/langue";

export class buildTest {
    private langue: Langue = new LangueFrancaise();
    private moment: MomentJournee = MomentJournee.Inconnu;

    public VerifiePalindrome() : VerifiePalindrome{
        return new VerifiePalindrome();
    }
    public Miroir(chaine: string) : string {
        return this.VerifiePalindrome().Miroir(chaine);
    }

    public Verifie(chaine:string) : string {
        return this.VerifiePalindrome().Verifie(chaine);
    }

    public Console(chaine:string) : string{
        return this.VerifiePalindrome().Console(chaine);
    }

    public AvecLangue(langue : string) : buildTest{
        this.VerifiePalindrome().setLangue(langue);
        return this;
    }

    public AvecMoment(moment: MomentJournee): buildTest{
        this.VerifiePalindrome().setMoment(moment);
        return this;
    }

    public AvecMomentActuel(moment: MomentJournee) : buildTest{
        this.VerifiePalindrome().setMoment(MomentJournee.getMomentActuel());
        return this;
    }

}