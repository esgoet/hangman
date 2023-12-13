import { useState, useEffect, useCallback } from "react";
import words from "./wordList.json";
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";

function getWord() {
   return words[Math.floor(Math.random() * words.length)]
  }


function App() {
  const [wordToGuess, setWordToGuess] = useState(()=> {
    //return random word from List 
    return words[Math.floor(Math.random() * words.length)]
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter));

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess.split('').every(letter => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback((letter: string) => {
     if (guessedLetters.includes(letter) || isLoser || isWinner) return;

     setGuessedLetters((currentLetters) => [...currentLetters, letter]);

  }, [guessedLetters, isWinner, isLoser])

  // track keyboard input for letters
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return

      e.preventDefault();
      addGuessedLetter(key);

    }
    document.addEventListener('keypress', handler)

    return () => {
       document.removeEventListener('keypress', handler)

    }


  }, [guessedLetters])

  // reload game after winning when pressing enter
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (key !== "Enter") return;

      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord());
    };
    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  return (
    <div
      className="m-8 flex flex-col sm:flex-row gap-20 items-center justify-items-center justify-center align-center"
    >
      <div className="flex gap-8 flex-col ">
        <div
          // style={{
          //   fontSize: "2rem",
          //   textAlign: "center",
          // }}
          className="text-8 text-center h-[30px]"
        >
          {isWinner && "Winner! Refresh to try again."}
          {isLoser && "Nice try. Refresh to try again."}
        </div>
        <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      </div>

      <div className="flex gap-8 flex-col w-2/5 ">
        <HangmanWord
          reveal={isLoser}
          guessedLetters={guessedLetters}
          wordToGuess={wordToGuess}
        />

        <Keyboard
          disabled={isWinner || isLoser}
          activeLetters={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
}

export default App