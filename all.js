function bubbleSort(arr) {
    console.log('ggg', arr.length)
    for (let i = 0; i <= arr.length - 2; i++) {
        let isSwap = false
        for(let j = arr.length - 1; j >= i + 1; j--) {
            if (arr[j] < arr[j - 1]) {
                isSwap = true
                let temp = arr[j-1]
                arr[j-1] = arr[j]
                arr[j] = temp
            }
        }
    }
    console.log(arr)
}


const result = bubbleSort([3,2,1]);



function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const key = arr[i]
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]
            j--;
        }
        arr[j + 1] = key;
    }
    console.log(arr)
}

insertionSort([6,5,4,3,2,1])


