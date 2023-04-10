//Dom navigation properties are very useful when elements are very close to each other if they are not cosed to eah other then we have other metrhods
//getelementbyclass

// let ok = document.getElementsByClassName("card-title")[0]
// ok.style.color="red"

//get element by id
// let ok = document.getElementById("firstcard")
// ok.style.color="green"


//querySelectors
// let title = document.querySelectorAll(".card-title")
// title[0].style.color="red"
// title[1].style.color="gray"
// title[2].style.color="white"

//getElementsByClassName
//getElementsByTagName




// const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
// const appendAlert = (message, type) => {
//   const wrapper = document.createElement('div')
//   wrapper.innerHTML = [
//     `<div class="alert alert-${type} alert-dismissible" role="alert">`,
//     `   <div>${message}</div>`,
//     '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
//     '</div>'
//   ].join('')

//   alertPlaceholder.append(wrapper)
// }

// const alertTrigger = document.getElementById('liveAlertBtn')
// if (alertTrigger) {
//   alertTrigger.addEventListener('click', () => {
//     appendAlert('Nice, you triggered this alert message!', 'success')
//   })
// }

