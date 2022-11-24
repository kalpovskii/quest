import React, {useState} from "react";
import './App.css';

function App() {

   const questions = [
      {
         imageOptions: require(`./img/nevskiy.png`),
         questionText: 'Сколько окон у этого здания?',
         answerOptions: [
            {answerText: 'Десять', isCorrect: false},
            {answerText: 'Двадцать', isCorrect: false},
            {answerText: 'Тридцать', isCorrect: false},
            {answerText: 'Ну и вопросы у вас!', isCorrect: true},
         ]
      },
      {
         imageOptions: require(`./img/second.jpg`),
         questionText: 'Сколько водосточных труб на фасаде?',
         answerOptions: [
            {answerText: 'Две', isCorrect: false},
            {answerText: 'Двадцать', isCorrect: false},
            {answerText: 'Много', isCorrect: false},
            {answerText: 'Могли бы и лучше придумать...', isCorrect: true},
         ]
      },
      {
         imageOptions: require(`./img/rybov.png`),
         questionText: 'Что происходит на снимке?',
         answerOptions: [
            {answerText: 'Продаём', isCorrect: false},
            {answerText: 'Показываем', isCorrect: false},
            {answerText: 'Красивое', isCorrect: false},
            {answerText: 'Не смешно!', isCorrect: true},
         ]
      },

   ]

   const [currentQuestion, setCurrentQuestion] = useState(0);
   const [score, setScore] = useState(0);
   const [showScore, setShowScore] = useState(false);

   const refresh = () => {
      setCurrentQuestion(0);
      setScore(0);
      setShowScore(false);
   }

   const handleAnswerClick = (isCorrect) => {
      if (isCorrect) {
         setScore(score + 1)
      }

      const nextQuestion = currentQuestion + 1

      if (nextQuestion < questions.length) {
         setCurrentQuestion(nextQuestion)
      } else {
         setShowScore(true)
      }
   }

   return (
       <div className="App">
          <div className="quest">
             <h1 className="title">КВЕСТ</h1>
             <p className="title__description">Геймификация прогулок по городу,
                реализованная в виде заданий, разбросанных по карте города</p>
          </div>
          <div className="sponsor">
             <div className="sponsor__head">
                <h3 className="title__text">спонсорский</h3>
                <p className="title__description">Может быть создан
                   пользователем и доступен всем. Например: квест от популярного
                   блогера <span>Мур Мяуча</span></p>
             </div>
             <div className="map">
                <div className="map__img">
                   <iframe src="https://www.google.com/maps/d/embed?mid=1LGWtXXXKkq3eiskKgFs_zAitxxVGbwM&hl=en&ehbc=2E312F" width="100%" height="620px"></iframe>
                   {/*<img src='./img/map.png' alt="map" className="map__img"/>*/}
                </div>
                <div className="map__footer">
                   <img src="./img/cat-logo.png" alt="cat"
                        className="map__footer-logo"/>
                   <div className="footer__text">
                      <p className="footer__text-title">Мур Мяуч</p>
                      <p className="footer__text-description">у меня лапки!
                         *мяу*</p>
                   </div>
                </div>
             </div>
             <div className="under__map">
                <p className="under__map-text">предполагается, что автор внесет
                   в квест спонсорские места, в которых пользователь может
                   получить кешбек или другие <span>плюшки</span></p>
             </div>
          </div>
          <div className="personal">
             <div className="personal__head">
                <h3 className="title__text">персональный</h3>
                <p className="title__description">Виден и доступен только
                   приглашённым людям.
                   Например: Поздравление с днём рождения или розыгрыш призов
                   для сотрудников компании <span>Цап-Царап</span></p>
             </div>
             <div className="map">
                <div className="map__img">
                   <iframe src="https://www.google.com/maps/d/embed?mid=1n1Ja-MmHdjGu6CpIOSW2wr7xAhAGLLk&hl=en&ehbc=2E312F" width="100%" height="620px"></iframe>
                   {/*<img src='./img/map2.png' alt="map" className="map__img"/>*/}
                </div>
                <div className="map__footer-second">
                   <img src="./img/cat-p.png" alt="cat"
                        className="map__footer-logo-second"/>
                   <div className="footer__text-second">
                      <p className="footer__text-title">Цап-Царап</p>
                      <p className="footer__text-description">забирайте призы! *мур*</p>
                   </div>
                </div>
             </div>
          </div>
          <div className="task">
             <div className="task__head">
                <h3 className="title__text">Задания</h3>
                <p className="title__description">Основная механика
                   квеста это задания.
                   Квест может состоять из одного единственного
                   задания или быть многошаговым.</p>
                <p className="title__description">Задание можно завершить
                   несколькими способами</p>
             </div>
             <div className="questions__quiz">
                <div className="first__quiz">
                   <p className="title__description-quiz">выбрать место
                      на карте</p>
                   <img className="questions__quiz-img"
                        src="./img/lapka.png" alt="map"/>
                   <button type="submit"
                           className="questions__quiz-btn">отправить
                   </button>
                </div>
                <div className="second__quiz">
                   <p className="title__description-quiz">отыскать
                      спрятанный<br/> qr-code</p>
                   <img className="questions__quiz-img" src="./img/qr.png"
                        alt="qr"/>
                   <p className="title__description-quiz">Сканируй!</p>
                </div>
             </div>
          </div>
          <div className="react-quiz">
             <p className="title__description">ответ на вопрос, подразумевающий
                нахождение
                человека на месте</p>

             {
                showScore ? <div className="quiz__main">
                   <div className="quiz__main-img">
                      <img src={require('./img/gift.png')} alt="gift"/>
                   </div>
                   <div className="quiz__main-footer-prize">
                      <p>Правильных ответов {score} из {questions.length}</p>
                      <button
                          onClick={refresh}
                          className='claim__btn'>Попробовать ещё</button>
                   </div>
                </div> : <div className="quiz__main">
                   <div className="quiz__main-img">
                      <img src={questions[currentQuestion].imageOptions} alt="img"/>
                   </div>
                   <div className="quiz__main-footer">
                      <div className="quiz__main-first-sec">
                         <div className="question__count"> <span>Вопрос {currentQuestion + 1}</span> / {questions.length}</div>
                         <div className="question__text">{questions[currentQuestion].questionText}</div>
                      </div>
                      <div className="quiz__main-second-sec">
                         {questions[currentQuestion].answerOptions.map(
                             item => (
                                 <button onClick={() => handleAnswerClick(item.isCorrect)}>{item.answerText}</button>
                             )
                         )}
                      </div>
                   </div>
                </div>
             }
          </div>
       </div>
   );
}

export default App;
