import {buildTest} from "./utils/VerifiePalindromeBuilder";
import * as os from "os";

describe("Debug au 31/01/2024", () => {
    test.each([
        ['test', 'radar']
    ])("check de saut de ligne en dernier caractère de la sortie",
        (chaine: string) => {
            let resultat = new buildTest().Console(chaine);
            expect(resultat.endsWith(os.EOL)).toBe(true);
        });
})