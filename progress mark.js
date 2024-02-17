let roundElements = Array.from(document.getElementsByClassName("mark"))
let betweenMarks = Array.from(document.getElementsByClassName("betweenMarks"))
console.log(roundElements)
console.log(betweenMarks)

let check = 0;

let next = document.getElementById("next")
console.log(next)
let previous = document.getElementById("previous")
console.log(previous)

next.addEventListener("click", () => {
    console.log("next Clicked")
    check++;
    if (check == 1) 
    {
        setTimeout(() => {
            previous.disabled = false
            previous.classList.add("previousActive")

        }, 700);
        
    }
    betweenMarks[check - 1].classList.add("activeBetweenStep")
    roundElements[check].classList.add("activeStep")
})

previous.addEventListener("click", () => {

    console.log("Clicked")
    roundElements[check].classList.remove("activeStep")
    betweenMarks[check - 1].classList.remove("activeBetweenStep")

    --check;
    if (check == 0) {
        setTimeout(() => {
            previous.classList.remove("previousActive")
            previous.disabled = true

        }, 700);

    }
})

//=======<>The UNDAUNTED Fault Code

// checkList = (buttonSlected) => {
//     for (let i = 0; i < firstElement.length; i++) {
//         if (buttonSlected)
//         {
//             if (i == firstElement.length - 1)
//                 return false
//             else if (!(firstElement[i].hasAttribute(".previousActive")))
//                 return firstElement[i];
//         }
//         else {
//             if(i == firstElement.length - 1)
//                 return firstElement[i]
//             if (!(firstElement[i].hasAttribute(".previousActive")))
//                 if(i!=0)
//                     return firstElement[i-1];
//                 else if(i==0)
//                     return firstElement[i];
//         }
//     }
// }