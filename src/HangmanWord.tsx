type HangmanWordProps = {
    reveal?: boolean
    guessedLetters: string[]
    wordToGuess: string
}

export function HangmanWord({reveal = false, guessedLetters, wordToGuess} : HangmanWordProps) {
 
    return (
      <div
        // style={{
        //   display: "flex",
        //   gap: ".25em",
        //   fontSize: "6rem",
        //   fontWeight: "bold",
        //   textTransform: "uppercase",
        //   fontFamily: "monospace",
        // }}
        className="flex gap-1 text-5xl font-bold uppercase font-mono mx-auto"
      >
        {wordToGuess.split("").map((letter, index) => (
          <span
            // style={{
            //   borderBottom: ".1em solid black",
            // }}
            className="border-b-[.1em] border-solid border-black"
            key={index}
          >
            <span
            //   style={{
            //     visibility:
            //       guessedLetters.includes(letter) || reveal
            //         ? "visible"
            //         : "hidden",
            //     color:
            //       !guessedLetters.includes(letter) && reveal ? "red" : "black",
            //   }}
              className={`${
                guessedLetters.includes(letter) || reveal ? "visible" : "invisible"
              } ${!guessedLetters.includes(letter) && reveal ? " text-red-800" : "text-black"}`}
            >
              {letter}
            </span>
          </span>
        ))}
      </div>
    );
    
}