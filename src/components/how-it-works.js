import React, { useState, useEffect } from "react"

const HowItWorks = () => {
  const [stepData, setStepData] = useState([]);
  useEffect(() => {
    // Fetch step content from API
    fetch(`https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge`)
      .then(response => response.json())
      .then(resultData => {
        let resultFiltered = [];
        let contentSorted = [];
        for(let step in resultData) {
          contentSorted = resultData[step].versionContent;
          contentSorted.sort((a, b) => new Date(b.effectiveDate) - new Date(a.effectiveDate));

          resultFiltered.push({
            'stepNumber':    resultData[step].stepNumber,
            'displayNumber': (resultData[step].stepNumber > 9) ?
                              resultData[step].stepNumber :
                              '0' + resultData[step].stepNumber,
            'latestTitle':   contentSorted[0].title,
            'latestBody':    contentSorted[0].body,
            'latestDate':    contentSorted[0].effectiveDate
          })
        }
        resultFiltered.sort((a, b) => (a.stepNumber > b.stepNumber) ? 1 : -1);

        setStepData(resultFiltered);
      })
  }, [])

  return (
    <div className="how-it-works grid-inner-content">
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
