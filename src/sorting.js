function bubbleSort(array = []) {
    let check = true;
    let runTime = 0;
    while(check) {
        check = false;
        for (let i = 1; i < array.length; i++) {
            if (array[i - 1] > array[i]) {
                let temp = array[i];
                array[i] = array[i - 1];
                array[i - 1] = temp;
                check = true;
            }
            runTime++;
        }
    }

    return [array, runTime];
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}