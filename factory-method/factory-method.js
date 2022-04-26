var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Ship = /** @class */ (function () {
    function Ship() {
    }
    Ship.prototype.deliver = function () {
        console.log("Deliver by Ship");
    };
    Ship.prototype.payment = function () {
        console.log("COD");
    };
    return Ship;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.deliver = function () {
        console.log("Deliver by Truck");
    };
    Truck.prototype.payment = function () {
        console.log("Pay half for gas");
    };
    return Truck;
}());
var Logistic = /** @class */ (function () {
    function Logistic() {
    }
    Logistic.prototype.payment = function () {
        var transport = this.createTransport();
        return "Creator: The same creator's code has just worked with ".concat(transport.payment());
    };
    ;
    Logistic.prototype.deliver = function () {
        var transport = this.createTransport();
        return "Creator: The same creator's code has just worked with ".concat(transport.deliver());
    };
    return Logistic;
}());
var ConcreteLogisticTruck = /** @class */ (function (_super) {
    __extends(ConcreteLogisticTruck, _super);
    function ConcreteLogisticTruck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteLogisticTruck.prototype.createTransport = function () {
        return new Truck();
    };
    return ConcreteLogisticTruck;
}(Logistic));
var ConcreteLogisticShip = /** @class */ (function (_super) {
    __extends(ConcreteLogisticShip, _super);
    function ConcreteLogisticShip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteLogisticShip.prototype.createTransport = function () {
        return new Ship();
    };
    return ConcreteLogisticShip;
}(Logistic));
function getTransportPayment(creator) {
    console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
    return creator.payment();
}
function getDeliverMethod(creator) {
    console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
    return creator.deliver();
}
var concreteLogisticTruck = new ConcreteLogisticTruck();
var concreteLogisticShip = new ConcreteLogisticShip();
console.log("============Truck============");
getTransportPayment(concreteLogisticTruck);
console.log("============Ship============");
getDeliverMethod(concreteLogisticShip);
