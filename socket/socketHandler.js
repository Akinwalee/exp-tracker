const handleSockets = (io) => {
  // Middleware to authenticate or handle connections
  io.use((socket, next) => {
    console.log('New connection');
    // Perform validation/authentication here
    next(); // Allow the connection if validation passes
  });

  // Handle socket events
  io.on('connection', (socket) => {
    console.log(`A user connected: ${socket.id}`);

    // Example socket event handling
    socket.on('example_event', (data) => {
      console.log('Received example_event:', data);
      socket.emit('example_response', { message: 'Hello from server!' });
    });

    socket.on('disconnect', () => {
      console.log(`User disconnected: ${socket.id}`);
    });
  });
};

export default handleSockets;
