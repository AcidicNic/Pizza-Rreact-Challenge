import { useState } from 'react'
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [peperoni, setPeperoni] = useState(false);
  const [sausage, setSausage] = useState(false);
  const [peppers, setPeppers] = useState(false);
  const [onion, setOnion] = useState(false);

  return (
    <div className="App">
      <h1>Pizza Order</h1>
      <div class="d-flex justify-content-center">
        <div class="mx-2 text-start">
          <div>
            <input 
              type="text" 
              placeholder="Name"
              id="name"
              onChange={(e) => {console.log(e.target.value); setName(e.target.value);}}
              class="form-control form-control-sm mb-3"
            />
          </div>
          <div class="form-check my-1">
            <input 
              type="checkbox"
              onChange={() => setPeperoni(!peperoni)}
              class="form-check-input"
            />
            <label class="form-check-label">
              Peperoni
            </label>
          </div>
          <div class="form-check my-1">
            <input type="checkbox"
              onChange={() => setSausage(!sausage)}
              class="form-check-input"
            />
            <label class="form-check-label">
              Sausage
            </label>
          </div>
          <div class="form-check my-1">
            <input type="checkbox"
              onChange={() => setPeppers(!peppers)}
              class="form-check-input"
            />
            <label class="form-check-label">
              Peppers
            </label>
          </div>
          <div class="form-check my-1">
            <input type="checkbox"
              onChange={() => setOnion(!onion)}
              class="form-check-input"
            />
            <label class="form-check-label">
              Onion
            </label>
          </div>
        </div>
        <div class="mx-2">
          <h4>Order:</h4>
          <p>
            {name}
          </p>
          <p>
            Toppings:
            <ul>
            {peperoni && <li>Pepperoni</li>}
            {sausage && <li>Sausage</li>}
            {peppers && <li>Peppers</li>}
            {onion && <li>Onion</li>}
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
