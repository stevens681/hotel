var hotel = {
name: "Biltmore",
rooms: 500,
roomsBooked: 150,
roomService: true,
pool: false,
roomsAvail: function(){
   
    return this.rooms - this.roomsBooked;
   }
};

function work() {
 document.getElementById("hotelName").innerHTML = hotel.name;
 document.getElementById("totalRooms").innerHTML = hotel.roomsBooked;
 document.getElementById("availableRooms").innerHTML = hotel.roomsAvail();
}