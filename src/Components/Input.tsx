import React, {ChangeEvent} from 'react';

type InputPropsTyple = {
    setTitle: (title: string) => void
    title: string
}
export const Input = (props: InputPropsTyple) => {
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value);
    }
    return (
        <div>
            <input value={props.title} onChange={onChangeInputHandler}/>
        </div>
    );
};

