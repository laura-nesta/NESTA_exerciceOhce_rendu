import os from "os";

export class StringFilter{
    public PremiereLigne (sortie : string): string{
        let sortieExplosed = sortie.split(os.EOL).filter(line => line != "");
        return sortieExplosed[0];
    }

    public DerniereLigne (sortie : string): string {
        let sortieExplosed = sortie.split(os.EOL).filter(line => line != "");
        return sortieExplosed[sortieExplosed.length-1];
    }
}