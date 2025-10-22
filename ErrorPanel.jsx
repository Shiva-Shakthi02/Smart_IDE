import React from 'react'


export default function ErrorPanel({errors}){
return (
<div>
<div className="text-sm text-gray-500 mb-2">Errors</div>
{errors.length === 0 ? (
<div className="text-xs text-gray-400">No errors detected</div>
) : (
<ul className="text-xs text-red-600 space-y-1">
{errors.map((e,i)=> <li key={i}>{e}</li>)}
</ul>
)}
</div>
)
}
