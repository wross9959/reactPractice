import List from './List.jsx'

function App() {
  const fruits = [
    {id: 1, name: "Apple", calories: 95}, 
    {id: 2, name: "Banana", calories: 105}, 
    {id: 3, name: "Orange", calories: 45},
    {id: 4, name: "Conconut", calories: 159}
  ];
  const vegetables = [
    {id: 5, name: "Potatoes", calories: 110}, 
    {id: 6, name: "Celery", calories: 15}, 
    {id: 7, name: "Carrots", calories: 25},
    {id: 8, name: "Corn", calories: 63}
  ];

  return (
    <>
    {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
    {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>}
    </>
  );
}

export default App
