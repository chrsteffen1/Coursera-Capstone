import Dropdown from 'react-bootstrap/Dropdown'


const ReservationCard = () => {
  return (  
    <div>
      <form action="">
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="" />
        <label htmlFor="phone">Phone Number</label>
        <input type="text" name="phone"/>
        <label htmlFor="name">Name</label>
        <input type="text" name="name"/>
        <Dropdown>
          <Dropdown.Toggle variant='success'>Time</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>6:00pm</Dropdown.Item> 
            <Dropdown.Item>6:30pm</Dropdown.Item> 
            <Dropdown.Item>7:00pm</Dropdown.Item> 
            <Dropdown.Item>7:30pm</Dropdown.Item> 
            <Dropdown.Item>8:00pm</Dropdown.Item> 
            <Dropdown.Item>8:30pm</Dropdown.Item> 
            <Dropdown.Item>9:00pm</Dropdown.Item> 
            <Dropdown.Item>9:30pm</Dropdown.Item> 
            <Dropdown.Item>10:00pm</Dropdown.Item> 
          </Dropdown.Menu>
        </Dropdown>
      </form>
    </div>
  );
}
 
export default ReservationCard;