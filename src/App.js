import './App.css';
import Header from './Header';
import WorkExperience from './WorkExperience';
import Education from './Education';
import Technology from './Technology';

function App() {
  return (
    <div className="App">
      <body>
    <Header />
        <main class="container">
            <div class="row mt-3">
                <div class="col-md">
                    <div class="card">
                        <WorkExperience />
                    </div>
                </div>
                <div class="col-md">
                    <div class="card">
                        <Education />
                    </div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md mb-5">
                    <div class="card">
                        <Technology />
                    </div>
                </div>
            </div>
        </main>
    </body>
</div>
  );
}

export default App;
