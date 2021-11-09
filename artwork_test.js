const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'Hello and welcome to the Prototype tour!! This is just to test out some functionality and to see what the very bare version of this game will look like!',
    options: [
      {
        text: 'Alright!',
        
        nextText: 2
      },
      {
        text: 'Sweet',
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: 'So, over here we have...nothing much but it will be something soon! I hope to have a cool illustration or GIF above this text at some point. Stay tuned for that!',
    options: [
      {
        text: 'oooh pretty pictures!',
        nextText: 3
      },
      {
        text: 'I would like to see it, yes.',
        nextText: 3
      }
    ]
  },
  {
    id: 3,
    text: 'I really hope this game works out! I think it would be really cool to see it in all its glory at the end of this',
    options: [
      {
        text: 'I hope it works out for you too',
        nextText: 4
      },
      {
        text: 'Better get working then!',
        nextText: 5
      },
      {
        text: 'good luck!!',
        nextText: 6
      }
    ]
  },
  {
    id: 4,
    text: 'Alright! Last stop on the tour! Thanks for visiting, I hope it was not too disappointing and you can see (if you squint your eyes and tilt your head a little) the vision for this game!',
    options: [
      {
        text: 'Thanks for the trip!',
        nextText: -1
      }
    ]
  },
  {
    id: 5,
    text: 'Alright! Last stop on the tour! Thanks for visiting, I hope it was not too disappointing and you can see (if you squint your eyes and tilt your head a little) the vision for this game!',
    options: [
      {
        text: 'See you soon!',
        nextText: -1
      }
    ]
  },
  {
    id: 6,
    text: 'Alright! Last stop on the tour! Thanks for visiting, I hope it was not too disappointing and you can see (if you squint your eyes and tilt your head a little) the vision for this game!',
    options: [
      {
        text: 'Cannot wait to see how it turns out!',
        nextText: -1
      }
    ]
  }
]

startGame()