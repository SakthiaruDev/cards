import logo from './logo.svg';
import './App.css';
import Cards from './cards';
function App() {

  const web=[
    {
      image:"./image/img1.jpg",
      brand:"Puma",
      tag:"Sports Shoe",
      price:1500
      
    },
    {
      image:"./image/img4.webp",
      brand:"Puma",
      tag:"Casual Sneakers",
      price:1699
      
    },
    {
      image:"./image/img5.webp",
      brand:"Nike",
      tag:"Casual Sneakers",
      price:2000
      
    },
    {
      image:"./image/new1.webp",
      brand:"Puma",
      tag:"Mid III shoe",
      price:2500
      
    },
    {
      image:"./image/new2.webp",
      brand:"Luxaro",
      tag:"Formal Shoes",
      price:2300
      
    },
    {
      image:"./image/new3.webp",
      brand:"Luxaro",
      tag:"Loafers",
      price:2200
      
    },
    {
      image:"./image/new4.webp",
      brand:"Puma",
      tag:"Running Shoes",
      price:1800
      
    },
    {
      image:"./image/new5.webp",
      brand:"Nike",
      tag:"Casual Shoes",
      price:1999
      
    },
  ]

  return (
    <div className="App">
      <Cards img={web}/>
    </div>
  );
}

export default App;
