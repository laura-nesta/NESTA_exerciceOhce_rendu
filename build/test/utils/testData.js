"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = void 0;
// Constient toutes les datas nécessaires pour les tests
exports.data = {
    palindrome: [
        'kayak',
        'radar',
    ],
    nonPalindrome: [
        'test',
        'notpalindrome',
    ],
    langue: [
        'Langue Française',
        'Langue Anglaise',
    ],
    moment: [
        'Inconnu',
        'Nuit',
        'Matin',
        'Après-midi',
        'Soirée',
    ],
    cases: [
        ['kayak', 'Langue Française'],
        ['kayak', 'Langue Anglaise'],
        ['radar', 'Langue Française'],
        ['radar', 'Langue Anglaise'],
    ],
    caseChaineMoment: caseChaineMoment(),
    casePalindromeMoment: casePalindromeMoment(),
    caseNonPalindromeMoment: caseNonPalindromeMoment(),
    caseChaineLangue: caseChaineLangue(),
    casePalidromeLangue: casePalidromeLangue(),
    caseNonPalindromeLangue: caseNonPalindromeLangue(),
};
// Fonctions qui permettent de renvoyer tous les cas de tests avec plusieurs data nécessaires
// Toutes les chaines avec chaque moment
function caseChaineMoment() {
    let chaines = [...exports.data.nonPalindrome, ...exports.data.palindrome];
    let moments = [...exports.data.moment];
    let cases = [];
    for (let momentJournee of moments)
        for (let chaine of chaines)
            cases.push([momentJournee, chaine]);
    return cases;
}
// Tous les palindromes avec chaque moment
function casePalindromeMoment() {
    let chaines = [...exports.data.palindrome];
    let moments = [...exports.data.moment];
    let cases = [];
    for (let momentJournee of moments)
        for (let chaine of chaines)
            cases.push([momentJournee, chaine]);
    return cases;
}
// Tous les non-palindrome avec chaque moment
function caseNonPalindromeMoment() {
    let chaines = [...exports.data.nonPalindrome];
    let moments = [...exports.data.moment];
    let cases = [];
    for (let momentJournee of moments)
        for (let chaine of chaines)
            cases.push([momentJournee, chaine]);
    return cases;
}
// Toutes les chaines avec chaque moment
function caseChaineLangue() {
    let chaines = [...exports.data.nonPalindrome, ...exports.data.palindrome];
    let langues = [...exports.data.langue];
    let cases = [];
    for (let langue of langues)
        for (let chaine of chaines)
            cases.push([langue, chaine]);
    return cases;
}
// Tous les palindromes avec chaque moment
function casePalidromeLangue() {
    let chaines = [...exports.data.palindrome];
    let langues = [...exports.data.langue];
    let cases = [];
    for (let langue of langues)
        for (let chaine of chaines)
            cases.push([langue, chaine]);
    return cases;
}
// Tous les non-palindrome avec chaque moment
function caseNonPalindromeLangue() {
    let chaines = [...exports.data.nonPalindrome];
    let langues = [...exports.data.langue];
    let cases = [];
    for (let langue of langues)
        for (let chaine of chaines)
            cases.push([langue, chaine]);
    return cases;
}
