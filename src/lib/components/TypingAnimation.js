import {useEffect, useState} from "react";
import "./styles/blink.css"
const blinkStyle=(speed)=>{
    return {
        margin: 0,
        padding: 0,
        animation:`blink-animation ${speed*100}ms steps(5, start) infinite`
    }
}

export default function TypingText({
                                       text, className, order = 0, speed = 1,
                                       sync = 0, dely = 0, reverse = false,
                                       loop = false,cursor='|',showCursorEnd=false,
                                       deleteSpeed,
                                   }) {
    const [displayed, setDisplayed] = useState('');
    const [status, setStatus] = useState('wait')
    useEffect(() => {
        if ((order === sync.turn || order === 0)&&status==='wait')
            if (dely !== 0)
                setTimeout(() => {
                    setStatus('start')
                }, dely)
            else
                setStatus('start')
    }, [sync.turn])
    useEffect(() => {
        if (status === 'start')

            setTimeout(() => {
                displayNext()
            }, speed * 100)
        else if (status === 'reverse'){
            let d=deleteSpeed===undefined?speed:deleteSpeed
            setTimeout(() => {
                removeLast()
            }, d * 100)}


    }, [displayed, status])

    const handleFinishRound = () => {
        if (status === 'reverse') {
            if (loop)
                setStatus('start')
            else {
                setStatus('finish')
                if (sync.next !== undefined) sync.next(order)
            }
        } else {
            if (loop && !reverse)
                setDisplayed('')
            else if (reverse)
                setStatus('reverse')
            else
            {    setStatus('finish')
                if (sync.next !== undefined) sync.next(order)
            }

        }

    }
    const removeLast = () => {
        if (displayed.length === 0)
            handleFinishRound()
        else {
            setDisplayed(current => current.substring(0, current.length - 2))
        }
    }
    const displayNext = () => {
        let b = displayed.length !== text.length
        if (!b) {
            handleFinishRound()
            return;
        }
        let position = displayed.length
        text.charAt(position) === '\\' && text.charAt(position + 1) === 'n' ? setDisplayed(displayed + '\n')
            : setDisplayed(displayed + text.charAt(position))
    }
    const displayCursor = status === 'start' || status==='reverse'||showCursorEnd
    const replaceWithBr = () => {
        return displayed.replace(/\n/g, "<br />")
    }
    return (
        <p className={className}>
            <span dangerouslySetInnerHTML={{__html: replaceWithBr()}} ></span>
            {displayCursor&&<span style={blinkStyle(speed)}>{cursor}</span>}
        </p>
    )
}
