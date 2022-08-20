import React, {useState} from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
// import NewComponent from "./Components/NewComponent";
import {Button} from "./Components/Button";
import {NewComponent, NewComponentCars} from "./Components/NewComponent";

function App() {

/*    let [students, setStudents] = useState([
        {id: 1, name: 'James', age: 21},
        {id: 2, name: 'Robert', age: 8},
        {id: 3, name: 'Nika', age: 35},
        {id: 4, name: 'David', age: 17},
        {id: 5, name: 'Joana', age: 88},
        {id: 6, name: 'Thomas', age: 19},
        {id: 7, name: 'James', age: 3},
    ]);*/

/*    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]*/

    /*const foo1 = () => {
        console.log(100200)
    }
    const foo2 = (num:number) => {
        console.log(num)
    }*/
    /*    const onClickHandler=(name: string)=>{
            console.log(name)
        }*/
    /*    const Button1Foo = (subscriber: string, age: number, address: string) => {
            console.log(subscriber, age, address)
        }
        const Button2Foo =(subscriber: string) => {
            console.log(subscriber)
        }

        const  Button3Foo = () => {
            console.log('StupidButton')
        }*/
/*    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])*/

/*    type FilterType = 'RUBLS' | 'Dollars' | 'all'

    const [filter, setFilter] = useState<FilterType>('all')

    let currentMoney = money;
    if (filter === 'RUBLS') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'RUBLS');
    }
    if (filter === 'Dollars') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars');
    }*/

/*    const onClickFilterHandler = (currency: FilterType) => {
        setFilter(currency)
    }*/

/*    // let a = 1
    let [a, setA] = useState(1)
    //setA=funct=>DOM render
    const onClickHandler = () => {
        setA(++a)
        console.log(a)
    }
    const onClickHandler0 = () => {
        setA(0)
    }*/

/*    return (
        <>
            <Header title={'New Header'}/>
            <Body titleForBody={'New Body'}/>
            <Footer titleForFooter={'New Footer'}/>
            {/!*<NewComponent students={students}/>*!/}
            <NewComponent topCars={topCars}/>*/
{/*            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickHandler0}>0</button>*/}
/*
         {/!*   <NewComponentMoney currentMoney={currentMoney} callback={onClickFilterHandler}/!*!/>
*/
{/*
            <ul>
                {currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknots}</span>
                            <span>{objFromMoneyArr.value}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => onClickFilterHandler('all')}>ALL</button>
                <button onClick={() => onClickFilterHandler('RUBLS')}>RUBLS</button>
                <button onClick={() => onClickFilterHandler('Dollars')}>Dollars</button>
            </div>

*/}
            {/*           <button onClick={foo1}>1</button>
            <button onClick={(event)=>foo2(100200)}>2</button>

            <button onClick={(event)=> {console.log('Hello')}}>MyYouTubeChanel-1</button>
            <button onClick={(event)=>onClickHandler('Vasja')}>MyYouTubeChanel-1</button>
            <button onClick={(event)=>onClickHandler('Sasha')}>MyYouTubeChanel-2</button>
            <button onClick={(event)=>onClickHandler("some info")}>MyYouTubeChanel-3</button>*/}

//             {/*
//             <Button name={'MyYouTubeChanel-1'} callBack={()=>Button1Foo('Im Vaslja', 22, 'Minsk')}/>
//             <Button name={'MyYouTubeChanel-2'} callBack={()=>Button2Foo('Im Sasha')}/>
//             <Button name={' StupidButton'} callBack={Button3Foo}/>
// */}
        // </>
    // );
const students = [
    {id:1, name: 'Joan', age: 8},
    {id:2, name: 'Jonny', age: 18},
    {id:3, name: 'Mery', age: 38},
]
        const topCars = [
            {manufacturer: 'BMW', model: 'm5cs'},
            {manufacturer: 'Mercedes', model: 'e63s'},
            {manufacturer: 'Audi', model: 'rs6'}
        ]

return (
    <>
        <Header title={'Im header'}/>
        <Body titleForBody={'Im body'}/>
        <Footer titleForFooter={'Im footer'}/>
        <NewComponent students={students}/>
        <NewComponentCars cars={topCars}/>
    </>
    )
}

export default App;
