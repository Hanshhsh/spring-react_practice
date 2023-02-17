import './App.css';
import React, {useState} from 'react';

const RecordForm = ({numList, setNumList}) =>{

    const [num, setNum] = useState(0);

    return (
    <div>
        <div>현재 숫자: {num}</div>
        <button onClick={() => setNum(num + 1)}>숫자 증가</button>
        <button onClick={() => setNum(num - 1)}>숫자 감소</button>
        <button onClick={() => setNum(0)}>숫자 초기화</button>
        <hr/>
        <button onClick={()=> setNumList([...numList, num])}>숫자 기록</button>
        <button onClick={()=> setNumList([])}>기록 초기화</button>

    </div>
    )
  }

const RecordList = ({numList}) =>{
  return (
  <div>
      <h2>기록된 숫자</h2>
      {numList.length > 0 ? 
        <div>
          <ul>
           {numList.map((num) => (
             <li>{num}</li>
           ))}
          </ul>
        </div> : <div> 기록없음</div>}
  </div>
  )

}

const App = () =>{

  const [numList, setNumList] = useState([]); 

  return(
    <div style={{
      margin : "40px auto",
      width : "800px",
      textAlign:"center"}}>
      숫자 기록 앱
    <RecordForm numList={numList} setNumList={setNumList}/>
    <RecordList numList={numList}/>
    </div>
    
  )
}



// function App() {

//   //let name = 'hancoding';

//   //let [name, setName] = useState('hancoding1');
//   const [num, setNum] = useState(0);
//   const [numList, setNumList] = useState([]);

//   // function numUp(){
//   //   num = num + 1;
//   //   console.log(num);
//   // }
//   //setTimeout(()=>{setNum(num=num+1)}, 1000)

//   function numRecording() {
//     setNumList([...numList, num]);

//     setNum(0);
//   }

//   return (
//     <div className="App">
//       <div>현재 숫자 : {num}</div>
//         <button onClick={() => {setNum(num + 1)}}>숫자 증가</button>
//         <button onClick={() => {setNum(num - 1)}}>숫자 감소</button>
//         <button onClick={numRecording}>숫자 기록</button>
//         <h1>저장된 숫자</h1>
//         <ul>
//           {numList.map((num) => (
//             <li>{num}</li>
//           ))}
//         </ul>
//         <ul>
//           <li>ulli</li>
//           <li>{num}</li>
//         </ul>
//         <ol>
//           <li>ddd</li>
//         </ol>
//     </div>
//   );
// }



export default App;
