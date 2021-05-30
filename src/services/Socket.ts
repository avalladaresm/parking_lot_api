import { Args, Input, IO, Namespace, Nsp, Socket, SocketService, SocketSession } from "@tsed/socketio";
import * as SocketIO from "socket.io";

@SocketService("/my-namespace")
export class MySocketService {

  @Nsp nsp: SocketIO.Namespace;

  @Nsp("/my-other-namespace")
  nspOther: SocketIO.Namespace; // communication between two namespace


  constructor(@IO private io: SocketIO.Server) {
  }

  /**
   * Triggered the namespace is created
   */
  $onNamespaceInit(nsp: SocketIO.Namespace) {
    console.log('jejeje', nsp.sockets)
  }

  /**
   * Triggered when a new client connects to the Namespace.
   */
  $onConnection(@Socket socket: SocketIO.Socket, @SocketSession session: SocketSession) {
    console.log('socket', socket.id)
  }

  /**
   * Triggered when a client disconnects from the Namespace.
   */
  $onDisconnect(@Socket socket: SocketIO.Socket) {

  }

  @Input("parking-event")
  myMethod(@Args() args: any, @Socket socket: Socket, @Namespace nsp: Namespace) {
    console.log(args);
  }
}