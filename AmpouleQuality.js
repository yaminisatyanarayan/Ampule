// src/components/AmpouleQuality.js
import React, { useEffect, useState } from 'react';
import { fetchResult, fetchVideoFeed } from '../api';

const AmpouleQuality = () => {
  const [result, setResult] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () =>{
    try {
      const response = await fetch(' http://127.0.0.1:5000/result');
      if(!response.ok){
        throw new Error("Network response was not ok")
      }
      const jsonData = await response.json();
    
      setResult(jsonData);
    }
    catch(error){
      console.log("Error fetching data:",error);
    }
  }

  return (
    <div>
      <h1>Ampoule Quality Prediction</h1>
      {result ? (
        <div>
          <p>Result: {result.result}</p>
          {Object.entries(result).map(([key, value]) => (
            key !== 'result' && (
              <div key={key} style={{ color: value.color }}>
                {key}: {value.dimension}
              </div>
            )
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <div>
        <h2>Live Video Feed</h2>
        <img src={fetchVideoFeed()} alt="Video Feed" style={{ width: '800px', height: '500px' }} />
      </div>
    </div>
  );
};

export default AmpouleQuality;


// const getResult = async () => {
    //   try {
    //     const data = await fetchResult();
    //     setResult(data);
    //   } catch (error) {
    //     console.error('Error fetching result:', error);
    //   }
    // };

    // getResult();
