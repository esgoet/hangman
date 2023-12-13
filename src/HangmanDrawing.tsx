const HEAD = (
  <div

    className="w-[50px] h-[50px] rounded-full border-[10px] border-black border-solid absolute top-[50px] -right-[20px] "
  />
);

const BODY = (
  <div
    className="w-[10px] h-[100px] bg-black absolute top-[100px] right-0"
  />
);

const RIGHT_ARM = (
  <div className="w-[70px] h-[10px] bg-black absolute top-[150px] -right-[65px] -rotate-[30deg] origin-bottom-left" />
);

const LEFT_ARM = (
  <div className="w-[70px] h-[10px] bg-black absolute top-[150px] right-[5px] rotate-[30deg] origin-bottom-right" />
);

const RIGHT_LEG = (
  <div className="w-[110px] h-[10px] bg-black absolute top-[190px] -right-[100px]  origin-bottom-left rotate-[60deg]" />
);

const LEFT_LEG = (
  <div className="w-[110px] h-[10px] bg-black absolute top-[190px] right-0  origin-bottom-right -rotate-[60deg]" />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

 type HangmanDrawingProps = {
    numberOfGuesses: number
 }

export function HangmanDrawing({numberOfGuesses}: HangmanDrawingProps) {
    return (
      <div className="relative">
        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div
   
          className="absolute h-[50px] w-[10px] bg-black top-0 right-0"
        />
        <div
        
          className="h-[10px] w-[200px] bg-black ml-[110px]"
        />
        <div
  
          className="h-[400px] w-[10px] bg-black ml-[110px]"
        />
        <div

          className="h-[10px] w-[250px] bg-black"
        />
      </div>
    );

}