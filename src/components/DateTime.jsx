import {useState, useEffect} from 'react'


const DateTime = () => {
    const [dataTime,setDateTime] = useState('')

    useEffect(()=>{ 
        const update =()=>{
            const now = new Date()
            setDateTime(now.toLocaleString('en-US',{
                weekday:'short', month: 'short', day:'numeric',
                hour: 'numeric', minute:'2-digit', hour12: true
      
}).toLowerCase().replace(/,/g,''))
        }
        update()
        const interval = setInterval(update,1000)
        return () => clearInterval(interval)    
    }, [])
    return <div>{dataTime}</div>
}

export default DateTime