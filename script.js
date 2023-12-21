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
    image: "https://kartinkin.net/uploads/posts/2022-12/thumbs/1670593563_32-kartinkin-net-p-skazochnie-vorota-kartinki-pinterest-35.jpg",
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
    image: "https://avatars.dzeninfra.ru/get-zen_doc/4723473/pub_637e026cf4020f7470717a82_637e081dd275ce4757bf4cdf/scale_1200",
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
    image: "https://avatars.dzeninfra.ru/get-zen_doc/8246938/pub_640de38d8c6f9346cfa57ef8_640de56516e2f234c91cc951/scale_1200",
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
    image: "https://www.kingdom-of-games.com/plugins/galerie/galerien/clockwork-tales-glass-ink/clockwork-tales-glass-ink-shot05.jpg",
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
    image: "https://avatars.mds.yandex.net/i?id=13b27978f43499fad7030f54fb8423842855f27b-10782253-images-thumbs&n=13",
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
    image: "https://sportishka.com/uploads/posts/2022-11/1667456625_26-sportishka-com-p-medved-borets-oboi-34.jpg",
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
    image: "https://static.wixstatic.com/media/2a34d8_e124a4e9c0a040c6aec8e737d6894757~mv2.jpg/v1/fill/w_1000,h_640,al_c,q_90,usm_0.66_1.00_0.01/2a34d8_e124a4e9c0a040c6aec8e737d6894757~mv2.jpg",
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
    image: "https://v-kurse.ru/wp-content/uploads/2021/10/9861640-medved-bear-otkryl-rot-zuby-buryy-zloy-zloba-scaled.jpg",
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
    image: "https://w.forfun.com/fetch/2d/2d2a1a71461e076a48670ee332c402ed.jpeg",
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
    image: "http://images.gamersyde.com/image_prince_of_persia_the_two_thrones-1601-734_0011.jpg",
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
    image: "https://oboi-store.ru/files/products/wp00352-fotooboi-verol-fotooboi-decoline-23905187-302188.520x520x1x1.jpg",
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
    image: "https://avatars.mds.yandex.net/i?id=13b27978f43499fad7030f54fb8423842855f27b-10782253-images-thumbs&n=13",
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
    image: "https://crosti.ru/patterns/00/21/21/78_picture_cf2e228b.jpg",
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
    image: "https://v-kurse.ru/wp-content/uploads/2021/10/9861640-medved-bear-otkryl-rot-zuby-buryy-zloy-zloba-scaled.jpg",
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
    image: "https://v-kurse.ru/wp-content/uploads/2021/10/9861640-medved-bear-otkryl-rot-zuby-buryy-zloy-zloba-scaled.jpg",
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
    image: "https://mykaleidoscope.ru/uploads/posts/2021-10/1634057582_1-mykaleidoscope-ru-p-spalnya-v-srednevekovom-zamke-interer-kras-1.jpg",
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
    image: "https://pro-dachnikov.com/uploads/posts/2023-01/1673864215_pro-dachnikov-com-p-kartinki-sunduk-s-sokrovishchami-foto-5.jpg",
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
    image: "https://pro-dachnikov.com/uploads/posts/2023-01/1673864215_pro-dachnikov-com-p-kartinki-sunduk-s-sokrovishchami-foto-5.jpg",
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
    image: "https://kartinkin.net/uploads/posts/2022-12/thumbs/1670593563_32-kartinkin-net-p-skazochnie-vorota-kartinki-pinterest-35.jpg",
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
    image: "https://cdn.puzzlegarage.com/img/puzzle/13/3155_thumb_r.v1.jpg",
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
    image: "https://www.semiestrel.ru/wp-content/uploads/2021/10/ploshhad-senorii-2048x1308.jpg",
    options: [
      {
        text: 'Вы победили. Сыграть ещё раз?',
        nextText: -1
      }
    ]
  }
]
startGame()
