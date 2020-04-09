import React, { useState, useEffect } from "react"

const HowItWorks = () => {
  const [stepData, setStepData] = useState([]);
  useEffect(() => {
    // Fetch step content from API
    fetch(`https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge`)
      .then(response => response.json())
      .then(resultData => {
        let resultFiltered = [];
        for(let step in resultData) {
          resultFiltered.push({
            'stepNumber':    resultData[step].stepNumber,
            'displayNumber': (resultData[step].stepNumber > 9) ?
                              resultData[step].stepNumber :
                              '0' + resultData[step].stepNumber,
            'latestTitle':   resultData[step].versionContent[0].title,
            'latestBody':    resultData[step].versionContent[0].body
          })
        }
        resultFiltered.sort((a, b) => (a.stepNumber > b.stepNumber) ? 1 : -1);

        console.log(resultFiltered);
        setStepData(resultFiltered);
      })
  }, [])

  return (
    <div className="how-it-works">
      <h3 className="h2">How It Works</h3>
      <ul className="how-steps list--unstyled">
        {stepData.map((step) =>
          <li key={step.stepNumber}>
            <span className="how-steps__number">{ step.displayNumber }</span>
            <h4>{ step.latestTitle }</h4>
            <p>{ step.latestBody }</p>
          </li>
        )}
      </ul>
    </div>
  )
}

export default HowItWorks
