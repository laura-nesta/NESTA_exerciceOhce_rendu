import { MomentJournee } from "../../src/domain/momentJournee";
import {VerifiePalindrome} from "../../src/domain/verifiePalindrome";
import {LangueFrancaise} from "../../src/domain/langueFrancaise";
import {LangueAnglaise} from "../../src/domain/langueAnglaise";
import {Langue} from "../../src/domain/langue";

export class buildTest {
    private verifiePalindrome: VerifiePalindrome = new VerifiePalindrome();
    private langue: Langue = new LangueFrancaise();
    private moment: MomentJournee = MomentJournee.Inconnu;

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
        return this;
    }

    public AvecMoment(moment: string): buildTest{
        this.verifiePalindrome.setMoment(MomentJournee.buildMoment(moment));
        return this;
    }

    public AvecMomentActuel() : buildTest{
        this.verifiePalindrome.setMoment(MomentJournee.getMomentActuel());
        return this;
    }

}