import Student from './Student.jsx'

function App() {


  return (
    <>
      <Student name= 'Will' age={22} isStudent={true}/>
      <Student name= 'Sarah' age={21} isStudent={false}/>
      <Student name= 'Jack' age={20} isStudent={false}/>
      <Student name= 'Ben' age={16} isStudent={true}/>
      <Student />

    </>
  );
}


export default App
