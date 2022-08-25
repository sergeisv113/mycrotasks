import React, {ChangeEvent, useState} from 'react';

type FullInputPropsType = {
    addMessageInTitle: (title: string) => void
}

export const FullInput = (props: FullInputPropsType) => {
    let [title, setTitle] = useState('')

    console.log(title) //enter => title = 0
    // add input value

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
//вынося ф-цию вверх, типизируем её в ручную(event: num =>event: ChangeEvent<HTMLInputElement> => alt+shift+enter )
//         console.log(event.currentTarget.value)
        setTitle(event.currentTarget.value);
    }
  const onClickButtonHandler = () => {
        props.addMessageInTitle(title)
      // title: string
      setTitle('')
  }
    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};
