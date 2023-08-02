import './App.css'
import MaterialList from './components/MaterialList'
import RecipeList from './components/RecipeList'

function App() {
  return (
    <>
      <div class="scroller">
        This is where the scroller will go
      </div>
      <header>
        <h1 class="text-16">SAUCE GUY</h1>
        <h2>Don't Get Lost in the Sauce(s)</h2>
        <h2>Every Sauce. Simple and Easy.</h2>
      </header>
      <div class="flex gap-8">
        <MaterialList />
        <RecipeList />
        {/* <MainContent /> */}
      </div>
    </>
  )
}

export default App
