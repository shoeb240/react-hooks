import { useCallback, useEffect, useState } from "react";
import Text from "./components/Text";
import Button from "./components/Button";


function App() {
  const [mytime, setTime] = useState(new Date());
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // Using useCallback hook to cache handleClick1 function. Since, no 
  // external dependency exists, this will not be refreshed
  const handleClick1 = useCallback(() => {
      setCount1((prevCount) => prevCount + 1);
  }, []);

  // Using useCallback hook to cache handleClick1 function with dependency to count2. So 
  // handleClick1 function will be refreshed only if value of count2 changes.
  const handleClick2 = useCallback(() => {
      setCount2(count2 + 1);
  }, [count2]);

  const tickTime = () => {
      setTime(new Date());
  };

  useEffect(() => {
      // Setting interval on Mount
      console.log('Time Interval');
      const timeinterval = setInterval(tickTime, 1000);
      // Clearing interval on Unmounting
      return () => {
          clearInterval(timeinterval);
      }
  }, []);

  return (
      <>
          <h2>{mytime.toTimeString()}</h2>

          <Text count={count1}>First Text:</Text>
          <Button handleInput={handleClick1}>Increment One</Button>

          <Text count={count2}>Second Text:</Text>
          <Button handleInput={handleClick2}>Increment Five</Button>
      </>
  );
}

export default App
