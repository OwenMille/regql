import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsExports from './aws-exports';
import awsconfig from './aws-exports';
import { createCard } from './graphql/mutations'
import { listCards } from './graphql/queries'


Amplify.configure(awsconfig);
Amplify.configure(awsExports);



function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
