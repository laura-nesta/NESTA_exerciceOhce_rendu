export class MomentJournee {

    private _moment: string;

    private constructor(moment: string) {
        this._moment = moment;
    }

    public toString(){
        return this._moment;
    }

    public static Inconnu: MomentJournee = new MomentJournee("Inconnu");
    public static Matin: MomentJournee = new MomentJournee("Matin");
    public static ApresMidi: MomentJournee = new MomentJournee("Après-Midi");
    public static Soiree: MomentJournee = new MomentJournee("Soirée");
    public static Nuit: MomentJournee = new MomentJournee("Nuit");

    public static buildMoment(momentJournee: string): MomentJournee {
        return new MomentJournee(momentJournee);
    }

}