type InputProps = {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
};

function TodoInput({ input, setInput }: InputProps) {
  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInput(e.target.value);
        }}
      />
    </>
  );
}

export default TodoInput;
