import { Server, Socket } from "socket.io";

const initializeSocket = (io: Server): void => {

  io.on("connection", (socket: Socket) => {
    console.log(`Socket connected: ${socket.id}`);

    // join poll room

    socket.on("joinPoll", (pollId: string) => {
      socket.join(pollId)

      console.log(
        `Socket ${socket.id} joined poll ${pollId}`
      );
    })

    // disconnect
    socket.on("disconnect", () => {
      console.log(`Socket disconnected: ${socket.id}`)
    })

    // leave poll

    socket.on("leavePoll", (pollId: string) => {
      socket.leave(pollId)

      console.log(
        `Socket ${socket.id} left poll ${pollId}`
      );
    })
  })
}

export default initializeSocket