interface Transport {
  deliver: () => void;
  payment: () => void;
}

class Ship implements Transport {
  deliver(): void {
      console.log("Deliver by Ship");
  }

  payment():void{
    console.log("COD")
  }
}


class Truck implements Transport {
  deliver(): void {
      console.log("Deliver by Truck");
  }

  payment(): void {
      console.log("Pay half for gas");
  }
}

abstract class Logistic {
  public abstract createTransport(): Transport;
  public payment(): string {
    const transport = this.createTransport();
    return `Creator: The same creator's code has just worked with ${transport.payment()}`;
  };

  public deliver(): string {
    const transport = this.createTransport();
    return `Creator: The same creator's code has just worked with ${transport.deliver()}`;
  }
}

class ConcreteLogisticTruck extends Logistic {
  public createTransport(): Transport {
   return new Truck();
  }
}

class ConcreteLogisticShip extends Logistic {
  public createTransport(): Transport {
   return new Ship();
  }
}

function getTransportPayment(creator: Logistic) {
  console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
  return creator.payment();
}

function getDeliverMethod(creator: Logistic) {
  console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
  return creator.deliver();
}

const concreteLogisticTruck = new ConcreteLogisticTruck();
const concreteLogisticShip = new ConcreteLogisticShip();

console.log("============Truck============")
getTransportPayment(concreteLogisticTruck);
console.log("============Ship============")
getDeliverMethod(concreteLogisticShip);