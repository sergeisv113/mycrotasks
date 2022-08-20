import React from 'react';

// type FilterType = 'RUBLS' | 'Dollars' | 'all'
/*type ButtonType = {
    currentMoney: ArrayType[]
    callback: (currency: any) => void
}*/

/*type ArrayType = {
    banknots: string,
    value: number,
    number: string
}*/

/*export const NewComponentMoney = (props: ButtonType) => {
    const onClickFilterHandler = (currency: string) => {
        props.callback(currency)
    }
    return (
        <>
            <ul>
            {props.currentMoney.map((objFromMoneyArr, index) => {
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
        </>
    );
};*/

