// Fonction d'association
export function createAssociationDouble(arr1: string[], arr2: string[]): [string,string][] {
    const associations: [string,string][] = [];

    arr1.forEach((elem1) => {
        arr2.forEach((elem2) => {
            associations.push([elem1, elem2]);
        });
    });

    return associations;
}

export function createAssociationTriple(arr1: string[], arr2: string[], arr3: string[]): [string,string, string][] {
    const associations: [string,string, string][] = [];

    arr1.forEach((elem1) => {
        arr2.forEach((elem2) => {
            arr2.forEach((elem3) => {
                associations.push([elem1, elem2, elem3]);
            });
        });
    });

    return associations;
}

const data = {
    palindrome: [
        'kayak',
        'radar'
    ],

    nonPalindrome: [
        'test',
        'notpalindrome'
    ],

    langue: [
        'Langue Française',
        'Langue Anglaise'
    ],

    moment: [
        'Inconnu',
        'Nuit',
        'Matin',
        'Après-midi',
        'Soirée'
    ],

    // Initialisation de casesPalindromeLangue après la création de l'objet data
    casesPalindromeLangue: [],
};

// Affectation de la variable casesPalindromeLangue à l'aide de la fonction createAssociationDouble
const chaine : string[] = [...data.nonPalindrome, ...data.nonPalindrome]
const casesPalindromeLangue = createAssociationDouble(data.palindrome, data.langue);
const casesChaineLangue = createAssociationDouble(chaine, data.langue);
const casesChaineLangueMoment = createAssociationTriple(chaine, data.langue, data.moment);

// Export de l'objet data
export {
    data,
    casesPalindromeLangue,
    casesChaineLangueMoment,
    casesChaineLangue,
    chaine
};
