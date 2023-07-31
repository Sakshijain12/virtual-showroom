import React from 'react'
// function displayImage(src, width, height) {
//     var img = document.createElement("img");
//     img.src = src;
//     img.width = width;
//     img.height = height;
//     document.body.appendChild(img);
//    }
//    displayImage("./ROOM.jpg",100,100);
function Service() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}><br></br><br></br><br></br><br></br><br></br><br></br>
           <p> <b>OUR SERVICES</b></p>
          <ul>
            <li>Standard room templates</li>
            <li>Cutsomization on demand</li>
            <li>Intterior designing on demand</li>
          </ul>
           
           
        </div>
    )
}

export default Service
