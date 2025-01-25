function Profiles(){
    const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
    const description = 'Gregorio Y. Zara';
    return (<>
      <img 
      src="https://i.imgur.com/MK3eW3As.jpg" 
      alt="" />
      <img src={avatar} alt={description} />
      </>
    )
  }
  export default Profiles