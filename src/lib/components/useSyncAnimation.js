import {useState} from "react";

export default function useSyncAnimation() {
    const [turn, setTurn] = useState(0)
    const next = (order) => {
        if (order === turn)
            setTurn(current => current + 1)
    }
    return {
        turn: turn,
        next: next
    }
}