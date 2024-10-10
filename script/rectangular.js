function areaRectangular(){
    const rectangularWeightInput= document.getElementById('rectangular-wight')
    const widthText=rectangularWeightInput.value;
    const width= parseFloat(widthText);
    console.log(width);

    const rectangleHeightInput= document.getElementById('rectangle-height');
    const rectangleHeightText=rectangleHeightInput.value;
    const rectangleHeight= parseFloat(rectangleHeightText) ;
    console.log(rectangleHeight);

    const rectangleArea= width*rectangleHeight;
    console.log('Area:',rectangleArea);
    
   const rectangularAreaDisplay =document.getElementById('rectangular-area-display');
   rectangularAreaDisplay.innerText= rectangleArea;
}

//parallelogram
function areaParallelogram(){
    const parallelogramBaseInput= document.getElementById('Parallelogram-base-input')
    const parallelogramBaseText= parallelogramBaseInput.value;
    const parallelogramBase=parseFloat(parallelogramBaseText)
   console.log(parallelogramBase)


   const ParallelogramHeightInput =document.getElementById('Parallelogram-height-input');
   const ParallelogramHeightText =ParallelogramHeightInput.value;
   const ParallelogramHeight = parseFloat(ParallelogramHeightText);
   console.log(ParallelogramHeight)

   const ParallelogramArea = parallelogramBase * ParallelogramHeight ;
   console.log(ParallelogramArea)

   const ParallelogramAreaDisplay =document.getElementById('ParallelogramArea-display')
   
   ParallelogramAreaDisplay.innerText = ParallelogramArea
}