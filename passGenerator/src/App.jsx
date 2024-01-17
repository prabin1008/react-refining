import React, { useState, useCallback, useEffect,useRef} from 'react'

const App = () => {
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [length, setLength] = useState(8);

  //use refHook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ZXCVBNMLKJHGFDSAQWEERTYUIOPpoiuytrewqasdfghjklmnbvcxz";

    if (number) str += "0123456789";
    if (character) str += "!@#$%^&*()_+{}><?";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass)
  }, [length, number, character, setPassword]);

  const copyPasswordToClip = useCallback(() =>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator();
  },[length, number, character, passwordGenerator]);
  return (
    <>
      <div className="w-full max-w-md shadow-md rounded-lg px-4 my-8 mx-auto text-green-700 bg-slate-400">
        <h1 className='text-white text-center my-6 p-2'>password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 pb-6 justify-center">
          <input
            value={password}
            className='outline-none w-full py-1 px-4'
            placeholder='password'
            readOnly
            ref={passwordRef}
            type="text" />
          <button 
          onClick={copyPasswordToClip}
          className='outline-none bg-red-300 text-white px-4'
          >copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              min={8}
              max={30}
              value={length}
              onChange={(event) => {setLength(event.target.value)}}
              className='cursor-pointer'
              type="range" />
            <label>length : {length}</label>
          </div>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              defaultChecked= {number}
              onChange={() =>{setNumber((prev) => ! prev);}}
              className='cursor-pointer'
              type="checkbox" />
            <label>number{number}</label>
          </div>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              defaultChecked={character}
              onChange={() => {setCharacter(prev => !prev)}}
              className='cursor-pointer'
              type="checkbox" />
            <label>character{character}</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;