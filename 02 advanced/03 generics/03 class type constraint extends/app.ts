import { println } from "../../../GlobalFunctions";

/**
 * An implementation of this interface represents a node
 */
interface INode {
  name: string;
}

/**
 * An implementation of this interface is responsible for being printable
 */
interface IPrintable {
  print();
}

/**
 * This class is responsible for containing a node
 * The node must be of type 'INode'.
 * In addition it should be possible to have type safe access to additional node messages.
 * Therefore the generic type 'T' is introduced.
 * By using 'extends INode' it is defined that the type must be of type INode
 */
class NodeContainer<T extends INode> {
  constructor(public node: T) {}
}

/**
 * This class represents a node and it is printable
 */
class Node implements INode, IPrintable {
  constructor(public name: string) {}

  print() {
    println(`Name of the node is '${this.name}'`);
  }
}

// the node container only takes objects of type 'INode'
const nodeContainer = new NodeContainer(new Node("Root"));

// the contained node is a node but also printable, thanks to generics we can call 'print' type safe
nodeContainer.node.print();
