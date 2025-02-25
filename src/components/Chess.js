import React, { useEffect, useState } from 'react'

function Chess({rows=8, columns=8}) {
    const [selected, setSelected] = useState({
        x:null,
        y:null
    })
    const [arrayGreen , setArrayGreen] = useState([])
    console.log(selected)
    const fn = (x, y)=>{
        setSelected({x:x, y:y})
    }
    const first = (x, y)=>{
        let newAr = []
        while(x<rows && y<columns){
            console.log(x,y , "cord")
            newAr.push({x, y})
            console.log(newAr, "NEWa")
            x++; y++;
        }
        setArrayGreen((prev)=>[...prev, ...newAr])
    }
    const second = (x, y)=>{
        let newAr = [];
        while(x<rows && y<columns && x >0 && y>0){
            console.log(x,y , "cord")
            newAr.push({x, y})
            x++;y--;
        }
        setArrayGreen((prev)=>[...prev, ...newAr])

    }
    const third = (x, y)=>{
        let newAr = [];
        while(x<rows && y<columns && x >0 && y>0){
            console.log(x,y , "cord")
            newAr.push({x,y})
             y++;x--;
        }
        setArrayGreen((prev)=>[...prev, ...newAr ])

    }
    const fourth = (x, y)=>{
        let newAr = [];
        while(x<rows && y<columns && x >0 && y>0){
            console.log(x,y , "cord")
            newAr.push({x, y})
            x--; y--;
        }
        setArrayGreen((prev)=>[...prev, ...newAr ])


    }
    useEffect(()=>{
        //if(selected.x === 0 || selected.y = 0){

        //}
        ///else if()
        setArrayGreen((prev)=>[])
        if(selected.x>0 && selected.y>0){
            first(selected.x, selected.y);
            second(selected.x, selected.y);
            third(selected.x, selected.y);
            fourth(selected.x, selected.y)
        }
        else if(selected.y === 0 && selected.x !== 0){
            first(selected.x, selected.y);
            second(selected.x, selected.y);
        }
        else if (selected.y !== 0 && selected.x === 0){
            first(selected.x, selected.y);
         
            third(selected.x, selected.y);
        }
        else if(selected.x === 0 && selected.y === 0){
            
            first(selected.x, selected.y)
        }
    }, [selected])
    console.log(arrayGreen, "ar")
    const check = (row, col)=>{
        if(selected.x === row && selected.y === col) return true
        else  return false;
    }
    const greenCh = (x, y)=>{

        
        for(let i = 0; i<arrayGreen.length; i++){
            console.log(arrayGreen[i].x, arrayGreen[i].y, x, y, "ss", arrayGreen)
            if(arrayGreen[i].x === x && arrayGreen[i].y === y ){
                console.log(arrayGreen[i].x, arrayGreen[i].y, x, y, "same")
                return true
            }
            else{return false}
        }
        //console.log(arrayGreen.find((X, Y)=>(X===x && Y === y)), "selecetd")
    }   
    useEffect(()=>{
        
    }, [])
  return (
    <div className='chess-row'>

        {new Array(rows).fill("-")?.map((row, i)=>{
            return(
                <div className='chess-r'>
                {new Array(columns).fill("-")?.map((col, index)=>{
                    return(
                        <div onClick={()=>{fn(i, index)}}  className={`table ${arrayGreen.find(element => element.x === i && element.y === index) ? "green":""} ${check(i, index)? "clicked":""}`}>
                       
                        </div>
                    )
               
            })}
            </div>

            )
            
        })}

    </div>
  )
}

export default Chess