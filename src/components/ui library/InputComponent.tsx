export const InputComponent=({placeholder,onChange,reference}:{placeholder:string,onChange?:()=>void,reference:any})=>{

    return (
        <input ref={reference} placeholder={placeholder} type="text" className="px-8 py-5 rounded-md border my-3">
        </input>
    )

}