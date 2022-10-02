import './index.scss';
import React from 'react';

const questions = [
  {
    title: 'React - це ... ?',
    variants: ['бібліотека', 'фреймворк', 'додаток'],
    correct: 0,
  },
  {
    title: 'Компонент - це ... ',
    variants: ['додаток', 'частина додатка або сторінки', 'те, що я не знаю що це таке'],
    correct: 1,
  },
  {
    title: 'Що таке JSX?',
    variants: [
      'Це простий HTML',
      'Це функція',
      'Це той же HTML, але з можливістю виконувати JS-код',
    ],
    correct: 2,
  },
];

function Result({ correct }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="img"/>
      <h2>Ви вгадали {correct} відповіді з {questions.length}</h2>
      <a href="/"><button>Спробувати знову</button></a>
    </div>
  );
}

function Game({ step, question, onClickVariant }) {

  const percentage = Math.round(step / questions.length * 100);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {
          question.variants.map((item, index )=> <li onClick={()=>onClickVariant(index)} key={item}>{item}</li>)
        }
      </ul>
    </>
  );
}

function App() {

  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    if (question.correct === index) {
      setCorrect(correct + 1);
    }
    setStep(step+1);
  }

  return (
    <div className="App">
      {
        step !== questions.length ? <Game step={step} question={question} onClickVariant={onClickVariant}/> : <Result correct={correct}/>
      }
    </div>
  );
}

export default App;
