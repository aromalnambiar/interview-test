import React, {useState, useEffect} from 'react'
import './Main.css'

function Main() {

    // state
    const [isDragging, setIsDragging] = useState(false);
    const [draggedUser, setDraggedUser] = useState(null);
    const [droppedItems, setDroppedItems] = useState([]);

    


    // handling and tracking the user
    const handleDragStart = (event, user) => {
        event.dataTransfer.setData('text/plain', user);
        setIsDragging(true);
        setDraggedUser(user);
    };


       const handleDragEnter = (event, containerId) => {
    
            event.preventDefault();
            if (isDragging) {
            const currentDate = new Date();
            const newItem = {
                user: draggedUser,
                container: containerId,
                date: currentDate.toLocaleString(),
            };

            setTimeout(() => {
                setDroppedItems([...droppedItems, newItem]);
            }, 500); 
            }
        }; 

        // funcinn stop when the drag stop
        const handleDragEnd = () => {
            setIsDragging(false);
            setDraggedUser(null);
        };


        // users
        const User = () => {
            return(
                <div className='username'>
                    <h1> Patients </h1>
                        {/* user 1 */}
                        <div
                            className="user-container"
                            draggable="true"
                            onDragStart={(event) => handleDragStart(event, 'Madhavan')}
                            onDragEnd={handleDragEnd}
                        >
                            <h2>Madhavan</h2>

                        </div>

                        {/* user 2 */}
                        <div
                            className="user-container"
                            draggable="true"
                            onDragStart={(event) => handleDragStart(event, 'Azeez')}
                            onDragEnd={handleDragEnd}
                        >
                            <h2>Azeez</h2>
                        </div>

                        {/* user 3 */}
                        <div
                            className="user-container"
                            draggable="true"
                            onDragStart={(event) => handleDragStart(event, 'Jacob')}
                            onDragEnd={handleDragEnd}
                        >
                            <h2>Jacob</h2>
                        </div>
                </div>
            )
        }


        //Rooms
        const Rooms = () => {
            return(
                <div className='flex w-full ml-40 mr-32 mt-20 justify-between'>

                    {/* OP Counter */}
                    <div
                        className="room"
                        onDragEnter={(event) => handleDragEnter(event, 'Op Counter')}
                        onDragOver={(event) => event.preventDefault()}
                    >
                        <h3>Casuality</h3>
                        <div className='scroll'>
                        {droppedItems.map(
                        (user, index) =>
                            user.container === 'Op Counter' && (
                            <div key={index} className='details'>
                               <p className='user'>Patient : {user.user}</p>
                               <p>Date & Time:   <span> {user.date} </span> </p>
                            </div>
                            )
                        )}
                        </div>
                    </div>

                    {/* MRI scanning rom */}
                    <div
                        className="room"
                        onDragEnter={(event) => handleDragEnter(event, 'MRI Scanning  Room')}
                        onDragOver={(event) => event.preventDefault()}
                    >
                        <h3>MRI Scanning  Room</h3>
                        <div className='scroll'>
                        {droppedItems.map(
                        (user, index) =>
                            user.container === 'MRI Scanning  Room' && (
                            <div key={index} className='details'>
                               <p className='user'>Patient : {user.user}</p>
                               <p>Date & Time:   <span> {user.date} </span> </p>
                            </div>
                            )
                        )}
                        </div>
                    </div>

                    {/* Exit Room */}
                    <div
                        className="room"
                        onDragEnter={(event) => handleDragEnter(event, 'Exit')}
                        onDragOver={(event) => event.preventDefault()}
                    >
                        <h3>Exit</h3>
                        <div className='scroll'>
                        {droppedItems.map(
                        (user, index) =>
                            user.container === 'Exit' && (
                            <div key={index} className='details'>
                               <p className='user'>Patient : {user.user}</p>
                               <p>Date & Time:   <span> {user.date} </span> </p>
                            </div>
                            )
                        )}
                        </div>
                    </div>
                </div>
            )
        }



  return (
    <div className='flex'>

     {User()}
     {Rooms()}
      
    </div>
  );
}

export default Main