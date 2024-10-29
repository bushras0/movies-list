import { useEffect, useState } from 'react';

const RandomNumber = () => {
  const [randomNumber, setRandomNumber] = useState(null);

  useEffect(() => {
    // This will only run on the client-side
    setRandomNumber(Math.random());
  }, []);

  return (
    <div>
      {randomNumber !== null ? (
        <h1>Random Number: {randomNumber}</h1>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default RandomNumber;
