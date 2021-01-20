const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1; /*counter*/

next.addEventListener('click', () => {
    currentActive++ /*when next button is clicked it adds +1 */
    if(currentActive > circles.length){ /*if counter ir larger than circle count*/
        currentActive = circles.length /*then circles count is passed to counter*/
    }
    update()
})

prev.addEventListener('click', () => {
    currentActive-- /*when prev button is clicked it decrements -1 */
    if(currentActive < 1){ /*if counter ir less than 1*/
        currentActive = 1 /*then counter is equal to 1*/
    }
    update()/*passing update function, so it gets executed when button is clicked*/
})

function update(){ /*updating the DOM*/
    circles.forEach((circle, idx) => { /*loop through nodeList*/
        if(idx < currentActive){ /*checks if paricular circles index is less than currentActive*/
            circle.classList.add('active') /*if so than adds an active class to circle*/
        }else{
            circle.classList.remove('active') /*else removes active class*/
        }
    })
    const actives = document.querySelectorAll('.active')

    /*calculation = 1 / 3 * 100%  = 0.33*/
    /*because circles are always 4 - 1 = 3 and active from start is 1 when not activated
    * and when button is clicked it becomes 2 - 1 = 1  , 2 / 3 * 100 = 0.66 and 3 / 3 * 100 = 1*/
    progress.style.width = (actives.length -1) / (circles.length -1) * 100 + '%'

    if(currentActive === 1){ /*if it is equal to start*/
        prev.disabled = true; /*previous button is disabled*/
    } else if (currentActive === circles.length) { /*if it is equal to end*/
        next.disabled = true; /*next button is disabled*/
    } else { /*if it is 2 or 3 both buttons are enabled*/
        prev.disabled = false;
        next.disabled = false;
    }
}