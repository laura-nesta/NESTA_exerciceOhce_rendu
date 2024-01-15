import {MomentJournee} from "./momentJournee";

export interface Langue {
    Valide(): string;

    Salue(momentJournee : MomentJournee): string;

    Cloture(): string;

}