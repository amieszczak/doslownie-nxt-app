'use client'; 
import { useState, useEffect } from "react";

export default function useLandingPageBlog() {

    const [evenNumber, setEvenNumber] = useState(0);
    const [unEvenNumber, setUnEvenNumber] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setEvenNumber(evenNumber + 2);
            setUnEvenNumber(unEvenNumber + 2);
            console.log('evenNumber:', evenNumber);
        }, 1000);

        return () => clearInterval(interval);
    }, [])

    



    return {evenNumber, unEvenNumber}
}