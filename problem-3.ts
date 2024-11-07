const countWordOccurrences = (sentence: string, word: string): number => {
    const splittedwordsArr = sentence.toLowerCase().split(' ')
    return splittedwordsArr.filter((splittedWord) => word.toLowerCase() === splittedWord).length
    // console.log(words)
}

console.log(countWordOccurrences("I love typescript", "typeSCriPt"))
