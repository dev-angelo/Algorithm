function solution(participant, completion) {
    var answer = '';

    const quickSort = (array, left, right) => {
        const partition = (array, left, right) => {
            const swap = (array, index1, index2) => {
                const temp = array[index1];
                array[index1] = array[index2];
                array[index2] = temp;
            }

            const pivot = right;
            let index = left;

            for (let loopCount = left; loopCount < right; loopCount++)
            {
                if (array[loopCount] < array[pivot])
                {
                    swap(array, loopCount, index);
                    index++;
                }
            }

            swap(array, pivot, index);
            return index;
        }

        if (left < right)
        {
            const pivot = partition(array, left, right);

            quickSort(array, left, pivot - 1);
            quickSort(array, pivot + 1, right);
        }
    }

    quickSort(participant, 0, participant.length - 1);
    quickSort(completion, 0, completion.length - 1);

    answer = participant[participant.length - 1];

    for (let index = 0 ; index < completion.length - 1 ; ++index) {
        if (participant[index] !== completion[index]) {
            answer = participant[index];
            break;
        }
    }

    return answer;
}

exports.solution = solution;
