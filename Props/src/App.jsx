import Card from './components/Card'

function App() {

  return (
    <div className='bg-gray-300'>
      <h1 className='bg-green-400 text-center my-4 mx-5 rounded-x p-5'> testing</h1>

    <Card 
    name="prabin"
    value={"click me"}
    information={"my name is prabin bhusal"}
    />
    <Card 
    name="kushal"
    value={"visit"}
    information={"my name is kushal kharel"}
    />
    </div>
  )
}

export default App
