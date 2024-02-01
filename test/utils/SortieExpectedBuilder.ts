import {Langue} from "../../src/domain/langue";
import {LangueFrancaise} from "../../src/domain/langueFrancaise";
import {MomentJournee} from "../../src/domain/momentJournee";

export class buildTestSortieExpected {
    private langue: Langue = new LangueFrancaise();
    private moment: MomentJournee = MomentJournee.Inconnu;

}

