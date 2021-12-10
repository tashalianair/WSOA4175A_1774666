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
    text: 'i hate looking in the mirror. i always feel like a stranger is looking back at me',
    options: [
      {
        text: 'lost',
        
        nextText: 2
      },
      {
        text: 'Denial',
        nextText: 3
      }
    ]
  },
  {
    id: 2,
    text: 'maybe. i used to think i knew myself. i thought i knew what i liked and what i did not. i used to think i could recognise myself.',
    options: [
      {
        text: 'Who is she?',
        nextText: 4
      },
      {
        text: 'Who are you?',
        nextText: 5
      }
    ]
  },
  {
    id: 3,
    text: 'i am Not. i really do not know her...them?...me?',
    options: [
      {
        text: 'Who is she?',
        nextText: 4
      },
      {
        text: 'Who are you?',
        nextText: 5
      }
    ]
  },
  {
    id: 4,
    text: 'i do not know but she does not look happy...she...she...she?',
    options: [
      {
        text: 'You.',
        nextText: -1
      }
    ]
  },
  {
    id: 5,
    text: 'an age old question. i do not know...there is a line from this book called "The Song of Achilles" where Patroclus answers in response to a similar question "I am made of memories"...maybe that is what i am?',
    options: [
      {
        text: 'Ghost',
        nextText: 6
      },
      {
        text: 'Shell',
        nextText: 7
      }
    ]
  },
  {
    id: 6,
    text: 'drifting aimlessly, not knowing where to go or what to do. lost. sounds about right...i think i have only ever been what others needed',
    options: [
      {
        text: 'Daughter',
        nextText: 8
      },
      {
        text: 'Sister',
        nextText: 9
      }
    ]
  },
  {
    id: 7,
    text: 'a shell...maybe. i do not think i have ever been anything other than what others have wanted...i think i am scared of who i would be if i was not.',
    options: [
      {
        text: 'Daughter',
        nextText: 8
      },
      {
        text: 'Sister',
        nextText: 9
      }
    ]
  },
  {
    id: 8,
    text: 'the thing that brought so many problems. always be good and behave calmly. always be level-headed, do not give them a reason to worry or stress. do not make them regret it. prove that you are worth it.',
    options: [
      {
        text: 'Sister',
        nextText: 9
      },
      {
        text: 'Get over it.',
        nextText: 10
      }
    ]
  },
  {
    id: 9,
    text: 'protector. parent. second-best. friend. i love being an older sister, i really do. but i think...i think i am tired of being second-best. i think i am tired of not being good enough...tired of never knowing if i was made for me or made for them.',
    options: [
      {
        text: 'Daughter',
        nextText: 8
      },
      {
        text: 'Cry me a river.',
        nextText: 10
      }
    ]
  },
  {
    id: 10,
    text: 'maybe you have a point...',
    options: [
      {
        text: 'Weak',
        nextText: 11
      },
      {
        text: 'Selfish',
        nextText: 11
      }
    ]
  },
  {
    id: 11,
    text: 'i am not i am just-',
    options: [
      {
        text: 'WEAK',
        nextText: 12
      },
      {
        text: 'SELFISH',
        nextText: 12
      }
    ]
  },
  {
    id: 12,
    text: 'I AM NOT I JUST-',
    options: [
      {
        text: 'JUST WHAT????',
        nextText: 13
      },
    ]
  },
  {
    id: 13,
    text: 'i just-',
    options: [
      {
        text: 'Spit. It. Out.',
        nextText: -1
      },
    ]
  },
]

startGame()