import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Fagspor for javascript testing</h1>
        <p>
          If you like it you better put a regression test on it.{" "}
          <span role="img" aria-label="ring">
            💍
          </span>
        </p>
        <p>Eksempler: </p>
        <ul>
          <li>
            <a href="https://github.com/netliferesearch/valueaccounting">
              En test lar deg gå langt.
            </a>
          </li>
          <li>
            <a href="https://github.com/netliferesearch/u4-no/tree/master/frontend/tests">
              Disse testene har gjort oss godt.
            </a>
          </li>
          <li>
            <a href="https://github.com/netliferesearch/dfo-graphql/blob/master/src/services/test/elastic.test.js#L59">
              Kirugisk datainngrep med unit test.
            </a>
          </li>
          <li>
            <a href="https://github.com/netliferesearch/forecast-gcalendar">
              Sett sideeffekter til sides.
            </a>
          </li>
          <li>
            <a href="https://github.com/netliferesearch/foslive-node/blob/master/index.e2e.test.js">
              Generer tester.
            </a>
          </li>
        </ul>
        <p>Testfilosofi.</p>
        <ol>
          <li>
            La bibliotekene teste seg sjølv. Test din egen kode. Test det som du
            er usikker på eller synes er komplisert.
          </li>
          <li>Unit testing vs integrasjonstesting.</li>
          <li>Viss du er glad i koden putt en regresjonstest på den.</li>
        </ol>
      </div>
    );
  }
}

export default App;
