let textElement = document.getElementById('text')
let optionButtonsElement = document.getElementById('option-buttons')

//функция начинает игру
let state = {}
function startGame() {
  state = {}
  showquestion(1)
}
//функция отображает вопросы на экране
function showquestion(questionIndex) {
  let question = questions.find(question => question.id === questionIndex)
  textElement.innerText = question.text
  document.getElementById("question-image").src = question.image;
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  question.options.forEach(option => {
    if (showOption(option)) {
      let button = document.createElement('button')
      button.classList.add('btn')
      optionButtonsElement.appendChild(button)
      button.addEventListener('click', () => selectOption(option))
      button.innerText = option.text
    }
  })
}
//функция отображает ответы на экране
function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}
//функция осуществляет переход к следующему вопросу
function selectOption(option) {
  let nextquestionId = option.nextText
  if (nextquestionId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showquestion(nextquestionId)
}
//вопросы
let questions = [
  {
    id: 1,
    text: 'Вы находитесь в комнате с тремя дверьми. Выберите куда пойти:',
    image: "https://w.forfun.com/fetch/03/03f8cd3f6796daaacc1fe43ffb7704b7.jpeg",
    options: [
      {
        text: 'Пойти через правую дверь',
        nextText: 2
      },
      {
        text: 'Пойти через левую дверь',
        nextText: 3
      },
      {
        text: 'Пойти через дверь посередине',
        nextText: 17
      }
    ]
  },
  {
    id: 2,
    text: 'Вы идёте по коридору и встречаете ловушку. Вы что-то слышали про её прохождение, что будете делать?',
    image: "prison.jpg",
    options: [
      {
        text: 'Пробежать через ловушку',
        nextText: 10
      },
      {
        text: 'Искать пути обхода ловушек',
        nextText: 5
      },
    ]
  },
  {
    id: 3,
    text: 'Вы находитесь в комнате со статуей Сфинкса. Она задаёт вам загадку: "Кто двигается утром на четырёх ногах, днём - на двух, вечером - на трёх?',
    image: "sfinks.jpg",
    options: [
      {
        text: 'Обезьяна',
        nextText: 4
      },
      {
        text: 'Человек',
        nextText: 2
      },
      {
        text: 'Лягушка',
        nextText: 4
      }
    ]
  },
  {
    id: 4,
    text: 'Ответ на вопрос оказался неверным. Дверь позади вас захлопнулась, оставив вас здесь навсегда без шансов побега',
    image: "podval.jpeg",
    options: [
      {
        text: 'Переиграть',
        nextText: -1
      }
    ]
  },
  {
    id: 5,
    text: 'Узнав, что ловушку можно обойти, вам удалось найти верный путь к следующей двери. Что будете делать теперь?',
    image: "castle.jpg",
    options: [
      {
        text: 'Осмотреть замок',
        nextText: 6
      },
      {
        text: 'Перекусить',
        nextText: 11
      }
    ]
  },
  {
    id: 6,
    text: 'Пока вы осматриваете замок, страшный медведь оказывается перед вами',
    image: "meet.jpg",
    options: [
      {
        text: 'Попытаться убежать',
        nextText: 7
      },
      {
        text: 'Напасть на него с мечом',
        nextText: 9
      },
      {
        text: 'Спрятаться за щитом',
        nextText: 8
      }
    ]
  },
  {
    id: 7,
    text: 'Ваша попытка убежать не удалась. Медведь настиг и разорвал вас',
    image: "run.jpg",
    options: [
      {
        text: 'Переиграть',
        nextText: -1
      }
    ]
  },
  {
    id: 8,
    text: 'Это была неудачная идея. Медведю удалось сломать щит и достать вас',
    image: "bear.jpg",
    options: [
      {
        text: 'Переиграть',
        nextText: -1
      }
    ]
  },
  {
    id: 9,
    text: 'Вы набросились на медведя с мечом и отрубили ему голову. После того, как медведь был убит, вы решили остаться жить в этом замке',
    image: "beer.jpg",
    options: [
      {
        text: 'Вы победили. Сыграть ещё раз?',
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    text: 'При попытке пробега через ловушку, пол обрушился под вами. Вы провалились вниз, напоролись на острые шипы и погибли',
    image: "pol.jpg",
    options: [
      {
        text: 'Переиграть',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'Вы оказываетесь в столовой. На столе лежит сыр, рядом с ним - бутылка вина. Что возьмете в первую очередь?',
    image: "wine.jpg",
    options: [
      {
        text: 'Сыр',
        nextText: 12
      },
      {
        text: 'Бутылка вина',
        nextText: 15
      }
    ]
  },
  {
    id: 12,
    text: 'Сыр оказался очень вкусным. После того, как вы отдохнули, вы задумались о своей безопасности',
    image: "castle.jpg",
    options: [
      {
        text: 'Нужно немедленно уходить из замка',
        nextText: 13
      },
      {
        text: 'Нужно остаться в этом замке',
        nextText: 16
      }
    ]
  },
  {
    id: 13,
    text: 'С трудом, но вы преодолели ту же дорогу, по которой и пришли. И вернулись домой',
    image: "home.jpg",
    options: [
      {
        text: 'Вы победили. Сыграть ещё раз?',
        nextText: -1
      }
    ]
  },
  {
    id: 14,
    text: 'Наступила ночь, и вы уснули на кровати в соседней команде. Но пока вы спали, в вашу комнату пришёл медведь и убил вас',
    image: "bear.jpg",
    options: [
      {
        text: 'Переиграть',
        nextText: -1
      }
    ]
  },
  {
    id: 15,
    text: 'После того, как вы выпили всю бутылку, вас потянуло на сон. Пока вы спали, медведь, который был в этом замке залез к вам в комнату и убил вас',
    image: "bear.jpg",
    options: [
      {
        text: 'Переиграть',
        nextText: -1
      }
    ]
  },
  {
    id: 16,
    text: 'Вы почувствовали, что вам хочется спать. Однако, замок всё еще был не исследован',
    image: "bed.jpg",
    options: [
      {
        text: 'Лечь спать',
        nextText: 14
      },
      {
        text: 'Исследовать замок',
        nextText: 6
      }
    ]
  },
  {
    id: 17,
    text: 'В комнате вы обнаружили сундук с золотыми монетами',
    image: "gold.jpg",
    options: [
      {
        text: 'Взять сундук',
        nextText: 18
      },
      {
        text: 'Не брать сундук',
        nextText: 19
      }
    ]
  },
  {
    id: 18,
    text: 'Вы взяли сундук и унесли его себе домой. Как бы вы хотели распорядиться золотом?',
    image: "gold.jpg",
    options: [
      {
        text: 'Потратить на себя',
        nextText: 20
      },
      {
        text: 'Помочь нуждающимся',
        nextText: 21
      }
    ]
  },
  {
    id: 19,
    text: 'Опасаясь брать посторонние вещи в замке, вы решили продолжить свой путь',
    image: "doors.jpg",
    options: [
      {
        text: 'Пойти через правую дверь',
        nextText: 2
      },
      {
        text: 'Пойти через левую дверь',
        nextText: 3
      }
    ]
  },
  {
    id: 20,
    text: 'Благодаря золоту, вы смогли купить новый дом и ни в чём больше себе не отказывали',
    image: "newCastle.jpg",
    options: [
      {
        text: 'Вы победили. Сыграть ещё раз?',
        nextText: -1
      }
    ]
  },
  {
    id: 21,
    text: 'Использовав полученное золото, вы помогли многим людям, тем самым обрели много новых друзей',
    image: "crowd.jpg",
    options: [
      {
        text: 'Вы победили. Сыграть ещё раз?',
        nextText: -1
      }
    ]
  }
]
startGame()
