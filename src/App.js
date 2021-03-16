import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [birthdayList, setBirthdayList] = useState(data);

  return (
    <main>
      <section class="container">  
        <h3>{birthdayList.length} Birthdays today</h3>
        <List people={birthdayList} />
        <button onClick={()=> setBirthdayList([])}>Clear All Birthdays</button>
      </section>
    </main>
  );
}

export default App;
