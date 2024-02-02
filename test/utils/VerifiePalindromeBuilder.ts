import { MomentJournee } from "../../src/domain/momentJournee";
import {VerifiePalindrome} from "../../src/domain/verifiePalindrome";
import {LangueFrancaise} from "../../src/domain/langueFrancaise";
import {LangueAnglaise} from "../../src/domain/langueAnglaise";
import {Langue} from "../../src/domain/langue";

export class buildTest {
    private langue: Langue = new LangueFrancaise();
    private moment: MomentJournee = MomentJournee.Inconnu;

    public Miroir(chaine: string) {
        new VerifiePalindrome().Miroir(chaine);
    }
}