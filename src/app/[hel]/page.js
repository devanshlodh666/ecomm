"use client"
const page = (request)=>{

  let a = request.params.hel;
  console.log(request);
  return (
    <div className="text-3xl font-bold underline">hel page {a}</div>
  )     
}
export default page 