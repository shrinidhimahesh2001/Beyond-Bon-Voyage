import React from 'react'

export default function To(props) {
    const stepChange = stp =>{
        props.nextStep(stp)
    }
    return (
        <div>
            to
                 <div className="footer">
                    <button onClick={()=>stepChange(props.id)} >
                        Next
                    </button>
            </div>
        </div>
    )
}
