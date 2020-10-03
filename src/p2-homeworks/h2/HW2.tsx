import React, {useState} from "react";
import Affairs from "./Affairs";

// types
export type AffairPriorityType = "high" | "low" | "middle"
export type AffairType = {
    _id: number,
    name: string,
    priority: string
}
export type FilterType = "all" | AffairPriorityType;

// constants
const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: "Eat mouse", priority: "high"},
    {_id: 2, name: "Make exercises", priority: "low"},
    {_id: 3, name: "Play games", priority: "low"},
    {_id: 4, name: "Sleep all day", priority: "high"},
    {_id: 5, name: "Dream about something", priority: "middle"},
];

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {
    if (filter === "all") return affairs;
   else  {
    return affairs.filter(affair => affair.priority === filter)
  }
}

export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => {
    return affairs.filter(affair => affair._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs);
    const [filter, setFilter] = useState<FilterType>("all");

    const filteredAffairs = filterAffairs(affairs, filter);
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id));

    return (
        <div>
            <hr/>
            homeworks 2
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />
        </div>
    );
}

export default HW2;
