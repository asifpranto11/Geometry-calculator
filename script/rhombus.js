function rhombusAreaCalculation(){
    const diagonalOneInput =getInputValueById('diagonal-one-input');
    const diagonalTwoInput =getInputValueById('diagonal-two-input');
    const area= 0.5 * diagonalOneInput * diagonalTwoInput;
    setInnerTextById('rhombusArea-display',area)
}