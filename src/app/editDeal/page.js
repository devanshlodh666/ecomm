const page = () => {
  return (
    <>
    <div>editDeal  sapage</div>
    <form action="http://localhost:3001/upload" method="POST" encType="multipart/form-data">
      <input type="file" src="image" alt="image" />
      <input type="submit" value="submit" />
    </form>
    </>
  )
}

export default page