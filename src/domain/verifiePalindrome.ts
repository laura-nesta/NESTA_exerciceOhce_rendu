export class VerifiePalindrome {
    public Verifie(chaine: string) : string {
        let miroir = chaine.split('').reverse().join('');
        return miroir;
    }
}