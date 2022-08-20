import React from 'react';

/*type StudentType = {
    id: number,
    name: string,
    age: number
}

type NewComponentPropsType = {
    students: Array<StudentType>
// students:StudentType[]
}*/

/*export type CarPropsType = {
    manufacturer: string,
    model: string
}*/
/*type TopCarsPropType = {
    topCars: Array<CarPropsType>
}*/

/*export const NewComponent = (props: TopCarsPropType) => {

    return (
        <table>
            {props.topCars.map((cars) => {
                return (
                    <tr key={props.topCars.length - 1}>
                        <th>{props.topCars.indexOf(cars) + 1}</th>
                        <th>{cars.manufacturer}</th>
                        <th>{cars.model}</th>
                    </tr>
                )
            })}
        </table>
    )*/
/*export const NewComponent = (props: NewComponentPropsType) => {

    return (
        <>
            <div>newcomponent</div>
            <ul>
                {props.students.map((objectFromStudentArray, index)=>{
                    return (
                        <li key={objectFromStudentArray.id}>
                            <span>{objectFromStudentArray.name}</span>
                            <span>-   age:  {objectFromStudentArray.age}</span>
                        </li>
                    )
                })}
            </ul>
        </>
    );*/
// };
type StudentType = {
    id: number
    name: string
    age: number
}
 type NewComponentPropsType = {
    students: Array<StudentType>
 }

export const NewComponent = (props: NewComponentPropsType) => {
     return (
             <ul>
                 {props.students.map((objectFromStudentType, index)=> {
                     return (
                         <li key={objectFromStudentType.id}>
                             <span>{objectFromStudentType.name}  </span>
                             <span> age: {objectFromStudentType.age}</span>
                         </li>

                     )
                 })}
             </ul>
     );
};
type CarType = {
    manufacturer: string
    model: string
}
type CarsPropsTytle = {
    cars: Array<CarType>
}

export const NewComponentCars = (props: CarsPropsTytle) => {
    return (
        <table>
            {props.cars.map((objectCarType, index) => {
                return (
                    <tr >
                        <th key={index + 1}>{index + 1} -</th>
                        <td>{objectCarType.manufacturer}</td>
                        <td>{objectCarType.model}</td>
                    </tr>
                )
            })}
        </table>
    )
};