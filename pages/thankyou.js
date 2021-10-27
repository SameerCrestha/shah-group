import { useEffect } from 'react';
export default function Thankyou(){
    const router=useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            router.push("/index");
        },4000)
    },[]);
    return(
        <div>
            <h1>Thankyou</h1>
        </div>
        );
    
}